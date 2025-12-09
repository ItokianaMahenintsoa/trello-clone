import React, { Children } from "react";
import { ColumnContainer, ColumnTitle } from "./style";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { addTask } from "./state/actions";

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
    const {state} = useAppState();
    const {getTaskByListId, dispatch} = useAppState()
    const tasks = getTaskByListId(id)
    
    
    return (
        <ColumnContainer>
            <ColumnTitle>{text} </ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id}></Card>
            ))}
            <AddNewItem toggleButtonText="+Add another task" onAdd={(text) => dispatch(addTask(text, id))} dark/>
        </ColumnContainer>
    )
}