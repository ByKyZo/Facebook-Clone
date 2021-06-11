import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

interface IProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    onRequestClose: () => void;
    className?: string;
    overlayClassName?: string;
}

const Modal = ({ children, isOpen, onRequestClose, className, overlayClassName }: IProps) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            closeTimeoutMS={200}
            className={className}
            overlayClassName={overlayClassName}>
            {children}
        </ReactModal>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

export default Modal;
