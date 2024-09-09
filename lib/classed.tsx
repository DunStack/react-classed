import { createElement } from 'react'
import { clsx } from './utils'
import type { ClassType } from './utils'
import type { Variant } from './variant'

type IntrinsicElementsKey = keyof JSX.IntrinsicElements
type ClassableIntrinsicElementsKey = {
  [K in IntrinsicElementsKey]: JSX.IntrinsicElements[K] extends { className?: string } ? K : never
}[IntrinsicElementsKey]

type ClassedComponentProps<P, V extends Record<string, Variant<any>>> = P & {
  [K in keyof V]?: keyof V[K]['values']
}

function classed<
  P extends { className?: string}, 
  V extends Record<string, Variant<any>>
>(Component: React.ComponentType<P>, base: string, variants?: V): React.ComponentType<ClassedComponentProps<P, V>>
function classed<
  T extends ClassableIntrinsicElementsKey, 
  V extends Record<string, Variant<any>>
>(Component: T, base: string, variants?: V): React.ComponentType<ClassedComponentProps<JSX.IntrinsicElements[T], V>>
function classed<
  P extends { className?: string }, 
  V extends Record<string, Variant<any>>
>(Component: React.ElementType<P>, base: string, variants?: V) {
  function ClassedComponent(props: ClassedComponentProps<P, V>) {
    const forwardedProps = { ...props }
    const variantClasses: ClassType[] = []
    
    for (const [key, value] of Object.entries(variants || {})) {
      variantClasses.push(value.values[forwardedProps[key] || value.default])
      delete forwardedProps[key]
    }
    
    return createElement(Component, {
      ...forwardedProps,
      className: clsx(base, props.className, ...variantClasses)
    })
  }

  return ClassedComponent
}

export default classed