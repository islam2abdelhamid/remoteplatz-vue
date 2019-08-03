<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Positions page</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
      >Add New Position</button>

      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">All Positions</h6>
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
                <th>ID</th>
                <th>Position</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(technology, index) in technologies" :key="index">
                <td>{{ technology.id }}</td>
                <td>{{ technology.name }}</td>
                <td>{{ technology.category.name }}</td>
                <td>
                  <button class="btn btn-danger" @click="deletePos(technology.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Position</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addPosition()">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Category:</label>
                <select
                  name="category"
                  v-model="position.cat"
                  class="browser-default custom-select"
                >
                  <option selected>Open this select menu</option>
                  <option
                    v-for="(cat,index) in categories"
                    :key="index"
                    :value="cat.id "
                  >{{ cat.name }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Technology:</label>
                <input v-model="position.tech" type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import $ from "jquery";
export default {
  name: "Positions",
  data() {
    return {
      position: {
        cat: "",
        tech: ""
      },
      technologies: {},
      categories: {},
      loaded: false
    };
  },
  methods: {
    deletePos(id) {
      this.$http
        .delete("/technology/delete/" + id, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("adminToken")
          }
        })
        .then(res => {
          this.getTechnologies();
          console.log("deleted");
        })
        .catch(er => console.log(er.message));
    },
    addPosition() {
      if (this.position.tech && this.position.cat) {
        console.log(localStorage.getItem("adminToken"));

        this.$http
          .post(
            "/technology/add",
            {
              name: this.position.tech,
              category: this.position.cat
            },
            {
              headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("adminToken")
              }
            }
          )
          .then(res => {
            jQuery("#exampleModal").modal("hide");

            this.getTechnologies();
            this.position.tech = "";
            this.position.cat = "";
          })
          .catch(er => console.log(er.message));
      }
    },
    getTechnologies() {
      this.$http
        .get("/technologies", {
          headers: {
            token: localStorage.getItem("adminToken")
          }
        })
        .then(res => {
          this.loaded = true;
          this.technologies = res.data;
          this.technologies.forEach(element => {});
        })
        .catch(er => console.log(er.message));
    },
    getCategories() {
      this.$http
        .get("/categories", {
          headers: {
            token: localStorage.getItem("adminToken")
          }
        })
        .then(res => {
          this.loaded = true;
          this.categories = res.data;
        })
        .catch(er => console.log(er.message));
    }
  },
  created() {
    this.getTechnologies();
    this.getCategories();
  }
};
</script>
