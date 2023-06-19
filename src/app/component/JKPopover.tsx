import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FA } from "tonwa-com";

function JKPopover({ ...props }) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [selectValue, setSelectValue] = useState("");
    const ref = useRef(null);

    const handleClick = (event: any) => {
        setShow(!show);
        setTarget(event.target);
    };

    const handleCancel = () => {
        props.printTaskFilter("");
        setShow(false);
    };

    const handleSeletChange = (event: any) => {
        setSelectValue(event.target.value);
    };

    return (
        <span ref={ref}>
            <small onClick={handleClick}>
                <FA name="filter" size="lg" />
            </small>

            <Overlay
                show={show}
                target={target}
                placement="right"
                rootClose={true}
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Body>
                        <Form.Select
                            size="sm"
                            onChange={handleSeletChange}
                            value={selectValue}
                        >
                            <option value="" disabled></option>
                            {props.options.map((v: string) => (
                                <option key={v}>{v}</option>
                            ))}
                        </Form.Select>
                        <br />
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {
                                props.printTaskFilter(selectValue);
                            }}
                        >
                            搜索
                        </Button>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={handleCancel}
                        >
                            取消
                        </Button>
                    </Popover.Body>
                </Popover>
            </Overlay>
        </span>
    );
}

export default JKPopover;
