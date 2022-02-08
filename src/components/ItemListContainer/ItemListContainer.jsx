import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './ItemList.css';

const ListContainer = () => {
    return(
        <>
            <br></br>
            <div className="ListContainer">
                <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    Primer Item
                </ListGroup.Item>
                <ListGroup.Item as="li">Segundo item</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    Tercer Item
                </ListGroup.Item>
                <ListGroup.Item as="li">Cuarto Item</ListGroup.Item>
                </ListGroup>
            </div>
        </>
    )
}

export default ListContainer;