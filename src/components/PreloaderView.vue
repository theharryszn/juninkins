<script setup lang="ts">
import { onMounted, ref } from 'vue'
import imagesLoaded from 'imagesloaded'
import { gsap } from 'gsap'

let progress = ref(0)

onMounted(() => {
  const images = document.querySelectorAll('img')

  const imgLoad = imagesLoaded(images)

  const entranceAnimation = () => {
    const tl = gsap.timeline()
    tl.to(
      '.preloader',
      {
        yPercent: -100,
        duration: 1.25,
        ease: 'power4.inOut',
        delay: 1
      },
      0
    )
  }

  imgLoad.on('always', function () {
    entranceAnimation()
  })

  let loaded = 0

  imgLoad.on('progress', function (instance, image) {
    var result = image?.isLoaded ? 'loaded' : 'broken'
    console.log('image is ' + result + ' for ' + image?.img.src)
    loaded++
    progress.value = (loaded / images.length) * 100
  })
})
</script>
<template>
  <div class="preloader">
    <div class="animate-pulse text-6xl font-serif italic">{{ progress }}%</div>
  </div>
</template>
<style scoped lang="scss">
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  @apply flex items-center justify-center bg-black text-white;
  overflow: hidden;
  z-index: 10;
}
</style>
