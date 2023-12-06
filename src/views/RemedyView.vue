
<script setup>
import RemedyModal from '../components/modals/RemedyModal.vue'
import RemedyDetailsModal from '../components/modals/RemedyDetailsModal.vue'
</script>
<template>
    <div class="w-full p-4 flex justify-between items-center bg-slate-100 rounded-sm">
        <h2 class="text-xl font-bold">Painel de medicamentos</h2>

        <RemedyModal />
    </div>


    <div class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <h4 class="text-xl mb-2">Receitas</h4>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        PACIENTE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        PROFISSIONAL/MEDICO RESPONSAVEL
                    </th>

                    <th scope="col" class="px-6 py-3">
                        Detalhamento
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
                        <RemedyDetailsModal />
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>
