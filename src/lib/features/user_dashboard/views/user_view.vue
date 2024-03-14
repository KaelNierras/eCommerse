<template>
  <main class="w-full h-full flex-col flex items-start justify-start p-12">
    <span class="text-3xl font-bold mb-10">New Arrivals</span>

    <div class="flex overflow-x-auto whitespace-nowrap w-full">
      <div v-for="i in 10" :key="i" class="border rounded-lg shadow w-64 min-w-64 h-96 m-2">
        <a href="#">
          <img class="rounded-t-lg h-72 w-auto object-cover" src="/background.png" alt="" />
        </a>
        <div class="p-5">
          <div class="flex justify-between font-bold">
            <p class="mb-3 font-bold">Jacket</p>
            <p class="mb-3 font-bold">300</p>
          </div>
          <p class="mb-3 font-normal">6 colors</p>
        </div>
      </div>
    </div>
  </main>
</template>