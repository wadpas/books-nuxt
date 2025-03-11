import { toast } from '~/components/ui/toast'
import { setLocalStorageData, getLocalStorageData } from '~/server/utils'
import type { Book } from '~/types'

interface CartState {
  books: Book[]
}

const state = reactive<CartState>({
  books: getLocalStorageData<Book[]>('cart') ? getLocalStorageData<Book[]>('cart') : [],
})

export function useCart() {
  const { books } = toRefs(state)

  const inCart = (book: Book) =>
    computed(() => {
      return !!state.books.find((b) => b.id === book.id)
    })

  const addBook = (book: Book) => {
    state.books = [...state.books, book]
    setLocalStorageData<Book[]>('cart', state.books)
    toast({
      title: 'Успішно',
      description: 'Книга додана до кошику',
    })
  }

  const removeBook = (book: Book) => {
    state.books = [...state.books.filter((b) => b.id !== book.id)]
    setLocalStorageData<Book[]>('cart', state.books)
    toast({
      title: 'Успішно',
      description: 'Книга видалена з кошику',
    })
  }

  const removeAllBooks = (book: Book) => {
    state.books = []
    setLocalStorageData<Book[]>('cart', [])
  }

  return {
    books,
    inCart,
    addBook,
    removeBook,
    removeAllBooks,
  }
}
