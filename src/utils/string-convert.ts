export const toHexString = (n: number, l = 8) => n.toString(16).padStart(l, '0')
export const toBinString = (n: number, l = 32) => n.toString(2).padStart(l, '0')

//comment