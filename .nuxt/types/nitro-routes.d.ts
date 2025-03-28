// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/github': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/github.get').default>>>>
    }
    '/api/auth/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/login.post').default>>>>
    }
    '/api/auth/register': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/register.post').default>>>>
    }
    '/api/authors/:slug': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/authors/[slug]/index.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/authors/[slug]/index.get').default>>>>
      'patch': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/authors/[slug]/index.patch').default>>>>
    }
    '/api/authors': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/authors/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/authors/index.post').default>>>>
    }
    '/api/books/:slug': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/books/[slug]/index.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/books/[slug]/index.get').default>>>>
      'patch': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/books/[slug]/index.patch').default>>>>
    }
    '/api/books': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/books/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/books/index.post').default>>>>
    }
    '/api/checkout': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/checkout/index.post').default>>>>
    }
    '/api/genres/:slug': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/genres/[slug]/index.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/genres/[slug]/index.get').default>>>>
      'patch': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/genres/[slug]/index.patch').default>>>>
    }
    '/api/genres': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/genres/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/genres/index.post').default>>>>
    }
    '/api/upload': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/upload/index.delete').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/upload/index.post').default>>>>
    }
    '/api/users': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/index.get').default>>>>
    }
    '/api/webhooks': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/webhooks/index').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/api/_auth/session': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/api/session.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/api/session.get').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}