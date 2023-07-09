
import {IActionEditted} from '../types/types'


export const checkEditReducer = (state = false, action:IActionEditted) => {
    switch (action.type) {
        case 'CHECK_TRUE': 
            return state = true
        case 'CHECK_FALSE': 
            return state = false
        default:
             return state;
    }
}
