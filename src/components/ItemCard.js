import react from 'react';

const ItemCard = (props) =>{
    return(
        <div>               
            <span style={{fontSize:18, color:'white'}}>{props.tittle}</span>
            <span style={{fontSize:18, color:'white'}}>{" "}{props.value}</span>
        </div>
    )
}

export default ItemCard;