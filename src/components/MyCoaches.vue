<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Player List</h1>
      <div class="row">
        <div class="col-md-4" v-for="player in players" :key="player.id">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h4 class="card-title" style="text-decoration: underline;">{{ player.name }}</h4>
              <p class="card-text"><strong>Phone Number:</strong> {{ player.phone }}</p>
              <p class="card-text"><strong>Email:</strong> {{ player.email }}</p>
              <p class="card-text"><strong>Date of Birth:</strong> {{ player.dob }}</p>
              <p class="card-text"><strong>Age:</strong> {{ calculateAge(player.dob) }}</p>
              <p class="card-text"><strong>Gender:</strong> {{ player.gender }}</p>
              <p class="card-text"><strong>Role:</strong> {{ player.role }}</p>

              <p class="card-text" style="text-decoration: underline; font-style: italic;"><strong>Address:</strong></p>
              <p class="card-text"><strong>Tole:</strong> {{ player.tole }}</p>
              <p class="card-text"><strong>Ward:</strong> {{ player.ward }}</p>
              <p class="card-text"><strong>Palika:</strong> {{ player.palika }}</p>
              <p class="card-text"><strong>District:</strong> {{ player.district }}</p>
              <p class="card-text"><strong>State:</strong> {{ player.state }}</p>
              <p class="card-text"><strong>Country:</strong> {{ player.country }}</p>

              <p class="card-text" style="text-decoration: underline; font-style: italic;"><strong>Permanent Address:</strong></p>
              <p class="card-text"><strong>Tole:</strong> {{ player.tole }}</p>
              <p class="card-text"><strong>Ward:</strong> {{ player.ward }}</p>
              <p class="card-text"><strong>Palika:</strong> {{ player.palika }}</p>
              <p class="card-text"><strong>District:</strong> {{ player.district }}</p>
              <p class="card-text"><strong>State:</strong> {{ player.state }}</p>
              <p class="card-text"><strong>Country:</strong> {{ player.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        players: [
          {
            id: 1,
            name: 'John Doe',
            phone: '555-1234',
            email: 'john.doe@example.com',
            dob: '1995-06-15',
            gender: 'Male',
            role: 'Manager',
            tole: 'Maple Street',
            ward: '7',
            palika: 'Central Town',
            district: 'Birtamode',
            state: 'Province 1',
            country: 'Nepal',
            permanentAddress: {
              tole: 'Oak Avenue',
              ward: '3',
              palika: 'East Village',
              district: 'Birtamode',
              state: 'Province 1',
              country: 'Nepal'
            }
          },
          {
            id: 2,
            name: 'Jane Smith',
            phone: '555-5678',
            email: 'jane.smith@example.com',
            dob: '1998-04-22',
            gender: 'Female',
            role: 'Player',
            tole: 'Pine Road',
            ward: '12',
            palika: 'Green Valley',
            district: 'Birtamode',
            state: 'Province 1',
            country: 'Nepal',
            permanentAddress: {
              tole: 'Elm Street',
              ward: '5',
              palika: 'West Town',
              district: 'Birtamode',
              state: 'Province 1',
              country: 'Nepal'
            }
          }
        ]
      };
    }, methods: {
    calculateAge(dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
  };
</script>

  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    border-radius: 10px;
    background-color: #e6ffee;
    padding: 20px;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-title {
    font-size: 1.5rem;
    color: black;
    text-align: left;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 1rem;
    color: black;
    text-align: left;
  }
  
  .text-center {
    color: #343a40;
  }
  
  .shadow-sm {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  