export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload : {
            id : new Date().getTime().toString(),
            data : data 
        }
    }
} 

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload : {
            id : id
        }
    }
}

export const clearAll = () => {
    return {
        type: 'CLEAR_ALL'
    }
}
// 3 actions required : add task , delete task , clear all tasks