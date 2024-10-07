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

      <form @submit.prevent="handleSubmit" novalidate>
        <!-- Name -->
        <div class="row mb-3">
          <div class="col">
            <label class="text-label">First Name</label>
            <input type="text" class="form-control" id="first-name" placeholder="First Name" v-model="firstName" required />
            <div v-if="submitted && !firstName" class="text-danger">First name is required.</div>
          </div>
          <div class="col">
            <label class="text-label">Last Name</label>
            <input type="text" class="form-control" id="last-name" placeholder="Last Name" v-model="lastName" required />
            <div v-if="submitted && !lastName" class="text-danger">Last name is required.</div>
          </div>
        </div>

        <!-- Phone Number and Email -->
        <div class="row mb-3">
          <div class="col">
            <label class="text-label">Phone Number</label>
            <input type="tel" class="form-control" id="phone-number" placeholder="Enter your phone number" v-model="phoneNumber" required />
            <div v-if="submitted && !phoneNumber" class="text-danger">Phone number is required.</div>
            <div v-if="submitted && phoneNumber && !isValidPhoneNumber(phoneNumber)" class="text-danger">Phone number must be 10 digits.</div>
          </div>
          <div class="col">
            <label class="text-label">Email (Optional)</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" />
            <div v-if="submitted && email && !isValidEmail(email)" class="text-danger">Invalid email format.</div>
          </div>
        </div>

        <!-- Date of Birth, Gender, and Role -->
        <div class="row mb-3">
          <div class="col">
            <label class="text-label">Date of Birth</label>
            <input type="date" class="form-control" id="dob" v-model="dob" required />
            <div v-if="submitted && !dob" class="text-danger">Date of birth is required.</div>
          </div>
          <div class="col">
            <label class="text-label">Gender</label>
            <select class="form-select" id="gender" v-model="gender" required>
              <option value="" disabled selected>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div v-if="submitted && !gender" class="text-danger">Gender is required.</div>
          </div>
          <div class="col">
            <label class="text-label">Role</label>
            <select class="form-select" id="role" v-model="role" required>
              <option value="" disabled selected>Select your role</option>
              <option value="player">Player</option>
              <option value="manager">Manager</option>
              <option value="coach">Coach</option>
            </select>
            <div v-if="submitted && !role" class="text-danger">Role is required.</div>
          </div>
        </div>

        <!-- Address Heading -->
        <h5 style="background-color: #e6ffee; padding: 10px; color: black; font-weight: bold; font-style: italic;" class="border border-success rounded p-2 mb-3">Address</h5>

        <!-- Primary Address -->
        <div class="row mb-3">
          <div class="col">
            <label class="text-label">Tole</label>
            <input type="text" class="form-control" id="tole" placeholder="Enter your tole" v-model="tole" required />
            <div v-if="submitted && !tole" class="text-danger">Tole is required.</div>
          </div>

          <div class="col">
            <label class="text-label">Ward</label>
            <input type="number" class="form-control" id="ward" placeholder="Enter your ward number" v-model="ward" required />
            <div v-if="submitted && !ward" class="text-danger">Ward number is required.</div>
          </div>
          <div class="col">
            <label class="text-label">Palika</label>
            <input type="text" class="form-control" id="palika" placeholder="Enter your palika" v-model="palika" required />
            <div v-if="submitted && !palika" class="text-danger">Palika is required.</div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <label class="text-label">District</label>
            <input type="text" class="form-control" id="district" placeholder="Enter your district" v-model="district" required />
            <div v-if="submitted && !district" class="text-danger">District is required.</div>
          </div>
          <div class="col">
            <label class="text-label">State</label>
            <input type="text" class="form-control" id="state" placeholder="Enter your state" v-model="state" required />
            <div v-if="submitted && !state" class="text-danger">State is required.</div>
          </div>
          <div class="col">
            <label class="text-label">Country</label>
            <input type="text" class="form-control" id="country" placeholder="Enter your country" v-model="country" required />
            <div v-if="submitted && !country" class="text-danger">Country is required.</div>
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
        <h5 v-if="!isPermanentAddress" style="background-color: #e6ffee; padding: 10px; color: black; font-weight: bold; font-style: italic;" class="border border-success rounded p-2 mb-3">Permanent Address</h5>

        <div v-if="!isPermanentAddress">
          <div class="row mb-3">
            <div class="col">
              <label class="text-label">Tole</label>
              <input type="text" class="form-control" id="tole-additional" placeholder="Enter additional tole" v-model="additionalTole" />
            </div>

            <div class="col">
              <label class="text-label">Ward</label>
              <input type="number" class="form-control" id="ward-additional" placeholder="Enter additional ward number" v-model="additionalWard" />
            </div>
            <div class="col">
              <label class="text-label">Palika</label>
              <input type="text" class="form-control" id="palika-additional" placeholder="Enter additional palika" v-model="additionalPalika" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col">
              <label class="text-label">District</label>
              <input type="text" class="form-control" id="district-additional" placeholder="Enter additional district" v-model="additionalDistrict" />
            </div>
            <div class="col">
              <label class="text-label">State</label>
              <input type="text" class="form-control" id="state-additional" placeholder="Enter additional state" v-model="additionalState" />
            </div>
            <div class="col">
              <label class="text-label">Country</label>
              <input type="text" class="form-control" id="country-additional" placeholder="Enter additional country" v-model="additionalCountry" />
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
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      dob: '',
      gender: '',
      role: '',
      tole: '',
      ward: '',
      palika: '',
      district: '',
      state: '',
      country: '',
      isPermanentAddress: false,
      additionalTole: '',
      additionalWard: '',
      additionalPalika: '',
      additionalDistrict: '',
      additionalState: '',
      additionalCountry: '',
      submitted: false, // Track if the form has been submitted
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true; // Set submitted to true on submit

      // Validate form before proceeding
      if (
        this.firstName &&
        this.lastName &&
        this.phoneNumber &&
        this.dob &&
        this.gender &&
        this.role &&
        this.tole &&
        this.ward &&
        this.palika &&
        this.district &&
        this.state &&
        this.country &&
        (this.isPermanentAddress || (this.additionalTole && this.additionalWard && this.additionalPalika && this.additionalDistrict && this.additionalState && this.additionalCountry))
      ) {
        // Handle form submission logic here (e.g., API call)
        console.log("Form submitted successfully!");
      } else {
        console.log("Please fill in all required fields correctly.");
      }
    },
    isValidEmail(email) {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidPhoneNumber(phoneNumber) {
      // Validate phone number to be exactly 10 digits and numeric
      const phoneNumberRegex = /^\d{10}$/;
      return phoneNumberRegex.test(phoneNumber);
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

.text-danger {
  font-size: 14px;
  color: red;
}
</style>
