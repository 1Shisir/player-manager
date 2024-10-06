<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color: MediumSeaGreen; font-family: Impact, Haettenschweiler, 'Ariel Narrow Bold', sans-serif; font-size: 20px;">_PlayerManager_</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" :class="{ 'active-link': isActive('/') }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link" :class="{ 'active-link': isActive('/about-us') }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/players" class="nav-link" :class="{ 'active-link': isActive('/players') }">Players</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/managers" class="nav-link" :class="{ 'active-link': isActive('/managers') }">Managers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coaches" class="nav-link" :class="{ 'active-link': isActive('/coaches') }">Coaches</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teams" class="nav-link" :class="{ 'active-link': isActive('/teams') }">Teams</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
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
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search Players" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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

<style>
.active-link {
  color: red !important; /* Make the active link red */
}
</style>
