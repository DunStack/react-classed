import { createElement } from 'react'
import { clsx } from './utils'

type IntrinsicElementsKey = keyof JSX.IntrinsicElements
type ClassableIntrinsicElementsKey = {
  [K in IntrinsicElementsKey]: JSX.IntrinsicElements[K] extends { className?: string } ? K : never
}[IntrinsicElementsKey]

export function classed<P extends { className?: string}>(Component: React.ComponentType<P>, base: string): React.ComponentType<P>
export function classed<T extends ClassableIntrinsicElementsKey>(Component: T, base: string): React.ComponentType<JSX.IntrinsicElements[T]>
export function classed<P extends { className?: string }>(Component: React.ElementType<P>, base: string) {
  function ClassedComponent(props: P) {
    return createElement(Component, {
      ...props,
      className: clsx(base, props.className)
    })
  }

  return ClassedComponent
}