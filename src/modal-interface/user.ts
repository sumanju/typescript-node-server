import { Login, Bookdtl } from "./app-type"

export namespace UserLogin  {
  export const apiName  : string  = 'login'

  export type params = {
    userLogin : Login
  }

  export type retval = {
  }
}

export namespace Book  {
  export const apiName  : string  = 'book'

  export type params = {
  }

  export type retval = {
    book  : Bookdtl
  }
}