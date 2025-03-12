import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { bookSchema } from '~/utils/validations'
import type { User } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })
  const session = await requireUserSession(event)
  const sessionUser = session.user as User

  if (sessionUser && sessionUser.role === 'admin') {
    const {
      title,
      description,
      coverPath1,
      coverPath2,
      year,
      pages,
      genreIds,
      authorIds,
      price,
      isFeatured,
      isAvailable,
    } = await readValidatedBody(event, (body) => bookSchema.parse(body))
    const slug = cyrillicToTranslit.transform(title.trim(), '-').replaceAll('.', '').replaceAll(',', '').toLowerCase()

    try {
      const book = await db.book.update({
        where: {
          slug: event.context.params?.slug,
        },
        data: {
          title,
          slug,
          description,
          coverPaths: [coverPath1, coverPath2],
          year,
          pages,
          genreIds,
          authorIds,
          price,
          creatorId: sessionUser.id,
          isFeatured,
          isAvailable,
        },
      })
      return book
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
