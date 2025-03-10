export function getLocalStorageData<T>(key: string) {
  if (process.client) {
    const data = localStorage.getItem(key)
    return data ? (JSON.parse(data) as T) : null
  }
}

export function setLocalStorageData<T>(key: string, data: T) {
  if (process.client) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
