<template>
  <div id="app">
    <div id="wrapper">
      <sidebar />
      <!-- Main Content -->
      <div id="content-wrapper">
        <div id="content">
          <Navbar />
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
  name: "App"
};
</script>

<style lang="scss">
@import "assets/css/admin_style.css";
</style>


    