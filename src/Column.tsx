import React from "react";
import { ColumnContainer, ColumnTitle } from "./style";

// In typescript, we need to provide a type or an interface to define the form of props objects
interface ColumnProps {
    text?: string;  //to make props optional, we can use the '?' symbol
}

export const Column = ({text} : ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text} </ColumnTitle>
        </ColumnContainer>
    )
}