import "./Modal.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    function handleCloseRequest() {
        setIsClosing(true);
    }

    function handleAnimationEnd(event: React.AnimationEvent<HTMLDivElement>) {
        if (isClosing && event.target === event.currentTarget) {
            onClose();
        }
    }

    return createPortal(
        <div
            className={`modal-overlay${isClosing ? " modal-overlay--closing" : ""}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button
                    type="button"
                    className="modal-close-button"
                    onClick={handleCloseRequest}
                    aria-label="Close modal"
                >
                    <span aria-hidden="true">×</span>
                </button>

                {children}
            </div>
        </div>,
        document.body,
    );
}

export default Modal;