<template>
  <div>
    <Navbar />
    <div class="container" style="margin-top:120px; margin-bottom:30px">
      <div class="card text-center">
        <div class="card-body">
          <h4 class="card-title">Thank you {{ user.first_name }} for joining to our community.</h4>
          <p
            class="card-text"
          >You cannot login to profile unitl our talent acquisition manager verify your account after get in touch with you to arrange an interview soon. As a next step, keep checking your email as we might reach out soon :)</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Pending",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      user: ""
    };
  },
  methods: {
    checkIfLogged() {
      if (localStorage.getItem("currentUser")) {
        this.logged = true;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        if (this.user.verified) {
          this.$router.replace(this.$route.query.redirect || "/profile");
        } else {
          let id = this.user.id;
          this.$http
            .get("user_exam/user/" + id, {
              headers: {
                token: localStorage.token
              }
            })
            .then(res => {
              if (res.data.length < 1) {
                this.$router.replace(this.$route.query.redirect || "/register");
              } else if (res.data.length > 0 && this.user.video == null) {
                this.$router.replace(this.$route.query.redirect || "/register");

                console.log("you have to record video");
              } else {
                this.$router.replace(this.$route.query.redirect || "/pending");
              }
            });
        }
      } else {
        this.$router.replace(this.$route.query.redirect || "/login");
      }
    }
  },
  created() {
    this.checkIfLogged();
  }
};
</script>

