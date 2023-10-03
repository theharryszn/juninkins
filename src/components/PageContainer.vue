<script lang="ts" setup></script>
<template>
  <div class="page full-page">
    <div class="container" data-scroll-container ref="container">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

export default {
  name: 'pageContainer',
  methods: {
    setScroll() {
      const scroller = new this.$locomotiveScroll({
        el: this.$refs.container,
        smooth: true,
        reloadOnContextChange: true
      })
      gsap.registerPlugin(ScrollTrigger)
      scroller.on('scroll', () => {
        ScrollTrigger.update()
      })
      ScrollTrigger.scrollerProxy('.container', {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })

      gsap.utils.toArray('.title').forEach((section) => {
        const el = section as HTMLElement

        const [x, xEnd] = ['100%', el!.scrollWidth * -1]

        gsap.fromTo(
          el,
          { x },
          {
            scrollTrigger: {
              trigger: el,
              scroller: '.container',
              scrub: true
              // markers: true
            },
            x: xEnd
          }
        )
      })

      gsap.utils.toArray('.section').forEach((section, index) => {
        const el = section as HTMLElement
        const w = el.querySelector('.wrapper')
        const [x, xEnd] =
          index % 2 ? ['100%', (w!.scrollWidth - el.offsetWidth) * -1] : [w!.scrollWidth * -1, 0]
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: el,
              scrub: 0.5,
              scroller: '.container'
            }
          }
        )
      })

      gsap.utils.toArray('.text-animate').forEach((v) => {
        const el = v as Element
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1.5,
            scrollTrigger: {
              trigger: el,
              scroller: '.container'
            }
          }
        )
      })

      gsap.utils.toArray('.scale-up').forEach((v) => {
        const el = v as Element
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            scroller: '.container',
            scrub: 0.5,
            start: 'top bottom',
            end: 'bottom center'
          },
          scale: 1.17
        })
      })

      ScrollTrigger.addEventListener('refresh', () => scroller.update())
      ScrollTrigger.refresh()
    }
  },
  mounted() {
    this.setScroll()
  }
}
</script>
<style>
.container,
.container > * {
  width: 100%;
  min-width: 100%;
}
</style>
