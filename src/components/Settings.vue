<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <Navbar />
    <section id="profile">
      <div class="container">
        <div class="container emp-profile">
          <div class="row">
            <div class="offset-3 col-md-8">
              <h2>Manage your account settings</h2>
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
                    >Password Reset</a>
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
                    >Delete Account</a>
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
                        <strong>Old Password</strong>
                      </div>
                      <div class="col-md-8">
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control"
                            v-model="oldPassword"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <strong>New Password</strong>
                      </div>
                      <div class="col-md-8">
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control"
                            v-model="newPassword"
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
                      <div class="col-md-4">
                        <strong>Confirm New Password</strong>
                      </div>
                      <div class="col-md-8">
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control"
                            v-model="newPasswordConfirm"
                            v-validate="'required|confirmed:password'"
                            name="password confirmation"
                          />
                          <small
                            v-if="errors.has('password confirmation')"
                            class="field-text is-danger"
                          >{{ errors.first('password confirmation') }}</small>
                        </div>
                        <button
                          class="btn"
                          style="background-color: #f48120; color: rgb(255, 255, 255); border-radius: 5px; "
                          @click="updatePassword()"
                        >Save Password</button>
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
                      <p class="text-left">
                        <strong>Are you sure you want to delete your account?</strong>
                        <br />Deleting your account means that you’re permanently leaving Remoteplatz community and all your data will be lost.
                        <br />If you changed your mind in the future you would have to start the process from the beginning. To delete, click the delete button.
                      </p>
                      <button class="btn btn-danger m-auto" @click="deleteAccount()">Delete Account</button>
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
// register globally
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Swal from "sweetalert2/dist/sweetalert2.js";

import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Settings",
  components: {
    Footer: Footer,
    Navbar: Navbar,
    Loading: Loading
  },
  data() {
    return {
      user: "",
      fullPage: true,
      isLoading: false,
      newPassword: "",
      oldPassword: "",
      newPasswordConfirm: ""
    };
  },
  methods: {
    deleteAccount() {
      Swal.fire({
        title: "Are you sure you want to delete your account?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$http
            .delete("/user/delete/" + this.user.id, {
              headers: {
                "Content-Type": "application/json",
                token: localStorage.token
              }
            })
            .then(res => {
              this.logout();
              this.$router.replace(this.$route.query.redirect || "/login");
            });
        }
      });
    },
    updatePassword() {
      this.isLoading = true;

      this.$http
        .put(
          "/user/reset-password/" + this.user.id,
          {
            new_password: this.newPassword,
            old_password: this.oldPassword
          },
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          Swal.fire({
            type: "success",
            title: "Your password has been updated",
            showConfirmButton: false,
            timer: 1500
          });

          this.newPassword = "";
          this.oldPassword = "";
          this.newPasswordConfirm = "";
        })
        .catch(err => {
          this.isLoading = false;

          Swal.fire({
            type: "error",
            title: "Oops...",
            text: "The entered password is not valid!"
          });
        });
    },
    checkCurrentLogin() {
      if (localStorage.token) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        if (!this.user.verified) {
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
    },
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
    }
  },
  created() {
    this.checkCurrentLogin();
  }
};
</script>