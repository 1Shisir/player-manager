<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #004d00;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color:grey; font-family: Impact, Haettenschweiler, 'Ariel Narrow Bold', sans-serif; font-size: 20px;">_AdminPanel_</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarAdminContent" aria-controls="navbarAdminContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarAdminContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/add-players" class="nav-link">Add Players</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view-players" class="nav-link">View Players</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNavbar',
  methods: {
    logout() {
      // Logic to handle logout
      this.$router.push('/');
    }
  }
}
</script>

  