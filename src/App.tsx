import { FormEvent, useState } from 'react'
import './App.css'

interface ToDoList{
  id: number,
  text: string,
  confirm: boolean
}


function App() {
  const [newItem, setNewItem] = useState('')
  const [todoList, setTodoList] = useState<ToDoList[]>([])

  function TodoList(e: FormEvent){
    e.preventDefault()
    setTodoList((current)=>{
      return [...current,{id:Number(crypto.randomUUID()),text:newItem,confirm: true}]
    })
  }

  function deleteTodo(id : number){
    setTodoList((current)=>{
        return current.filter((item)=>{
          item.id !== id
        })
    })
  }
  return (
    <>
    <form onSubmit={TodoList}>
      <h1>To do list</h1>
      <input type="text" placeholder='write' value={newItem} onChange={e => setNewItem(e.target.value)}/>
      <button>Add</button>
    </form>
      {todoList.map((item) =>{
        return<div className='todo-list'>
          <label key={item.id}>
            <input type='checkbox' checked={item.confirm}/>
            {item.text}
          </label>
          <button onClick={()=>deleteTodo(item.id)}>Delete</button>

        </div>
      })}
    </>
  )
}

export default App
