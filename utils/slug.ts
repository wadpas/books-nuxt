import CyrillicToTranslit from 'cyrillic-to-translit-js'
const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

export function toSlug(str: string) {
  if (!str) return ''
  return cyrillicToTranslit
    .transform(str.trim(), '-')
    .replaceAll('.', '')
    .replaceAll(',', '')
    .replaceAll(':', '')
    .replaceAll(';', '')
    .replaceAll('?', '')
    .replaceAll('!', '')
    .toLowerCase()
}
