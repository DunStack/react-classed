import { classed } from '../lib/main'

function UnclassedLink(props: React.ComponentProps<'a'>) {
  return <a {...props} target='_blank' />
}

export const Link = classed(UnclassedLink, 'link')

export const Card = classed('div', 'card')

export const Docs = classed('p', 'read-the-docs')