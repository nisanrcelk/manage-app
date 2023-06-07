
import Employee from "./Employee";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from 'react-bootstrap'
import AddForm from "./AddForm";

const Employeelist = () => {

    const { employees } = useContext(EmployeeContext)
    //parametre olarak contextin kendisini gönderiyoruz distruct yöntemi sadece kullanıcak veriyi eşitliyoruz
    //değişiklik olduğunda tekrar render ediyor
    const [show, setShow] = useState(false)   //modalin gösterip gösterilmeyeceği state olarak tanımlandı
    //fonk tanımlarken () kullanıyoruz her birinde const ile tanımlıyoruz
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    // <> bu kapsayıcı görevi görüyor

    // useEffect(() => {
    //     handleClose();
    // }, [employees])
    // employees arrayinde değişiklik olduğunda bu fonku çalıştırmasını sağlar.

    // bir değişikliğe tepki olarak tekrar render edilmesi her güncellemeden sonra (useEffect)

    useEffect(()=>{
        console.log("component rendered")
    })

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

                    <Employee employees={employees}></Employee>
                </tbody>
            </table>

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
        </>
    )
}
export default Employeelist;