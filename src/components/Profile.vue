<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>

    <Navbar />
    <section id="profile">
      <div class="container">
        <div class="container emp-profile">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <div class="profile-box" @click="updateImage">
                  <img :src="user.photo" />
                  <div class="layer" :class="edit==true? 'd-block': 'd-none'">
                    <input
                      type="file"
                      class="d-none"
                      name="photo"
                      id="pic"
                      @change="onImageSelected"
                    />
                    <i class="fa fa-camera text-white mt-3"></i>
                  </div>
                </div>
              </div>
              <div class="profile-work">
                <div class="align-items-baseline justify-content-md-between mt-3">
                  <div>
                    <h3 class="orange-text">
                      <strong>PORTFOLIO</strong>
                    </h3>

                    <span
                      class="font-weight-bold"
                      v-for="(technology, index) in  user.technologies"
                      :key="index"
                    >
                      <div v-if="index<8">
                        <div v-if="technology.experience>0">
                          <span>{{ technology.name }}</span>
                          <small class="text-muted">{{ technology.experience }}</small>
                          <small class="text-muted" v-if="technology.experience>1">years</small>
                          <small class="text-muted" v-else>year</small>
                          <br />
                        </div>
                      </div>
                    </span>
                    <br />
                  </div>
                  <a href="#" v-if="!edit" class="text-right" @click="editUser()">
                    <i class="fa fa-edit"></i> Edit
                  </a>
                  <button
                    class="btn"
                    style="background-color: #f48120; color: rgb(255, 255, 255); border-radius: 5px; "
                    v-if="edit"
                    @click="updateUser()"
                  >Save Changes</button>
                  <button
                    class="btn"
                    style="background-color: rgb(79, 79, 79); color: rgb(255, 255, 255); border-radius: 5px; "
                    v-if="edit"
                    @click="edit=false"
                  >Cancel</button>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <h2>
                HI
                <span class="orange-text">{{ user.first_name }}</span>
              </h2>
              <p class="text-black-50 lead">{{ user.position }}</p>
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
                    ى
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <label>First Name</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.first_name }}</p>
                        <div class="row">
                          <input
                            v-if="edit"
                            name="first name"
                            type="text"
                            placeholder="first name"
                            class="form-control border-input"
                            v-model="user.first_name"
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
                        <p v-if="!edit">{{ user.last_name }}</p>
                        <div class="row">
                          <input
                            v-if="edit"
                            name="last name"
                            type="text"
                            placeholder="first name"
                            class="form-control border-input"
                            v-model="user.last_name"
                          />
                          <small
                            v-if="errors.has('first name')"
                            class="field-text is-danger"
                          >{{ errors.first('last name') }}</small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label>Email</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.email }}</p>
                        <div class="row">
                          <input
                            v-if="edit"
                            name="email"
                            type="email"
                            placeholder="email"
                            class="form-control border-input"
                            v-model="user.email"
                          />
                          <small
                            v-if="errors.has('email')"
                            class="field-text is-danger"
                          >{{ errors.first('email') }}</small>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label>Joined as</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.title }}</p>
                        <div class="row">
                          <select
                            v-if="edit"
                            class="browser-default custom-select"
                            v-model="user.title"
                            v-validate="'required'"
                            name="join as"
                          >
                            <option value>Select</option>
                            <option value="Frontend">Frontend Developer</option>
                            <option value="Backend">Backend Developer</option>
                            <option value="Fullstack">Fullstack Developer</option>
                            <option value="Mobile/App">Mobile/App Developer</option>
                            <option value="AI/Blockchain">AI/Blockchain Developer</option>
                          </select>
                          <small
                            v-if="errors.has('join as')"
                            class="field-text is-danger"
                          >{{ errors.first('join as') }}</small>
                        </div>
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
                      <div class="col-md-4">
                        <label class="form-qs">What is your English Proficiency?</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.english_level }}</p>
                        <select
                          v-if="edit"
                          required
                          class="browser-default custom-select"
                          name="english level"
                          v-validate="'required'"
                          v-model="user.english_level"
                        >
                          <option value>Select</option>
                          <option value="good">Fair</option>
                          <option value="good">Good</option>
                          <option value="very good">Very Good</option>
                          <option value="fluent">Fluent</option>
                        </select>
                        <small
                          v-if="errors.has('english level')"
                          class="field-text is-danger"
                        >{{ errors.first('english level') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label class="form-qs">What is your academic qualifications?</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.academic_degree }}</p>

                        <select
                          v-if="edit"
                          v-validate="'required'"
                          class="browser-default custom-select"
                          name="degree"
                          id="academic-qul"
                          v-model="user.academic_degree"
                        >
                          <option value>Select</option>
                          <option value="Bachelor’s">Bachelor’s Degree</option>
                          <option value="Master’s">Master’s Degree</option>
                          <option value="diploma">Diploma</option>
                        </select>
                        <small
                          v-if="errors.has('degree')"
                          class="field-text is-danger"
                        >{{ errors.first('degree') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="degree-details">Field of study</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.field_of_study }}</p>

                        <input
                          v-if="edit"
                          v-validate="'required'"
                          type="text"
                          name="degree details"
                          class="form-control border-input"
                          id="degree-details"
                          placeholder="e.g. Computer Engineering, ...etc"
                          v-model="user.field_of_study"
                        />
                        <small
                          v-if="errors.has('degree details')"
                          class="field-text is-danger"
                        >{{ errors.first('degree details') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="university">University/Institution</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.university }}</p>

                        <input
                          v-if="edit"
                          v-validate="'required'"
                          type="text"
                          name="university"
                          class="form-control border-input"
                          id="university"
                          placeholder=" e.g. Cairo University,...etc"
                          v-model="user.university"
                        />
                        <small
                          v-if="errors.has('university')"
                          class="field-text is-danger"
                        >{{ errors.first('university') }}</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label for="grad-year">Graduation year</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.graduation_year }}</p>

                        <input
                          v-if="edit"
                          v-validate="'required|numeric'"
                          name="graduation year"
                          class="form-control border-input"
                          id="grad-year"
                          required
                          placeholder="e.g. 2017"
                          v-model="user.graduation_year"
                        />
                        <small
                          v-if="errors.has('graduation year')"
                          class="field-text is-danger"
                        >{{ errors.first('graduation year') }}</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label
                          for="years-of-exp"
                          class="form-qs"
                        >how many years of experience do you have as developer</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.years_experience }}</p>

                        <input
                          v-if="edit"
                          v-validate="'required|numeric'"
                          name="years of experience"
                          class="form-control border-input"
                          id="exp-years"
                          required
                          placeholder=" e.g. 4"
                          v-model="user.years_experience"
                        />
                        <small
                          v-if="errors.has('years of experience')"
                          class="field-text is-danger"
                        >{{ errors.first('years of experience') }}</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label class="typo__label">skills</label>
                      </div>
                      <div class="col-md-8">
                        <p id="t-skills" v-if="!edit">
                          <span v-for="(t,i) in user.technologies" :key="i">{{ t.name }}</span>
                        </p>
                        <multiselect
                          v-if="edit"
                          v-validate="'required'"
                          name="skills"
                          placeholder="Search or add a tag"
                          label="name"
                          track-by="id"
                          v-model="user.technologies"
                          :options="options"
                          :multiple="true"
                          :taggable="true"
                        ></multiselect>
                        <small
                          v-if="errors.has('skills')"
                          class="field-text is-danger"
                        >{{ errors.first('skills') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="projects" class="form-qs">List of projects you’ve worked on</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.projects }}</p>
                        <textarea
                          v-if="edit"
                          v-validate="'required'"
                          name="previous projects"
                          id="projects"
                          cols="50"
                          rows="10"
                          class="form-control border-input"
                          v-model="user.projects"
                        ></textarea>
                        <small
                          v-if="errors.has('previous projects')"
                          class="field-text is-danger"
                        >{{ errors.first('previous projects') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="github-link">Github Link</label>
                      </div>
                      <div class="col-md-8">
                        <a v-if="!edit" :href="user.github_link" target="_blank">Github Link</a>
                        <input
                          v-if="edit"
                          v-validate="'required'"
                          type="text"
                          name="github link"
                          class="form-control border-input"
                          id="github-link"
                          v-model="user.github_link"
                          placeholder
                        />
                        <small
                          v-if="errors.has('github link')"
                          class="field-text is-danger"
                        >{{ errors.first('github link') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label class="form-qs">Have you ever worked remotely?</label>
                      </div>
                      <div class="col-md-8">
                        <div v-if="!edit">
                          <p v-if="user.worked_remotly=='yes'">Yes</p>
                          <p v-else>No</p>
                        </div>
                        <label v-if="edit">
                          <input
                            type="radio"
                            name="worked_remotely"
                            value="yes"
                            v-model="user.worked_remotly"
                          /> yes
                        </label>
                        <label v-if="edit">
                          <input
                            type="radio"
                            name="worked_remotely"
                            value="no"
                            v-model="user.worked_remotly"
                          />no
                        </label>
                      </div>
                    </div>

                    <br />
                    <div class="row">
                      <div class="col-md-4">
                        <label for="address" class="form-qs">Address</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.address }}</p>
                        <input
                          v-if="edit"
                          v-validate="'required'"
                          type="text"
                          name="address"
                          class="form-control border-input"
                          id="address"
                          v-model="user.address"
                        />
                        <small
                          v-if="errors.has('address')"
                          class="field-text is-danger"
                        >{{ errors.first('address') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="city" class="form-qs">City</label>
                      </div>

                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.city }}</p>
                        <input
                          v-if="edit"
                          v-validate="'required'"
                          type="text"
                          name="city"
                          class="form-control border-input"
                          id="city"
                          v-model="user.city"
                          placeholder=" e.g. Aswan"
                        />
                        <small
                          v-if="errors.has('city')"
                          class="field-text is-danger"
                        >{{ errors.first('city') }}</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label class="form-qs">When can you start?</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.start_date }}</p>
                        <select
                          v-if="edit"
                          v-validate="'required'"
                          class="browser-default custom-select border-input"
                          name="when can you start"
                          id="availability"
                          v-model="user.start_date"
                        >
                          <option value>Select</option>
                          <option value="immediately">immediately</option>
                          <option value="two weeks">two weeks</option>
                          <option value="one month">one month</option>
                          <option value="two month">two month</option>
                          <option value="more">more</option>
                        </select>
                        <small
                          v-if="errors.has('when can you start')"
                          class="field-text is-danger"
                        >{{ errors.first('when can you start') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label class="form-qs">Prefered working space</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.prefered_working_place }}</p>
                        <select
                          v-if="edit"
                          v-validate="'required'"
                          class="browser-default custom-select border-input"
                          name="prefered working space"
                          id="availability"
                          v-model="user.prefered_working_place"
                        >
                          <option value>Select</option>
                          <option value="Smart Village">Smart Village</option>
                          <option value="New Cairo">New Cairo</option>
                          <option value="Helioples">Helioples</option>
                          <option value="Downtown">Downtown</option>
                        </select>
                        <small
                          v-if="errors.has('prefered working space')"
                          class="field-text is-danger"
                        >{{ errors.first('prefered working space') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="phone" class="form-qs">Phone Number</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.phone }}</p>
                        <input
                          v-if="edit"
                          v-validate="'required|numeric'"
                          type="text"
                          name="phone"
                          class="form-control border-input"
                          id="phone"
                          v-model="user.phone"
                          placeholder="your phone number"
                        />
                        <small
                          v-if="errors.has('phone')"
                          class="field-text is-danger"
                        >{{ errors.first('phone') }}</small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <label for="salary" class="form-qs">What is your expected salary?</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.expected_salary }}</p>
                        <input
                          v-if="edit"
                          v-validate="'required|numeric'"
                          name="salary"
                          class="form-control border-input"
                          id="salary"
                          v-model="user.expected_salary"
                          placeholder=" e.g. 1000 EUR "
                        />
                        <small
                          v-if="errors.has('salary')"
                          class="field-text is-danger"
                        >{{ errors.first('salary') }}</small>
                      </div>
                    </div>

                    <div class="row" v-if="edit">
                      <div class="col-md-4">
                        <label for="cv" class="form-qs">Upload your CV</label>
                      </div>
                      <div class="col-md-8">
                        <div class="file-field">
                          <input type="file" name="cv" id="cv" @change="onFileSelected" />
                        </div>
                        <small
                          v-if="errors.has('cv')"
                          class="field-text is-danger"
                        >{{ errors.first('cv') }}</small>
                      </div>
                    </div>
                    <div class="row" v-if="!edit">
                      <div class="col-md-4">
                        <label for="cv" class="form-qs">CV</label>
                      </div>
                      <div class="col-md-8">
                        <div class="file-field">
                          <a :href="user.cv" target="_blank" rel="noopener noreferrer">CV</a>
                        </div>
                        <small
                          v-if="errors.has('cv')"
                          class="field-text is-danger"
                        >{{ errors.first('cv') }}</small>
                      </div>
                    </div>

                    <!-- <div class="row" v-if="edit">
                      <div class="col-md-4">
                        <label for="picture" class="form-qs">Upload a recent picture</label>
                      </div>
                      <div class="col-md-8">
                        <div class="file-field">
                          <input type="file" name="photo" id="picture" @change="onImageSelected" />
                        </div>
                        <small
                          v-if="errors.has('photo')"
                          class="field-text is-danger"
                        >{{ errors.first('photo') }}</small>
                      </div>
                    </div>-->
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-summary"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <label for="projects" class="form-qs">BIO</label>
                      </div>
                      <div class="col-md-8">
                        <p v-if="!edit">{{ user.bio }}</p>
                        <textarea
                          v-if="edit"
                          v-validate="'required'"
                          name="bio"
                          id="projects"
                          cols="50"
                          rows="10"
                          class="form-control border-input"
                          v-model="user.bio"
                        ></textarea>
                        <small
                          v-if="errors.has('bio')"
                          class="field-text is-danger"
                        >{{ errors.first('bio') }}</small>
                      </div>
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  name: "Profile",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Loading: Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      user: {},
      value: [],
      options: [],
      edit: false
    };
  },

  methods: {
    updateUser() {
      this.$validator.validate().then(result => {
        if (result) {
          this.isLoading = true;
          let skills2 = [];
          this.value.forEach(element => {
            skills2.push(element.name);
          });

          this.$http
            .put("/user/update/" + this.user.id, this.user, {
              headers: {
                "Content-Type": "application/json",
                token: localStorage.token
              }
            })
            .then(res => {
              // this.afterUpdate();
              localStorage.setItem("currentUser", JSON.stringify(this.user));

              this.isLoading = false;
              this.edit = false;
            })
            .catch(err => console.log(err.message));
        } else {
          jQuery([document.documentElement, document.body]).animate({
            scrollTop: jQuery(".is-danger").offset().top - 200
          });
        }
      });
    },
    editUser() {
      this.edit = true;
    },
    checkCurrentLogin() {
      if (localStorage.token) {
        if (localStorage.getItem("currentUser")) {
          this.user = JSON.parse(localStorage.getItem("currentUser"));
          console.log(this.user);
        }
      } else {
        this.$router.replace(this.$route.query.redirect || "/login");
      }
    },
    getAllTech() {
      this.$http
        .get("/technologies")
        .then(res => {
          this.options = res.data;
        })
        .catch(err => console.log(err.message));
    },
    afterUpdate() {
      this.$http
        .post("/user/auth", {
          email: this.user.email,
          password: this.user.password
        })
        .then(req => {
          localStorage.token = req.data.token;
          localStorage.setItem("currentUser", JSON.stringify(req.data.user));
        })
        .catch(err => console.log(err.message));
      this.isLoading = false;
      this.edit = false;
    },
    onFileSelected(event) {
      let Cvfile = event.target.files[0];

      let readerCV = new FileReader();
      let vm = this;
      readerCV.onloadend = function(Cvfile) {
        vm.user.cv = readerCV.result;
      };
      readerCV.readAsDataURL(Cvfile);
    },
    onImageSelected(event) {
      let photoFile = event.target.files[0];
      let reader = new FileReader();
      let vm = this;
      reader.onloadend = function(photoFile) {
        vm.user.photo = reader.result;
      };
      reader.readAsDataURL(photoFile);
    },
    updateImage() {
      $("#pic").trigger("click");
      this.edit = true;
    }
  },
  mounted() {
    document.title = this.user.first_name + " " + this.user.last_name;
    this.checkCurrentLogin();
    this.getAllTech();
  },
  updated() {}
};
</script>
