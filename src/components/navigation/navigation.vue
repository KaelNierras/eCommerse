<template>
  <div
    class=" h-42 gap-2 flex flex-col backdrop-blur-lg items-center md:h-16 md:justify-between justify-center relative md:flex-row ">

    <div v-if="isLoggedIn && !isAdmin" class="flex flex-row md:mb-2 items-center gap-4">
      <router-link to="/men">
        <Button variant="ghost" class="font-bold p-0">Men</Button>
      </router-link>

      <router-link to="/women">
        <Button variant="ghost" class="font-bold p-0">Women</Button>
      </router-link>

      <router-link to="/kids">
        <Button variant="ghost" class="font-bold p-0">Kids</Button>
      </router-link>
    </div>

    <div class="flex md:pt-0 pt-0 flex-col w-48 items-center justify-center md:flex-row gap-2">
      <router-link v-if="!isAdmin" to="/dashboard">
        <img src="/yourStyleLogo.jpg" class=" w-36 h-auto md:pt-0 hover:cursor-pointer" alt="YourStyle">
      </router-link>
      <router-link v-else to="/admin-dashboard">
        <img src="/yourStyleLogo.jpg" class=" w-36 h-auto md:pt-0 hover:cursor-pointer" alt="YourStyle">
      </router-link>
    </div>

    <!-- <div class="flex md:hidden relative w-56 items-center mt-2">
      <Input id="search" type="text" placeholder="Search..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search @click="search = false" class="size-6 text-muted-foreground hover:cursor-pointer" />
      </span>
    </div> -->

    <div class="flex flex-row items-center gap-4">
      <!-- <Button v-if="!search && !isAdmin" variant="ghost" class="hidden md:flex p-0">
        <Search class="size-6 text-muted-foreground hover:cursor-pointer" @click="search = true" />
      </Button> -->
      <!-- <div v-if="search && !isAdmin" class=" hidden md:flex relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search @click="search = false" class="size-6 text-muted-foreground hover:cursor-pointer" />
        </span>
      </div> -->
      <router-link to="/cart">
        <ShoppingCart class="text-muted-foreground hover:cursor-pointer" />
      </router-link>
      <Button v-if="!isLoggedIn" to="/" class="hover:cursor-pointer">
        LOGIN
      </Button>
      <Button variant="ghost" class="p-0" v-else>
        <LogOut class="text-muted-foreground hover:cursor-pointer" @click="signout" />
      </Button>
    </div>
  </div>


</template>

<script setup lang="ts">
import { ShoppingCart, LogOut } from 'lucide-vue-next';
//import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ref, onMounted } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import router from '@/lib/router';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

//var search = ref(false);

var isLoggedIn = ref(localStorage.getItem('loggedIn') === 'true');


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

var isAdmin = ref(true);

onMounted(async () => {
  const auth = getAuth();
  const db = getFirestore();

  onAuthStateChanged(auth, async (user) => {
    isLoggedIn.value = !!user;
    // Update the login status in localStorage
    localStorage.setItem('loggedIn', isLoggedIn.value ? 'true' : 'false');

    // Check if the user is an admin
    if (user) {
      const q = query(collection(db, 'user'), where('id', '==', user.uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        isAdmin.value = doc.data().user_type === 'admin';
      });
    }
  });

  // Check if the user is logged in when the component is mounted
  onAuthStateChanged(auth, user => {
    isLoggedIn.value = !!user;
    // Update the login status in localStorage
    localStorage.setItem('loggedIn', isLoggedIn.value ? 'true' : 'false');
  });
});
</script>