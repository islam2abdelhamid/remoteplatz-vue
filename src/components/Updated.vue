<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="text-center" style="margin-top:150px;margin-bottom:50px;">
        <div class="alert" role="alert" style="padding:30px">
          <h4 class="alert-heading mt">
            <i class="fa fa-check" style="color:rgb(58, 164, 82)"></i>
            Congratulations!
          </h4>
          <p>your profile has been successfully updated</p>

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
  name: "Updated",
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
