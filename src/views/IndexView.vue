<script setup lang="ts">
import PreloaderView from '../components/PreloaderView.vue'
</script>
<template>
  <PreloaderView />
  <pageContainer>
    <nav class="flex items-center justify-center py-10 gap-10 px-20 fixed w-full top-0 left-0">
      <RouterLink class="uppercase" to="/about">About</RouterLink>
      <RouterLink class="uppercase" to="/Discography">Discography</RouterLink>
      <RouterLink class="uppercase" to="/contact">Contact</RouterLink>
    </nav>
    <header class="flex flex-col justify-center items-center py-40 gap-16 px-20 h-screen">
      <div class="flex gap-10 justify-start">
        <div class="max-w-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus esse debitis illo
          delectus enim sed expedita quasi dolorem dignissimos, veritatis molestias, ipsum excepturi
          odit saepe aliquid autem quidem architecto pariatur?
        </div>
        <div class="text-7xl">
          <span class="text-2xl">01.</span> REC<span class="font-serif">O</span>RDING ARTISTE
        </div>
      </div>
      <div class="flex gap-10 justify-start items-center">
        <div class="text-9xl">
          <span class="text-2xl">02.</span> S<span class="font-serif">O</span>NGWRITER
        </div>
        <div class="max-w-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus esse debitis illo
          delectus enim sed expedita quasi dolorem dignissimos, veritatis molestias, ipsum excepturi
          odit saepe aliquid autem quidem architecto pariatur?
        </div>
      </div>
      <div class="flex gap-10 justify-center items-center">
        <div class="max-w-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus esse debitis illo
          delectus enim sed expedita quasi dolorem dignissimos, veritatis molestias, ipsum excepturi
          odit saepe aliquid autem quidem architecto pariatur?
        </div>
        <div class="text-7xl">
          <span class="text-2xl">03.</span> BEATMAKER + MUSIC PR<span class="font-serif">O</span
          >DUCER
        </div>
      </div>
    </header>
    <div class="grid grid-cols-2 gap-x-20 p-32 min-h-screen justify-center items-center">
      <div>
        <img src="../assets/images/juninkins.webp" />
      </div>
      <div class="flex flex-col gap-10">
        <h3 class="text-4xl">- is a recording artiste, Songwriter and a Beatmaker.</h3>
        <div>
          Juninkins is a super talented Afro pop artiste, he is an embodiment of an untapped talent
          with a distinct and a catchy voice. He is a recording artiste, Songwriter and a Beatmaker.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam, recusandae modi
          aliquam voluptatibus ipsum id accusamus dicta quos libero minus, repellendus laborum cum
          magnam esse eos labore dolore rem? Ab labore, quisquam autem commodi rerum consequuntur
          vero corrupti quia fugiat! Exercitationem voluptas asperiores odio ex, aliquid nostrum.
          Quia cumque tempore ipsam dignissimos tempora. Provident debitis deleniti similique ullam
          nam!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam, recusandae modi
          aliquam voluptatibus ipsum id accusamus dicta quos libero minus, repellendus laborum cum
          magnam esse eos labore dolore rem? Ab labore, quisquam autem commodi rerum consequuntur
          vero corrupti quia fugiat! Exercitationem voluptas asperiores odio ex, aliquid nostrum.
          Quia cumque tempore ipsam dignissimos tempora. Provident debitis deleniti similique ullam
          nam!
        </div>
      </div>
      <div class="py-2 col-span-full">
        Juninkins <span class="text-gray-500">- September 10, 2022</span>
      </div>
    </div>
    <div class="p-32 justify-center items-center">
      <blockquote class="text-4xl text-left flex gap-5 flex-col border-l-4 border-black pl-10 py-2">
        <div>
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptates! Deleniti
          minus, enim minima quod veritatis hic voluptatum nisi, ullam a sed quo veniam laboriosam
          sint quisquam maiores nobis explicabo! ”
        </div>
      </blockquote>
    </div>
  </pageContainer>
</template>
<style scoped lang="scss"></style>
