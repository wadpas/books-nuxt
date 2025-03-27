<template>
  <div class="flex">
    <div class="flex flex-col m-4 space-y-4 min-w-96">
      <CldImage
        v-for="imageId in book.coverPaths"
        class="mx-auto rounded"
        width="400"
        height="600"
        :src="imageId"
        :alt="imageId" />
    </div>
    <div class="px-2 py-2 space-y-2 min-w-96">
      <p class="font-semibold line-clamp-1">{{ book.title }}</p>
      <p class="line-clamp-1">{{ book.authors[0].name }}</p>
      <p class="line-clamp-1">{{ book.genres[0].name }}</p>
      <p class="">{{ book.description }}</p>
      <p class="">{{ book.price }} грн</p>
      <div>
        <a
          :href="book.filePaths[0]"
          class="text-sky-600"
          >Завантажити
        </a>
      </div>
      <div>
        <Button>Купити</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'

  const route = useRoute()
  const { data: book } = await useFetch<Book>(`/api/books/${route.params.slug}`)
</script>

<style scoped></style>
