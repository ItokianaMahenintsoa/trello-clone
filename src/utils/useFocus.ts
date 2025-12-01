import { useEffect, useRef } from "react"


// Goal : to get access to the rendered input element
// So Typescript can't know what the element type => we need to tell it what type is 
// In our case => we work with input => so the elementType is => HTMLInputElement
export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.focus()
    })
    return ref;
}