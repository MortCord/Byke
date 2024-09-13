import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import testProd from '../img/testProd.png';

function ModalCart({ show, handleClose }) {

    const [amount,setAmount] = useState(1);

    useEffect(()=>{
      if(amount <= 0){
        setAmount(1);
      }
    },[amount]);

  return (
    <Modal className='cart-main' show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        {/* Placeholder for the title */}
      </Modal.Header>

      <Modal.Body className="modal-cart-body">
        <div className="cart-content d-flex align-items-center justify-content-between">
          {/* Item Image and Description */}
          <div className="cart-item d-flex align-items-center">
            <img
              src={testProd} // Placeholder image, replace with your actual product image
              alt="Product"
              className="cart-image"
            />
            <p className="cart-item-title">
              Spare parts Rock Shox service kit Recon SA
            </p>
          </div>

          {/* Quantity Control */}
          <div className="cart-quantity">
            <button onClick={()=>setAmount(amount-1)} className="quantity-btn">-</button>
            <input type="text" value={amount} className="quantity-input" onChange={(e) => setAmount(e.target.value)} />
            <button onClick={()=>setAmount(amount+1)} className="quantity-btn">+</button>
          </div>

          {/* Price */}
          <div className="cart-price">17 $</div>

          {/* Total */}
          <div className="cart-total d-flex align-items-center">
            <span>Total</span>
            <strong>17$</strong>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={handleClose}>
          Continue shopping
        </Button>
        <Button variant="dark" onClick={handleClose}>
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCart;
