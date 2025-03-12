import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { bookSchema } from '~/utils/validations'
import type { User } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })
  const session = await requireUserSession(event)
  const user = session.user as User

  if (user && user?.role === 'admin') {
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
      filePath,
    } = await readValidatedBody(event, (body) => bookSchema.parse(body))
    const slug = cyrillicToTranslit.transform(title.trim(), '-').replaceAll('.', '').replaceAll(',', '').toLowerCase()

    try {
      let book = await db.book.findUnique({
        where: { slug },
      })
      if (book) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Книга вже існує',
        })
      }
      book = await db.book.create({
        data: {
          title,
          slug,
          description,
          coverPaths: [coverPath1, coverPath2],
          year,
          pages,
          genreIds,
          authorIds,
          filePath: [filePath],
          price,
          creatorId: user.id,
          isFeatured,
          isAvailable,
        },
      })
      return book
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка при створенні нової книги',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
