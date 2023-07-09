import { TRepairList, IAction } from "../types/types";


export const repairListReducer = (state:TRepairList[] | [] = [], action: IAction) => {
    switch (action.type) {
        case 'PUSH_REPAIR': 
            return [...state, action.payload]

        case 'REMOVE_REPAIR':
            return state.filter(item => item.id !== action.payload.repairItem.id)
 
        case 'EDIT_REPAIR':
            return state.map(item => item.id === action.payload.repairItem.id ? item = action.payload.repairItem : item)

        case 'FILTER':
            const re = new RegExp(action.payload.filterVal, 'gi')
            return state.map(item => item.match(re))

        default:
             return state;
    }
}
