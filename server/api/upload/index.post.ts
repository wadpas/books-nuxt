import path from 'path'
import fs from 'fs'
import sharp from 'sharp'
import { db } from '~/server/utils/db'
import { toSlug, toUpSlug } from '~/utils/slug'

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event)
    const { bookName, authorIds } = getQuery(event)

    if (!files) {
      return createError({ statusCode: 400, statusMessage: 'No files uploaded' })
    }

    // !!! authorIds is Array
    const author = await db.author.findFirst({
      where: {
        id: authorIds as string,
      },
    })

    if (!author) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Автора не існує',
      })
    }

    const authorSlug = toSlug(author.name as string)
    const authorUpSlug = toUpSlug(author.name as string)
    const bookSlug = toSlug(bookName as string)
    const bookUpSlug = toUpSlug(bookName as string)
    const dirPath = `${authorSlug}/${bookSlug}`
    const fullName = `${authorUpSlug}_${bookUpSlug}`

    const dir = path.join('public/books', dirPath)

    if (!fs.existsSync(dir)) {
      fs.promises.mkdir(dir, { recursive: true })
    }

    const bookPaths: string[] = []

    files.forEach((file, index) => {
      const { filename, data, type, name } = file

      if (!filename || !data || !type || !name) {
        return createError({ statusCode: 400, statusMessage: 'Invalid file' })
      }

      if (type.startsWith('image')) {
        let imageName = ''

        try {
          switch (index) {
            case 0:
              imageName = fullName + '_front.webp'
              break
            case 1:
              imageName = fullName + '_back.webp'
              break

            default:
              break
          }
          sharp(data).resize(300, 450, { fit: 'fill' }).webp({ quality: 80 }).toFile(path.join(dir, imageName))
          bookPaths.push(imageName)
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          const fileName = fullName + path.extname(filename)
          fs.writeFileSync(path.join(dir, fullName + path.extname(filename)), data)
          bookPaths.push(fileName)
        } catch (error) {
          console.log(error)
        }
      }
    })

    return bookPaths
  } catch (error) {
    console.log(error)
    return createError({ statusCode: 500, statusMessage: 'Something went wrong' })
  }
})
