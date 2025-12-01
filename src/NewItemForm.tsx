import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./style";
import { useFocus } from "./utils/useFocus";

// Declare the component props
interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus(); //This is the hook that we create before

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef} // We use the hook here 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => props.onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
