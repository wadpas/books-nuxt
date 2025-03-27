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
    <div class="grid grid-cols-2">
      <div
        v-for="(imageId, i) in value"
        :key="i"
        class="relative">
        <CldImage
          class="m-4 mx-auto rounded"
          width="200"
          height="300"
          :src="imageId"
          :alt="imageId">
        </CldImage>
        <Button
          type="button"
          variant="destructive"
          class="absolute top-2 right-2"
          @click="deleteImage(imageId)">
          <Icon
            size="20"
            name="lucide:trash" />
        </Button>
        <div class="ml-4">
          {{ imageId }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    value: any[]
    publicId: string
    buttonName: string
  }>()

  const emits = defineEmits(['onImageUpload', 'onImageDelete'])

  function uploadImage(result: any) {
    emits('onImageUpload', result.info.public_id)
    console.log(result)
  }

  async function deleteImage(imgId: string) {
    emits('onImageDelete', imgId)
  }
</script>
