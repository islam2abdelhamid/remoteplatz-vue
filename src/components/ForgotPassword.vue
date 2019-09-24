<template>
  <div>
    <Navbar />

    <!-- LOGIN SECTION -->
    <section id="login">
      <div class="container">
        <!-- Multi step form -->
        <div class="login-form card">
          <h5>Forgot Password</h5>
          <hr />
          <form class="login" @submit.prevent="sendPassword()">
            <div class="alert alert-danger" v-if="newEmailError">{{ newEmailError }}</div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="email"
                type="email"
                name="email"
                class="form-control border-input"
                id="email"
                required
                placeholder="email"
              />
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-next center-block">Send New Password</button>
            </div>
            <a href="/login" class="text-center d-block mt-2 text-black-50">Try To Login</a>
            <a href="/register" class="text-center d-block mt-2 text-black-50">Create Account</a>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "ForgotPassword",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      email: "",
      newEmailError: false
    };
  },
  created() {
    this.checkCurrentLogin();
  },

  methods: {
    checkCurrentLogin() {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || "/profile");
      }
    },
    sendPassword() {
      this.$http
        .post("/user/forget-password", { email: this.email })
        .then(function() {
          window.location.href = "/login";
        })
        .catch(() => (this.newEmailError = " Sorry, Email not found!"));
    }
  }
};
</script>
