import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { authorSchema } from '~/utils/validations'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

  if (session.user && session.user?.role === 'admin') {
    const { name } = await readValidatedBody(event, (body) => authorSchema.parse(body))
    const slug = cyrillicToTranslit.transform(name, '-').toLowerCase()

    try {
      const author = await db.author.update({
        where: {
          slug: event.context.params?.slug,
        },
        data: {
          name,
          slug,
        },
      })
      return author
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
