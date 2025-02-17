<template>
    <div class="carousel-container">
        <carousel :per-page="1" :navigation-enabled="true" :autoplay="true" :autoplay-timeout="3000">
            <slide v-for="(image, index) in images" :key="index">
                <img :src="images" alt="Image Carousel" class="carousel-image" />
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    components: { Carousel, Slide },
    data() {
        return {
            images: [
                "/images/bg.jpg",
                "/images/loo.jpg",
                "/images/images.jpg",
            ],
        };
    },
};
</script>

<style>
.carousel-container {
    width: 100%;
    max-width: 600px;
    margin: auto;
}

.carousel-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>