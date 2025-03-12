import { h } from 'vue'
import type { Author } from '@prisma/client'
import type { ColumnDef } from '@tanstack/vue-table'
import CellActions from './CellActions.vue'

export const columns: ColumnDef<Author>[] = [
  {
    accessorKey: 'name',
    header: `Ім'я`,
  },
  {
    accessorKey: 'slug',
    header: 'Трансліт',
  },
  {
    accessorKey: 'createdAt',
    header: 'Дата створення',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const author = row.original
      return h('div', { class: 'relative' }, h(CellActions, { author }))
    },
  },
]
