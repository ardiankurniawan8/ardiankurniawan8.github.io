<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue'

import Right from '@/views/pages/right/Index.vue'
import Left from '@/views/pages/left/Index.vue'
</script>

<template>
  <default-layout>
    <template #left>
      <left/>
    </template>
    <template #right>
      <right/>
    </template>
  </default-layout>
</template>
