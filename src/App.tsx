
import './App.css'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import {IState, TRepairList} from './types/types'



function App() {

  const dispatch = useDispatch();
  const {typeService, price, id} = useSelector((state:IState) => state.repairForm);
  const list = useSelector((state:IState) => state.repairList);
  const checkEdit = useSelector((state:IState) => state.checkEdit)
  const filterValue = useSelector((state) => state.filterValue)
  
  


  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      if (name === 'typeService') {
          dispatch({
            type: 'CHANGE_TYPESERVICE',
            payload: {typeService: value}
          })
      } else {
        dispatch({
          type: 'CHANGE_PRICE',
          payload: {price: value}
        })
      }
    }

    const onSubmit = (event:React.MouseEvent) => {
        event.preventDefault();
        if (checkEdit) {
          dispatch({
            type:'EDIT_REPAIR',
            payload: { repairItem : {id: id, 
              typeService: typeService, 
              price: price}
          }})
        } else {
        dispatch({
          type:'PUSH_REPAIR',
          payload: {id: new Date().toISOString(), 
            typeService: typeService, 
            price: price}
        })
      }
        dispatch({
          type: 'CHANGE_TYPESERVICE',
          payload: {typeService: ''}
        });
    
        dispatch({
          type: 'CHANGE_PRICE',
          payload: {price: 'price'}
        })

        dispatch({
          type: 'CHECK_FALSE'
        })
        
    }
  

    const onDelete = (id:string|undefined) => {
      if (!checkEdit) {
          dispatch({
            type:'REMOVE_REPAIR',
            payload: {id: id}
            
          })
      } else {
        window.alert(
          'При редактировании невозможно удалить данный объект.'
        );
        return;
      }
  }


  const onEdit = (item:TRepairList) => {
    dispatch({
      type: 'CHANGE_TYPESERVICE',
      payload: {typeService: item.typeService}
    });

    dispatch({
      type: 'CHANGE_PRICE',
      payload: {price: item.price}
    })

    dispatch({
      type: 'CHECK_TRUE'
    })

    dispatch({
      type: 'EDDITTED_ID',
      payload: {id: item.id}
    });
}


const onCancel = () => {
  dispatch({
    type: 'CHANGE_TYPESERVICE',
    payload: {typeService: ''}
  });

 dispatch({
  type: 'CHANGE_PRICE',
  payload: {price: ''}
})

dispatch({
  type: 'CHECK_FALSE'
})
}


const handleChangeFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
  const {value} = event.target;
        dispatch({
          type: 'CHANCGE_FILTER_VALUE',
          payload: value
        })
        dispatch({
            type:'FILTER',
            payload: {filterVal:filterValue}
          })

}


  return (
    <div className='App'>
        <form className='form'>
        <div className="typeService-input">
          <div className="typeService-form__item">
          <input
            className="typeService-form__input"
            type="text"
            name="typeService"
            value={typeService}
            onChange={handleChange}
            
          />
        </div>
        <div className="typeService-form__item">
          <input
            className="typeService-form__input"
            type="number"
            name="price"
             value={price}
            onChange={handleChange}
          />
        </div>
        <div className="typeService-form__item">
          <button className="typeService-form__button" type="submit" onClick={onSubmit}>
            Save
          </button>
          {checkEdit && (
        <button className="typeService-form__button"  type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
        </div>
      </div>
    </form>
    <h3 className='filterHeader'>Фильтр</h3>
    <form className='form'>
          <input
            className="filter__input"
            type="text"
            name="filter"
            value={filterValue.value}
            onChange={handleChangeFilter}
          />
    </form >

    <ul>
      {list && list.map((item) => {
        return <li className='item' id={item.id} key={item.id}>{item.typeService} {item.price + '  '}
        <button >
            <EditIcon fontSize="small"  onClick={()=> {onEdit(item)}}/>
          </button>
          <button >
            <CloseIcon fontSize="small" onClick={()=> {onDelete(item.id)}}/>
          </button>
              </li>
      })} 
    </ul>
    </div>
  )
}

export default App
