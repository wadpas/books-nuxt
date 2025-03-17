import path from 'path'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event)
    const { bookName } = getQuery(event)

    if (!files || !bookName) {
      return createError({ statusCode: 400, statusMessage: 'No files uploaded' })
    }

    const dir = path.join('public/books', bookName.toString())

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

    const filePaths: string[] = []

    files.forEach((file, index) => {
      const { filename, data, type, name } = file
      if (!filename || !data || !type || !name) {
        return createError({ statusCode: 400, statusMessage: 'Invalid file' })
      }

      let fsFilename = name + path.extname(filename)
      if (type.startsWith('image')) {
        fsFilename = name + `_${index}` + path.extname(filename)
      }
      const filePath = path.join(dir, fsFilename)
      fs.writeFileSync(filePath, data)
      filePaths.push(fsFilename)
    })

    return filePaths
  } catch (error) {
    console.log(error)
    return createError({ statusCode: 500, statusMessage: 'Something went wrong' })
  }
})
