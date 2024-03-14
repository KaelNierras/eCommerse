<template>
  <div class="flex flex-col h-screen">
    <Navigation class="sticky top-0 left-0 w-full z-50 drop-shadow-md" />
    <breadcrumbs :items="currentBreadcrumbs"/>
    <main class="items-center justify-center bg-muted mx-5 md:mx-52 my-2 rounded">
      <RouterView />
    </main>
    <Footer class="mt-5"/>
  </div>
</template>

<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import { computed } from 'vue';
import Navigation from '@/components/navigation/navigation.vue';
import Footer from '@/components/footer/footer.vue';
import breadcrumbs from '@/components/breadcrumbs/breadcrumbs.vue';


const menBreadcrumbs = [
  {name: 'Men', ref: '/men'},
]

const womenBreadcrumbs = [
  {name: 'Women', ref: '/women'},
]

const route = useRoute();

const currentBreadcrumbs = computed(() => {
  if (route.path === '/men') {
    return menBreadcrumbs;
  } 
  else if (route.path === '/women') {
    return womenBreadcrumbs;
  }
  else {
    return [];
  }
});
</script>