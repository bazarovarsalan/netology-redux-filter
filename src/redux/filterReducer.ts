import {IActionFilter} from '../types/types'


const initVal = {value: ''}

export const filterReducer = (state: {value: string} = initVal , action: IActionFilter) => {
    switch (action.type) {
        case 'CHANGE_FILTER_VALUE': 
        return {...state, value: action.payload}

        default: return state
    }
}

