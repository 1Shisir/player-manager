<template>
    <body
      style="
        background-color: #e6ffee;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
        margin: 0;
        padding-top: 70px;
      "
    >
      <!-- Login Form -->
      <div
        class="card"
        style="
          max-width: 700px;
          width: 100%;
          padding: 80px 60px;
          border-radius: 15px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        "
      >
        <!-- Company Logo -->
        <div class="text-center mb-4">
          <img
            src="@/assets/logo.jpg"
            alt="Company Logo"
            style="max-width: 120px; font-size: 32px; width: 100%"
          />
        </div>
  
        <h3
          class="text-center"
          style="
            margin-bottom: 30px;
            color: green;
            font-weight: bold;
            font-style: italic;
            border: 3px solid green;
            padding: 10px;
            border-radius: 10px;
            display: inline-block;
          "
        >
          Ward Login
        </h3>
  
        <form style="margin-bottom: 0">
          <!-- Remove bottom margin of form -->
          <!-- Username -->
          <div class="mb-4">
            <label
              for="username"
              class="form-label"
              style="
                font-size: 22px;
                font-weight: bold;
                color: green;
                margin-bottom: 5px;
                text-align: left;
                display: block;
              "
              >Username</label
            >
            <input
              type="text"
              class="form-control form-control-lg"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
  
          <!-- Password -->
          <div class="mb-4">
            <label
              for="password"
              class="form-label"
              style="
                font-size: 22px;
                font-weight: bold;
                color: green;
                margin-bottom: 5px;
                text-align: left;
                display: block;
              "
              >Password</label
            >
            <input
              type="password"
              class="form-control form-control-lg"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="btn"
            style="
              background-color: #00cc44;
              color: white;
              width: 100%;
              padding: 18px;
              font-size: 18px;
              margin-top: 20px;
              border-color: #00cc44;
            "
          >
            Login
          </button>
        </form>
      </div>
    </body>
  </template>
    
    <script>
  export default {
    name: "WardLogin",
  };
  </script>
    