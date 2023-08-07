import { useState } from 'react'
import './App.css'
import ListForm from './components/ListForm'
import List from './components/List'

function App() {
  // const [count, setCount] = useState(0)

  const listArray = [
    { itemName: "Pass Python Exam", isCompleted: false},
    { itemName: "Make Dinner", isCompleted: false},
    { itemName: "Item 3", isCompleted: false}
  ]

  const [ allItems, setAllItems] = useState(listArray);

  const updateToDos = (newListItem) => {
    setAllItems ((prevItem) =>(
      [...prevItem, newListItem]
    ))
  }

  // const [isComplete, setIsComplete] = useState(false);
  const handleComplete = (listItem) => {
    let updateItems = allItems.map((item) => {
      if (item === listItem) {
        let newItem = {...item}
        newItem.isCompleted = !item.isCompleted
      return newItem
      }
      else {return item}})
    setAllItems(updateItems)
  }
  // const deleteItem = (index) => {
  //   const itemToRemove = index
  //   const updatedItems = allItems.filter((index) => index == itemToRemove)
  //   setAllItems(updatedItems)

  const deleteItem = (listItem) => {
    const updatedItems = allItems.filter((item) => {
      return allItems.indexOf(item) !== listItem;
    })
    setAllItems(updatedItems)
}

  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <ListForm allItems = {allItems} setAllItems = { setAllItems } updateToDos = {updateToDos}></ListForm>
        <hr></hr>
        <div className='list'>
          <h2>List Items</h2>
          <List  allItems = {allItems} setAllItems = { setAllItems } deleteItem={deleteItem} handleComplete={handleComplete}></List>
        </div>
      </div>
    </>
  )
}

export default App
