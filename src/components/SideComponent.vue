
<script setup>
import HomeIcon from "@/components/icons/HomeIcon.vue"
import ExamIcon from "@/components/icons/ExamIcon.vue"
import MedicineIcon from "@/components/icons/MedicineIcon.vue"
import DropperIcon from "@/components/icons/DropperIcon.vue"
import ChatIcon from "@/components/icons/ChatIcon.vue"


</script>
<template>
  <aside class="sticky hrefp-4 w-60 px-3 py-4 overflow-y-auhref shadow-lg rounded-lg bg-white dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      <li>
        <a href="/"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <HomeIcon class="w-6" />
          <span class="ms-3">Home</span>
        </a>
      </li>


      <li>
        <a href="/exames"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <ExamIcon class="w-6" />
          <span class="ms-3">Exames</span>
        </a>
      </li>

      <li>
        <a href="/consultas"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <ChatIcon class="w-6" />
          <span class="ms-3">Consulta</span>
        </a>
      </li>

      <li>
        <a href="/medicamentos"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <MedicineIcon class="w-6" />
          <span class="ms-3">Medicamentos</span>
        </a>
      </li>

      <li>
        <a href="/medir-glicose"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <DropperIcon class="w-6" />
          <span class="ms-3">Glicose</span>
        </a>
      </li>

    </ul>
  </aside>
</template>

<style scoped>
aside {
  height: calc(100vh - 80px);
}
</style>
