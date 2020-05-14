import React from 'react'
import './TodoList.css'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'


function TodoList(props) {
    return (
        <ul>
            { props.todos.map((todo,index) => {
                // нужно давать всегда уникальный key каждому атребуту
                return (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        index={index} 
                        onChange={props.onToggle}
                    />
                )
            }) }
        </ul>
    )
}

TodoList.propsTypes = {
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default TodoList