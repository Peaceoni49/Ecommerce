import React from 'react';

//class CartItem extends component {
    export default function CartItem ({item,value}) {

   
    
    // render(item,value) {
        const { id, title, img, price, total, count}  = item;
        const {incremnet, decrement, removeItem} =value
    
    return (
        <div class="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:"5rem", height:"5rem"}} 
                className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2"> 
            <span className="d-lg-none">product :</span>
            {title}
            </div>

            <div className="col-10 mx-auto col-lg-2"> 
            <span className="d-lg-none" > price:</span>
            {price}
            </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-o">
                <div className="d-flex justify-context-center">
                    <div>
    <span className="btn btn-black mx-1" 
        onClick={() => decrement(id)}>
        -
    </span>
    <span className= "btn btn-black mx-1">{count}</span>

    <span className="btn btn-black mx-1" 
    onClick={() =>incremnet(id)}>
    +
    </span>
                    </div>
                    </div> 
                </div>

                <div className="col-10 mx-auto col-lg-2"> 
                    <div className="cart-icon" onClick={()=>removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                            </div>
                <div className="col-10 mx-auto col-lg-2"> 
                        <strong> item total : $ {total} </strong>
                            </div>
                            
                        </div>

    )
}
// }
// export default CartItem;