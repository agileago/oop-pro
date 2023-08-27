export function delay(timeout = 300) {
  return new Promise(r => setTimeout(r, timeout))
}
