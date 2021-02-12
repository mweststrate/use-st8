import { useState } from "react"

export type St8<T> = {
    (): T
    (newValue: T | ((current: T) => T)): void
}

export function useSt8<T>(initial: (() => T) | T): St8<T> {
    const [value, setValue] = useState(initial)
    return (...args) => {
        if (args.length === 0) return value
        setValue(args[0])
    }
}

export default useSt8
