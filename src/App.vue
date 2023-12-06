<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onBeforeMount } from 'vue'
import { initFlowbite } from 'flowbite'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
//Components
import AppLayout from '@/components/layouts/AppLayout.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import { useMainStore } from "@/stores/mainStore";
const route = useRoute()
const defaultLayout = AppLayout

// Routing and acces levels -----------------------
const layouts = {
  'dashboard-layout': DashboardLayout,
  'user-layout': AppLayout
}

const layout = computed(() => {
  const layoutName = route.meta.layout || 'user-layout' // Use a chave do objeto de layouts
  return layouts[layoutName] || AppLayout
})

const mainStore = useMainStore();


onBeforeMount(async () => {
  await mainStore.isCsrfValid()
});

// Plugin de layout -----------------------
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="h-100">
    <component :is="layout"></component>
  </div>
</template>

<style scoped></style>
