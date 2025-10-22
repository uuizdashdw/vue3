<script setup lang="ts">
  import { ref } from 'vue';

  const username = 'chanwoong';

  const tabs = ref([
    { id: 1, title: '홈', path: '/', active: true },
    { id: 2, title: '유저', path: `/user/${username}`, active: false },
    { id: 3, title: '대시보드', path: '/dashboard', active: false },
  ]);

  const setTabs = (id: number) => {
    tabs.value.forEach((tab) => {
      tab.active = tab.id === id;
    });
  };
</script>

<template>
  <header>
    <nav>
      <ul class="flex items-center justify-center gap-9">
        <li v-for="value in tabs" :key="value.id">
          <RouterLink
            :to="value.path"
            @click="setTabs(value.id)"
            :class="value.active ? 'text-blue-500' : 'text-black'"
            >{{ value.title }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style></style>
