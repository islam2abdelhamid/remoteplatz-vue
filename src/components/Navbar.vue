<template>
  <div>
    <section id="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="../assets/images/logo-black.png" alt="Remote Platz Logo" width="127" />
          </a>
          <button
            class="navbar-toggler first-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="animated-icon1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" :class="route=='Community'? 'active': ''">
                <a class="nav-link" href="remote-community">Our Remote Community</a>
              </li>

              <li class="nav-item" :class="route=='Faq'? 'active': ''">
                <a class="nav-link" href="/faq">FAQ</a>
              </li>

              <li class="nav-item login" v-if="!logged">
                <a class="nav-link" href="/login">Login</a>
              </li>

              <li class="nav-item register" v-if="!logged">
                <a class="nav-link" href="/register">Join Us</a>
              </li>
              <li
                v-if="!logged"
                class="nav-item"
                style="margin-left: -14px;
                                margin-top: 9px;"
              >
                <a
                  class="nav-link"
                  style="background-color: #4f4f4f;
                                  color: #fff;
                                  border-radius: 5px;
                                  padding: 6px 14px;"
                  href="https://remoteplatz.ch"
                >Hire a Developer</a>
              </li>
              <li class="nav-item dropdown" v-if="logged">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >{{ user.first_name }}</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/profile">Profile</a>
                  <a class="dropdown-item" href="/settings">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" @click="logout()">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    <!-- end of header -->

    <!-- DEVELOPERS BAR SECTION -->
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      route: "",
      logged: false,
      user: ""
    };
  },
  methods: {
    logout() {
      this.$http
        .get("/logout", {
          headers: {
            token: localStorage.token
          }
        })
        .then(res => {
          localStorage.clear();

          location.reload();
        })
        .catch(err => console.log(err.message));
    },
    currentRouteName() {
      this.route = this.$route.name;
    },
    checkIfLogged() {
      if (localStorage.getItem("currentUser") && localStorage.token) {
        this.logged = true;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
      }
    }
  },
  created() {
    document.title = this.$route.meta.title;
    this.currentRouteName();
    this.checkIfLogged();
  }
};
</script>
