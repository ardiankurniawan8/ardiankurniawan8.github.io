<script setup lang="ts">
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
        <button class="btn btn-tertiary" type="button">
          <IMdiKeyboardArrowRight></IMdiKeyboardArrowRight>
        </button>
        <button class="btn btn-tertiary" type="button">
          <IMdiKeyboardArrowLeft></IMdiKeyboardArrowLeft>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1149px) {
  .desktop {
    display: none;
    max-width: 100vw;
  }
  .navigation {
    right: 3vw;
    bottom: 3vh;
  }
}

@media (min-width: 1150px) {
  .mobile {
    display: none;
  }
}
</style>
