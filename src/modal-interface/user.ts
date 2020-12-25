import { Login } from "./app-type"

export namespace UserLogin  {
  export const apiName  : string  = 'login'

  export type params = {
    userLogin : Login
  }

  export type retval = {
  }
}