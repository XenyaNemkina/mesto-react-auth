function InfoToolTip({message, onClose}) {
  return (
    <div className="popup__container popup__infotooltip">
      <p className={"popup__infotooltip" + (message ? message.isSuccess ? "popup__infotooltip_success" : "popup__infotooltip_fail" : "")}>{message ? message.text : ""}</p>
      <button className="popup__close" type="button" onClick={onClose}></button>
    </div>
  )
} 

export default InfoToolTip;