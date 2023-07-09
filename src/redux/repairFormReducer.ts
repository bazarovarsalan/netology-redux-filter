import { TRepairPhone, ActionForm } from "../types/types";



const initState = {typeService: '', price: '', id: undefined};


export const repairFormReducer = (state:TRepairPhone = initState, action:ActionForm) => {
    switch (action.type) {
        case 'CHANGE_TYPESERVICE': 
            return {...state, typeService: action.payload.typeService}

        case 'CHANGE_PRICE': 
            return {...state, price: action.payload.price}

        case 'EDDITTED_ID': 
            return {...state, id: action.payload.id}

        default:
             return state;
    }
}
