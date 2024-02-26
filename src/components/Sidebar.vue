<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();

const menus = ref([
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "fa-solid fa-gauge",
    clickHandler: () => router.push({ path: "/dashboard" }),
  },
  {
    title: "Transaksi",
    url: "/transaction",
    icon: "fa-solid fa-bag-shopping",
    clickHandler: () => router.push({ path: "/transaction" }),
  },
  {
    title: "Logout",
    icon: "fa-solid fa-right-from-bracket",
    clickHandler: () => router.push({ path: "/login" }),
  },
]);

const isOpen = ref(false);

onMounted(() => {
  if (window.innerWidth >= 1024) {
    isOpen.value = true;
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      isOpen.value = true;
    }
  });
});

onUnmounted(() => {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      isOpen.value = true;
    }
  });
});

const openMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <aside
    class="h-16 w-screen flex justify-between items-center px-4 relative bg-back shadow lg:static lg:w-1/6 lg:h-screen lg:flex-col lg:justify-start"
  >
    <div class="h-2/3 lg:flex lg:items-center lg:gap-2 lg:h-max lg:justify-between lg:mt-4">
      <img
        @click="$router.push({ path: '/dashboard' })"
        class="h-full lg:h-12"
        src="/favicon.svg"
        alt="logo img"
      />
      <h1 class="font-bold text-xl text-primary hidden lg:block">Pengky Shop</h1>
    </div>
    <i @click="openMenu" class="fa-solid fa-bars text-3xl hover:text-primary lg:hidden"></i>

    <div
      class="w-full h-32 absolute left-0 bottom-[-200%] bg-back flex flex-col gap-4 justify-center px-4 shadow duration-300 cursor-pointer lg:static lg:shadow-none"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <!-- menu -->
      <div
        v-for="(menu, index) in menus"
        :key="index"
        @click="menu.clickHandler"
        class=""
        :class="['flex items-center gap-2', { 'text-primary': $route.path === menu.url }]"
      >
        <i :class="menu.icon"></i>
        <p>{{ menu.title }}</p>
      </div>
    </div>
  </aside>
</template>
