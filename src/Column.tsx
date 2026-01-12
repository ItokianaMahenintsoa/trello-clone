import React, { Children } from "react";
import { ColumnContainer, ColumnTitle } from "./style";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { moveList, addTask } from "./state/actions";
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts"; //Typescript package to control functions executions frequencies 

// In typescript, we need to provide a type or an interface to define the form of props objects
// interface ColumnProps {
//     text?: string;  //to make props optional, we can use the '?' symbol
// }

type ColumnProps = {
    text: string
    id: string
    // index: number
    // children?: React.ReactNode;
}

export const Column = ({text,  id} : React.PropsWithChildren<ColumnProps>) => {
    const {draggedItem, getTaskByListId, dispatch} = useAppState() //To know what are we dragging
    const tasks = getTaskByListId(id)
    const ref = useRef<HTMLDivElement>(null)
    const {drag} = useItemDrag({type : "COLUMN", id, text}) //It means this is the column and we passed ID and Text Proprieties with it 
    const [, drop] = useDrop({
        accept: "COLUMN",
        hover: throttle(200, () => {
            if(!draggedItem){
                return
            }
            if(draggedItem.type === "COLUMN"){
                if(draggedItem.id === id){
                    return
                }
                dispatch(moveList(draggedItem.id, id))
            }
        })
    }) 

    drag(drop(ref)); 
    
    return (
        <ColumnContainer ref={ref}>
            <ColumnTitle>{text} </ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id}></Card>
            ))}
            <AddNewItem toggleButtonText="+Add another task" onAdd={(text) => dispatch(addTask(text, id))} dark/>
        </ColumnContainer>
    )
}