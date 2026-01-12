import { useDrag } from "react-dnd";
import { useAppState } from "../AppStateContext";
import { DragItem } from "../DragItem";
import { setDraggeditem } from "../state/actions";

export const useItemDrag = (item : DragItem) => {
    const {dispatch} = useAppState()
    const [, drag] = useDrag({
        type: item.type,  //TYPE Will be CARD or COLUMN
        item: () => {  
            dispatch(setDraggeditem(item))
            return item
        },
        end : () => dispatch(setDraggeditem(null))
        
    })
    return {drag}
}