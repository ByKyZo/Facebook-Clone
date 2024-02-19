import React from 'react';
import ReactModal from 'react-modal';
import Modal from '../../../utils/Modal';

interface IProps extends ReactModal.Props {}

const ProfileModalPicture = ({ isOpen, onRequestClose }: IProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            title="Update Profile Picture"
            className="modal-addpost">
            <p>test</p>
        </Modal>
    );
};

export default ProfileModalPicture;
