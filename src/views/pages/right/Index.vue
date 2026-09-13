<script setup lang="ts">
import { useMainStore } from '@/stores/store';
import Biodata from '@/views/pages/right/components/Biodata.vue';
import Experience from '@/views/pages/right/components/Experience.vue';
import Project from '@/views/pages/right/components/Project.vue';
import { computed } from 'vue';

const store = useMainStore()
const currentComponent = computed(() => {
  switch (store.getCurrentPage) {
    case 'biodata':
      return Biodata;
      
    case 'experience':
      return Experience;
    
    case 'project':
      return Project;
      
    default:
      break;
  }
  return
});

</script>

<template>
  <component class="scroll-y" :is="currentComponent"></component>
</template>

<style scoped>
  .scroll-y {
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
</style>