<template>
    <header class="z-40 w-full fixed  top-0">
        <div class="hidden sm:flex items-center justify-center p-2 bg-white">
            <p class="text-gray-800">ElementEdge — Your Gateway to Stunning Websites.</p>
        </div>
     
        <div class="p-5 text-sm sm:text-md bg-gray-900">
            <div class="flex justify-between items-center text-white">
                <h2 class="text-md space-x-1 ">
                    <span class="bg-white rounded-sm p-1 text-gray-900">T</span>
                    <span class="bg-white rounded-sm p-1 text-gray-900">A</span>
                    <span class="bg-white rounded-sm p-1 text-gray-900">W</span>
                    <span class="bg-white rounded-sm p-1 text-gray-900">O</span>
                    <span class="bg-white rounded-sm p-1 text-gray-900">N</span>
                    <span class="bg-white rounded-sm p-1 text-gray-900">G</span>
                    <span class="bg-white rounded-sm p-1 text-gray-900">A</span>
                </h2>
                <div class="hidden sm:flex space-x-3">
                    <router-link to="">Home</router-link>
                    <router-link to="">Projects</router-link>
                    <router-link to="">My Cv</router-link>
                    <router-link to="">Blog</router-link>
                    <router-link to="">Contact</router-link>
                </div>
              
                <!-- Mobile Menu Button -->
                <button  @click="toggleMobileMenu" class="sm:hidden text-white hover:text-gray-300 transition delay-300 ease-linear focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
            :class="[
                'fixed top-0 left-0 flex flex-col h-screen bg-gray-900 w-[50vw] transform transition-transform duration-300 ease-in-out',
                showMobileMenu ? 'translate-x-0' : '-translate-x-full'
            ]"
            >            
            <router-link class="p-3 text-white border-b border-gray-800" to="">Home</router-link>
            <router-link class="p-3 text-white border-b border-gray-800" to="">Projects</router-link>
            <router-link class="p-3 text-white border-b border-gray-800" to="">My Cv</router-link>
            <router-link class="p-3 text-white border-b border-gray-800" to="">Blog</router-link>
            <router-link class="p-3 text-white border-b border-gray-800" to="">Contact</router-link>
            <p class="absolute bottom-2 text-center text-gray-500 w-full text-sm">ElementEdge Agency</p>    
        </div>    
        <button class="fixed bottom-2 text-white right-2 z-50 bg-teal-600 rounded-lg shadow-2xl py-2 px-4">My Cv</button>
    </header>
    <!-- 
Key Changes:

Dynamic Classes with Transition:

    Used :class to conditionally apply Tailwind classes.

    Added transform and transition-transform for smooth animations.

    translate-x-0 makes the menu fully visible.

    -translate-x-full hides the menu off the screen.

Animation Duration:

    Added duration-300 and ease-in-out for a 300ms smooth slide animation.
    Fixed Position:

    Made the mobile menu fixed so it overlays the content and stays visible as a full-screen menu.
    Behavior:
    When the button is clicked, the mobile menu slides in from the left.
    Clicking the button again slides it back out.
    This approach ensures a smooth and visually appealing animation for the mobile navigation menu.
    
     -->
</template>

<script>
export default {
    name: 'header_component',
    data() {
      return{
        showMobileMenu: false,
      };
    },
    methods:{
        toggleMobileMenu(){
            this.showMobileMenu= !this.showMobileMenu
        } 

    }
 
};
</script>

