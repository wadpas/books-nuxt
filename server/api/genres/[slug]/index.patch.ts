import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { genreSchema } from '~/utils/validations'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

  if (session.user && session.user?.role === 'admin') {
    const { name } = await readValidatedBody(event, (body) => genreSchema.parse(body))
    const slug = cyrillicToTranslit.transform(name.trim(), '-').replaceAll('.', '').replaceAll(',', '').toLowerCase()

    try {
      const genre = await db.genre.update({
        where: {
          slug: event.context.params?.slug,
        },
        data: {
          name,
          slug,
        },
      })
      return genre
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка при створенні нового жанру',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
