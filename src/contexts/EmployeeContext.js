  import {createContext,useState} from 'react';
  import { v4 as uuidv4 } from 'uuid';

  export const EmployeeContext= createContext();

  const EmployeeContextProvider = (props) =>{
    //functional component yazıyoruz className değil !
    
    //children componentlerle paylaşmak istediğimiz verileri alıyoruz provider ile
    const [employees,setEmployees]=useState([
        {id:uuidv4(),name:'Nisanur Çelik',email:'nisancliik7@gmail.com',address:'Eryaman',phone:'111111'},
        {id:uuidv4(),name:'Buğlem Gören',email:'buglem@gmail.com',address:'Bilkent',phone:'22222222'}
    ])

    const addEmployee = (name,email,address,phone) =>{
    setEmployees([...employees,{id:uuidv4(),name,email,address,phone}])
    //... ilk değeri alıyor sonrakileri ekliyor

    }
    return (
        <EmployeeContext.Provider value={{employees,addEmployee}}>
            {props.children}
        </EmployeeContext.Provider>

        //burada providerın sarmaladığı componentin value kullanabilmesi için prop ile geçiyoruz

    )
  }
  export default EmployeeContextProvider;