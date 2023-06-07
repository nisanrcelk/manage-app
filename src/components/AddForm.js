import {Form,Button} from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext ,useState} from 'react';

const AddForm = ()=>{

    const {addEmployee} = useContext(EmployeeContext);
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [address,setAddress]=useState("");
    // const [phone,setPhone]=useState("");

    const [newEmployee,setEmployee]= useState({
        name:'',email:'',address:'',phone:''
    })

    const onInputChange = (e) =>{
        setEmployee({...newEmployee, [e.target.name]:e.target.value})
    }

    const {name,email,address,phone}=newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault(); //default davranışını engeller
        addEmployee(name,email,address,phone)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type='text' placeholder='Name' required value={name} name='name' onChange={e=> onInputChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='email' placeholder='Email' required value={email} name='email' onChange={e=>onInputChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='textarea' placeholder='Address' value={address} name='address' onChange={e=>onInputChange(e)}  rows={3} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='Phone' value={phone} name='phone' onChange={e=>onInputChange(e)} />
            </Form.Group>

            <Button variant="success" type="submit" block>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;