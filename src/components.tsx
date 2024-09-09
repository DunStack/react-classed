import classed, { variant } from '../lib/main'

export const Button = classed('button', 'button', {
  variant: variant({
    contained: 'contained',
    outlined: 'outlined'
  }, { default: 'contained'}),
  size: variant({
    lg: 'lg',
    md: 'md',
    sm: 'sm'
  })
})

function UnclassedLink(props: React.ComponentProps<'a'>) {
  return <a {...props} target='_blank' />
}

export const Link = classed(UnclassedLink, 'link')

export const Card = classed('div', 'card')

export const Docs = classed('p', 'read-the-docs')