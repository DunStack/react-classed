export interface Variant<T extends keyof any> {
  values: Record<T, string>
  required?: boolean
  default?: T
}

interface VariantOptions<T extends keyof any> {
  default?: T
}

export default function variant<T extends keyof any>(values: Record<T, string>, opts?: VariantOptions<T>): Variant<T> {
  return {
    values,
    ...opts
  }
}