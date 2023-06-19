import { BRAND, LANGUAGE } from "app/constant/constant";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export function JKTooltips({ ...props }) {
    const {
        labelId,
        labelName,
        language,
        brand,
        width,
        height,
        GHSPictogramsCount,
    } = props;
    return (
        <OverlayTrigger
            trigger="click"
            placement="right"
            popperConfig={props}
            data-trigger="focus"
            rootClose={true}
            overlay={
                <Popover id="popover-basic">
                    <Popover.Header as="h3">{labelName}</Popover.Header>
                    <Popover.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{`品牌: ${BRAND[brand]} `}</ListGroup.Item>
                            <ListGroup.Item>{`语言: ${LANGUAGE[language]} `}</ListGroup.Item>
                            <ListGroup.Item>{`危标数: ${GHSPictogramsCount} `}</ListGroup.Item>
                            <ListGroup.Item>{`尺寸: ${width}x${height}mm `}</ListGroup.Item>
                            {/* <ListGroup.Item>{`高度: ${height}mm `}</ListGroup.Item> */}
                        </ListGroup>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button variant="outline-secondary" size="sm">
                {props.labelName}
            </Button>
        </OverlayTrigger>
    );
}
