<template>
  <div class="hello">
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  created() {
    this.$router.replace(this.$route.query.redirect || "/admin/");
  }
};
</script>

