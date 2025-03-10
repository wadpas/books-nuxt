<template>
  <div>
    <h1 class="text-xl">Shopping Cart</h1>
    <div class="mt-2 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
      <div class="mt-4 lg:col-span-7">
        <ClientOnly>
          <CartItem
            v-for="book in cartBooks"
            :key="book.id"
            :book="book" />
        </ClientOnly>
      </div>
      <ClientOnly>
        <div class="mt-4 lg:col-span-5">
          <CartSummary />
        </div>
      </ClientOnly>
    </div>
    <div v-show="cartBooks.length === 0">
      <p class="italic text-gray-500">Your cart is empty</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { books: cartBooks } = useCart()
</script>

<style lang="scss" scoped></style>
