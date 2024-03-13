<template>
  <div class="p-4 h-14 flex flex-row items-center justify-between relative">

    <div class="flex flex-row gap-5">
      <Button >Men</Button>
      <Button >Women</Button>
    </div>

    <img src="/yourStyleLogo.jpg" class=" w-36 h-auto absolute left-1/2 transform -translate-x-1/2" alt="YourStyle">

    <div class="flex flex-row items-center gap-5">
      <RouterLink to="/" class="hover:cursor-pointer">
        LOGIN
      </RouterLink>
      <Search v-if="!search" class="size-6 text-muted-foreground hover:cursor-pointer"
        @click="search = true" />
      <div v-if="search" class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search @click="search = false" class="size-6 text-muted-foreground hover:cursor-pointer" />
        </span>
      </div>
      <ShoppingCart class="size-6 text-muted-foreground hover:cursor-pointer" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, Search } from 'lucide-vue-next';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ref } from "vue";

var search = ref(false);
</script>