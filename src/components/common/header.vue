<template>
    <!-- header -->
    <div class="w-full flex flex-col items-center justify-center gap-5 mt-40 mb-20">
        <h1 class="text-5xl font-bold">{{ header }}</h1>
        <p class="text-md text-center opacity-40 font-semibold">{{ description }} <br> {{ description2 }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    header: String,
    description: String,
    description2: String
})
</script>