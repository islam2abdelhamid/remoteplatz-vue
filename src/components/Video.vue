<template>
  <div class="vld-parent">
    <Navbar />
    <section id="register">
      <div class="container">
        <h2
          class="text-center"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores quis aliquid, quibusdam</h2>

        <p
          class="lead text-center"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quam magni asperiores quidem hic illum reprehenderit architecto deserunt. Quos quae, excepturi porro ipsa maxime nostrum vitae ad soluta ducimus quaerat?</p>

        <div class="form-group">
          <button v-if="!cameraOppend" class="btn btn-dark mt-2" @click="startCamera()">
            <span>Start Camera</span>
            <i class="fa fa-camera" aria-hidden="true"></i>
          </button>
          <button
            :disabled="!cameraOppend"
            :class="recording?'Rec':'notRec'"
            @click="recording?stopRecordingVideo():startRecording()"
          >Recording</button>
          <hr />
          <video
            id="myvideo"
            class="video-js"
            :controls="recorded&&!recording"
            autoplay
            playsinline
            style="width: 100%;height: auto; background: black;"
          ></video>
          <button @click="updateVideo()" class="btn next float-right btn-next">Submit</button>
          <br />
          <br />
          <br />
          <br />
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
import Loading from "vue-loading-overlay";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Register",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Loading: Loading
  },
  data() {
    return {
      categories: [],
      recorded: false,
      recording: false,
      user: "",
      cameraOppend: false
    };
  },
  methods: {
    startCamera() {
      var video = document.querySelector("#myvideo");

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
          });
      }
      this.cameraOppend = true;
    },
    startRecording() {
      this.recorded = false;
      this.recording = true;
      var video = document.querySelector("#myvideo");
      captureCamera(function(camera) {
        video.muted = true;
        video.volume = 0;
        video.srcObject = camera;

        recorder = RecordRTC(camera, {
          type: "video"
        });

        //  recordRTC.setRecordingDuration(15 * 1000).onRecordingStopped(function(url) {
        //       console.debug('setRecordingDuration', url);
        //       window.open(url);
        //   })

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;
      });
    },
    stopRecordingCallback() {
      this.recording = false;
      this.recorded = true;
      var video = document.querySelector("#myvideo");
      video.src = video.srcObject = null;
      video.muted = false;
      video.volume = 1;
      video.src = URL.createObjectURL(recorder.getBlob());
      var blob = recorder.getBlob();
      console.log(blob);
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      let vm = this;
      reader.onloadend = function() {
        vm.user.video = reader.result;
        console.log(vm.user.video);
      };

      recorder.camera.stop();
      recorder.destroy();
      recorder = null;
    },
    stopRecordingVideo() {
      recorder.stopRecording(this.stopRecordingCallback);
    },
    updateVideo() {
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
          this.$router.replace(this.$route.query.redirect || "/pending");
        })
        .catch(err => console.log(err.message));
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
                this.$router.replace(this.$route.query.redirect || "/exams");
              } else if (res.data.length > 0 && this.user.video != null) {
                this.$router.replace(this.$route.query.redirect || "/pending");

                console.log("you have to record video");
              }
            });
        }
      } else {
        this.$router.replace(this.$route.query.redirect || "/login");
      }
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.checkCurrentLogin();
  }
};
</script>