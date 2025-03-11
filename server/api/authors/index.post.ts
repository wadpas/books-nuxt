import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { authorSchema } from '~/server/utils/validations'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

  if (session.user && session.user?.role === 'admin') {
    const { name } = await readValidatedBody(event, (body) => authorSchema.parse(body))
    const slug = cyrillicToTranslit.transform(name.trim(), '-').replaceAll('.', '').replaceAll(',', '').toLowerCase()

    try {
      let author = await db.author.findUnique({
        where: { slug },
      })
      if (author) {
        throw new Error()
      }
      author = await db.author.create({
        data: {
          name,
          slug,
          creatorId: session.user.id,
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
