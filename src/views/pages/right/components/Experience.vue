<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const experiences = ref([
  {
    id: 1,
    role: 'IT Specialist (Full Stack Developer)',
    company: 'PT Bank Central Asia Tbk (BCA)',
    period: 'Jun 2023 - Present · 3 yrs 4 mos',
    description: [
      'Developed and maintained 5+ enterprise web applications supporting internal logistic operations, including purchase order, payment, and journal accounting systems',
      'Contributed across the full software development lifecycle, from requirements gathering and system design to deployment and production support',
      'Built and maintained microservices-based architectures using Java Spring Boot (backend), Vue.js (frontend), and PostgreSQL databases',
      'Designed and developed a reusable UI component library to standardize frontend development across multiple applications',
      'Implemented best-practice code and system optimizations to improve execution performance while reducing resource consumption'
    ]
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'PT Thunderlabs Indonesia',
    period: 'Nov 2018 - May 2023 · 4 yrs 7 mos',
    description: [
      'Designed and implemented 7+ web and mobile applications across various industries including retail, hospitality, and real estate',
      'Contributing development of comprehensive management systems (POS, inventory, accounting) using modern JavaScript frameworks',
      'Transitioned from frontend-focused role (Vue.js/Nuxt.js) to full-stack responsibilities including API development',
      'Implemented both REST and GraphQL APIs to support web and mobile applications'
    ]
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'DNIZ Techno',
    period: 'Nov 2018 - Nov 2020 · 2 yrs 1 mos',
    description: [
      'Developed a Comprehensive POS and Warehouse Management System including Web Application, Mobile, and API'
    ]
  },
  {
    id: 4,
    role: 'Full Stack Developer',
    company: 'PT Thunderlabs Indonesia',
    period: 'Jun 2018 - Sep 2018 · 4 mos',
    description: [
      'Develop a reservation web app for a reflexology business'
    ]
  }
]);

onMounted(() => {
  const tl = gsap.timeline();

  tl.fromTo('.page-title',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
  );

  // Ubah target animasi menjadi experience-item agar arrow juga ikut ter-animasi
  tl.fromTo('.experience-item',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.1,
        from: "start"
      },
      ease: 'power2.out'
    },
    "-=0.2"
  );
});
</script>

<template>
  <div class="container-fluid p-4 p-md-5">
    <h2 class="page-title fw-bold mb-4" style="opacity: 0;">Experience</h2>

    <div v-for="(exp, index) in experiences" :key="exp.id" class="row">
      <!-- Looping dipindah ke col agar layout grid Bootstrap lebih rapi -->
      <div class="col-12 experience-item" style="opacity: 0;">
        <div
          :class="index === 0 ? 'bg-info bg-opacity-10' : 'bg-white'"
         class="card shadow border-0 rounded-5 h-100">
          <!-- Padding diubah agar responsif (p-4 di mobile, p-5 di desktop) -->
          <div class="card-body p-4 p-md-5">
            <h4 class="card-title fw-bold mb-1">{{ exp.role }}</h4>
            <h6 class="card-subtitle mb-4 text-muted">
              <span class="fw-semibold text-info">{{ exp.company }}</span> &bull; {{ exp.period }}
            </h6>

            <ul class="mb-0 ps-3">
              <!-- Tag <p> dihapus agar jarak list tidak terlalu renggang -->
              <li v-for="(desc, descIndex) in exp.description" :key="descIndex" class="mb-2 text-secondary">
                <p>{{ desc }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Jarak arrow diseimbangkan menggunakan py-4 (padding Y atas-bawah) -->
      <div v-if="index < experiences.length - 1" class="d-flex justify-content-center align-items-center py-2">
        <!-- Icon Panah -->
        <IMdiKeyboardArrowUp class="text-info fs-1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  line-height: 1.7;
}

li::marker {
  color: #17a2b8;
  /* Aksen warna list disamakan dengan text-info */
}

.page-title,
.experience-item {
  visibility: visible;
}
</style>