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
    //silmek için filter kullanılır
    const deleteEmployee = (id)=> {

      setEmployees(employees.filter(employee=>employee.id!==id))
    }

    const updateEmployee = (id,updatedEmployee) =>{
      setEmployees(employees.map((employee)=>(employee.id===id ? updatedEmployee : employee)))
    }

    return (
        <EmployeeContext.Provider value={{employees,addEmployee,deleteEmployee,updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>

        //burada providerın sarmaladığı componentin value kullanabilmesi için prop ile geçiyoruz

    )
  }
  export default EmployeeContextProvider;