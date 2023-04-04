import PopupWithForm from "./PopupWithForm";

function InfoToolTip({message, isOpen, onClose}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}>
      <div className="popup__container">
       <div className={"popup__infotooltip" + (message ? message.isSuccess ? "popup__infotooltip_success" : "popup__infotooltip_fail" : "")}></div>
        <p className="popup__infotooltip_message">(message ? message.text : "")</p>
      </div>
    </PopupWithForm>
  )
} 

export default InfoToolTip;