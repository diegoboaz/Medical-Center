<script setup>
import NavComponent from '@/components/NavComponent.vue'
import SideComponent from '@/components/SideComponent.vue'
</script>

<template>
  <NavComponent />
  <div class="wrapper rounded-lg">
    <SideComponent class="" />
    <div class="dashboard-content border rounded-lg w-full p-2 shadow-lg ml-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  // height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  // border: 2px solid green;
}
</style>
