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
      uploadPreset="books-nuxt-cover">
      <Button
        class="w-full"
        type="button"
        @click="open">
        <Icon
          size="20"
          name="mdi:cloud-upload-outline" />
        {{ buttonName }}
      </Button>
    </CldUploadWidget>
    <div class="grid grid-cols-2 gap-2 mt-2 rounded">
      <div
        v-for="(imgId, i) in value"
        :key="i"
        class="relative">
        <CldImage
          class="rounded"
          width="250"
          height="auto"
          :src="imgId"
          :alt="imgId">
        </CldImage>
        <Button
          type="button"
          variant="destructive"
          class="absolute top-2 right-2"
          @click="deleteFile(imgId)">
          <Icon
            size="20"
            name="lucide:trash" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    value: any[]
    publicId: string
    buttonName: string
  }>()

  const emits = defineEmits(['onChange', 'onRemove'])

  function uploadImage(result: any) {
    emits('onChange', result.info.public_id)
  }

  async function deleteFile(imgId: string) {
    emits('onRemove', imgId)
  }
</script>
