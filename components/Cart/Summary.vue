<template>
  <div class="p-4 py-8 mt-8 rounded-lg bg-gray-50">
    <h2 class="text-xl font-bold text-gray-900 sm:text-2xl">Замовлення</h2>
    <div class="flex flex-row justify-between mt-4">
      <div>Загальна сума:</div>
      <div class="text-xl font-bold">{{ totalPrice }} грн.</div>
    </div>
    <div class="flex flex-row justify-between mt-4">
      <div>Кількість книг:</div>
      <div class="text-xl font-bold">{{ books.length }} шт.</div>
    </div>
    <Button
      @click="onCheckout"
      :disabled="books.length === 0"
      type="button"
      class="w-full mt-6">
      Оплатити
    </Button>
  </div>
</template>

<script setup>
  const { books, removeAllBooks } = useCart()

  const totalPrice = computed(() => {
    return books.value.reduce((total, book) => {
      return total + book.price
    }, 0)
  })

  const onCheckout = () => {
    console.log(books)
  }
</script>

<style lang="scss" scoped></style>
.value
