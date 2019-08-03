<template>
  <div id="app">
    <div id="wrapper">
      <sidebar v-if="isLogged" />
      <!-- Main Content -->
      <div id="content-wrapper">
        <div id="content">
          <Navbar v-if="isLogged" />
          <router-view></router-view>
        </div>
        <!-- end of content -->
      </div>
      <!-- end of content wrapper -->
    </div>
    <!-- end of  wrapper -->
  </div>
</template>

<script>
import Navbar from "@/components/Admin/Navbar";
import Sidebar from "@/components/Admin/Sidebar";
export default {
  components: {
    Navbar: Navbar,
    Sidebar: Sidebar
  },
  name: "App",
  data() {
    return {
      isLogged: false
    };
  },
  watch: {
    $route(to, from) {
      if (localStorage.getItem("adminToken")) {
        this.isLogged = true;
      }
    }
  },
  created() {
    if (localStorage.getItem("adminToken")) {
      this.isLogged = true;
    } else {
      this.$router.replace(this.$route.query.redirect || "/admin/login");
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/admin_style.css";
</style>


    