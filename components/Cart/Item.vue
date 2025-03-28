<template>
  <div class="flex p-2 border-b">
    <div class="relative w-20 p-2 overflow-hidden rounded-sm sm:w-40">
      <CldImage
        loading="lazy"
        class="mx-auto rounded"
        width="200"
        height="300"
        :src="book.coverPath"
        :alt="book.coverPath" />
    </div>
    <div class="relative flex items-center justify-between flex-1 p-2">
      <div class="flex flex-col w-96">
        <div class="text-sm font-bold sm:text-base">{{ book.title }}</div>
        <div class="text-xs text-gray-500 sm:text-sm">{{ book.authors[0].name }}</div>
      </div>
      <div class="text-sm font-bold sm:text-base">{{ book.price }} грн.</div>
      <div class="absolute top-0 right-0 p-2">
        <Button>
          <Icon
            @click="removeBook(book)"
            name="lucide:trash"
            size="20">
          </Icon>
        </Button>
      </div>
      <div class="flex items-center justify-center p-2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'

  defineProps<{
    book: Book
  }>()

  const { removeBook } = useCart()
</script>

<style scoped></style>
