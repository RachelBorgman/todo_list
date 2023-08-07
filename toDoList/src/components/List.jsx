const List = (props) => {

    const { allItems, deleteItem, handleComplete } = props;

    // const [isComplete, setIsComplete] = useState(false);
    // const handleComplete = (e) => {
    //     setIsComplete(e.target.value);
    // const handleComplete = (checkbox) => {
    //     if (checkbox.checked == true){
    //         setIsComplete(true)
    //     }
    // }
    

    return (
        <>
            {
                allItems.map((item, index) => (
                    <div key={index} className='item'>
                        <p className={ item.isCompleted ? "completedCheckbox" : "" }>
                        {item.itemName}</p>
                        <input type="checkbox" id="checkbox" onChange={ () => handleComplete(item)}/>
                        <button onClick = {(e) => deleteItem(index)}>Delete</button>
                    </div>
                ))
            }
        </>
    )

}

export default List