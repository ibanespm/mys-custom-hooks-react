export const todoReducer =(initialState=[], action)    =>{
    switch(action.type){
        case '[todo] add todo':
            return [...initialState, action.payload];
        case "[todo] delete todo":
            return initialState.filter(todo =>todo.id !== action.payload);
        
        case "[todo] toggle todo":
            return initialState.map(todo => 
                (todo.id === action.payload)
                ? {...todo, done:!todo.done}
                : todo
            );
        default:
          return initialState;  
    }
}
