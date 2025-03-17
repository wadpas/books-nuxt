<template>
  <div class="grid grid-cols-2 gap-6 mx-auto mt-4 xl:grid-cols-6 2xl:grid-cols-7">
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
