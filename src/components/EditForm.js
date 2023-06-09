import {Form,Button} from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext ,useState} from 'react';

const EditForm = ({theEmployee})=>{

    const {updateEmployee} = useContext(EmployeeContext);
    const employee = theEmployee;
    const id = employee.id;

    const [name,setName]= useState(employee.name)
    const [email,setEmail]= useState(employee.email)
    const [address,setAddress]= useState(employee.address)
    const [phone,setPhone]= useState(employee.phone)

    const updatedEmployee={id,name,email,address,phone}
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateEmployee(id,updatedEmployee)
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Control type='text' placeholder='Name' value={name} required  name='name' onChange={(e)=>{setName(e.target.value)}} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='email' placeholder='Email' value={email} required  name='email' onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='textarea' placeholder='Address' value={address}  name='address' rows={3} onChange={(e)=>setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='Phone'  name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </Form.Group>

            <Button variant="success" type="submit" block>Edit Employee</Button>
        </Form>
    )
}

export default EditForm;