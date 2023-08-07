import React, { useState } from  'react';

const ListForm = (props) => {

    const { allItems, setAllItems, updateToDos } = props;

    const createListItem = (e) => {
        e.preventDefault();

        updateToDos({itemName:itemName, isComplete:false})
        setItemName("")
        // allItems.push(newListItem)
        // console.log(newListItem)
        // setAllItems(allItems.push(newListItem))
    }

    const [itemName, setItemName] = useState("");
    // const handleName = (e) => {
    //     setItemName(e.target.value);
    // }

    return(
        <div>
            <form onSubmit= {createListItem}>
                    <label>List Item</label>
                    <input type="text" id="todo_item_{index}" value={itemName} onChange={ (e) => setItemName(e.target.value)}/>
                <input type="submit" value="Create List Item"/> 
            </form>
        </div>
    )
}

export default ListForm;