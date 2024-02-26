<script setup>
import { reactive, ref, computed } from "vue";
import Sidebar from "@/components/Sidebar.vue";

const data = reactive({
  nama: "",
  tanggal: "",
  sku: "",
  tujuan: "",
  ref_id: "",
});

const response = ref({
  response: "ok",
  status: "berhasil",
});

const text = computed(() => JSON.stringify(response.value, undefined, 2));

const submitForm = () => {
  console.log(data);
};
</script>

<template>
  <div class="w-screen flex flex-col lg:flex-row">
    <Sidebar />

    <main class="lg:flex-1 h-max w-full lg:flex">
      <form
        @submit.prevent="submitForm"
        class="flex flex-col p-4 bg-back m-4 rounded shadow lg:w-2/3 lg:m-2"
      >
        <h1
          class="p-4 my-2 border-y-2 border-gray-300 text-primary text-xl text-center font-extrabold"
        >
          Buat Pesanan
        </h1>
        <label class="mb-1" for="tanggal">Tanggal</label>
        <input
          v-model="data.tanggal"
          class="p-2 rounded outline-primary mb-2 w-full"
          type="date"
          id="tanggal"
        />
        <label class="mb-1" for="nama">Nama</label>
        <input v-model="data.nama" class="p-2 rounded outline-primary mb-2" type="text" id="nama" />
        <label class="mb-1" for="sku">Sku</label>
        <input v-model="data.sku" class="p-2 rounded outline-primary mb-2" type="text" id="sku" />
        <label class="mb-1" for="tujuan">Tujuan</label>
        <input
          v-model="data.tujuan"
          class="p-2 rounded outline-primary mb-2"
          type="number"
          id="tujuan"
        />
        <label class="mb-1" for="refid">Ref Id</label>
        <input
          v-model="data.ref_id"
          class="p-2 rounded outline-primary mb-2"
          type="text"
          id="refid"
        />

        <button
          type="submit"
          class="my-6 self-center bg-primary py-2 px-6 text-white font-bold rounded hover:bg-darker"
        >
          Submit
        </button>
      </form>

      <div class="bg-back my-2 p-2 rounded shadow mx-4 mt-2 lg:flex-1 lg:mx-2 lg:flex lg:flex-col">
        <p class="text-center text-primary font-bold py-4 border-y-2 border-gray-300">
          Status Pesanan
        </p>
        <pre class="bg-white h-max w-full p-2 mt-2 rounded lg:flex-1">{{ text }}</pre>
      </div>
    </main>
  </div>
</template>
