import { useState } from "react"
import { AddItemButton } from "./style"
import { NewItemForm } from "./NewItemForm"

type AddNewItemProps = {
    onAdd(text: string): void  //call when we click create button
    toggleButtonText: string   //is the texte we'll rendrer when this component is a button
    dark?: boolean          //A flag that we'll pass to the styled components
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false)
    const {onAdd, toggleButtonText, dark} = props

    if(showForm){
        return (
            <NewItemForm onAdd={text => {
                onAdd(text)
                setShowForm(false)
            }}/>
        )
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}