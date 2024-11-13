<template>
  <body
    style="
      background-color: #e6ffee;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 200vh;
      margin: 0;
      padding-top: 10px;
    "
  >
    <div class="container mt-5">
      <h1 class="text-center mb-4" style="text-decoration: underline; text-decoration-skip-ink: none; font-weight: bold; color: black;">
        Player List
      </h1>

      <div class="row">
        <div class="col-md-4" v-for="player in players" :key="player.id">
          <div class="card mb-4 player-card">
            <div class="card-body">
              <h5 class="card-title">{{ player.name }}</h5>
              <p class="card-text"><strong>Age:</strong> {{ calculateAge(player.dob) }} years</p>

              <p class="card-text" style="text-decoration: underline; font-style: italic;">
                <strong>Address:</strong>
              </p>
              <p class="card-text">
                <strong>Palika:</strong> {{ player.palika }}<span class="mx-2">|</span>
                <strong>Ward:</strong> {{ player.ward }}<span class="mx-2">|</span>
                <strong>District:</strong> {{ player.district }}<span class="mx-2">|</span>
                <strong>State:</strong> {{ player.state }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      players: [
        {
          id: 1,
          name: 'John Doe',
          dob: '1995-06-15',
          role: 'Manager',
          palika: 'Central Town',
          ward: '7',
          district: 'Birtamode',
          state: 'Province 1',
        },
        {
          id: 2,
          name: 'Jane Smith',
          dob: '1998-04-22',
          role: 'Player',
          palika: 'Green Valley',
          ward: '12',
          district: 'Birtamode',
          state: 'Province 1',
        },
        // Add more players as needed
      ],
    };
  },
  methods: {
    calculateAge(dob) {
      const birthDate = new Date(dob);
      const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },
};
</script>

<style scoped>
.player-list {
  display: flex; /* Use flexbox to arrange cards */
  flex-wrap: wrap; /* Allow cards to wrap to the next line if needed */
}

.player-card {
  background-color: white; /* Change card color to white */
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  border: 2px solid black; /* Add black bold border */
  transition: transform 0.3s; /* Smooth transition for the zoom effect */
}

.player-card:hover {
  transform: scale(1.05); /* Zoom in effect on hover */
}
</style>
