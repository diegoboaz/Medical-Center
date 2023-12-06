
<script setup>
import DropperIcon from '@/components/icons/DropperIcon.vue'
</script>
<template>
    <div class="w-full p-4 sticky top-0 flex justify-between items-center bg-slate-100 rounded-sm">
        <h2 class="text-xl font-bold">Medição de glicose</h2>

        <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <DropperIcon class="w-6" />
            Medir glicose
        </button>
    </div>


    <div v-if="false" class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <h4 class="text-xl mb-2">Últimas medições realizadas</h4>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        PACIENTE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        MEDIDO POR
                    </th>

                    <th scope="col" class="px-6 py-3">
                        DATA E HORA
                    </th>

                    <th scope="col" class="px-6 py-3">
                        STATUS
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Elielson André
                    </th>
                    <td class="px-6 py-4">
                        Ranch crudes
                    </td>
                    <td class="px-6 py-4">
                        10/02/2023
                    </td>
                    <td class="px-6 py-4">
                        BAIXA
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div v-else class="mt-40 w-full flex justify-center">
        Não foi feita nenhuma medição de glicose até o momento.
    </div>
</template>
