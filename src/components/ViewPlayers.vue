<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4" style="color: green; font-weight: bold;">Player Management</h2>
      <table class="table table-bordered table-hover">
        <thead style="background-color: #e6ffee;">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sport</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="player.id">
            <td>{{ index + 1 }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.sport }}</td>
            <td>{{ player.team }}</td>
            <td>
              <button class="btn btn-info btn-sm" @click="viewPlayer(player.id)">View</button>
              <button class="btn btn-warning btn-sm" @click="editPlayer(player.id)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deletePlayer(player.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal for viewing player details -->
      <div v-if="selectedPlayer" class="modal fade show d-block" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Player Details</h5>
              <button type="button" class="btn-close" @click="selectedPlayer = null"></button>
            </div>
            <div class="modal-body">
              <p><strong>Name:</strong> {{ selectedPlayer.name }}</p>
              <p><strong>Sport:</strong> {{ selectedPlayer.sport }}</p>
              <p><strong>Team:</strong> {{ selectedPlayer.team }}</p>
              <p><strong>Age:</strong> {{ selectedPlayer.age }}</p>
              <p><strong>Position:</strong> {{ selectedPlayer.position }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="selectedPlayer = null">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ViewPlayers",
    data() {
      return {
        players: [], // to hold player data fetched from the API
        selectedPlayer: null, // to hold the selected player for viewing details
      };
    },
    methods: {
      fetchPlayers() {
        // Fetch players from API
        fetch("/api/players")
          .then((response) => response.json())
          .then((data) => {
            this.players = data;
          })
          .catch((error) => {
            console.error("Error fetching players:", error);
          });
      },
      viewPlayer(id) {
        // Fetch a single player's details
        fetch(`/api/players/${id}`)
          .then((response) => response.json())
          .then((data) => {
            this.selectedPlayer = data;
          })
          .catch((error) => {
            console.error("Error fetching player:", error);
          });
      },
      editPlayer(id) {
        // Redirect to an edit player page (you can create a separate component for editing)
        this.$router.push(`/edit-player/${id}`);
      },
      deletePlayer(id) {
        if (confirm("Are you sure you want to delete this player?")) {
          // Send a DELETE request to the server
          fetch(`/api/players/${id}`, { method: "DELETE" })
            .then((response) => {
              if (response.ok) {
                alert("Player deleted successfully!");
                this.fetchPlayers(); // Refresh the list after deletion
              }
            })
            .catch((error) => {
              console.error("Error deleting player:", error);
            });
        }
      },
    },
    created() {
      this.fetchPlayers(); // Fetch players when the component is created
    },
  };
  </script>
  
  <!-- You can add some styles for better layout -->
  <style scoped>
  .table-hover tbody tr:hover {
    background-color: #d4f1d4;
  }
  .modal-backdrop {
    display: none;
  }
  </style>
  