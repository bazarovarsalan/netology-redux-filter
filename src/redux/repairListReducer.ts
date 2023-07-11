import { IStateList, IAction } from "../types/types";

const initState = {
    list: [],
    filterState: [] 
}



export const repairListReducer = (state:IStateList = initState, action: IAction) => {
    switch (action.type) {
        case 'PUSH_REPAIR': 
        state = {...state, list: [...state.list, action.payload], filterState: state.list }
            return {...state, filterState: state.list }

        case 'REMOVE_REPAIR':
            return {...state, list: state.list.filter(item => item.id !== action.payload.repairItem.id), filterState: state.list}
 
        case 'EDIT_REPAIR':
            return {... state, list: state.list.map(item => item.id === action.payload.repairItem.id ? item = action.payload.repairItem : item), filterState: state.list}

        case 'FILTER':
            const regExp = new RegExp(action.payload.filterVal, 'gi')
            state = {...state, filterState: state.list}
            return {...state, filterState: state.filterState.filter((item) => item.typeService?.match(regExp))}
                

        default:
             return state;
    }
   
}
