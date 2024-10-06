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
      <!-- Profile Form -->
      <div class="card p-4" style="max-width: 900px; width: 150%;">
        <h3 style="background-color: #add8e6; font-weight: bold; color: black;" class="text-center rounded p-2 mb-4">
          User Profile Form
        </h3>


  
        <form @submit.prevent="handleSubmit">
          <!-- Name -->
          <div class="row mb-3">
            <div class="col">
              <label class="text-label">First Name</label>
              <input type="text" class="form-control" id="first-name" placeholder="First Name" required />
            </div>
            <div class="col">
              <label class="text-label">Last Name</label>
              <input type="text" class="form-control" id="last-name" placeholder="Last Name" required />
            </div>
          </div>
  
          <!-- Phone Number and Email -->
          <div class="row mb-3">
            <div class="col">
              <label class="text-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone-number" placeholder="Enter your phone number" required />
            </div>
            <div class="col">
              <label class="text-label">Email (Optional)</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email" />
            </div>
          </div>
  
          <!-- Date of Birth, Gender, and Role -->
          <div class="row mb-3">
            <div class="col">
              <label class="text-label">Date of Birth</label>
              <input type="date" class="form-control" id="dob" required />
            </div>
            <div class="col">
              <label class="text-label">Gender</label>
              <select class="form-select" id="gender" required>
                <option value="male" selected>Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="col">
              <label class="text-label">Role</label>
              <select class="form-select" id="role" required>
                <option value="player">Player</option>
                <option value="manager">Manager</option>
                <option value="coach">Coach</option>
              </select>
            </div>
          </div>
  
          <!-- Address Heading -->
          <h5 style="background-color: #e580ff; padding: 10px; color: black; font-weight: bold; font-style: italic;" class="border border-success rounded p-2 mb-3">Address</h5>



  
          <!-- Primary Address -->
          <div class="row mb-3">
          <div class="col">
            <label class="text-label">Tole</label>
            <input type="text" class="form-control" id="tole" placeholder="Enter your tole" required />
          </div>
          
          
            <div class="col">
              <label class="text-label">Ward</label>
              <input type="number" class="form-control" id="ward" placeholder="Enter your ward number" required />
            </div>
            <div class="col">
              <label class="text-label">Palika</label>
              <input type="text" class="form-control" id="palika" placeholder="Enter your palika" required />
            </div>
          </div>
  
          <div class="row mb-3">
            <div class="col">
              <label class="text-label">District</label>
              <input type="text" class="form-control" id="district" placeholder="Enter your district" required />
            </div>
            <div class="col">
              <label class="text-label">State</label>
              <input type="text" class="form-control" id="state" placeholder="Enter your state" required />
            </div>
            <div class="col">
              <label class="text-label">Country</label>
              <input type="text" class="form-control" id="country" placeholder="Enter your country" required />
            </div>
          </div>
  
          <!-- Mark as Permanent Address -->
          <div class="mb-4">
            <label class="text-label">
              <input type="checkbox" v-model="isPermanentAddress" />
              Mark as Permanent Address
            </label>
          </div>
  
          <!-- Additional Address -->
          <h5 v-if="!isPermanentAddress" style="background-color: #e580ff; padding: 10px; color: black; font-weight: bold; font-style: italic;" class="border border-success rounded p-2 mb-3">Permanent Address</h5>

  
          <div v-if="!isPermanentAddress">
            <div class="mb-3">
              <label class="text-label">Tole</label>
              <input type="text" class="form-control" id="tole-additional" placeholder="Enter additional tole" />
            </div>
            
            <div class="row mb-3">
              <div class="col">
                <label class="text-label">Ward</label>
                <input type="number" class="form-control" id="ward-additional" placeholder="Enter additional ward number" />
              </div>
              <div class="col">
                <label class="text-label">Palika</label>
                <input type="text" class="form-control" id="palika-additional" placeholder="Enter additional palika" />
              </div>
            </div>
  
            <div class="row mb-3">
              <div class="col">
                <label class="text-label">District</label>
                <input type="text" class="form-control" id="district-additional" placeholder="Enter additional district" />
              </div>
              <div class="col">
                <label class="text-label">State</label>
                <input type="text" class="form-control" id="state-additional" placeholder="Enter additional state" />
              </div>
              <div class="col">
                <label class="text-label">Country</label>
                <input type="text" class="form-control" id="country-additional" placeholder="Enter additional country" />
              </div>
            </div>
          </div>
  
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </body>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPermanentAddress: false, // State for the permanent address checkbox
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-top: 10px; /* Adjust as needed */
    margin-bottom: 200px; /* Adjust as needed */
}

  .text-label {
    font-size: 22px;
    font-weight: bold;
    color: green;
    margin-bottom: 5px;
    text-align: left;
    display: block;
  }

  
  
  </style>
  