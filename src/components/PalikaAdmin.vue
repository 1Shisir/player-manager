<template>
    <body
      style="
        background-color: #e6ffee;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 115vh;
        margin: 0;
        padding-top: 10px;
      "
    >
      <div>
        <h1 style="color: black; font-weight: bold; font-style: italic; text-decoration: underline;">Palika Admin</h1>
        <br /><br /><br />
        <div class="button-container">
          <button @click="confirmCreateTeam" class="create-team-btn">Create Team</button>
        </div>
        <table class="player-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Tole</th>
              <th>Ward</th>
              <th>Palika</th>
              <th>District</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(player, index) in players"
              :key="index"
              :class="index % 2 === 0 ? 'row-blue' : 'row-light-blue'"
            >
              <td>{{ player.firstName }}</td>
              <td>{{ player.lastName }}</td>
              <td>{{ player.phoneNumber }}</td>
              <td>{{ player.email }}</td>
              <td>{{ player.dob }}</td>
              <td>{{ player.gender }}</td>
              <td>{{ player.role }}</td>
              <td>{{ player.tole }}</td>
              <td>{{ player.ward }}</td>
              <td>{{ player.palika }}</td>
              <td>{{ player.district }}</td>
              <td>{{ player.state }}</td>
              <td>{{ player.country }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="logout" class="logout-btn">Logout</button>
      </div>
    </body>
  </template>
  
  <script>
  export default {
    name: 'PalikaAdmin',
    data() {
      return {
        players: [], // This will hold the player data
      };
    },
    methods: {
      confirmCreateTeam() {
        // Logic for creating a team
        alert('Create Team functionality goes here!');
      },
      logout() {
        // Logic for logging out
        alert('Logging out...');
        // Implement your logout logic here
      },
    },
    mounted() {
      // Fetch players data from a service or API
      // For now, this is an example static data
      this.players = [
        // Example players data
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          phoneNumber: '1234567890',
          email: 'john@example.com',
          dob: '2000-01-01',
          gender: 'Male',
          role: 'Player',
          tole: 'Tole1',
          ward: 'Ward1',
          palika: 'Palika1',
          district: 'District1',
          state: 'State1',
          country: 'Country1',
        },
        // Add more player objects as needed
      ];
    },
  };
  </script>
  
  <style scoped>
  .button-container {
    margin-bottom: 20px;
  }
  .create-team-btn {
    background-color: green; /* Changed to green */
    color: white;
  }
  .player-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black; /* Set table border color to black */
  }
  .player-table th {
    background-color: #66a3ff; /* Header color */
    color: white; /* Text color for the header */
    padding: 10px;
    border: 1px solid black; /* Set header cell border color to black */
    font-weight: bold; /* Make header text bold */
  }
  .player-table td {
    background-color: #cce0ff; /* Updated data color */
    padding: 10px;
    border: 1px solid black; /* Set data cell border color to black */
  }
  .row-blue {
    background-color: #66a3ff; /* Alternate row color */
  }
  .row-light-blue {
    background-color: #cce0ff; /* Alternate row color */
  }
  .logout-btn {
    background-color: red; /* Changed to red */
    color: white;
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  