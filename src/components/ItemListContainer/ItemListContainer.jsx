import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
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
                <ItemCount initial={1}/>
            </div>
        </>
    )
}

export default ListContainer;