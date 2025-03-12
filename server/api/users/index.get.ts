import db from '~/server/utils/db'
import type { User } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const user = session.user as User

  if (user && user?.role === 'admin') {
    try {
      const users = await db.user.findMany({
        include: {
          oAuthAccountIds: true,
        },
      })
      return users
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка запиту',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
