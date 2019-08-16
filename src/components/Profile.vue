<template>
  <div>
    <Navbar />
    <section id="profile">
      <div class="container">
        <div class="container emp-profile">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img :src="user.photo" alt />
              </div>
              <div class="profile-work">
                <div class="d-flex align-items-baseline justify-content-md-between mt-3">
                  <div>
                    <h3 class="orange-text">
                      <strong>PORTFOLIO</strong>
                    </h3>

                    <span
                      class="font-weight-bold"
                      v-for="(technology, index) in  user.technologies"
                      :key="index"
                    >
                      {{ technology.name }}
                      <small class="text-muted">{{ technology.experience }}</small>
                      <small class="text-muted" v-if="technology.experience>1">years</small>
                      <small class="text-muted" v-else>year</small>
                      <br />
                    </span>
                    <br />
                  </div>
                  <a href="/edit" class="text-right">Edit</a>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <h2>
                HI
                <span class="orange-text">{{ user.first_name }}</span>
              </h2>
              <p class="text-black-50 lead">
                {{ user.title }}
                <span>Developer</span>
              </p>
              <div class="profile-head">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >Basic Info</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Skills &
                      Experience
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-summary-tab"
                      data-toggle="pill"
                      href="#pills-summary"
                      role="tab"
                      aria-controls="pills-summary"
                      aria-selected="false"
                    >Summary</a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <label>First Name</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ user.first_name }}</p>
                        <div class="form-group">
                          <input
                            name="first name"
                            type="text"
                            placeholder="first name"
                            class="form-control border-input"
                          />
                          <small
                            v-if="errors.has('first name')"
                            class="field-text is-danger"
                          >{{ errors.first('first name') }}</small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label>Last Name</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ user.last_name }}</p>
                      </div>
                      <div class="col-md-4">
                        <label>Email</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ user.email }}</p>
                      </div>
                      <div class="col-md-4">
                        <label>Joined as</label>
                      </div>
                      <div class="col-md-8">
                        <p>{{ user.title }}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>programming languages</label>
                      </div>
                      <div class="col-md-6">
                        <p>
                          <span
                            v-for="(technology, index) in user.technologies"
                            :key="index"
                          >{{ technology.name }} ,</span>
                        </p>
                      </div>
                      <div class="col-md-6">
                        <label>academic qualifications</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.academic_degree }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>Degree Details</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.field_of_study }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>University/Institution</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.university }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>Graduation year</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.graduation_year }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>years of professional experience</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.years_experience }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>projects you’ve worked on</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.projects }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>availability</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.start_date }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>Where are you located</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.address }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>expected salary</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.expected_salary }}</p>
                      </div>
                      <div class="col-md-6">
                        <label>Github Link</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ user.github_link }}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-summary"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="row">
                      <p>{{ user.bio }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  name: "Profile",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      user: {}
    };
  },

  methods: {
    checkCurrentLogin() {
      if (localStorage.token) {
        if (localStorage.getItem("currentUser")) {
          this.user = JSON.parse(localStorage.getItem("currentUser"));
          console.log("test", localStorage.getItem("currentUser"));
        }
      } else {
        this.$router.replace(this.$route.query.redirect || "/login");
      }
    }
  },
  created() {
    this.checkCurrentLogin();
  },
  updated() {
    this.checkCurrentLogin();
  }
};
</script>
