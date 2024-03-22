<template>
  <div class="flex flex-col h-full items-center md:px-48 px-5">
    <Navigation class="sticky top-0 left-0 w-full z-50 drop-shadow-md px-4 my-10 md:my-0" />
    <breadcrumbs :items="currentBreadcrumbs" class="w-full mx-48"/>
    <main class="items-center justify-center w-full mx-10 md:mx-52 my-2 rounded">
      <RouterView />
    </main>
    <Footer class="mt-5 w-full"/>
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