<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book" />
  </div>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'

  defineProps<{
    books: Book[]
  }>()
</script>

<style scoped></style>
