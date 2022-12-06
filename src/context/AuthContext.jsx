import { createContext, useState } from "react";

export const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const [data, setData] = useState(false);

  function signIn({ emailOrPhone, password }) {
  setData({ user: { emailOrPhone, password }, token: '$838Y*&@#87g82344tokah98en'})
  }

  function signOut() {
    setData(false)
  }

  function updateUser(userUpdated) {
    userUpdated.emailOrPhone = String(userUpdated.emailOrPhone).trim().toLowerCase()
    setData({ user: userUpdated, token: data.token})
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>
      { children }
    </AuthContext.Provider>
  )
}