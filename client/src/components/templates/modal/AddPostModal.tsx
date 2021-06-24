import React from 'react';
import Modal, { IModal } from '../../utils/Modal';
import ReactModal from 'react-modal';

const AddPostModal = ({ ...rest }: ReactModal.Props) => {
    return (
        <Modal {...rest} title="Create Post" className="modal-addpost">
            <span>Add Post Modal</span>
        </Modal>
    );
};

export default AddPostModal;
