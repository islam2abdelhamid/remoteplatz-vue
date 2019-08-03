<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Developers page</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">All Developers</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            v-if="loaded"
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.user.first_name }}</td>
                <td>{{ user.user.email }}</td>
                <td>{{ user.user.city }}</td>
                <td>{{ user.position }}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteUser(user.user.id)">delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
export default {
  name: "Developers",
  data() {
    return {
      token: localStorage.getItem("adminToken"),
      users: {},
      unverifiedTalents: {},
      loaded: false
    };
  },
  methods: {
    deleteUser(id) {
      this.$http
        .delete("/user/delete/" + id, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("adminToken")
          }
        })
        .then(res => {
          alert("user deleted successfully");
          this.getUsers();
        })
        .catch(er => console.log(er.message));
    },
    getUsers() {
      this.$http
        .get("/user_info", {
          headers: {
            token: this.token
          }
        })
        .then(res => {
          this.loaded = true;
          this.users = res.data;
        })
        .catch(er => console.log(er.message));
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
