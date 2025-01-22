<template>
    <header_component />
    <main class="relative mt-16 text-white bg-cover bg-center bg-no-repeat "
        style="background-image: url('/images/loo.jpg');">
        <!-- Overlay for opacity effect -->
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <!-- Welcome Message Section -->
        <div class="relative mx-auto pt-8 sm:pt-16 pb-8 max-w-4xl flex items-center justify-center h-full">
            <div class="text-center">
                <p class="text-3xl sm:text-4xl md:text-6xl font-bold barlow-extrabold">
                    Welcome to Tawonga Chauluntha’s Web Development Hub
                </p>
                <p class="mt-6 p-2 text-md sm:text-xl md:text-2xl  font-light">
                    Hi, I’m Tawonga Chauluntha, a full-stack web developer creating seamless user experiences and
                    impactful digital solutions.
                </p>
                <router-link
                    class="inline-block  bg-gradient-to-r from-teal-700 to-teal-500 py-2 px-3 rounded-lg hover:scale-105 transition-transform duration-300"
                    to="/contact">
                    Get In Touch
                </router-link>
            </div>
        </div>
    </main>
    <!-- OUR SERVICES SECTION -->
    <section class="p-5 sm:p-10 bg-gray-100 grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div class="text-center sm:text-left">
            <p class="text-lg sm:text-2xl barlow-extrabold text-gray-700 ">Our Services</p>
            <div class="flex sm:flex-col sm:items-start sm:justify-start items-center justify-center">
                <p class="text-sm sm:text-md mr-1 text-gray-800">Discover Our Expertise. </p>
                <p class="text-sm sm:text-md text-gray-800">Tailored solutions for Your Needs</p>
            </div>

        </div>
        <div class="bg-white p-5 rounded-sm relative shadow-md flex gap-2   ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-12 text-teal-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>

            <div class="flex flex-col space-y-1 mb-3">
                <p class="font-bold text-teal-900">User Interface Design</p>
                <p class="text-sm sm:text-md text-gray-700 font-semibold">Crafting Seamless Experiences.</p>
                <p class="text-sm sm:text-md text-gray-700">Beautiful Designs That Connect and Engage</p>
            </div>
            <router-link class="text-sm text-teal-700 absolute bottom-2 right-4 ">Explore </router-link>
        </div>
        <div class="bg-white p-5 rounded-sm relative shadow-md flex gap-2  ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-12 text-teal-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>

            <div class="flex flex-col space-y-1 mb-3">
                <p class="font-bold text-teal-900">Website Development</p>
                <p class="text-sm sm:text-md text-gray-700 font-semibold">Building Future-Ready Websites.</p>
                <p class="text-sm sm:text-md text-gray-700">Where Innovation Meets Performance.</p>
            </div>

            <router-link class="text-sm text-teal-700 absolute bottom-2 right-4 ">Explore</router-link>
        </div>
        <div class="bg-white p-5 rounded-sm relative shadow-md flex gap-2  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-12 text-teal-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>

            <div class="flex flex-col space-y-1 mb-3">
                <p class="font-bold text-teal-900">Maintenance & Support</p>
                <p class="text-sm sm:text-md text-gray-700 font-semibold">Reliable Care for Your Digital Success.</p>
                <p class="text-sm sm:text-md text-gray-700">Keeping Your Website Running Smoothly</p>
            </div>

            <router-link class="text-sm text-teal-700 absolute bottom-2 right-4 ">Explore</router-link>
        </div>
        <div class="bg-white p-5 rounded-sm relative shadow-md flex gap-2  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-12 text-teal-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
            </svg>

            <div class="flex flex-col space-y-1 mb-3">
                <p class="font-bold text-teal-900">Hosting Services</p>
                <p class="text-sm sm:text-md text-gray-700 font-semibold">Expert Hosting Guidance.</p>
                <p class="text-sm sm:text-md text-gray-700">Helping You Choose the Perfect Home for Your Website</p>

            </div>
            <router-link class="text-sm text-teal-700 absolute bottom-2 right-4 ">Explore</router-link>
        </div>
    </section>

    <!-- ABOUT US SECTION -->
    <section class="min-h-[60vh] grid grid-cols-1 sm:grid-cols-2 shadow-md">
        <div class="relative bg-cover bg-no-repeat bg-center flex justify-center items-center"
            style="background-image: url(/images/loo.jpg);">
            <div class="bg-opacity-70 bg-black absolute inset-0"></div>
            <p class="text-3xl sm:text-4xl md:text-6xl font-bold text-white z-10 p-2">About Me </p>
        </div>
        <div class="bg-gray-900 flex justify-center items-start p-10 space-y-4 text-gray-400  flex-col">
            <p class="italic font-semibold text-xl">"Turning Ideas into Digital Realities"</p>
            <p class="">I’m Tawonga Chauluntha, a full-stack web developer with a passion for creating innovative and
                user-friendly digital experiences. Alongside my expertise in front-end and back-end development, I’m
                proud to run my own web development company, ElementEdge Agency, where we deliver tailored solutions to
                meet diverse business needs.</p>
            <p>With a commitment to quality, creativity, and collaboration, I strive to help businesses achieve their
                goals through cutting-edge web technologies.</p>
            <button class="border py-2 px-4 hover:bg-teal-500 hover:text-white transition ease-linear delay-300">Read
                More </button>
        </div>
    </section>
    <!-- Contact US section -->
    <section class="min-h-[60vh] grid grid-cols-1 sm:grid-cols-2 shadow-md">

        <!-- First Column -->
        <div
            class="bg-gray-900 flex flex-col justify-start items-center p-10 space-y-4 order-2 sm:order-1">
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
            <div class="p-2 text-center text-white z-10">
                <p class="text-3xl sm:text-4xl md:text-6xl font-bold">Contact Us</p>
                <p class="">"Let’s Connect: Your Next Digital Solution Starts Here"</p>
            </div>
          
        </div>
    </section>
   
    <footer_component/>
</template>
<script>
import header_component from '../components/header_component.vue';
import footer_component from '../components/footer_component.vue';

export default {
    name: 'index',
    components: { header_component , footer_component}
}
</script>


<style>
.rtl {
    direction: rtl;
    /* Right-to-left for reversing grid order */
}

.rtl>* {
    direction: ltr;
    /* Reset text direction for content */
}

.ltr {
    direction: ltr;
}

.ltr>* {
    direction: ltr;
}
</style>