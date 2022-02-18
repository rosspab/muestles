import { FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

function ItemCount({stock, initial, onAdd}){
    const [cantidad, setCantidad] = useState(initial)
    function sumar_uno(){
        if(cantidad > 0){
            setCantidad(cantidad + 1)
        }  
    }
    function restar_uno(){
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        } 
    }
    return(
        <div className="ItemCount">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" onClick={restar_uno}>-</InputGroup.Text>
                <FormControl
                placeholder={cantidad}
                aria-label="Amount"
                aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1" onClick={sumar_uno}>+</InputGroup.Text>
            </InputGroup>
        </div>
        
    )
}

export default ItemCount;