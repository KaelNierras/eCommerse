<template>
  <div class="p-4 h-42 gap-2 flex flex-col backdrop-blur-lg items-center md:h-16 md:justify-between justify-center relative md:flex-row mx-40">
  
    <div class="flex md:pt-0 pt-0 flex-col md:flex-row gap-2">
      <img src="/yourStyleLogo.jpg" class=" w-36 h-auto pt-4 md:pt-0 hover:cursor-pointer" alt="YourStyle">
    </div>

    <div class="flex md:hidden relative w-full max-w-sm items-center mt-10">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search @click="search = false" class="size-6 text-muted-foreground hover:cursor-pointer" />
        </span>
    </div>

    <div class="flex flex-row items-center">
      <Button variant="ghost" class="hidden md:flex ">
        <Search v-if="!search" class="size-6 text-muted-foreground hover:cursor-pointer" @click="search = true" />
      </Button>
      <div v-if="search" class=" hidden md:flex relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search @click="search = false" class="size-6 text-muted-foreground hover:cursor-pointer" />
        </span>
      </div>
      <Button variant="ghost" v-if="isLoggedIn">
      <ShoppingCart class="size-6 text-muted-foreground hover:cursor-pointer" />
      </Button>
      <div class="flex items-center">
        <Button variant="ghost" size="sm" class="mr-0" @click="toggleDarkMode">
          <Sun class="text-muted-foreground" v-if="darkMode" />
          <Moon class="text-muted-foreground" v-else />
        </Button>
      </div>
      <Button v-if="!isLoggedIn" to="/" class="hover:cursor-pointer">
        LOGIN
      </Button>
      <Button variant="ghost" v-else >
        <LogOut class="text-muted-foreground hover:cursor-pointer" @click="signout" />
      </Button>
    </div>
  </div>
  <div v-if="isLoggedIn" class="flex p-3 flex-row mx-5 md:mx-52 mb-2 items-center">
      <span> Categories:</span>
      <Button variant="ghost">Men</Button>
      <Button variant="ghost">Women</Button>
  </div>
  
</template>

<script setup lang="ts">
import { ShoppingCart, Search, Sun, Moon, LogOut } from 'lucide-vue-next';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ref, onMounted } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import router from '@/lib/router';

var search = ref(false);

const darkMode = ref(getDarkMode());
var isLoggedIn = ref(localStorage.getItem('loggedIn') === 'true');
console.log(isLoggedIn.value);

function getDarkMode() {
  // Try to get the dark mode setting from localStorage
  const storedDarkMode = localStorage.getItem('darkMode');

  // If the setting exists, return it (converted to a boolean)
  if (storedDarkMode !== null) {
    return storedDarkMode === 'true';
  }

  // Otherwise, determine the setting based on the body class
  const body = document.querySelector('body');
  const isDark = body?.classList.contains('dark');
  return isDark;
}

function toggleDarkMode() {
  darkMode.value = !darkMode.value;

  // Store the new setting in localStorage
  localStorage.setItem('darkMode', darkMode.value.toString());

  const body = document.querySelector('body');
  body?.classList.toggle('dark', darkMode.value);
}

function signout() {
  const auth = getAuth();
  signOut(auth).then(() => {
    window.alert('You have successfully signed out');
    router.push('/');
    // Sign-out successful.
    // Update the login status in localStorage
    localStorage.setItem('loggedIn', 'false');
    isLoggedIn.value = false;
  }).catch((error) => {
    window.alert('Error: ' + error.message);
  });
}


onMounted(() => {
  const body = document.querySelector('body');
  body?.classList.toggle('dark', darkMode.value);
  
  // Check if the user is logged in when the component is mounted
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    isLoggedIn.value = !!user;
    // Update the login status in localStorage
    localStorage.setItem('loggedIn', isLoggedIn.value ? 'true' : 'false');
  });
});
</script>