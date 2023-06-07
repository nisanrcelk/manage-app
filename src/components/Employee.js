import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import EditForm from "./EditForm";


const Employee = ({ employee }) => {
    //iki parametre alır birinci verilerdir eldeki veriler ikinci font
    //useState array döner

    const { deleteEmployee } = useContext(EmployeeContext)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    useEffect(() => {
        handleClose();
    }, [employee])


    return (
        <>
            <td> {employee.name} </td>
            <td> {employee.email} </td>
            <td>{employee.address} </td>
            <td>{employee.phone} </td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            EditX
                        </Tooltip>
                    }>
                    <button onClick={(handleShow)} className="btn text-warning btn-act" ><i className="material-icons" >&#xE872;</i></button>

                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            DeleteX
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" ><i className="material-icons">&#xE872;</i></button>

                </OverlayTrigger>

            </td>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Update Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} ></EditForm>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} > Close Modal </Button>
                </Modal.Footer>
            </Modal>

        </>


    )
}
export default Employee;