<template>
  <Navigation class="sticky top-0 left-0 w-full z-50 drop-shadow-md my-10 md:my-0 md:px-48 px-5" />
  <div class="flex flex-col h-full items-center md:px-48 px-5">
    <breadcrumbs :items="currentBreadcrumbs" :activeHome="activeHome" class="w-full mx-48" />
    <main class="items-center justify-center w-full mx-10 md:mx-52 my-2 rounded">
      <RouterView />
    </main>
    <Separator class="mt-40" />
    <Footer class="w-full" />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue';
import Navigation from '@/components/navigation/navigation.vue';
import Footer from '@/components/footer/footer.vue';
import breadcrumbs from '@/components/breadcrumbs/breadcrumbs.vue';
import { Separator } from "@/components/ui/separator"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

const menBreadcrumbs = [
  { name: 'Men', ref: '/men' },
]

const womenBreadcrumbs = [
  { name: 'Women', ref: '/women' },
]

const kidsBreadcrumbs = [
  { name: 'Kids', ref: '/kids' },
]


const route = useRoute();

const currentBreadcrumbs = computed(() => {
  if (route.path === '/men') {
    return menBreadcrumbs;
  }
  else if (route.path === '/women') {
    return womenBreadcrumbs;
  }
  else if (route.path === '/kids') {
    return kidsBreadcrumbs;
  }
  else {
    return [];
  }
});


const activeHome = computed(() => {
  if (isAdmin.value) {
    return '/admin-dashboard';
  }
  else {
    return '/dashboard';
  }
});

var isAdmin = ref(true);

onMounted(async () => {
  const auth = getAuth();
  const db = getFirestore();

  onAuthStateChanged(auth, async (user) => {
    // Check if the user is an admin
    if (user) {
      const q = query(collection(db, 'user'), where('id', '==', user.uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        isAdmin.value = doc.data().user_type === 'admin';
      });
    }
  });

});
</script>