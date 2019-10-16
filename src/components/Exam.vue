<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <br />

    <div class="container">
      <h2 class="p-2">{{title}} Test</h2>
      <strong
        class="text-right float-right bg bg-dark text-white p-2"
      >Time limit: {{ Math.floor(countDown / 60) }} {{ countDown%60 }}</strong>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore in, alias et porro magni quos autem quo sunt voluptate nam pariatur distinctio aliquid perferendis earum rem quidem animi! Et!</p>
      <span>quiz automatically submits after the time limit ends</span>
      <br />
      <button class="btn cta p-1 pl-3 pr-3 mt-3" @click="startExam" v-if="questionIndex==null">Start</button>
      <hr />
      <div class="row">
        <div class="large-12 columns">
          <div class="callout">
            <div v-for="(question, index) in test" :key="index">
              <!-- Hide all questions, show only the one with index === to current question index -->
              <div v-show="index === questionIndex">
                <h3>{{ questionIndex+1 +'- ' +question.question.title }}</h3>
                <ol>
                  <!-- for each response of the current question -->
                  <li v-for="answer in question.answers" :key="answer.id">
                    <label>
                      <input
                        type="radio"
                        v-bind:value="answer.answer.title"
                        v-bind:name="index"
                        v-model="userAnswers[index]"
                      />
                      {{answer.answer.title}}
                    </label>
                  </li>
                </ol>
                <!-- The two navigation buttons -->
                <!-- Note: prev is hidden on first question -->
                <button class="btn btn-next" v-if="questionIndex > 0" v-on:click="prev">&larr;</button>
                <button
                  class="btn btn-next"
                  v-if="questionIndex < test.length"
                  v-on:click="next"
                >&rarr;</button>
              </div>
            </div>

            <!-- Last page, quiz is finished, display result -->

            <div v-show="questionIndex === test.length">
              <button
                class="btn btn-dark"
                v-if="questionIndex > 0"
                v-on:click="questionIndex-=1"
              >Go Back</button>
              <button class="btn btn-next" v-if="questionIndex > 0" v-on:click="getResult()">Submit</button>
              <!-- <p>You are: {{ score() }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <button @click="testRed">test</button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  name: "Profile",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      questionIndex: null,
      userAnswers: [],
      test: [],
      title: "",
      countDown: 600,
      score: 0,
      answers: [],
      rightAnswers: [],
      user: ""
    };
  },

  methods: {
    startExam() {
      this.questionIndex = 0;
      this.countDownTimer();
    },
    getTest() {
      this.$http
        .get("exam/" + this.$route.params.id, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.token
          }
        })
        .then(res => {
          this.test = res.data.exam;
          this.title = res.data.title;
          this.test.forEach(element => {
            this.answers.push(element.answers);
          });
          this.answers.forEach(element => {
            element.forEach(element2 => {
              this.rightAnswers.push(element2);
            });
          });

          this.rightAnswers = this.rightAnswers.filter(q => {
            return q.right_answer == true;
          });
        })
        .catch(err => console.log(err.message));
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.getResult();
      }
    },
    next() {
      this.questionIndex++;
    },
    prev() {
      this.questionIndex--;
    },
    getResult() {
      for (let i = 0; i < this.rightAnswers.length; i++) {
        if (this.rightAnswers[i].answer.title == this.userAnswers[i]) {
          this.score++;
        }
      }
      let vm = this;

      this.$http
        .post(
          "/user_exam/add",
          {
            user: this.user.id,
            exam: this.$route.params.id,
            score: this.score
          },
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          Swal.fire(
            "Good job!",
            "Your Score is (" + this.score + ")",
            "success"
          ).then(function() {
            vm.$router.replace(this.$route.query.redirect || "/register");
          });
        });
    },
    checkIfLogged() {
      if (localStorage.getItem("currentUser")) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.loginSuccessful(
          localStorage.getItem("currentUser"),
          localStorage.token
        );
      } else {
        this.$router.replace(this.$route.query.redirect || "/login");
      }
    },
    loginSuccessful(user, token) {
      let userStr = JSON.parse(user);

      this.step = 5;
      if (!token) {
        this.loginFailed();
        return;
      }
      if (userStr.verified) {
        this.error = false;
        this.$router.replace(this.$route.query.redirect || "/profile");
      } else {
        this.$http
          .get("user_exam/user/" + userStr.id, {
            headers: {
              token: token
            }
          })
          .then(res => {
            if (res.data.length < 1) {
            } else if (res.data.length > 0 && userStr.video == null) {
              this.$router.replace(this.$route.query.redirect || "/register");
            } else {
              this.$router.replace(this.$route.query.redirect || "/pending");
            }
          });
        this.error = false;
      }
    },
    testRed() {
      let vm = this;
      Swal.fire(
        "Good job!",
        "Your Score is (" + this.score + ")",
        "success"
      ).then(function() {
        window.location = "http://www.example.com";
      });
    }
  },
  created() {
    this.getTest();
    this.checkIfLogged();
  },
  updated() {}
};
</script>
