<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #004d00;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style="color: grey; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 20px;">
            _PalikaManager_
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- View Players Link -->
              <li class="nav-item">
                <router-link to="/view-players" class="nav-link" :style="{ color: isActive('/view-players') ? 'red' : 'white' }">View Players</router-link>
              </li>
              <!-- Create Palika Team Link -->
              <li class="nav-item">
                <router-link to="/create-palika-team" class="nav-link" :style="{ color: isActive('/create-palika-team') ? 'red' : 'white' }">Create Palika Team</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PalikaHome',
    methods: {
      isActive(route) {
        return this.$route.path === route;
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar-nav .nav-link:hover {
    color: #66ff66; /* Change color on hover */
  }
  </style>
  