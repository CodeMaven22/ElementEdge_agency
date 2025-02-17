<template>
    <header_component />
    <section class="mt-16 sm:mt-20 min-h-[60vh] grid grid-cols-1 sm:grid-cols-2 shadow-md">
        <!-- First Column -->
        <div class="bg-gray-900 flex flex-col justify-start items-center p-10 space-y-4 order-2 sm:order-1">
            <div class="w-full">
                <p class="text-center text-gray-400 mb-8 ">
                    Have questions or need assistance? Feel free to reach out, and we’ll get back to you promptly.
                </p>
                <form action="#" method="POST" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-200">Full Name</label>
                        <input type="text" id="name" name="name"
                            class="mt-2 block w-full  border-gray-700 shadow-sm p-2 bg-transparent border-b focus:border-blue-800 focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-200">Email Address</label>
                        <input type="email" id="email" name="email"
                            class="mt-2 block w-full  border-gray-700 shadow-sm p-2 bg-transparent border-b focus:border-blue-800 focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter your email address" required />
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-200">Message</label>
                        <textarea id="message" name="message" rows="4"
                            class="mt-2 block w-full  border-gray-700 shadow-sm p-2 bg-transparent border-b focus:border-blue-800 focus:ring-blue-500 sm:text-sm"
                            placeholder="Write your message here..." required></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit"
                            class="px-6 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-500 focus:ring-opacity-50">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
         <!-- Second Column -->
         <div class="relative bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center sm:order-2 order-1"
            style="background-image: url(/images/loo.jpg);">
            <div class="bg-opacity-70 bg-black absolute inset-0"></div>
            <div class="p-5 sm:p-2 text-center text-white z-10">
                <p class="text-3xl sm:text-4xl md:text-6xl font-bold">Contact Us</p>
                <p class="">"Let’s Connect: Your Next Digital Solution Starts Here"</p>
            </div>
          
        </div>
    </section>
    <footer_component />
</template>
<script>
import header_component from '../components/header_component.vue';
import footer_component from '../components/footer_component.vue';

export default {
    name: 'contact',
    components: { header_component, footer_component }
}
</script>