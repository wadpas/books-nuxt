import db from '~/server/utils/db'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { bookSchema } from '~/server/utils/validations'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const cyrillicToTranslit = CyrillicToTranslit({ preset: 'uk' })

  if (session.user && session.user?.role === 'admin') {
    const { title, description, coverURLs, year, pages, genreIds, authorIds, price, isFeatured, isAvailable } =
      await readValidatedBody(event, (body) => bookSchema.parse(body))
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
          coverURLs: [coverURLs],
          year,
          pages,
          genreIds,
          authorIds,
          price,
          creatorId: session.user.id,
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
