export const setStoreItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getStoreItem = (key) => {
  try {
    const data = localStorage.getItem(key)
    if (!data) {
      return null
    }
    return JSON.parse(data)
  } catch (error) {
    return null
  }
}

export const removeStoreItem = (key) => {
  localStorage.removeItem(key)
}
