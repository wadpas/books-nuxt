<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading
        title="Книга"
        description="Введіть інформацію для створення/редагування книги">
        <Button
          v-if="isEditing"
          @click="isModalVisible = true"
          variant="destructive">
          <Icon
            size="20"
            name="radix-icons:trash" />
          Видалити
        </Button>
      </Heading>
    </div>
    <Separator class="my-4" />
    <form
      @submit="onSubmit"
      class="w-full space-y-8">
      <div class="gap-8 md:grid md:grid-cols-3">
        <FormField
          v-slot="{ componentField }"
          name="title">
          <FormItem>
            <FormLabel>Назва</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Дюна"
                v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="authorIds">
          <FormItem>
            <FormLabel>Автор</FormLabel>
            <Select
              :multiple="true"
              v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Виберіть автора" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="author in authors"
                    :key="author.id"
                    :value="author.id">
                    {{ author.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="genreIds">
          <FormItem>
            <FormLabel>Жанр</FormLabel>
            <Select
              :multiple="true"
              v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Виберіть жанр" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    multiple="true"
                    v-for="genre in genres"
                    :key="genre.id"
                    :value="genre.id">
                    {{ genre.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="description">
          <FormItem>
            <FormLabel>Опис</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Про книгу"
                v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="price">
          <FormItem>
            <FormLabel>Ціна</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="199"
                v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- <FormField
          v-slot="{ componentField }"
          name="coverURLs">
          <FormItem>
            <FormLabel>Жанр</FormLabel>
            <Select
              :multiple="true"
              v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Виберіть обкладинку" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    multiple="true"
                    v-for="genre in genres"
                    :key="genre.id"
                    :value="genre.id">
                    {{ genre.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField> -->
        <FormField
          v-slot="{ componentField }"
          name="pages">
          <FormItem>
            <FormLabel>Сторінки</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="500"
                v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="year">
          <FormItem>
            <FormLabel>Рік</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="2020"
                v-bind="componentField" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ value, handleChange }"
          name="isFeatured">
          <FormItem class="flex flex-row items-start p-2 mt-8 space-y-0 border rounded-md shadow-sm h-9 gap-x-3">
            <FormControl>
              <Checkbox
                :model-value="value"
                @update:model-value="handleChange" />
            </FormControl>
            <div class="space-y-1 leading-none">
              <FormLabel>Акційна</FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ value, handleChange }"
          name="isAvailable">
          <FormItem class="flex flex-row items-start p-2 mt-8 space-y-0 border rounded-md shadow-sm h-9 gap-x-3">
            <FormControl>
              <Checkbox
                :model-value="value"
                @update:model-value="handleChange" />
            </FormControl>
            <div class="space-y-1 leading-none">
              <FormLabel>В наявності</FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        </FormField>
      </div>
      <div class="flex justify-end">
        <Button type="submit"> Зберегти </Button>
        <Button
          class="ml-4"
          type="button"
          @click="navigateTo('/admin/books')">
          Скасувати
        </Button>
      </div>
    </form>
  </div>
  <AlertModal
    :isModalVisible="isModalVisible"
    @on-close="isModalVisible = false"
    @on-confirm="deleteBook">
  </AlertModal>
</template>

<script setup lang="ts">
  import type { APIError, RouteParams } from '~/types'
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import { bookSchema } from '~/server/utils/validations'
  import { toast } from '~/components/ui/toast'
  import type { Genre } from '@prisma/client'

  const isEditing = ref(true)
  const isModalVisible = ref(false)
  const route = useRoute()

  const { data: currentBook } = await useFetch(`/api/books/${(route.params as RouteParams).slug}`)
  const { data: authors } = await useFetch<Genre[]>(`/api/authors`)
  const { data: genres } = await useFetch<Genre[]>(`/api/genres`)

  watchEffect(() => {
    if (route.params.slug === 'new') {
      isEditing.value = false
    } else if (!currentBook.value) {
      navigateTo('/admin/books')
    }
  })

  const formSchema = toTypedSchema(bookSchema)
  const form = useForm({
    validationSchema: formSchema,
    initialValues: currentBook.value || {},
  })

  const onSubmit = form.handleSubmit(async (values) => {
    console.log(values)

    try {
      if (isEditing.value) {
        await $fetch(`/api/books/${(route.params as RouteParams).slug}`, {
          method: 'PATCH',
          body: values,
        })
      } else {
        await $fetch('/api/books', {
          method: 'POST',
          body: values,
        })
      }
      navigateTo('/admin/books')
      toast({
        title: 'Операція успішна',
        description: 'Всі дані були успішно збережені',
      })
    } catch (error: unknown) {
      const err = error as APIError
      toast({
        variant: 'destructive',
        title: ` Помилка ${err.statusCode}`,
        description: err.message,
      })
    } finally {
    }
  })

  const deleteBook = async () => {
    try {
      await $fetch(`/api/books/${(route.params as RouteParams).slug}`, {
        method: 'DELETE',
      })
      navigateTo('/admin/books')
      toast({
        title: 'Операція успішна',
        description: 'Дані були успішно видалені',
      })
    } catch (error: unknown) {
      const err = error as APIError
      toast({
        variant: 'destructive',
        title: ` Помилка ${err.statusCode}`,
        description: err.message,
      })
    }
  }
</script>

<style lang="scss" scoped></style>
