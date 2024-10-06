<template>
<footer class="bg-dark text-white text-center py-3 mt-auto">
    <p class="mb-1">&copy; 2024 BirtamodeSportsManager. All rights reserved.</p>
    <p class="mb-1">Contact us: <a href="mailto:info@BirtamodeSportsManager.com">info@BirtamodeSportsManager.com</a></p>
    <div>
      <a href="https://www.facebook.com" target="_blank">Facebook</a>
      <a href="https://www.twitter.com" target="_blank">Twitter</a>
      <a href="https://www.instagram.com" target="_blank">Instagram</a>
      <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
    </div>
  </footer>
    
</template>




<script>
export default {
    name:'MyFooter',
}
</script>

<style>
    /* Ensure the footer is always at the bottom */
    html, body {
      height: 100%;
      margin: 0;
    }
    .content {
      flex: 1;
    }
    footer a {
      color: MediumSeaGreen;
      text-decoration: none;
      margin: 0 10px;
    }
  </style>