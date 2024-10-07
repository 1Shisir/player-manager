<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #004d00;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color:grey; font-family: Impact, Haettenschweiler, 'Ariel Narrow Bold', sans-serif; font-size: 20px;">_PlayerManager_</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" :style="{ color: isActive('/') ? 'red' : 'white' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link" :style="{ color: isActive('/about-us') ? 'red' : 'white' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/players" class="nav-link" :style="{ color: isActive('/players') ? 'red' : 'white' }">Players</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/managers" class="nav-link" :style="{ color: isActive('/managers') ? 'red' : 'white' }">Managers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coaches" class="nav-link" :style="{ color: isActive('/coaches') ? 'red' : 'white' }">Coaches</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teams" class="nav-link" :style="{ color: isActive('/teams') ? 'red' : 'white' }">Teams</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/ward-login" class="dropdown-item">Login as Ward</router-link>
              </li>
              <li>
                <router-link to="/municipality-login" class="dropdown-item">Login as Municipality</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyHome',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  },
}
</script>
