
export type TRepairPhone = {
    typeService?: string,
    price?:string
  }

  export interface TRepairList extends TRepairPhone {
    id?: string | undefined
  }


  export interface IAction {
    type: string,
    payload: {repairItem: TRepairList,
              filterVal:string
            }
  }

  export interface ActionForm {
    type: string,
    payload: TRepairList;
  }


  export interface IActionEditted {
    type: string,
  }


  export interface IState {
    repairForm: TRepairList,
    repairList: TRepairList[]| [],
    checkEdit: boolean
  }

  export interface IActionFilter {
    type: string,
    payload: String
  }