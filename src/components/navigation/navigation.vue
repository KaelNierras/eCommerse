<template>
  <div class="p-4 flex flex-row items-center justify-between">
    <div class="relative w-full max-w-sm items-center">
      <Input id="search" type="text" placeholder="Search..." class="pl-10" />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
      </span>
    </div>
    <h5>Ecommerse</h5>
    <div class="flex flex-row">
      <Avatar>
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div class="flex flex-col">
        <h6>Chase</h6>
        <p>Admin</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@radix-icons/vue";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>
