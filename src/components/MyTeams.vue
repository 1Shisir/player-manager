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
        <h1 class="text-center mb-4" style="text-decoration: underline; font-weight: bold; color: black;">
  Team Roster
</h1><br><br><br>
      
<b-button 
  @click="createTeam" 
  variant="success" 
  style="background-color: #28a745; color: white; cursor: pointer; border: none; padding: 10px 20px;">
  Create Team
</b-button>
      
      <div class="row mt-4">
        <div class="col-md-4" v-for="member in team" :key="member.id">
          <div class="card mb-4 shadow-sm" style="background-color: #e6ffee;">
            <div class="card-body">
              <h4 class="card-title">{{ member.name }}</h4>
              <p class="card-text"><strong>Role:</strong> {{ member.role }}</p>
              <p class="card-text"><strong>Ward:</strong> {{ member.ward }}</p>
              <p class="card-text"><strong>Palika:</strong> {{ member.palika }}</p>
              <p class="card-text"><strong>District:</strong> {{ member.district }}</p>
              <p class="card-text"><strong>State:</strong> {{ member.state }}</p>
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
          { id: 1, name: 'John Doe', role: 'Forward', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 2, name: 'Jane Smith', role: 'Midfielder', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 3, name: 'Mike Johnson', role: 'Defender', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 4, name: 'Emily Davis', role: 'Goalkeeper', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 5, name: 'James Wilson', role: 'Forward', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 6, name: 'Sarah Brown', role: 'Midfielder', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 7, name: 'David Miller', role: 'Defender', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 8, name: 'Sophia Wilson', role: 'Midfielder', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 9, name: 'Chris Moore', role: 'Forward', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 10, name: 'Olivia Taylor', role: 'Defender', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 11, name: 'Liam Anderson', role: 'Midfielder', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 12, name: 'Isabella Thomas', role: 'Forward', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 13, name: 'Noah Jackson', role: 'Defender', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 14, name: 'Mia Pink', role: 'Astrologer', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 15, name: 'Ethan Harris', role: 'Forward', ward: '7', palika: 'Central Town', district: 'Birtamode', state: 'Province 1' },
          { id: 16, name: 'Charlotte Martin', role: 'Manager', ward: '3', palika: 'East Village', district: 'Birtamode', state: 'Province 1' },
          { id: 17, name: 'Oliver Lee', role: 'Coach', ward: '3', palika: 'East Village', district: 'Birtamode', state: 'Province 1' },
          { id: 18, name: 'Pinky Cat', role: 'Assistant Coach', ward: '3', palika: 'East Village', district: 'Birtamode', state: 'Province 1' },
        ],
        team: [],
      };
    },
    methods: {
      createTeam() {
        this.team = this.players; // For ward team
        // Use logic here to filter or assign players if necessary
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  
  </style>
  