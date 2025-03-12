import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { genreSchema } from '~/utils/validations'
import type { User } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })
  const session = await requireUserSession(event)
  const user = session.user as User

  if (user && user?.role === 'admin') {
    const { name } = await readValidatedBody(event, (body) => genreSchema.parse(body))
    const slug = cyrillicToTranslit.transform(name.trim(), '-').replaceAll('.', '').replaceAll(',', '').toLowerCase()

    try {
      let genre = await db.genre.findUnique({
        where: { slug },
      })
      if (genre) {
        throw new Error()
      }
      genre = await db.genre.create({
        data: {
          name,
          slug,
          creatorId: user.id,
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
