<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { email, password, rememberMe, signInWithEmail } from "../controllers/login_controller";
import { useRouter } from "vue-router";
import { ref } from "vue";
import loading_animation from "@/components/common/animation/loading_animation.vue";

const router = useRouter();

var isLoggingIn = ref(false);

const submitForm = async (e: Event) => {
  isLoggingIn.value = true;
  e.preventDefault();
  try {
    await signInWithEmail(email.value, password.value, router);
  } catch (error) {
    console.error(error);
  } finally {
    isLoggingIn.value = false;
  }
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
      </div>
      <Button v-if="!isLoggingIn" type="submit"
        class="w-full ">Login</Button>
      <Button v-else type="submit" class="w-full"
        ><loading_animation></loading_animation></Button>
    </form>
  </div>
</template>