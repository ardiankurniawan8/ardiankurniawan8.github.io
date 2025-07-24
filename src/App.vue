<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import DefaultLayout from './layouts/default.vue'
import MobileLayout from './layouts/mobile.vue'

const isMobile = ref(window.innerWidth < 1150)

const updateLayout = () => {
  isMobile.value = window.innerWidth < 1150
}

onMounted(() => {
  window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})

const currentLayout = computed(() => (isMobile.value ? MobileLayout : DefaultLayout))

</script>

<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>
