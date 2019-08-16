<template>
  <div>
    <!-- HEADER SECTION  -->

    <section id="header" class="home-page">
      <div class="overly">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src=".././assets/images/logo-black.png" alt="Remote Platz Logo" width="127" />
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
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/remote-community">Our Remote Community</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/faq">FAQ</a>
                </li>

                <li class="nav-item login" v-if="!logged">
                  <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item register" v-if="!logged">
                  <a class="nav-link" href="/register">Join Us</a>
                </li>

                <li
                  class="nav-item"
                  style="margin-left: -14px;
                                margin-top: 9px;"
                  v-if="!logged"
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
                    <a class="dropdown-item" href="/edit">Edit</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click="logout()">Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container header-text">
          <h2 class="header-title">Are you our next remote software engineer?</h2>
          <p
            class="header-footer-text mt-3"
          >Build up your career with leading high tech businesses in Europe</p>
          <a href="https://remoteplatz.com/register" class="cta mt-4">Get Started</a>
        </div>
      </div>
    </section>

    <!-- HERO SECTION -->
    <!-- <section id="hero">
    <div class="overly">
      <div class="container">
        <div class="text">
          <h2 class="header-title title-orange-line">
            Are you our next remote software engineer?
          </h2>
          <p class="lead text-center mt-4 mb-4">
            Build up your career with leading high tech businesses in Europe
          </p>
          <a href="#" class="cta">Get Started</a>
        </div>
      </div>
    </div>
    </section>-->

    <!-- HOW IT WORKS SECTION -->
    <section id="how-it-works-home">
      <div class="container">
        <h2 class="title-orange-line text-center mt-5 mb-5">How It Works?</h2>
        <div class="row">
          <div class="col-md-3">
            <div class="step">
              <div class="step-icon text-center">
                <span class="icon test"></span>
              </div>
              <div class="step-text">
                <h3 class="hw-title">1. Build your profile</h3>
                <p class="hw-body">
                  Share your experience, past achievements and skills with the
                  world.
                </p>
              </div>
            </div>
          </div>
          <!-- end of col -->
          <div class="col-md-3">
            <div class="step">
              <div class="step-icon text-center">
                <span class="icon quality-assurance"></span>
              </div>
              <div class="step-text">
                <h3 class="hw-title">2. Get verified and tested</h3>
                <p class="hw-body">Pass our technical assessments to become a verified developer</p>
              </div>
            </div>
          </div>
          <!-- end of col -->
          <div class="col-md-3">
            <div class="step">
              <div class="step-icon text-center">
                <span class="icon community"></span>
              </div>
              <div class="step-text">
                <h3 class="hw-title">3- Join the community</h3>
                <p class="hw-body">
                  Join our global remote community on Slack and start connecting
                  with like minded professionals and experts in the IT industry.
                </p>
              </div>
            </div>
          </div>
          <!-- end of col -->
          <div class="col-md-3">
            <div class="step">
              <div class="step-icon text-center">
                <span class="icon search"></span>
              </div>
              <div class="step-text">
                <h3 class="hw-title">4- Start receiving opportunities</h3>
                <p class="hw-body">
                  Get featured on our platform and start receiving opportunities
                  that match your talent.
                </p>
              </div>
            </div>
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </section>

    <!-- PERKS SECTION -->
    <section id="perks">
      <div class="container">
        <h2 class="title-orange-line text-center mt-5">Perks</h2>
        <p class="lead text-center">
          We are bringing you a whole set of awesome opportunities to step up
          <br />your career as a professional remote software engineer.
        </p>

        <div class="row">
          <div class="col-md-3 offset-md-1">
            <div class="perk">
              <div class="perk-header flex-row">
                <span class="icon salary icon-sm"></span>
                <h3 class="perk-title">Competitive salary</h3>
              </div>
              <p class="perk-body">50 - 100% higher salary. The top paid in Egypt.</p>
            </div>
            <!-- end of perk -->
          </div>
          <!-- end of col -->

          <!-- <div class="col-md-3 offset-md-1">
          <div class="perk">
            <div class="perk-header flex-row">
              <span class="icon assistant icon-sm"></span>
              <h3 class="perk-title">
                Remote work
              </h3>
            </div>
            <p class="perk-body">
              Flexible working arrangements (50% remote, 50% coworking space)
            </p>
          </div>
          </div>-->

          <div class="col-md-3 offset-md-1">
            <div class="perk">
              <div class="perk-header flex-row">
                <span class="icon medical-insurance icon-sm"></span>
                <h3 class="perk-title">Medical Insurance</h3>
              </div>
              <p class="perk-body">
                We provide a medical insurance plan for our software engineers,
                including their families at the top health insurance companies.
              </p>
            </div>
            <!-- end of perk -->
          </div>
          <!-- end of col -->

          <div class="col-md-3 offset-md-1">
            <div class="perk">
              <div class="perk-header flex-row">
                <span class="icon hiker icon-med"></span>
                <h3 class="perk-title">Annual treatment week</h3>
              </div>
              <p
                class="perk-body"
              >Join our annual trip with the community and meet your team members</p>
            </div>
            <!-- end of perk -->
          </div>
          <!-- end of col -->

          <div class="col-md-3 offset-md-1">
            <div class="perk">
              <div class="perk-header flex-row">
                <span class="icon project-management icon-sm"></span>
                <h3 class="perk-title">Remote hours</h3>
              </div>
              <p class="perk-body">work from anywhere up to three days per week.</p>
            </div>
            <!-- end of perk -->
          </div>
          <!-- end of col -->
          <div class="col-md-3 offset-md-1">
            <div class="perk">
              <div class="perk-header flex-row">
                <span class="icon team icon-sm"></span>
                <h3 class="perk-title">International experience</h3>
              </div>
              <p
                class="perk-body"
              >Work directly with experts from different parts of the world. Build an international career from the heart of Egypt.</p>
            </div>
            <!-- end of perk -->
          </div>
          <!-- end of col -->

          <div class="col-md-3 offset-md-1">
            <div class="perk">
              <div class="perk-header flex-row">
                <span class="icon gift icon-lg"></span>
                <h3 class="perk-title">Welcome kit</h3>
              </div>
              <p class="perk-body">
                A pack of remote developers essentials (Headset, USB and Power
                Bank).
              </p>
            </div>
            <!-- end of perk -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row  -->
      </div>
      <!-- end of container -->
    </section>

    <!-- REMOTE COMMUNITY SECTION -->
    <section id="remote-community">
      <div class="container">
        <h2 class="text-center mt-5 title-orange-line">Our remote community</h2>
        <p
          class="text-center"
        >A growing community of talented developers forming the future of tech in Egypt.</p>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="member">
              <div class="member-img">
                <img
                  src=".././assets/images/profiles/ahmed_mohamed.jpg"
                  alt="profile image"
                  width="50px"
                  height="50px"
                />
                <span>
                  <strong>- Ahmed M.</strong>
                  <br />Full Stack developer at Impargo
                </span>
              </div>
              <div class="member-bio">
                <p>Working as a remote full stack developer has been both challenging and immensely rewarding. I learned a lot about maps and navigation and I developed many skills including time management, and communication skills.</p>
              </div>
            </div>
          </div>
          <!-- end of col -->
          <div class="col-md-4">
            <div class="member">
              <div class="member-img">
                <img src=".././assets/images/profiles/ahmed_said.jpg" alt="profile image" />
                <span>
                  <strong>- Ahmed S.</strong>
                  <br />Ruby on Rails developer at Malindo
                </span>
              </div>
              <div class="member-bio">
                <p>One of the best things about being a remote software engineer is the opportunity to tackle new challenges everyday. Working with developers whose experiences are completely different from me is helping me develop new skills. I have never felt such satisfied about a job before.</p>
              </div>
            </div>
          </div>
          <!-- end of col -->
          <div class="col-md-4">
            <div class="member">
              <div class="member-img">
                <img src=".././assets/images/profiles/mohamed_taha.jpg" alt="profile image" />
                <span>
                  <strong>- Mohamed T.</strong>
                  <br />Lead Full Stack Developer at Pfleglisoft
                </span>
              </div>
              <div class="member-bio">
                <p>A big misconception about remote work is that it will make you lazy and unproductive, and that everything will be messy and unorganized. None of that is true of course. With the right tools and project management methodologies, you can always track your productivity and achieve a properly organized teamwork.</p>
              </div>
            </div>
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->

        <!-- <div class="join mt-5 text-center">
        <a href="#" class="join-btn-blank">JOIN NOW</a>
        </div>-->
      </div>
      <!-- end of container -->
    </section>

    <!-- COMPANIES LOGOS -->

    <section id="companies">
      <div class="container">
        <h2 class="title-orange-line text-center mt-2">
          Our developers have worked with
          <br />leading tech companies
        </h2>
        <div class="logos">
          <img src=".././assets/images/logos/flatistic.png" alt="flatistic" />
          <img src=".././assets/images/logos/malindo.png" alt="malindo" />
          <img src=".././assets/images/logos/tante.png" alt="tante" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Footer: Footer
  },
  data() {
    return {
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
    checkIfLogged() {
      if (localStorage.getItem("currentUser")) {
        this.logged = true;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
      }
    }
  },
  created() {
    this.checkIfLogged();
  }
};
</script>
