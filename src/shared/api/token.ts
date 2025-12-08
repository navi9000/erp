const TOKEN_STORAGE_NAME = "erp::jwt"

const formatToken = (input: string | null) => {
  return input ? `Bearer ${input}` : undefined
}

const readToken = () => {
  return localStorage.getItem(TOKEN_STORAGE_NAME)
}

const saveToken = (value: string) => {
  localStorage.setItem(TOKEN_STORAGE_NAME, value)
}

const clearToken = () => {
  localStorage.removeItem(TOKEN_STORAGE_NAME)
}

const isTokenSaved = () => {
  return !!readToken()
}

export { formatToken, readToken, saveToken, clearToken, isTokenSaved }
