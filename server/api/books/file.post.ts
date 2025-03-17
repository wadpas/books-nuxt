import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event)

    if (!files) {
      return createError({ statusCode: 400, statusMessage: 'No files uploaded' })
    }

    const dir = path.join('public/books', files[0].name as string)

    if (fs.existsSync(dir)) {
      return createError({ statusCode: 400, statusMessage: 'Book already exists' })
    }

    fs.mkdirSync(dir)

    const bookPaths: string[] = []

    files.forEach((file, index) => {
      const { filename, data, type, name } = file

      if (!filename || !data || !type || !name) {
        return createError({ statusCode: 400, statusMessage: 'Invalid file' })
      }

      if (type.startsWith('image')) {
        const imageName = name + `_${index}.webp`
        sharp(data)
          .resize(300, 450, { fit: 'fill' })
          .webp({ quality: 80 })
          .toFile(path.join(dir, imageName))
          .then(() => bookPaths.push(imageName))
      } else {
        const bookName = name + path.extname(filename)
        fs.writeFileSync(path.join(dir, bookName), data)
        bookPaths.push(bookName)
      }
    })

    return bookPaths
  } catch (error) {
    console.log(error)
    return createError({ statusCode: 500, statusMessage: 'Something went wrong' })
  }
})
