import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import Paper from "../Paper";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const ModalComponent: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const handleOnClose = useCallback(
    (e) => {
      if (e.target.dataset.background) {
        onClose();
      }
    },
    [onClose]
  );

  if (!open) {
    return null;
  }

  return (
    <div
      data-background="true"
      className="fixed flex items-center justify-center top-0 left-0 bottom-0 w-full bg-opacity-40 bg-black"
      onClick={handleOnClose}
    >
      <Paper rounded className="m-4">
        {children}
      </Paper>
    </div>
  );
};

export const Modal: React.FC<ModalProps> = (props) => {
  if (process.browser) {
    return ReactDOM.createPortal(<ModalComponent {...props} />, document.body);
  }

  return null;
};

export default Modal;
