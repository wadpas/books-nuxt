<template>
  <header class="z-10 shadow-sm">
    <div class="flex items-center justify-between max-w-[1600px] mx-auto p-4">
      <NuxtLink
        to="/"
        class="flex hover:cursor-pointer">
        <NuxtImg
          src="/logo.svg"
          alt="logo"
          class="mr-2 h-9" />
        <h1 class="text-2xl">Тутbook</h1>
      </NuxtLink>
      <nav class="flex items-center space-x-4 lg:space-x-6">
        <template v-if="user">
          <DropdownMenu v-if="user.role === 'admin'">
            <DropdownMenuTrigger as-child>
              <Button class="relative w-6 h-6 rounded-full">
                <Avatar class="bg-white">
                  <Icon
                    name="lucide:list"
                    size="26"
                    class="hover:scale-105" />
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              class="w-36"
              align="end">
              <NuxtLink to="/admin/books">
                <DropdownMenuItem>
                  <Icon
                    name="lucide:book-open"
                    size="20" />
                  Книги
                </DropdownMenuItem>
              </NuxtLink>
              <NuxtLink to="/admin/authors">
                <DropdownMenuItem>
                  <Icon
                    name="lucide:users-round"
                    size="20" />
                  Автори
                </DropdownMenuItem>
              </NuxtLink>
              <NuxtLink to="/admin/genres">
                <DropdownMenuItem>
                  <Icon
                    name="lucide:drama"
                    size="20" />
                  Жанри
                </DropdownMenuItem>
              </NuxtLink>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                variant="secondary"
                class="relative w-6 h-6 rounded-full">
                <Avatar class="bg-white">
                  <Icon
                    name="lucide:circle-user"
                    size="26"
                    class="hover:scale-105" />
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              class="w-36"
              align="end">
              <DropdownMenuLabel>Вітаємо, {{ user.username }}!</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="logout">
                <Icon
                  name="lucide:log-out"
                  size="20">
                </Icon>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </template>
        <Button
          v-if="!user"
          @click="navigateTo('/auth/login')"
          class="rounded-full">
          <Icon
            name="lucide:log-in"
            size="18">
          </Icon>
        </Button>
        <ClientOnly>
          <Button
            @click="navigateTo('/cart')"
            class="rounded-full">
            <Icon
              name="lucide:shopping-bag"
              size="18">
            </Icon>
            {{ cartBooks.length > 0 ? cartBooks.length : 0 }}
          </Button>
        </ClientOnly>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  const { user, clear } = useUserSession()

  const { books: cartBooks } = useCart()

  const logout = async () => {
    await clear()
    navigateTo('/auth/login')
  }
</script>

<style scoped></style>
