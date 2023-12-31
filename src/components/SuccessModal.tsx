import React, { FC } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface successModalProps {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  itemsRef: React.MutableRefObject<HTMLDivElement | null>;
  topButtonsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SuccessModal: FC<successModalProps> = ({
  success,
  setSuccess,
  itemsRef,
  topButtonsRef,
}) => {
  const closeModalHandler = () => {
    if (itemsRef.current && topButtonsRef.current) {
      itemsRef.current.style.display = "block";
      setSuccess(false);
      topButtonsRef.current.style.display = "none";
    }
  };

  return (
    <Popup
      modal
      open={success}
      onClose={closeModalHandler}
      position="right center"
    >
      <div className="modal">
        <>
          Congrats! <br />
          <span>On the Successfull completion of the puzzle!</span>
        </>
      </div>
    </Popup>
  );
};

export default SuccessModal;
