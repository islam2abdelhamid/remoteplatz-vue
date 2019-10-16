<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit a eum vero voluptatum, laborum rem, ipsum fugit eos dicta nobis neque libero amet corrupti repellendus asperiores nostrum. Architecto, consectetur.</p>
      <h2 class="bg bg-warning p-2" v-for="test in tests" :key="test.id">
        <a :href="'exam/'+test.id" class="text-dark">{{test.title}} Test</a>
      </h2>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Profile",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      tests: [],
      user: ""
    };
  },

  methods: {
    getTests() {
      this.$http
        .get("/exams", {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.token
          }
        })
        .then(res => {
          this.tests = res.data[0].exams;
        })
        .catch(err => console.log(err.message));
    },

    checkIfLogged() {
      if (localStorage.getItem("currentUser")) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.$router.replace(this.$route.query.redirect || "/register");
      } else {
        this.$router.replace(this.$route.query.redirect || "/login");
      }
    }
  },
  created() {
    this.getTests();
    this.checkIfLogged();
  },
  updated() {}
};
</script>
