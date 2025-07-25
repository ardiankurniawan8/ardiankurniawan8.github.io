<script setup lang="ts">
import { useMainStore } from '@/stores/store';
import { gsap } from 'gsap';

const store = useMainStore();

function movePage(action: string) {
  animate(action)
}

function animate(action: string) {
  gsap.to(".right", {
      opacity: 0,   // Menghilang
      duration: 1,
      ease: "power2.in",
      onComplete: () => {
        // Setelah selesai, jalankan animasi Fade In (invisible → visible)
        gsap.fromTo(".right",
          { opacity: 0 }, // Start: 50px di bawah & transparan
          { opacity: 1, duration: 1, ease: "power2.out" }
        );
        store.movePage(action)
      }
    });
}
</script>

<template>
  <div class="layout">
    <div class="card border-0 desktop p-5">
      <div class="d-flex flex-row content rounded-5 shadow-lg">
        <div class="left rounded-end-0">
          <slot name="left"></slot>
        </div>
        <div class="right border-start rounded-5">
          <slot name="right"></slot>
        </div>
      </div>
    </div>

    <div class="layout-mobile mobile">
      <div class="d-flex flex-row content">
        <div class="right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>

    <div class="navigation">
      <div class="m-3">
        <button class="btn btn-tertiary" @click="movePage('next')" type="button">
          <IMdiKeyboardArrowRight></IMdiKeyboardArrowRight>
        </button>
        <button class="btn btn-tertiary" @click="movePage('previous')" type="button">
          <IMdiKeyboardArrowLeft></IMdiKeyboardArrowLeft>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 919px) {
  .desktop {
    display: none;
    max-width: 100vw;
  }
  .navigation {
    right: 3vw;
    bottom: 3vh;
  }
}

@media (min-width: 920px) {
  .mobile {
    display: none;
  }
}
</style>
