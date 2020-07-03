import { app } from '../../store'

interface User {
  username: string
  password: string
}

interface LoginState {
  loading: boolean
  user: User | null
}

const initialState: LoginState = {
  user: null,
  loading: true,
}

export const LoginModel = app.model('Login', initialState)

export const [loginMutatoins] = LoginModel.mutations({
  setUser: (user: User | null) => (s) => {
    s.user = user
    s.loading = false
    return s
  },
})
