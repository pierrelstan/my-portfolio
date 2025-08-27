import React from "react";

export default function Modal({ onClose, children, title }: any) {
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal-overlay z-[var(--z-navbar)]">
      {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
