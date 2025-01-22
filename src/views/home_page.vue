<template>
  <Header />
  <main class="relative mt-20 text-white bg-cover bg-center bg-no-repeat "
    style="background-image: url('/images/loo.jpg');">
    <!-- Overlay for opacity effect -->
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="relative mx-auto px-4 sm:px-6 md:px-10 max-w-4xl flex items-center justify-center">
      <div class="text-center pt-16 max-w-md  sm:max-w-full">
        <p class="text-xl sm:text-5xl  barlow-extrabold">
          Where your ideas meet innovative website design and development.
        </p>

        <!-- Feature List Section -->
        <div class="hidden mt-5 space-x-4 mb-10 sm:flex justify-center flex-wrap">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>User Interface Design</p>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Website Development</p>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Hosting Services</p>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Custom Solutions</p>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Maintenance & Support</p>
          </div>
        </div>

        <router-link class="bg-gradient-to-r from-yellow-700 to-yellow-500 py-2 rounded-md px-4">Get In
          Touch</router-link>
      </div>
    </div>
  </main>
  <section class="p-10 bg-gray-100">
    <div class="grid grid-cols-3 gap-4 mx-auto max-w-4xl">
      <div class="p-2 flex flex-col justify-center items-center atkinson-bold">
        <div class="w-40 space-y-4">
          <p class="text-md sm:text-lg lg:text-2xl text-gray-700">What they're Saying</p>
          <p class="text-xs text-gray-700 font-thin">I will recommend these guys to work</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>

        </div>

      </div>
      <div class="p-2 flex justify-center items-center atkinson-bold">
        <p class="text-md sm:text-lg lg:text-2xl ">What are they Saying</p>
      </div>
      <div class="p-2 flex justify-center items-center atkinson-bold">
        <p class="text-md sm:text-lg lg:text-2xl ">What are they Saying</p>
      </div>

    </div>
  </section>
</template>

<script>
import Header from "../components/header_component.vue";

export default {
  name: "home_page",
  components: { Header },
};
</script>