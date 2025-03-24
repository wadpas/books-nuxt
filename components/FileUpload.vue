<template>
  <div class="flex flex-col">
    <Input
      type="file"
      :disabled="!bookName"
      multiple
      @change="handleFileChange" />
    <div
      class="flex flex-row items-center justify-between my-2"
      v-for="(fileName, i) in value"
      :key="i">
      <p>{{ fileName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { bookName, authorIds } = defineProps<{
    value: any[]
    bookName: string
    authorIds: string[]
  }>()

  const files = ref<FileList | null>(null)

  const emits = defineEmits(['onChange', 'onRemove'])

  async function handleFileChange(e: Event) {
    try {
      files.value = (e.target as HTMLInputElement).files
      if (!bookName) return
      if (files.value) {
        const formData = new FormData()
        Array.from(files.value).forEach((file, index) => {
          formData.append(bookName, file)
        })
        const data = await $fetch('/api/upload', {
          method: 'POST',
          body: formData,
          query: { bookName, authorIds },
        })
        emits('onChange', data)
      }
    } catch (error) {
      console.log(error)
      return createError({ statusCode: 500, statusMessage: 'Something went wrong' })
    }
  }

  async function handleRemoveFile(fileName: string) {
    const data = await $fetch('/api/upload', {
      method: 'DELETE',
      query: { fileName },
    })
    emits('onRemove', data)
  }
</script>
y
