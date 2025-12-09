type Item = {
    id : string
}


// We will use a type variable TItem extends Item ==== we constrained our generic to have 
// the fields that are defined on the Item type, in this cas the id field
export const findItemIndexById = <TItem extends Item>(
    items: TItem[],
    id: string
) => {
    return items.findIndex((item: TItem) => item.id === id)
}


// try to pass in array of objets that don't have the id field
// const itemsWithoutId = [{text: "test"}]
// findItemIndexById(itemsWithoutId, "testId")
// Result : we have an error here 