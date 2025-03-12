import db from '~/server/utils/db'
import { authSchema } from '~/utils/validations'

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, (body) => authSchema.parse(body))

  let currentUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (currentUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User already exists',
    })
  }

  const hashedPassword = await hashPassword(password)

  currentUser = await db.user.create({
    data: {
      email,
      username: email.split('@')[0],
      password: hashedPassword,
    },
  })

  const transformedUser = sanitizeUser(currentUser)

  await setUserSession(event, {
    user: transformedUser!,
  })
  return transformedUser
})
