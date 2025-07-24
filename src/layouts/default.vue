<script setup lang="ts"></script>

<template>
  <div class="card layout p-5 border-0">
    <div class="d-flex flex-row content rounded-5 shadow-lg">
      <div class="left rounded-end-0"></div>
      <div class="right border-start rounded-5">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
