import { Col, Row} from "react-bootstrap";
import {StoreItem} from "../components/StoreItem";
import storeItemsJSON from "../data/items.json"

export function Store() {

    const storeItems = storeItemsJSON.map(item => (
        <Col key={item.id}>
            <StoreItem {...item} />
        </Col>)
    );

    return(
        <>
            <h1> Store </h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {storeItems}
            </Row>
        </>
    )
}