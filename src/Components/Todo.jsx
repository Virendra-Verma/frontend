import React from 'react'

const Todo = () => {
    const addTodo = (e)=>{
        console.log(e.code);
        if(e.code=='Enter'){
            console.log('task added');
        }
    }
  return (
    <div>
        <h1 className='text-center display-4 fw-bold my-5'>Todo App</h1>
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <input type="text" className="form-control" onKeyDown={addTodo}/>
                </div>
                <div className='card-body'></div>
            </div>
        </div>
    </div>
  )
}

export default Todo