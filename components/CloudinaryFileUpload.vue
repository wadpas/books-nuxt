<template>
  <div class="flex flex-col">
    <CldUploadWidget
      :options="{
        publicId,
      }"
      v-slot="{ open }"
      :onError="() => {}"
      :onResult="() => {}"
      :onSuccess="uploadFile"
      uploadPreset="books-files">
      <Button
        class="w-full"
        type="button"
        @click="open">
        <Icon
          size="20"
          name="mdi:cloud-upload-outline" />
        Додати
      </Button>
    </CldUploadWidget>
    <div
      class="mt-4"
      v-if="value">
      {{ value }}
      <div>
        <a
          :href="value"
          class="text-sky-600">
          Завантажити
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string
    publicId: string
  }>()

  const emits = defineEmits(['onFileUpload', 'onFileDelete'])

  function uploadFile(result: any) {
    emits('onFileUpload', result.info.secure_url)
    console.log(result)
  }
</script>
