export type ClassType = string | false | undefined
export const clsx = (...classes: ClassType[]) => classes.filter(Boolean).join(' ')
