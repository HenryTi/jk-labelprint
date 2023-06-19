import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function JKModal({ ...props }) {
    const [show, setShow] = useState(false);

    const handleConfirm = async () => {
        await props.printTaskFinish();
        setShow(false);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" size="sm" onClick={handleShow}>
                已打印
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>打印状态确认</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`请确认打印任务${props?.productId}是否完成 ?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        关闭
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        确认
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JKModal;
