<script setup lang="ts">
import { useMainStore } from '@/stores/store';
import { gsap } from 'gsap';
import { ref } from 'vue';

const store = useMainStore();
const showProfile = ref(false);

const movePage = (action: string) => {
  if (showProfile.value) {
    showProfile.value = false;
    return;
  }
  gsap.to(".right", {
    opacity: 0,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      gsap.fromTo(".right",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
      store.movePage(action);
    }
  });
};

const showLeft = () => {
  showProfile.value = !showProfile.value;
};
</script>

<template>
  <div class="layout">
    <!-- Desktop View -->
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

    <!-- Mobile View -->
    <div class="layout-mobile mobile">
      <div class="d-flex flex-row content">
        <div v-show="showProfile">
          <slot name="left"></slot>
        </div>
        <div v-if="!showProfile" class="right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="navigation">
      <div class="m-3 bg-white">
        <button class="btn" @click="movePage('next')" type="button">
          <IMdiKeyboardArrowRight />
        </button>
        <button class="btn" @click="movePage('previous')" type="button">
          <IMdiKeyboardArrowLeft />
        </button>
      </div>
    </div>

    <!-- Profile Toggle (Mobile) -->
    <div class="navigation-top">
      <div class="m-3">
        <button class="btn" @click="showLeft" type="button">
          <IMdiAccountCircle v-if="!showProfile" style="height: 2rem;" color="white" />
          <IMdiCloseThick v-else style="height: 2rem;" color="white" />
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
  .navigation-top {
    display: none;
  }
}

.left {
  will-change: transform;
}
</style>