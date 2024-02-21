import { useState } from "react"
import ModalPopup from "./ModalPopup";
import './styles.css'

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>

      {
        showModalPopup && <ModalPopup id={'custom-id'} header={<h1>Customized Header</h1>} footer={<h1>Customized Footer</h1>} onClose={onClose} body={<div>Customized body</div>} />
      }
    </div>
  )
}

export default ModalTest