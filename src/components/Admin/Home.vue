<template>
  <div>
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">New Talents</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.newUsers }}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-plus fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Unverified</div>
                  <div
                    class="h5 mb-0 font-weight-bold text-gray-800"
                  >{{ statistics.unverifiedCount }}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-exclamation-circle fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Verified</div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div
                        class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                      >{{ statistics.verifiedCount }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user-check fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Total</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{ statistics.usersCount }}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user-friends fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Content Column -->
        <div class="col-lg-6 mb-4">
          <!-- Project Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Campus Refrence</h6>
            </div>
            <div class="card-body">
              <div v-for="(place, index1) in statistics.places" :key="index1">
                <h4 class="small font-weight-bold">
                  {{ place[0] }}
                  <span class="float-right">{{ place[1] }} / 200</span>
                </h4>
                <div class="progress mb-4">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    :style="{width:place[1]+'%'}"
                    aria-valuemin="0"
                    aria-valuemax="200"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Content Column -->
        <div class="col-lg-6 mb-4">
          <!-- Project Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Top Stack</h6>
            </div>
            <div class="card-body">
              <div v-for="(technology, index) in statistics.topTechnologies" :key="index">
                <h4 class="small font-weight-bold">
                  {{ technology.category }} / {{ technology.technology }}
                  <span
                    class="float-right"
                  >{{ technology.count }} / 200</span>
                </h4>
                <div class="progress mb-4">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="{width:technology.count+'%'}"
                    aria-valuemin="0"
                    aria-valuemax="200"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 class="m-0 font-weight-bold text-primary">Unverified talents</h6>

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
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(user, index) in unverifiedTalents" :key="index">
                <td>{{ user.first_name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.title }}</td>
                <td v-if="user.verified">Verified</td>
                <td v-else>Unverified</td>
                <td>
                  <button class="btn btn-warning">edit</button>
                </td>
                <td>
                  <button class="btn btn-danger">delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>

  <!-- End of Page Wrapper -->
  <!-- Scroll to Top Button-->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      token: localStorage.getItem("adminToken"),
      statistics: {
        newUsers: 0,
        places: [],
        topTechnologies: {},
        unverifiedCount: 0,
        verifiedCount: 0,
        usersCount: 0,
        users: {}
      },
      loaded: null,
      unverifiedTalents: {}
    };
  },
  methods: {
    getStatistics() {
      this.$http
        .get("/statistics", {
          headers: {
            token: this.token
          }
        })
        .then(res => {
          this.loaded = true;
          this.statistics.newUsers = res.data.new_users;
          // this.statistics.places = res.data.places_count;
          this.statistics.unverifiedCount = res.data.unverified_count;
          this.statistics.verifiedCount = res.data.verified_count;
          this.statistics.usersCount = res.data.users_count;
          this.statistics.users = res.data.users;

          this.statistics.topTechnologies = res.data.top_technologies;
          let users = Object.keys(res.data.users).map(key => {
            return res.data.users[key];
          });
          // this.statistics.topTechnologies = Object.keys(res.data.top_technologies).map(
          //   function(key) {
          //     return [key, res.data.top_technologies[key]];
          //   }
          // );
          this.unverifiedTalents = users.filter(function(user) {
            return user.verified == false;
          });

          console.log(this.unverifiedTalents);

          this.statistics.places = Object.keys(res.data.places_count).map(
            function(key) {
              return [key, res.data.places_count[key]];
            }
          );
        })
        .catch(er => console.log(er.message));
    }
  },
  created() {
    this.getStatistics();
  }
};
</script>
