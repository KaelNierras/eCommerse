<script setup lang="ts">
import loginForm from '../components/login_form.vue'
</script>

<template>
  <main class="p-20 w-full h-full flex-col flex items-center justify-center bg">
    <loginForm />
  </main>
</template>


<style scoped>
.bg{
  background-image: url('/background.png');
  background-size: cover;
}

</style>