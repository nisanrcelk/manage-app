
import Employee from "./Employee";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal,Alert } from 'react-bootstrap'
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const Employeelist = () => {

    const { employees } = useContext(EmployeeContext)
    //parametre olarak contextin kendisini gönderiyoruz distruct yöntemi sadece kullanıcak veriyi eşitliyoruz
    //değişiklik olduğunda tekrar render ediyor
    const [show, setShow] = useState(false)   //modalin gösterip gösterilmeyeceği state olarak tanımlandı
    //fonk tanımlarken () kullanıyoruz her birinde const ile tanımlıyoruz
    const [currentPage,setCurrentPage]=useState(1)
    const [employeesPerPage]=useState(1);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    // <> bu kapsayıcı görevi görüyor
    const [showAlert,setShowAlert]=useState(false)
    const handleShowAlert=()=>{
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },2000)
    }

    useEffect(() => {
        handleClose();
        return () => {
            //callback function oldu handleClosedan sonra bunun çalışması için 
            handleShowAlert();
        }
    }, [employees])
    // employees arrayinde değişiklik olduğunda bu fonku çalıştırmasını sağlar.

    // bir değişikliğe tepki olarak tekrar render edilmesi her güncellemeden sonra (useEffect)
    // const myRef=useRef(null)

    // const onButtonClick = () =>{
    //     myRef.current.focus()
    // }
    //id yerine ref kullanmamızın sebebi component kendisini tekrar render etmiyo useRef sağlıyor
    //id kullansaydık tekrar render edilirdi

    const indexOfLastEmployee= currentPage * employeesPerPage ;
    const indexOfFirstEmployee=indexOfLastEmployee-employeesPerPage;
    const currentEmployees =employees.slice(indexOfFirstEmployee,indexOfLastEmployee)
    const totalPagesNum=Math.ceil(employees.length/employeesPerPage)

    
    return ( 
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

             <Alert show={showAlert} variant="success" onClose={()=>setShowAlert(false)} dismissible>
                Employee List successfully updated!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.sort((a,b)=>a.name.localeCompare(b.name)).map((employee)=>(
                       <tr key={employee.id}>
                        <Employee employee={employee}></Employee>

                       </tr> 
                    ))}
                </tbody>
            </table>

        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} employeeNumber={currentEmployees} totalEmployee={employees} ></Pagination>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm></AddForm>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary"> Close Modal </Button>
                </Modal.Footer>
            </Modal>

            {/* <input ref={myRef} type="text" ></input>
            <button onClick={onButtonClick} >Focus İnput</button> */}
        </>
    )
}
export default Employeelist;

//localeCompare iki stringi birbiri ile karşılaştırıp sıralama yapar. yine sort ile birlikte kullanılır
// a.name < b.name ? -1 : 1 bu da aynı görevi yapar