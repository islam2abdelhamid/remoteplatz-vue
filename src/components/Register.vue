<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <Navbar />
    <section id="register">
      <div class="bar">
        <div class="d-flex justify-content-around bar-steps">
          <p :class="{active_step:step==1}">
            <span class="checked-step" :class="{current:step==1, active:step>=1}">
              <i class="fa fa-check"></i>
            </span>Create your profile
          </p>
          <p :class="{active_step:step==2}">
            <span class="checked-step" :class="{current:step==2, active:step>=2}">
              <i class="fa fa-check"></i>
            </span>Showcase your skills
          </p>
          <p :class="{active_step:step==3}">
            <span class="checked-step" :class="{current:step==3, active:step>=3}">
              <i class="fa fa-check"></i>
            </span>Review and Submit
          </p>
        </div>
        <!-- progress bar -->
        <div class="progress-container" :style="{width:barWidth+'%'}"></div>
      </div>
      <div class="container">
        <h2 class="text-center">Join our community as a Remote developer</h2>

        <p
          class="lead text-center"
        >work remotely with top leading tech companies and get access to Swiss/German market</p>
        <!-- Multi step form -->
        <div class="reg-form card">
          <h4 class="form-title" v-if="step === 1">Basic Information</h4>
          <h4 class="form-title" v-if="step === 2">Showcase your skill set</h4>
          <h4 class="form-title" v-if="step === 3">Review and Submit</h4>
          <hr v-if="step < 3" />
          <form enctype="multipart/form-data">
            <div v-if="step === 1">
              <div class="row">
                <!-- first name -->
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="fname">First Name</label>
                    <input
                      name="first name"
                      type="text"
                      required
                      autofocus
                      placeholder="first name"
                      class="form-control border-input"
                      v-model="registration.firstName"
                      v-validate="'required'"
                    />
                    <small
                      v-if="errors.has('first name')"
                      class="field-text is-danger"
                    >{{ errors.first('first name') }}</small>
                  </div>
                </div>

                <div class="col-md-5 offset-md-2">
                  <div class="form-group">
                    <label for="lname">Last Name</label>
                    <input
                      name="last name"
                      type="text"
                      required
                      autofocus
                      placeholder="last name"
                      class="form-control border-input"
                      v-model="registration.lastName"
                      v-validate="'required'"
                    />
                    <small
                      v-if="errors.has('last name')"
                      class="field-text is-danger"
                    >{{ errors.first('last name') }}</small>
                  </div>
                </div>
              </div>

              <div class="row">
                <!-- email -->
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      name="email"
                      v-validate="'required|email'"
                      type="email"
                      required
                      placeholder="email"
                      class="form-control border-input"
                      v-model="registration.email"
                    />
                    <small class="field-text is-danger" v-if="notValid">The email is already exist.</small>
                    <small class="field-text is-danger" v-if="!emailValid">this email is not valid.</small>
                    <small
                      v-if="errors.has('email')"
                      class="field-text is-danger"
                    >{{ errors.first('email') }}</small>
                  </div>
                </div>
                <!-- end of col -->

                <!-- join as -->
                <div class="col-md-5 offset-md-2">
                  <div class="form-group">
                    <label for="join-as">Join as</label>

                    <select
                      class="browser-default custom-select"
                      v-model="registration.joinAs"
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
                <!-- end of col -->
              </div>
              <!-- end of row -->

              <div class="row">
                <!-- password -->
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control border-input"
                      v-model="registration.password"
                      v-validate="'required'"
                      name="password"
                      ref="password"
                    />
                    <small
                      v-if="errors.has('password')"
                      class="field-text is-danger"
                    >{{ errors.first('password') }}</small>
                  </div>
                </div>
                <!-- end of col -->

                <!-- password confirmation -->
                <div class="col-md-5 offset-md-2">
                  <div class="form-group">
                    <label for="c_password">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control border-input"
                      v-model="registration.passwordConfirm"
                      v-validate="'required|confirmed:password'"
                      name="password confirmation"
                    />
                    <small
                      v-if="errors.has('password confirmation')"
                      class="field-text is-danger"
                    >{{ errors.first('password confirmation') }}</small>
                  </div>
                </div>
                <!-- end of col -->
              </div>
              <!-- end of row -->

              <button
                type="button"
                class="btn next float-right btn-next"
                id="next-step"
                @click.prevent="next()"
              >Next →</button>
            </div>

            <div v-if="step === 2">
              <div class="form-group">
                <label for="bio" class="form-qs">Tell us about yourself</label>
                <p
                  class="text-muted"
                >Provide a summary about your past achievements, goals and ambitions. Tell us what makes you a perfect candidate for a remote job.</p>
                <textarea
                  placeholder="e.g. Well, I’m currently a front end developer at Smith, where I handle our top performing client."
                  name="bio"
                  id="bio"
                  cols="50"
                  rows="10"
                  class="form-control border-input"
                  v-validate="'required'"
                  v-model="registration.bio"
                ></textarea>
                <small
                  v-if="errors.has('bio')"
                  class="field-text is-danger"
                >{{ errors.first('bio') }}</small>
              </div>

              <div class="form-group">
                <label class="form-qs">What is your English Proficiency?</label>

                <select
                  required
                  class="browser-default custom-select"
                  name="english level"
                  v-validate="'required'"
                  v-model="registration.englishLevel"
                >
                  <option value>Select</option>
                  <option value="fair">Fair</option>
                  <option value="good">Good</option>
                  <option value="very good">Very Good</option>
                  <option value="fluent">Fluent</option>
                </select>
                <small
                  v-if="errors.has('english level')"
                  class="field-text is-danger"
                >{{ errors.first('english level') }}</small>
              </div>

              <div class="form-group">
                <label class="form-qs">What is your academic qualifications?</label>

                <select
                  v-validate="'required'"
                  class="browser-default custom-select"
                  name="degree"
                  id="academic-qul"
                  v-model="registration.academicQualification"
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

              <div class="form-group">
                <label for="degree-details">Field of study</label>
                <input
                  v-validate="'required'"
                  type="text"
                  name="degree details"
                  class="form-control border-input"
                  id="degree-details"
                  placeholder="e.g. Computer Engineering, ...etc"
                  v-model="registration.fieldOfStudy"
                />
                <small
                  v-if="errors.has('degree details')"
                  class="field-text is-danger"
                >{{ errors.first('degree details') }}</small>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <label for="university">University/Institution</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    name="university"
                    class="form-control border-input"
                    id="university"
                    placeholder=" e.g. Cairo University,...etc"
                    v-model="registration.university"
                  />
                  <small
                    v-if="errors.has('university')"
                    class="field-text is-danger"
                  >{{ errors.first('university') }}</small>
                </div>
                <div class="col-md-6">
                  <label for="grad-year">Graduation year</label>
                  <input
                    v-validate="'required|numeric'"
                    name="graduation year"
                    class="form-control border-input"
                    id="grad-year"
                    required
                    placeholder="e.g. 2017"
                    v-model="registration.graduationYear"
                  />
                  <small
                    v-if="errors.has('graduation year')"
                    class="field-text is-danger"
                  >{{ errors.first('graduation year') }}</small>
                </div>
              </div>
              <div class="form-group">
                <label
                  for="years-of-exp"
                  class="form-qs"
                >how many years of experience do you have as developer</label>
                <input
                  v-validate="'required|numeric'"
                  name="years of experience"
                  class="form-control border-input"
                  id="exp-years"
                  required
                  placeholder=" e.g. 4"
                  v-model="registration.yearsOfExp"
                />
                <small
                  v-if="errors.has('years of experience')"
                  class="field-text is-danger"
                >{{ errors.first('years of experience') }}</small>
              </div>
              <div class="form-group">
                <div>
                  <label class="typo__label">skills</label>
                  <multiselect
                    v-validate="'required'"
                    name="skills"
                    v-model="value"
                    placeholder="Search or add a tag"
                    label="name"
                    track-by="id"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                  ></multiselect>
                </div>
                <small
                  v-if="errors.has('skills')"
                  class="field-text is-danger"
                >{{ errors.first('skills') }}</small>
              </div>

              <div class="form-group">
                <label
                  for="projects"
                  class="form-qs"
                >List and explain the key projects you’ve worked on (Provide links if applicable)</label>
                <textarea
                  placeholder="e.g. I've worked on projects where a bunch of smart people sat in a room and decided what developers needed."
                  v-validate="'required'"
                  name="previous projects"
                  id="projects"
                  cols="50"
                  rows="10"
                  class="form-control border-input"
                  v-model="registration.projects"
                ></textarea>
                <small
                  v-if="errors.has('previous projects')"
                  class="field-text is-danger"
                >{{ errors.first('previous projects') }}</small>
              </div>

              <div class="form-group">
                <label for="github-link">Github Link</label>
                <input
                  placeholder="e.g. github.com/username"
                  v-validate="'required'"
                  type="text"
                  name="github link"
                  class="form-control border-input"
                  id="github-link"
                  v-model="registration.github"
                />
                <small
                  v-if="errors.has('github link')"
                  class="field-text is-danger"
                >{{ errors.first('github link') }}</small>
              </div>

              <div class="form-group">
                <label class="form-qs">Have you ever worked remotely?</label>
                <label>
                  <input
                    type="radio"
                    name="worked_remotely"
                    value="yes"
                    v-model="registration.workedRemotely"
                  /> yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="worked_remotely"
                    value="no"
                    v-model="registration.workedRemotely"
                  />no
                </label>
              </div>

              <br />
              <div class="form-group">
                <label for="address" class="form-qs">Address</label>
                <input
                  placeholder="e.g DieSachbearbeiter
Choriner Straße 49"
                  v-validate="'required'"
                  type="text"
                  name="address"
                  class="form-control border-input"
                  id="address"
                  v-model="registration.address"
                />
                <small
                  v-if="errors.has('address')"
                  class="field-text is-danger"
                >{{ errors.first('address') }}</small>
              </div>

              <div class="form-group">
                <label for="city" class="form-qs">City</label>
                <input
                  v-validate="'required'"
                  type="text"
                  name="city"
                  class="form-control border-input"
                  id="city"
                  v-model="registration.city"
                  placeholder=" e.g. Aswan"
                />
                <small
                  v-if="errors.has('city')"
                  class="field-text is-danger"
                >{{ errors.first('city') }}</small>
              </div>
              <div class="form-group">
                <label class="form-qs">When can you start?</label>
                <select
                  v-validate="'required'"
                  class="browser-default custom-select border-input"
                  name="when can you start"
                  id="availability"
                  v-model="registration.availability"
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

              <div class="form-group">
                <label class="form-qs">Prefered working space</label>
                <select
                  v-validate="'required'"
                  class="browser-default custom-select border-input"
                  name="prefered workspace"
                  id="availability"
                  v-model="registration.preferedWorkingSpace"
                >
                  <option value>Select</option>
                  <option value="Smart Village">Smart Village</option>
                  <option value="New Cairo">New Cairo</option>
                  <option value="Helioples">Helioples</option>
                  <option value="Downtown">Downtown</option>
                </select>
                <small
                  v-if="errors.has('prefered workspace')"
                  class="field-text is-danger"
                >{{ errors.first('prefered workspace') }}</small>
              </div>

              <div class="form-group">
                <label for="phone" class="form-qs">Phone Number</label>
                <input
                  v-validate="'required|numeric'"
                  type="text"
                  name="phone"
                  class="form-control border-input"
                  id="phone"
                  v-model="registration.phone"
                  placeholder="your phone number"
                />
                <small
                  v-if="errors.has('phone')"
                  class="field-text is-danger"
                >{{ errors.first('phone') }}</small>
              </div>

              <div class="form-group">
                <label for="salary" class="form-qs">What is your expected salary? (in EUR)</label>
                <input
                  v-validate="'required|numeric'"
                  name="salary"
                  class="form-control border-input"
                  id="salary"
                  v-model="registration.salary"
                  placeholder=" e.g. 1000 "
                />
                <small
                  v-if="errors.has('salary')"
                  class="field-text is-danger"
                >{{ errors.first('salary') }}</small>
              </div>

              <div class="form-group">
                <label for="cv" class="form-qs">
                  Upload your CV
                  <small>( PDF's files only | max size: 2000 kb )</small>
                </label>
                <div class="file-field">
                  <input
                    v-validate="'required|mimes:pdf|size:2000'"
                    data-vv-as="pdf"
                    type="file"
                    name="cv"
                    id="cv"
                    @change="onFileSelected"
                  />
                </div>
                <small v-if="errors.has('cv')" class="field-text is-danger">{{ errors.first('cv') }}</small>
              </div>

              <div class="form-group">
                <label for="picture" class="form-qs">
                  Upload a recent picture
                  <small>( .jpg, .jpeg, .png | max size: 2000 kb )</small>
                </label>
                <div class="file-field">
                  <input
                    v-validate="'required|mimes:image/*|size:2000'"
                    data-vv-as="image"
                    type="file"
                    name="photo"
                    id="picture"
                    @change="setImage"
                  />
                </div>
                <small
                  v-if="errors.has('photo')"
                  class="field-text is-danger"
                >{{ errors.first('photo') }}</small>

                <div v-if="!errors.first('photo')">
                  <vue-cropper
                    v-if="!cropped"
                    ref="cropper"
                    :guides="true"
                    :view-mode="2"
                    drag-mode="crop"
                    :auto-crop-area="0.5"
                    :min-container-width="250"
                    :min-container-height="180"
                    :maxWidth="600"
                    :maxHeight="800"
                    :background="true"
                    :rotatable="true"
                    :src="imgSrc"
                    :aspectRatio="8/9"
                    alt="Source Image"
                    :img-style="{ 'width': '400px', 'height': '300px' }"
                  ></vue-cropper>
                  <small v-if="imageError" class="field-text is-danger">please crop your image</small>
                  <img
                    class="img-thumbnail"
                    :src="cropImg"
                    v-if="cropped"
                    style="max-width: 200px;"
                  />

                  <button
                    v-if="imgSrc != '' && !cropped"
                    type="button"
                    class="btn btn-dark mt-2"
                    @click="cropImage()"
                    style="margin-right: 40px;"
                  >Crop</button>
                </div>
              </div>

              <button
                @click.prevent="prev()"
                class="previous btn float-left btn-next"
              >&larr; Previous</button>
              <button
                @click.prevent="next()"
                class="btn next float-right btn-next"
                id="next-step"
              >Next &rarr;</button>
            </div>

            <div v-if="step === 3">
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td id="t-name">{{ registration.firstName }} {{ registration.lastName }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td id="t-email">{{ registration.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Join as</th>
                    <td id="t-join-as">{{ registration.joinAs }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Bio</th>
                    <td id="t-bio">{{ registration.bio }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Programming Languages</th>
                    <td id="t-skills">
                      <span v-for="(skill, index) in value" :key="index">{{ skill.name }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Academic Qualifications</th>
                    <td id="t-degree">{{ registration.academicQualification }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Degree Details</th>
                    <td id="t-details">{{ registration.fieldOfStudy}}</td>
                  </tr>
                  <tr>
                    <th scope="row">University/Institution</th>
                    <td id="t-university">{{ registration.university}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Graduation Year</th>
                    <td id="t-grad-year">{{ registration.graduationYear}}</td>
                  </tr>
                  <tr>
                    <th scope="row">years of Professional Experience</th>
                    <td id="t-y-exp">{{ registration.yearsOfExp}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Projects you’ve Worked on</th>
                    <td id="t-projects">{{ registration.projects}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Availability</th>
                    <td id="t-availability">{{ registration.availability}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Where are you located</th>
                    <td id="t-address">{{ registration.address}} - {{ registration.city}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Expected Salary</th>
                    <td id="t-salary">{{ registration.salary}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Github Link</th>
                    <td id="t-github">{{ registration.github}}</td>
                  </tr>
                </tbody>
              </table>
              <button
                @click.prevent="prev()"
                class="previous btn float-left btn-next"
              >&larr; Previous</button>

              <button @click.prevent="register()" class="btn next float-right btn-next">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>



<script>
// register globally
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Register",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Loading: Loading,
    VueCropper
  },
  data() {
    return {
      emailValid: true,
      imageError: false,
      cropped: false,
      imgSrc: "",
      cropImg: "",
      notValid: false,
      isLoading: false,
      fullPage: true,
      value: [],
      options: [],
      barWidth: 33,
      barStyle: {
        height: "2px",
        backgroundColor: "#f48120",
        transition: "0.5s"
      },
      uploadedFiles: {
        photo: "",
        cv: ""
      },
      step: 1,
      formData: {},
      registration: {
        firstName: "",
        lastName: "",
        email: "",
        joinAs: "",
        password: "",
        passwordConfirm: "",
        bio: "",
        englishLevel: "",
        academicQualification: "",
        fieldOfStudy: "",
        university: "",
        graduationYear: "",
        yearsOfExp: "",
        skills: [],
        projects: "",
        github: "",
        workedRemotely: "",
        availability: "",
        address: "",
        city: "",
        phone: "",
        salary: "",
        cv: "",
        photo: "",
        preferedWorkingSpace: ""
      }
    };
  },
  created() {
    this.checkCurrentLogin();
    this.getTech();
    this.getTech();
  },
  updated() {
    this.checkCurrentLogin();
  },
  methods: {
    setImage(e) {
      this.imageError = true;
      this.imgSrc = "";
      this.cropped = false;
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.cropped = true;
      this.imageError = false;
      this.registration.photo = this.cropImg;
    },

    getTech() {
      this.$http
        .get("/technologies")
        .then(res => {
          this.options = res.data;
        })
        .catch(err => console.log(err.message));
    },

    register() {
      this.isLoading = true;
      let skills2 = [];
      this.value.forEach(element => {
        skills2.push(element.name);
      });
      this.formData = {
        technologies: skills2,
        email: this.registration.email,
        first_name: this.registration.firstName,
        last_name: this.registration.lastName,
        password: this.registration.password,
        phone: this.registration.phone,
        title: this.registration.joinAs,
        bio: this.registration.bio,
        english_level: this.registration.englishLevel,
        english_degree: this.registration.englishLevel,
        academic_level: this.registration.academicQualification,
        academic_degree: this.registration.academicQualification,
        field_of_study: this.registration.fieldOfStudy,
        university: this.registration.university,
        graduation_year: this.registration.graduationYear,
        years_experience: this.registration.yearsOfExp,
        projects: this.registration.projects,
        github_link: this.registration.github,
        start_date: this.registration.availability,
        address: this.registration.address,
        worked_remotly: this.registration.workedRemotely,
        city: this.registration.city,
        expected_salary: this.registration.salary,
        prefered_working_place: this.registration.preferedWorkingSpace,
        photo: this.registration.photo,
        cv: this.registration.cv
      };

      this.$http
        .post("/user/register", this.formData)
        .then(res => {
          this.$router.replace(this.$route.query.redirect || "/thanks");
        })
        .catch(err => {
          console.log(err.message);
          this.isLoading = false;
          console.log(err.response.data);
        });
    },

    onFileSelected(event) {
      let Cvfile = event.target.files[0];

      let readerCV = new FileReader();
      let vm = this;
      readerCV.onloadend = function(Cvfile) {
        vm.registration.cv = readerCV.result;
      };
      readerCV.readAsDataURL(Cvfile);
    },

    prev() {
      this.barWidth = this.barWidth - 33.3333;

      this.step--;
    },
    next() {
      if (this.step === 1) {
        this.isLoading = true;

        this.$http
          .get("/user/check-email/" + this.registration.email)
          .then(res => {
            this.notValid = true;
            this.isLoading = false;
          })
          .catch(err => {
            this.isLoading = true;
            this.isLoading = false;

            this.$validator.validate().then(result => {
              if (result) {
                jQuery([document.documentElement, document.body]).animate({
                  scrollTop: 20
                });
                this.barWidth = this.barWidth + 33.3333;
                this.step++;
                this.registration.skills.forEach(skill => {});
              } else {
                jQuery([document.documentElement, document.body]).animate({
                  scrollTop: jQuery(".is-danger").offset().top - 200
                });
              }
            });
          });
      } else {
        this.$validator.validate().then(result => {
          if (result) {
            if (this.imgSrc === "") {
              this.imageError = true;
            } else if (!this.imageError) {
              jQuery([document.documentElement, document.body]).animate({
                scrollTop: 20
              });
              this.barWidth = this.barWidth + 33.3333;
              this.step++;
            }
          } else {
            jQuery([document.documentElement, document.body]).animate({
              scrollTop: jQuery(".is-danger").offset().top - 200
            });
          }
        });
      }
    },
    checkCurrentLogin() {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || "/profile");
      }
    }
  }
};
</script>