<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="text-center" style="margin-top:150px;margin-bottom:20px;">
        <div class="alert" role="alert" style="padding:30px">
          <h4 class="alert-heading mt">
            <i class="fa fa-check" style="color:rgb(58, 164, 82)"></i> Thank you for completing your profile.
          </h4>
          <p>
            Our team will review it within the next 3 days and will
            notify you via email/phone to verify your profile.
            <br />Feel free to follow us on social media for remote work tips, experience and sharing the
            community spirit.
          </p>
          <div class="thanks">
            <div class="social">
              <a class="facebook link" href="https://www.facebook.com/Remoteplatz/" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
              <a class="twitter link" href="https://twitter.com/Remoteplatz" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
              <a
                class="linkedin link"
                href="https://www.linkedin.com/company/remoteplatz"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                class="instagram link"
                href="https://www.instagram.com/Remoteplatz"
                target="_blank"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <p class="mb-0"></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Thanks",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {};
  },
  created() {
    jQuery([document.documentElement, document.body]).animate({
      scrollTop: 20
    });
  }
};
</script>
