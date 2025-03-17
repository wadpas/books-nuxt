<template>
  <div class="flex flex-col">
    <Input
      type="file"
      :disabled="!bookName"
      multiple
      @change="handleFileChange" />
    <div
      class="flex flex-row items-center justify-between my-2"
      v-for="(file, i) in value"
      :key="i">
      <p>{{ file }}</p>
      <Button
        type="button"
        variant="destructive"
        @click="">
        <Icon name="lucide:trash" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { bookName } = defineProps<{
    value: any[]
    bookName: string
    buttonName: string
  }>()

  const files = ref<FileList | null>(null)

  const emits = defineEmits(['onChange', 'onRemove'])

  async function handleFileChange(e: Event) {
    files.value = (e.target as HTMLInputElement).files
    if (!bookName) return
    console.log(files.value)
    if (files.value) {
      const formData = new FormData()
      Array.from(files.value).forEach((file, index) => {
        formData.append(bookName, file)
      })
      const data = await $fetch('/api/books/file', {
        method: 'POST',
        body: formData,
      })
      emits('onChange', data)
    }
  }
</script>
