<template>
  <div class="flex flex-col">
    <CldUploadWidget
      :options="{
        publicId,
      }"
      v-slot="{ open }"
      :onError="() => {}"
      :onResult="() => {}"
      :onSuccess="uploadImage"
      uploadPreset="books-covers">
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
      class="flex flex-row mt-4"
      v-if="value">
      <CldImage
        class="mx-auto rounded"
        width="200"
        height="300"
        :src="value"
        :alt="value">
      </CldImage>
      <div class="w-full mx-4">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: string
    publicId: string
    buttonName: string
  }>()

  const emits = defineEmits(['onImageUpload', 'onImageDelete'])

  function uploadImage(result: any) {
    emits('onImageUpload', result.info.public_id)
    console.log(result)
  }
</script>
