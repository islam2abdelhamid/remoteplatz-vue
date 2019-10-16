<template>
  <div>
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <Navbar />
    <!-- LOGIN SECTION -->
    <section id="login">
      <div class="container">
        <!-- Multi step form -->
        <div class="login-form card">
          <h5>Login</h5>
          <hr />
          <form class="login" @submit.prevent="login">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
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
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                name="password"
                class="form-control border-input"
                id="password"
                required
                placeholder="password"
              />
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-next center-block">Login</button>
            </div>
            <a
              href="/forgot_password"
              class="text-center d-block mt-3 text-black-50"
            >Forgot Password?</a>
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
import Loading from "vue-loading-overlay";

export default {
  name: "Login",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Loading: Loading
  },
  data() {
    return {
      fullPage: true,
      isLoading: false,
      email: "",
      password: "",
      error: false
    };
  },
  created() {
    this.checkCurrentLogin();
  },
  updated() {
    this.checkCurrentLogin();
  },
  methods: {
    checkCurrentLogin() {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || "/profile");
      }
    },
    login() {
      this.isLoading = true;
      this.$http
        .post("/user/auth", { email: this.email, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed());
    },
    loginSuccessful(req) {
      this.isLoading = false;
      if (!req.data.token) {
        this.loginFailed();
        return;
      }

      if (req.data.user.verified) {
        localStorage.token = req.data.token;
        localStorage.setItem("currentUser", JSON.stringify(req.data.user));
        this.error = false;
        this.$router.replace(this.$route.query.redirect || "/profile");
      } else {
        let id = req.data.user.id;
        this.$http
          .get("user_exam/user/" + id, {
            headers: {
              token: req.data.token
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
        localStorage.token = req.data.token;
        localStorage.setItem("currentUser", JSON.stringify(req.data.user));
        this.error = false;
      }
    },
    loginFailed() {
      this.error = "Login failed!";
      delete localStorage.token;
    }
  }
};
</script>
