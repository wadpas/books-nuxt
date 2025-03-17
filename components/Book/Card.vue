<template>
  <NuxtLink :to="`/books/${book.slug}`">
    <div class="relative flex flex-col justify-end rounded-sm shadow-sm">
      <NuxtImg
        :src="book.coverPaths[0]"
        :alt="book.title"
        class="aspect-[55/85] rounded-sm" />
      <div class="px-2 pt-2 pb-1 space-y-2">
        <p class="font-semibold line-clamp-1">{{ book.title }}</p>
        <p class="line-clamp-1">{{ book.authors[0].name }}</p>
        <p class="">{{ book.price }} грн</p>
        <div class="absolute bottom-0 right-0">
          <Button
            v-show="!inCart(book).value"
            size="xs"
            class="text-white bg-rose-500"
            @click.prevent="addBook(book)">
            Купити
          </Button>
          <Button
            v-show="inCart(book).value"
            size="xs"
            class="text-white bg-green-500"
            @click.prevent="() => navigateTo('/cart')">
            Оформити
          </Button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'

  defineProps<{
    book: Book | null
  }>()

  const { addBook, inCart } = useCart()
</script>
