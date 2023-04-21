
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import './ModalPage.css'

const ModalPage = () => {
    const {orderResult} = useTypedSelector (state => state.order)
    const navigate = useNavigate();
    const { clearOrderAction } = useActions()

    const handleClose = () => {
      clearOrderAction()
      navigate('/')
    }

    return (
      <div 
      style={{display: orderResult === null ? 'none' : 'block'}}>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => handleClose()}>&times;</span> 
              <p>Заказ успешно оформлен!</p>
            </div>
          </div>

      </div>
    );
}

export default ModalPage;
