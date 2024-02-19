const initialState = {
    list: [] // array to store list of tasks
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload; //destructuring payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }]
            }
            case "DELETE    _TODO":
                const newList = state.list.filter((element) => element.id !== action.id);
                return {
                    ...state,
                    list: newList
                }
        default: return state;
    }
}
export default todoReducers;