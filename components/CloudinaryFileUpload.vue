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
    <div class="mt-2 space-y-2 rounded">
      <div
        v-for="(fileUrl, i) in value"
        :key="i"
        class="relative">
        <Button
          type="button"
          variant="destructive"
          class="absolute top-2 right-2"
          @click="deleteFile(fileUrl)">
          <Icon
            size="20"
            name="lucide:trash" />
        </Button>
        {{ fileUrl }}
        <div>
          <a
            :href="fileUrl"
            class="text-sky-600">
            Завантажити
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string[]
    publicId: string
  }>()

  const emits = defineEmits(['onFileUpload', 'onFileDelete'])

  function uploadFile(result: any) {
    emits('onFileUpload', result.info.secure_url)
    console.log(result)
  }

  async function deleteFile(imgId: string) {
    emits('onFileDelete', imgId)
  }
</script>
