<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { email, password, rememberMe, signInWithEmail } from "../controllers/login_controller";
import { useRouter } from "vue-router";


const router = useRouter();

const submitForm = async (e: Event) => {
  e.preventDefault();
  await signInWithEmail(email.value, password.value, router);
};
</script>

<template>
  <div
    class="w-80 sm:w-96 p-8 rounded-lg shadow md:p-8 bg-background/80">
    <form class="space-y-6" @submit.prevent="submitForm">
      <h5 class="text-2xl font-bold">Welcome to YourStyle</h5>
      <span class=" text-base font-norma">Find things that fit your style</span>
      <div>
        <label for="email" class="block mb-2 text-sm font-medi">Email</label>
        <input v-model="email" type="email" name="email" id="email"
          class=" border text-sm rounded-lg block w-full p-2.5 bg-background"
          placeholder="name@company.com" required />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium">
          Password</label>
        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
          class="text-sm rounded-lg block w-full p-2.5 bg-background"
          required />
      </div>
      <div class="flex items-start">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input v-model="rememberMe" id="remember" type="checkbox" value=""
              class="w-4 h-4 border focus:ring-3" />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium">Remember
            me</label>
        </div>
        <!-- <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a> -->
      </div>
      <Button type="submit"
        class="w-full ">Login</Button>
      <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div> -->
    </form>
  </div>
</template>