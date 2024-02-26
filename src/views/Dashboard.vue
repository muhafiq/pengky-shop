<script setup>
import { ref } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import { rupiah } from "@/utils/format";

const stats = ref([
  {
    lg: true,
    title: "Saldo",
    content: rupiah(100000),
    bg: "bg-primary",
  },
  {
    title: "Total Pesanan",
    content: 10,
    bg: "bg-amber-500",
  },
  {
    title: "Pesanan Harian",
    content: 10,
    bg: "bg-rose-500",
  },
  {
    title: "Total Menu",
    content: 10,
    bg: "bg-slate-500",
  },
]);

const TransactionLog = ref([
  {
    id: 1,
    time: "Senin, 26/02/2024", // config time sendiri
  },
  {
    id: 2,
    time: "Senin, 26/02/2024", // config time sendiri
  },
  {
    id: 3,
    time: "Senin, 26/02/2024", // config time sendiri
  },
]);
</script>

<template>
  <div class="w-screen flex flex-col lg:flex-row">
    <Sidebar />

    <main class="h-max w-full lg:flex-1">
      <!-- stats -->
      <div class="h-80 p-2 flex flex-col justify-around">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          :class="[
            stat.bg,
            'flex justify-between items-center rounded',
            stat.lg ? 'py-8 px-4 text-xl' : 'p-4',
          ]"
        >
          <h1 class="font-bold text-white">{{ stat.title }}</h1>
          <p class="font-semibold text-white">{{ stat.content }}</p>
        </div>
      </div>

      <!-- logs -->
      <div class="w-full p-2">
        <h1 class="text-center text-xl py-4 font-bold border-y-2 border-gray-300">
          Riwayat Pesanan
        </h1>
        <div
          v-for="(trx, index) in TransactionLog"
          :key="index"
          class="flex justify-between items-center p-4 bg-back mt-2 rounded"
        >
          <p>#{{ trx.id }}</p>
          <p>{{ trx.time }}</p>
          <button class="underline">Detail</button>
        </div>
      </div>
    </main>
  </div>
</template>
