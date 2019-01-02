import { useState } from "react"

function st8() {
    switch(arguments.length) {
        case 0: return this[0]
        case 1: this[1](arguments[0])
        default: throw new Error("Expected 0 or 1 arguments")
    }
}

export function useSt8<T>(initial: (() => T) | T): {
    (): T
    (newValue: T | ((current: T) => T)): void
} {
    return st8.bind(useState(initial))
}

export default useSt8