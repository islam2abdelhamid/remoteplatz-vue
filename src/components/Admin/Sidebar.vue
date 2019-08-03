<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/admin/">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">
        Hello Admin
        <sup></sup>
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <router-link class="nav-link" to="/admin/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin/developers">
        <i class="fas fa-list"></i>
        <span>All Developers</span>
      </router-link>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link to="/admin/positions" class="nav-link">
        <i class="far fa-plus-square"></i>
        <span>Positions</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
  <!-- End of Sidebar -->
</template>


<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  }
};
</script>
