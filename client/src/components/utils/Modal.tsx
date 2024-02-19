import React from 'react';
import ReactModal from 'react-modal';
import { CgClose } from 'react-icons/cg';

export interface IModal extends ReactModal.Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

// TODO Tester si title est vide sinon ne pas mettre de head
// TODO Rajouter la head au modal signup et go finir le modal addpost

const Modal = ({ children, title, className, closeTimeoutMS, onRequestClose, ...rest }: IModal) => {
    const handleKeyDown = (e: React.KeyboardEvent, onRequestClose: any) => {
        if (e.key === 'Enter' && onRequestClose) onRequestClose();
    };

    return (
        <ReactModal
            {...rest}
            onRequestClose={onRequestClose}
            className={`__global-modal ${className}`}
            closeTimeoutMS={closeTimeoutMS || 200}>
            {title && (
                <div className="__global-modal__head">
                    <h2 className="__global-modal__head__title">{title}</h2>
                    <div
                        role="button"
                        tabIndex={0}
                        className="__global-modal__head__btn-close"
                        onKeyDown={(e) => handleKeyDown(e, onRequestClose)}
                        onClick={onRequestClose}>
                        <div>
                            {/*<i />*/}
                            <CgClose />
                        </div>
                    </div>
                </div>
            )}
            <div className="__global-modal__content">{children}</div>
        </ReactModal>
    );
};

export default Modal;
