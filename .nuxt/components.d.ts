
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AdminAuthorsCellActions': typeof import("../components/Admin/Authors/CellActions.vue")['default']
    'AdminAuthorsForm': typeof import("../components/Admin/Authors/Form.vue")['default']
    'AdminAuthorsMain': typeof import("../components/Admin/Authors/Main.vue")['default']
    'AdminAuthorsColumns': typeof import("../components/Admin/Authors/columns")['default']
    'AdminBooksCellActions': typeof import("../components/Admin/Books/CellActions.vue")['default']
    'AdminBooksForm': typeof import("../components/Admin/Books/Form.vue")['default']
    'AdminBooksMain': typeof import("../components/Admin/Books/Main.vue")['default']
    'AdminBooksColumns': typeof import("../components/Admin/Books/columns")['default']
    'AdminGenresCellActions': typeof import("../components/Admin/Genres/CellActions.vue")['default']
    'AdminGenresForm': typeof import("../components/Admin/Genres/Form.vue")['default']
    'AdminGenresMain': typeof import("../components/Admin/Genres/Main.vue")['default']
    'AdminGenresColumns': typeof import("../components/Admin/Genres/columns")['default']
    'AlertModal': typeof import("../components/AlertModal.vue")['default']
    'AuthSocialButton': typeof import("../components/Auth/SocialButton.vue")['default']
    'BookCard': typeof import("../components/Book/Card.vue")['default']
    'BookGrid': typeof import("../components/Book/Grid.vue")['default']
    'CartItem': typeof import("../components/Cart/Item.vue")['default']
    'CartSummary': typeof import("../components/Cart/Summary.vue")['default']
    'CloudinaryFileUpload': typeof import("../components/CloudinaryFileUpload.vue")['default']
    'CloudinaryImageUpload': typeof import("../components/CloudinaryImageUpload.vue")['default']
    'DataTable': typeof import("../components/DataTable.vue")['default']
    'FileUpload': typeof import("../components/FileUpload.vue")['default']
    'Filter': typeof import("../components/Filter.vue")['default']
    'Heading': typeof import("../components/Heading.vue")['default']
    'MobileFilters': typeof import("../components/MobileFilters.vue")['default']
    'Modal': typeof import("../components/Modal.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'AuthState': typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']
    'CldImage': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']
    'CldMediaLibrary': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']
    'CldOgImage': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']
    'CldProductGallery': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']
    'CldUploadButton': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']
    'CldUploadWidget': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']
    'CldVideoPlayer': typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'Avatar': typeof import("../components/ui/avatar/index")['Avatar']
    'AvatarFallback': typeof import("../components/ui/avatar/index")['AvatarFallback']
    'AvatarImage': typeof import("../components/ui/avatar/index")['AvatarImage']
    'Badge': typeof import("../components/ui/badge/index")['Badge']
    'Button': typeof import("../components/ui/button/index")['Button']
    'Card': typeof import("../components/ui/card/index")['Card']
    'CardContent': typeof import("../components/ui/card/index")['CardContent']
    'CardDescription': typeof import("../components/ui/card/index")['CardDescription']
    'CardFooter': typeof import("../components/ui/card/index")['CardFooter']
    'CardHeader': typeof import("../components/ui/card/index")['CardHeader']
    'CardTitle': typeof import("../components/ui/card/index")['CardTitle']
    'Checkbox': typeof import("../components/ui/checkbox/index")['Checkbox']
    'Dialog': typeof import("../components/ui/dialog/index")['Dialog']
    'DialogClose': typeof import("../components/ui/dialog/index")['DialogClose']
    'DialogContent': typeof import("../components/ui/dialog/index")['DialogContent']
    'DialogDescription': typeof import("../components/ui/dialog/index")['DialogDescription']
    'DialogFooter': typeof import("../components/ui/dialog/index")['DialogFooter']
    'DialogHeader': typeof import("../components/ui/dialog/index")['DialogHeader']
    'DialogScrollContent': typeof import("../components/ui/dialog/index")['DialogScrollContent']
    'DialogTitle': typeof import("../components/ui/dialog/index")['DialogTitle']
    'DialogTrigger': typeof import("../components/ui/dialog/index")['DialogTrigger']
    'DropdownMenu': typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuLabel': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSub': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'DropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuPortal': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'FormControl': typeof import("../components/ui/form/index")['FormControl']
    'FormDescription': typeof import("../components/ui/form/index")['FormDescription']
    'FormItem': typeof import("../components/ui/form/index")['FormItem']
    'FormLabel': typeof import("../components/ui/form/index")['FormLabel']
    'FormMessage': typeof import("../components/ui/form/index")['FormMessage']
    'FORMITEMINJECTIONKEY': typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
    'FormField': typeof import("../components/ui/form/index")['FormField']
    'FormFieldArray': typeof import("../components/ui/form/index")['FormFieldArray']
    'Form': typeof import("../components/ui/form/index")['Form']
    'Input': typeof import("../components/ui/input/index")['Input']
    'Label': typeof import("../components/ui/label/index")['Label']
    'Select': typeof import("../components/ui/select/index")['Select']
    'SelectContent': typeof import("../components/ui/select/index")['SelectContent']
    'SelectGroup': typeof import("../components/ui/select/index")['SelectGroup']
    'SelectItem': typeof import("../components/ui/select/index")['SelectItem']
    'SelectItemText': typeof import("../components/ui/select/index")['SelectItemText']
    'SelectLabel': typeof import("../components/ui/select/index")['SelectLabel']
    'SelectScrollDownButton': typeof import("../components/ui/select/index")['SelectScrollDownButton']
    'SelectScrollUpButton': typeof import("../components/ui/select/index")['SelectScrollUpButton']
    'SelectSeparator': typeof import("../components/ui/select/index")['SelectSeparator']
    'SelectTrigger': typeof import("../components/ui/select/index")['SelectTrigger']
    'SelectValue': typeof import("../components/ui/select/index")['SelectValue']
    'Separator': typeof import("../components/ui/separator/index")['Separator']
    'Sheet': typeof import("../components/ui/sheet/index")['Sheet']
    'SheetClose': typeof import("../components/ui/sheet/index")['SheetClose']
    'SheetContent': typeof import("../components/ui/sheet/index")['SheetContent']
    'SheetDescription': typeof import("../components/ui/sheet/index")['SheetDescription']
    'SheetFooter': typeof import("../components/ui/sheet/index")['SheetFooter']
    'SheetHeader': typeof import("../components/ui/sheet/index")['SheetHeader']
    'SheetTitle': typeof import("../components/ui/sheet/index")['SheetTitle']
    'SheetTrigger': typeof import("../components/ui/sheet/index")['SheetTrigger']
    'Table': typeof import("../components/ui/table/index")['Table']
    'TableBody': typeof import("../components/ui/table/index")['TableBody']
    'TableCaption': typeof import("../components/ui/table/index")['TableCaption']
    'TableCell': typeof import("../components/ui/table/index")['TableCell']
    'TableEmpty': typeof import("../components/ui/table/index")['TableEmpty']
    'TableFooter': typeof import("../components/ui/table/index")['TableFooter']
    'TableHead': typeof import("../components/ui/table/index")['TableHead']
    'TableHeader': typeof import("../components/ui/table/index")['TableHeader']
    'TableRow': typeof import("../components/ui/table/index")['TableRow']
    'Textarea': typeof import("../components/ui/textarea/index")['Textarea']
    'Toast': typeof import("../components/ui/toast/index")['Toast']
    'ToastAction': typeof import("../components/ui/toast/index")['ToastAction']
    'ToastClose': typeof import("../components/ui/toast/index")['ToastClose']
    'ToastDescription': typeof import("../components/ui/toast/index")['ToastDescription']
    'Toaster': typeof import("../components/ui/toast/index")['Toaster']
    'ToastProvider': typeof import("../components/ui/toast/index")['ToastProvider']
    'ToastTitle': typeof import("../components/ui/toast/index")['ToastTitle']
    'ToastViewport': typeof import("../components/ui/toast/index")['ToastViewport']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAdminAuthorsCellActions': LazyComponent<typeof import("../components/Admin/Authors/CellActions.vue")['default']>
    'LazyAdminAuthorsForm': LazyComponent<typeof import("../components/Admin/Authors/Form.vue")['default']>
    'LazyAdminAuthorsMain': LazyComponent<typeof import("../components/Admin/Authors/Main.vue")['default']>
    'LazyAdminAuthorsColumns': LazyComponent<typeof import("../components/Admin/Authors/columns")['default']>
    'LazyAdminBooksCellActions': LazyComponent<typeof import("../components/Admin/Books/CellActions.vue")['default']>
    'LazyAdminBooksForm': LazyComponent<typeof import("../components/Admin/Books/Form.vue")['default']>
    'LazyAdminBooksMain': LazyComponent<typeof import("../components/Admin/Books/Main.vue")['default']>
    'LazyAdminBooksColumns': LazyComponent<typeof import("../components/Admin/Books/columns")['default']>
    'LazyAdminGenresCellActions': LazyComponent<typeof import("../components/Admin/Genres/CellActions.vue")['default']>
    'LazyAdminGenresForm': LazyComponent<typeof import("../components/Admin/Genres/Form.vue")['default']>
    'LazyAdminGenresMain': LazyComponent<typeof import("../components/Admin/Genres/Main.vue")['default']>
    'LazyAdminGenresColumns': LazyComponent<typeof import("../components/Admin/Genres/columns")['default']>
    'LazyAlertModal': LazyComponent<typeof import("../components/AlertModal.vue")['default']>
    'LazyAuthSocialButton': LazyComponent<typeof import("../components/Auth/SocialButton.vue")['default']>
    'LazyBookCard': LazyComponent<typeof import("../components/Book/Card.vue")['default']>
    'LazyBookGrid': LazyComponent<typeof import("../components/Book/Grid.vue")['default']>
    'LazyCartItem': LazyComponent<typeof import("../components/Cart/Item.vue")['default']>
    'LazyCartSummary': LazyComponent<typeof import("../components/Cart/Summary.vue")['default']>
    'LazyCloudinaryFileUpload': LazyComponent<typeof import("../components/CloudinaryFileUpload.vue")['default']>
    'LazyCloudinaryImageUpload': LazyComponent<typeof import("../components/CloudinaryImageUpload.vue")['default']>
    'LazyDataTable': LazyComponent<typeof import("../components/DataTable.vue")['default']>
    'LazyFileUpload': LazyComponent<typeof import("../components/FileUpload.vue")['default']>
    'LazyFilter': LazyComponent<typeof import("../components/Filter.vue")['default']>
    'LazyHeading': LazyComponent<typeof import("../components/Heading.vue")['default']>
    'LazyMobileFilters': LazyComponent<typeof import("../components/MobileFilters.vue")['default']>
    'LazyModal': LazyComponent<typeof import("../components/Modal.vue")['default']>
    'LazyNavbar': LazyComponent<typeof import("../components/Navbar.vue")['default']>
    'LazyAuthState': LazyComponent<typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']>
    'LazyCldImage': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']>
    'LazyCldMediaLibrary': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']>
    'LazyCldOgImage': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']>
    'LazyCldProductGallery': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']>
    'LazyCldUploadButton': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']>
    'LazyCldUploadWidget': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']>
    'LazyCldVideoPlayer': LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyAvatar': LazyComponent<typeof import("../components/ui/avatar/index")['Avatar']>
    'LazyAvatarFallback': LazyComponent<typeof import("../components/ui/avatar/index")['AvatarFallback']>
    'LazyAvatarImage': LazyComponent<typeof import("../components/ui/avatar/index")['AvatarImage']>
    'LazyBadge': LazyComponent<typeof import("../components/ui/badge/index")['Badge']>
    'LazyButton': LazyComponent<typeof import("../components/ui/button/index")['Button']>
    'LazyCard': LazyComponent<typeof import("../components/ui/card/index")['Card']>
    'LazyCardContent': LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
    'LazyCardDescription': LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
    'LazyCardFooter': LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
    'LazyCardHeader': LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
    'LazyCardTitle': LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
    'LazyCheckbox': LazyComponent<typeof import("../components/ui/checkbox/index")['Checkbox']>
    'LazyDialog': LazyComponent<typeof import("../components/ui/dialog/index")['Dialog']>
    'LazyDialogClose': LazyComponent<typeof import("../components/ui/dialog/index")['DialogClose']>
    'LazyDialogContent': LazyComponent<typeof import("../components/ui/dialog/index")['DialogContent']>
    'LazyDialogDescription': LazyComponent<typeof import("../components/ui/dialog/index")['DialogDescription']>
    'LazyDialogFooter': LazyComponent<typeof import("../components/ui/dialog/index")['DialogFooter']>
    'LazyDialogHeader': LazyComponent<typeof import("../components/ui/dialog/index")['DialogHeader']>
    'LazyDialogScrollContent': LazyComponent<typeof import("../components/ui/dialog/index")['DialogScrollContent']>
    'LazyDialogTitle': LazyComponent<typeof import("../components/ui/dialog/index")['DialogTitle']>
    'LazyDialogTrigger': LazyComponent<typeof import("../components/ui/dialog/index")['DialogTrigger']>
    'LazyDropdownMenu': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazyFormControl': LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
    'LazyFormDescription': LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
    'LazyFormItem': LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
    'LazyFormLabel': LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
    'LazyFormMessage': LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
    'LazyFORMITEMINJECTIONKEY': LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
    'LazyFormField': LazyComponent<typeof import("../components/ui/form/index")['FormField']>
    'LazyFormFieldArray': LazyComponent<typeof import("../components/ui/form/index")['FormFieldArray']>
    'LazyForm': LazyComponent<typeof import("../components/ui/form/index")['Form']>
    'LazyInput': LazyComponent<typeof import("../components/ui/input/index")['Input']>
    'LazyLabel': LazyComponent<typeof import("../components/ui/label/index")['Label']>
    'LazySelect': LazyComponent<typeof import("../components/ui/select/index")['Select']>
    'LazySelectContent': LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
    'LazySelectGroup': LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
    'LazySelectItem': LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
    'LazySelectItemText': LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
    'LazySelectLabel': LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
    'LazySelectScrollDownButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
    'LazySelectScrollUpButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
    'LazySelectSeparator': LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
    'LazySelectTrigger': LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
    'LazySelectValue': LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
    'LazySeparator': LazyComponent<typeof import("../components/ui/separator/index")['Separator']>
    'LazySheet': LazyComponent<typeof import("../components/ui/sheet/index")['Sheet']>
    'LazySheetClose': LazyComponent<typeof import("../components/ui/sheet/index")['SheetClose']>
    'LazySheetContent': LazyComponent<typeof import("../components/ui/sheet/index")['SheetContent']>
    'LazySheetDescription': LazyComponent<typeof import("../components/ui/sheet/index")['SheetDescription']>
    'LazySheetFooter': LazyComponent<typeof import("../components/ui/sheet/index")['SheetFooter']>
    'LazySheetHeader': LazyComponent<typeof import("../components/ui/sheet/index")['SheetHeader']>
    'LazySheetTitle': LazyComponent<typeof import("../components/ui/sheet/index")['SheetTitle']>
    'LazySheetTrigger': LazyComponent<typeof import("../components/ui/sheet/index")['SheetTrigger']>
    'LazyTable': LazyComponent<typeof import("../components/ui/table/index")['Table']>
    'LazyTableBody': LazyComponent<typeof import("../components/ui/table/index")['TableBody']>
    'LazyTableCaption': LazyComponent<typeof import("../components/ui/table/index")['TableCaption']>
    'LazyTableCell': LazyComponent<typeof import("../components/ui/table/index")['TableCell']>
    'LazyTableEmpty': LazyComponent<typeof import("../components/ui/table/index")['TableEmpty']>
    'LazyTableFooter': LazyComponent<typeof import("../components/ui/table/index")['TableFooter']>
    'LazyTableHead': LazyComponent<typeof import("../components/ui/table/index")['TableHead']>
    'LazyTableHeader': LazyComponent<typeof import("../components/ui/table/index")['TableHeader']>
    'LazyTableRow': LazyComponent<typeof import("../components/ui/table/index")['TableRow']>
    'LazyTextarea': LazyComponent<typeof import("../components/ui/textarea/index")['Textarea']>
    'LazyToast': LazyComponent<typeof import("../components/ui/toast/index")['Toast']>
    'LazyToastAction': LazyComponent<typeof import("../components/ui/toast/index")['ToastAction']>
    'LazyToastClose': LazyComponent<typeof import("../components/ui/toast/index")['ToastClose']>
    'LazyToastDescription': LazyComponent<typeof import("../components/ui/toast/index")['ToastDescription']>
    'LazyToaster': LazyComponent<typeof import("../components/ui/toast/index")['Toaster']>
    'LazyToastProvider': LazyComponent<typeof import("../components/ui/toast/index")['ToastProvider']>
    'LazyToastTitle': LazyComponent<typeof import("../components/ui/toast/index")['ToastTitle']>
    'LazyToastViewport': LazyComponent<typeof import("../components/ui/toast/index")['ToastViewport']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AdminAuthorsCellActions: typeof import("../components/Admin/Authors/CellActions.vue")['default']
export const AdminAuthorsForm: typeof import("../components/Admin/Authors/Form.vue")['default']
export const AdminAuthorsMain: typeof import("../components/Admin/Authors/Main.vue")['default']
export const AdminAuthorsColumns: typeof import("../components/Admin/Authors/columns")['default']
export const AdminBooksCellActions: typeof import("../components/Admin/Books/CellActions.vue")['default']
export const AdminBooksForm: typeof import("../components/Admin/Books/Form.vue")['default']
export const AdminBooksMain: typeof import("../components/Admin/Books/Main.vue")['default']
export const AdminBooksColumns: typeof import("../components/Admin/Books/columns")['default']
export const AdminGenresCellActions: typeof import("../components/Admin/Genres/CellActions.vue")['default']
export const AdminGenresForm: typeof import("../components/Admin/Genres/Form.vue")['default']
export const AdminGenresMain: typeof import("../components/Admin/Genres/Main.vue")['default']
export const AdminGenresColumns: typeof import("../components/Admin/Genres/columns")['default']
export const AlertModal: typeof import("../components/AlertModal.vue")['default']
export const AuthSocialButton: typeof import("../components/Auth/SocialButton.vue")['default']
export const BookCard: typeof import("../components/Book/Card.vue")['default']
export const BookGrid: typeof import("../components/Book/Grid.vue")['default']
export const CartItem: typeof import("../components/Cart/Item.vue")['default']
export const CartSummary: typeof import("../components/Cart/Summary.vue")['default']
export const CloudinaryFileUpload: typeof import("../components/CloudinaryFileUpload.vue")['default']
export const CloudinaryImageUpload: typeof import("../components/CloudinaryImageUpload.vue")['default']
export const DataTable: typeof import("../components/DataTable.vue")['default']
export const FileUpload: typeof import("../components/FileUpload.vue")['default']
export const Filter: typeof import("../components/Filter.vue")['default']
export const Heading: typeof import("../components/Heading.vue")['default']
export const MobileFilters: typeof import("../components/MobileFilters.vue")['default']
export const Modal: typeof import("../components/Modal.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const AuthState: typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']
export const CldImage: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']
export const CldMediaLibrary: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']
export const CldOgImage: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']
export const CldProductGallery: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']
export const CldUploadButton: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']
export const CldUploadWidget: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']
export const CldVideoPlayer: typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const Avatar: typeof import("../components/ui/avatar/index")['Avatar']
export const AvatarFallback: typeof import("../components/ui/avatar/index")['AvatarFallback']
export const AvatarImage: typeof import("../components/ui/avatar/index")['AvatarImage']
export const Badge: typeof import("../components/ui/badge/index")['Badge']
export const Button: typeof import("../components/ui/button/index")['Button']
export const Card: typeof import("../components/ui/card/index")['Card']
export const CardContent: typeof import("../components/ui/card/index")['CardContent']
export const CardDescription: typeof import("../components/ui/card/index")['CardDescription']
export const CardFooter: typeof import("../components/ui/card/index")['CardFooter']
export const CardHeader: typeof import("../components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../components/ui/card/index")['CardTitle']
export const Checkbox: typeof import("../components/ui/checkbox/index")['Checkbox']
export const Dialog: typeof import("../components/ui/dialog/index")['Dialog']
export const DialogClose: typeof import("../components/ui/dialog/index")['DialogClose']
export const DialogContent: typeof import("../components/ui/dialog/index")['DialogContent']
export const DialogDescription: typeof import("../components/ui/dialog/index")['DialogDescription']
export const DialogFooter: typeof import("../components/ui/dialog/index")['DialogFooter']
export const DialogHeader: typeof import("../components/ui/dialog/index")['DialogHeader']
export const DialogScrollContent: typeof import("../components/ui/dialog/index")['DialogScrollContent']
export const DialogTitle: typeof import("../components/ui/dialog/index")['DialogTitle']
export const DialogTrigger: typeof import("../components/ui/dialog/index")['DialogTrigger']
export const DropdownMenu: typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuLabel: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSub: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const DropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuPortal: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const FormControl: typeof import("../components/ui/form/index")['FormControl']
export const FormDescription: typeof import("../components/ui/form/index")['FormDescription']
export const FormItem: typeof import("../components/ui/form/index")['FormItem']
export const FormLabel: typeof import("../components/ui/form/index")['FormLabel']
export const FormMessage: typeof import("../components/ui/form/index")['FormMessage']
export const FORMITEMINJECTIONKEY: typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
export const FormField: typeof import("../components/ui/form/index")['FormField']
export const FormFieldArray: typeof import("../components/ui/form/index")['FormFieldArray']
export const Form: typeof import("../components/ui/form/index")['Form']
export const Input: typeof import("../components/ui/input/index")['Input']
export const Label: typeof import("../components/ui/label/index")['Label']
export const Select: typeof import("../components/ui/select/index")['Select']
export const SelectContent: typeof import("../components/ui/select/index")['SelectContent']
export const SelectGroup: typeof import("../components/ui/select/index")['SelectGroup']
export const SelectItem: typeof import("../components/ui/select/index")['SelectItem']
export const SelectItemText: typeof import("../components/ui/select/index")['SelectItemText']
export const SelectLabel: typeof import("../components/ui/select/index")['SelectLabel']
export const SelectScrollDownButton: typeof import("../components/ui/select/index")['SelectScrollDownButton']
export const SelectScrollUpButton: typeof import("../components/ui/select/index")['SelectScrollUpButton']
export const SelectSeparator: typeof import("../components/ui/select/index")['SelectSeparator']
export const SelectTrigger: typeof import("../components/ui/select/index")['SelectTrigger']
export const SelectValue: typeof import("../components/ui/select/index")['SelectValue']
export const Separator: typeof import("../components/ui/separator/index")['Separator']
export const Sheet: typeof import("../components/ui/sheet/index")['Sheet']
export const SheetClose: typeof import("../components/ui/sheet/index")['SheetClose']
export const SheetContent: typeof import("../components/ui/sheet/index")['SheetContent']
export const SheetDescription: typeof import("../components/ui/sheet/index")['SheetDescription']
export const SheetFooter: typeof import("../components/ui/sheet/index")['SheetFooter']
export const SheetHeader: typeof import("../components/ui/sheet/index")['SheetHeader']
export const SheetTitle: typeof import("../components/ui/sheet/index")['SheetTitle']
export const SheetTrigger: typeof import("../components/ui/sheet/index")['SheetTrigger']
export const Table: typeof import("../components/ui/table/index")['Table']
export const TableBody: typeof import("../components/ui/table/index")['TableBody']
export const TableCaption: typeof import("../components/ui/table/index")['TableCaption']
export const TableCell: typeof import("../components/ui/table/index")['TableCell']
export const TableEmpty: typeof import("../components/ui/table/index")['TableEmpty']
export const TableFooter: typeof import("../components/ui/table/index")['TableFooter']
export const TableHead: typeof import("../components/ui/table/index")['TableHead']
export const TableHeader: typeof import("../components/ui/table/index")['TableHeader']
export const TableRow: typeof import("../components/ui/table/index")['TableRow']
export const Textarea: typeof import("../components/ui/textarea/index")['Textarea']
export const Toast: typeof import("../components/ui/toast/index")['Toast']
export const ToastAction: typeof import("../components/ui/toast/index")['ToastAction']
export const ToastClose: typeof import("../components/ui/toast/index")['ToastClose']
export const ToastDescription: typeof import("../components/ui/toast/index")['ToastDescription']
export const Toaster: typeof import("../components/ui/toast/index")['Toaster']
export const ToastProvider: typeof import("../components/ui/toast/index")['ToastProvider']
export const ToastTitle: typeof import("../components/ui/toast/index")['ToastTitle']
export const ToastViewport: typeof import("../components/ui/toast/index")['ToastViewport']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAdminAuthorsCellActions: LazyComponent<typeof import("../components/Admin/Authors/CellActions.vue")['default']>
export const LazyAdminAuthorsForm: LazyComponent<typeof import("../components/Admin/Authors/Form.vue")['default']>
export const LazyAdminAuthorsMain: LazyComponent<typeof import("../components/Admin/Authors/Main.vue")['default']>
export const LazyAdminAuthorsColumns: LazyComponent<typeof import("../components/Admin/Authors/columns")['default']>
export const LazyAdminBooksCellActions: LazyComponent<typeof import("../components/Admin/Books/CellActions.vue")['default']>
export const LazyAdminBooksForm: LazyComponent<typeof import("../components/Admin/Books/Form.vue")['default']>
export const LazyAdminBooksMain: LazyComponent<typeof import("../components/Admin/Books/Main.vue")['default']>
export const LazyAdminBooksColumns: LazyComponent<typeof import("../components/Admin/Books/columns")['default']>
export const LazyAdminGenresCellActions: LazyComponent<typeof import("../components/Admin/Genres/CellActions.vue")['default']>
export const LazyAdminGenresForm: LazyComponent<typeof import("../components/Admin/Genres/Form.vue")['default']>
export const LazyAdminGenresMain: LazyComponent<typeof import("../components/Admin/Genres/Main.vue")['default']>
export const LazyAdminGenresColumns: LazyComponent<typeof import("../components/Admin/Genres/columns")['default']>
export const LazyAlertModal: LazyComponent<typeof import("../components/AlertModal.vue")['default']>
export const LazyAuthSocialButton: LazyComponent<typeof import("../components/Auth/SocialButton.vue")['default']>
export const LazyBookCard: LazyComponent<typeof import("../components/Book/Card.vue")['default']>
export const LazyBookGrid: LazyComponent<typeof import("../components/Book/Grid.vue")['default']>
export const LazyCartItem: LazyComponent<typeof import("../components/Cart/Item.vue")['default']>
export const LazyCartSummary: LazyComponent<typeof import("../components/Cart/Summary.vue")['default']>
export const LazyCloudinaryFileUpload: LazyComponent<typeof import("../components/CloudinaryFileUpload.vue")['default']>
export const LazyCloudinaryImageUpload: LazyComponent<typeof import("../components/CloudinaryImageUpload.vue")['default']>
export const LazyDataTable: LazyComponent<typeof import("../components/DataTable.vue")['default']>
export const LazyFileUpload: LazyComponent<typeof import("../components/FileUpload.vue")['default']>
export const LazyFilter: LazyComponent<typeof import("../components/Filter.vue")['default']>
export const LazyHeading: LazyComponent<typeof import("../components/Heading.vue")['default']>
export const LazyMobileFilters: LazyComponent<typeof import("../components/MobileFilters.vue")['default']>
export const LazyModal: LazyComponent<typeof import("../components/Modal.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../components/Navbar.vue")['default']>
export const LazyAuthState: LazyComponent<typeof import("../node_modules/nuxt-auth-utils/dist/runtime/app/components/AuthState.vue")['default']>
export const LazyCldImage: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldImage.vue")['default']>
export const LazyCldMediaLibrary: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue")['default']>
export const LazyCldOgImage: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue")['default']>
export const LazyCldProductGallery: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue")['default']>
export const LazyCldUploadButton: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue")['default']>
export const LazyCldUploadWidget: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue")['default']>
export const LazyCldVideoPlayer: LazyComponent<typeof import("../node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldVideoPlayer.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyAvatar: LazyComponent<typeof import("../components/ui/avatar/index")['Avatar']>
export const LazyAvatarFallback: LazyComponent<typeof import("../components/ui/avatar/index")['AvatarFallback']>
export const LazyAvatarImage: LazyComponent<typeof import("../components/ui/avatar/index")['AvatarImage']>
export const LazyBadge: LazyComponent<typeof import("../components/ui/badge/index")['Badge']>
export const LazyButton: LazyComponent<typeof import("../components/ui/button/index")['Button']>
export const LazyCard: LazyComponent<typeof import("../components/ui/card/index")['Card']>
export const LazyCardContent: LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
export const LazyCardDescription: LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
export const LazyCardFooter: LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
export const LazyCardHeader: LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
export const LazyCheckbox: LazyComponent<typeof import("../components/ui/checkbox/index")['Checkbox']>
export const LazyDialog: LazyComponent<typeof import("../components/ui/dialog/index")['Dialog']>
export const LazyDialogClose: LazyComponent<typeof import("../components/ui/dialog/index")['DialogClose']>
export const LazyDialogContent: LazyComponent<typeof import("../components/ui/dialog/index")['DialogContent']>
export const LazyDialogDescription: LazyComponent<typeof import("../components/ui/dialog/index")['DialogDescription']>
export const LazyDialogFooter: LazyComponent<typeof import("../components/ui/dialog/index")['DialogFooter']>
export const LazyDialogHeader: LazyComponent<typeof import("../components/ui/dialog/index")['DialogHeader']>
export const LazyDialogScrollContent: LazyComponent<typeof import("../components/ui/dialog/index")['DialogScrollContent']>
export const LazyDialogTitle: LazyComponent<typeof import("../components/ui/dialog/index")['DialogTitle']>
export const LazyDialogTrigger: LazyComponent<typeof import("../components/ui/dialog/index")['DialogTrigger']>
export const LazyDropdownMenu: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazyFormControl: LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
export const LazyFormDescription: LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
export const LazyFormItem: LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
export const LazyFormLabel: LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
export const LazyFormMessage: LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
export const LazyFORMITEMINJECTIONKEY: LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
export const LazyFormField: LazyComponent<typeof import("../components/ui/form/index")['FormField']>
export const LazyFormFieldArray: LazyComponent<typeof import("../components/ui/form/index")['FormFieldArray']>
export const LazyForm: LazyComponent<typeof import("../components/ui/form/index")['Form']>
export const LazyInput: LazyComponent<typeof import("../components/ui/input/index")['Input']>
export const LazyLabel: LazyComponent<typeof import("../components/ui/label/index")['Label']>
export const LazySelect: LazyComponent<typeof import("../components/ui/select/index")['Select']>
export const LazySelectContent: LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
export const LazySelectGroup: LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
export const LazySelectItem: LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
export const LazySelectItemText: LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
export const LazySelectLabel: LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
export const LazySelectScrollDownButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
export const LazySelectScrollUpButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
export const LazySelectSeparator: LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
export const LazySelectTrigger: LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
export const LazySelectValue: LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
export const LazySeparator: LazyComponent<typeof import("../components/ui/separator/index")['Separator']>
export const LazySheet: LazyComponent<typeof import("../components/ui/sheet/index")['Sheet']>
export const LazySheetClose: LazyComponent<typeof import("../components/ui/sheet/index")['SheetClose']>
export const LazySheetContent: LazyComponent<typeof import("../components/ui/sheet/index")['SheetContent']>
export const LazySheetDescription: LazyComponent<typeof import("../components/ui/sheet/index")['SheetDescription']>
export const LazySheetFooter: LazyComponent<typeof import("../components/ui/sheet/index")['SheetFooter']>
export const LazySheetHeader: LazyComponent<typeof import("../components/ui/sheet/index")['SheetHeader']>
export const LazySheetTitle: LazyComponent<typeof import("../components/ui/sheet/index")['SheetTitle']>
export const LazySheetTrigger: LazyComponent<typeof import("../components/ui/sheet/index")['SheetTrigger']>
export const LazyTable: LazyComponent<typeof import("../components/ui/table/index")['Table']>
export const LazyTableBody: LazyComponent<typeof import("../components/ui/table/index")['TableBody']>
export const LazyTableCaption: LazyComponent<typeof import("../components/ui/table/index")['TableCaption']>
export const LazyTableCell: LazyComponent<typeof import("../components/ui/table/index")['TableCell']>
export const LazyTableEmpty: LazyComponent<typeof import("../components/ui/table/index")['TableEmpty']>
export const LazyTableFooter: LazyComponent<typeof import("../components/ui/table/index")['TableFooter']>
export const LazyTableHead: LazyComponent<typeof import("../components/ui/table/index")['TableHead']>
export const LazyTableHeader: LazyComponent<typeof import("../components/ui/table/index")['TableHeader']>
export const LazyTableRow: LazyComponent<typeof import("../components/ui/table/index")['TableRow']>
export const LazyTextarea: LazyComponent<typeof import("../components/ui/textarea/index")['Textarea']>
export const LazyToast: LazyComponent<typeof import("../components/ui/toast/index")['Toast']>
export const LazyToastAction: LazyComponent<typeof import("../components/ui/toast/index")['ToastAction']>
export const LazyToastClose: LazyComponent<typeof import("../components/ui/toast/index")['ToastClose']>
export const LazyToastDescription: LazyComponent<typeof import("../components/ui/toast/index")['ToastDescription']>
export const LazyToaster: LazyComponent<typeof import("../components/ui/toast/index")['Toaster']>
export const LazyToastProvider: LazyComponent<typeof import("../components/ui/toast/index")['ToastProvider']>
export const LazyToastTitle: LazyComponent<typeof import("../components/ui/toast/index")['ToastTitle']>
export const LazyToastViewport: LazyComponent<typeof import("../components/ui/toast/index")['ToastViewport']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
