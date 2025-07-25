<script setup lang="ts">
import { nextTick, onMounted, ref, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const titleList = [
  'Backend Developer',
  'Frontend Developer',
  // Add more titles if needed
]

const showedTitle = ref(titleList[0]) // Initialize with first title

onMounted(() => {
  setInterval(() => {
    // // Animate the title change
    // Cycle through titles every 2 seconds
    gsap.to(".title", {
      x: 20,       // Bergerak ke atas 50px
      opacity: 0,   // Menghilang
      duration: 1,
      ease: "power2.in",
      delay: 1,
      onComplete: () => {
        // Setelah selesai, jalankan animasi Fade In (invisible → visible)
        gsap.fromTo(".title",
          { x: -50, opacity: 0 }, // Start: 50px di bawah & transparan
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        const currentIndex = titleList.indexOf(showedTitle.value);
        const nextIndex = (currentIndex + 1) % titleList.length;
        showedTitle.value = titleList[nextIndex];
      }
    });

  }, 4000)
})

function onNavigate(action: string) {
  let url = '';
  switch (action) {
    case "linkedin":
      url = "https://www.linkedin.com/in/ardian-kurniawan-18b9ba1b5/";
      break;
    case "github":
      url = "https://github.com/ardiankurniawan8";
      break;
    default:
      break;
  }
  window.open(url, '_blank');
}
</script>

<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="text-center">
        <img class="rounded-circle img-thumbnail b-img" style="height: 20vh;" src="/src/assets/main_photo.webp"
          alt="Image 2" />
        <h2 class="mt-3">Ardian <br> Kurniawan</h2>
        <h5 class="title">
          {{ showedTitle }}
        </h5>
      </div>
    </div>
    <div class="footer">
      <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-tertiary" @click="onNavigate('github')" type="button">
          <IMdiGithub color="white"></IMdiGithub>
        </button>
        <button class="btn btn-tertiary" @click="onNavigate('linkedin')" type="button">
          <IMdiLinkedin color="white"></IMdiLinkedin>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  height: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.footer {
  position: absolute;
  bottom: 2rem;
  width: 100%;
}

h5 {
  font-weight: 250;
}
</style>