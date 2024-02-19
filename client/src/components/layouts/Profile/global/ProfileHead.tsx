import React, { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import ProfileBio from './ProfileBio';
import ProfileNav from './ProfileNav';
import Tooltip from '../../../utils/Tooltip';
import CustomLink from '../../../router/CustomLink';
import { ImProfile, ImFilePicture } from 'react-icons/im';
import Modal from '../../../utils/Modal';
import { NavLink } from 'react-router-dom';
import ProfileModalPicture from './ProfileModalPicture';

const Head = () => {
    const [isOpenBio, setIsOpenBio] = useState(false);
    const [isOpenBioUpdate, setIsOpenBioUpdate] = useState(false);
    const [isOpenModalPicture, setIsOpenModalPicture] = useState(false);
    const [biographyValue, setBiographyValue] = useState('');
    const [isOpenTooltipProfile, setIsOpenTooltipProfile] = useState(false);

    const [logoProfileElement, setLogoProfileElement] = useState<HTMLDivElement | null>(null);

    const handleEditBio = () => {
        setIsOpenBioUpdate(false);
        setIsOpenBio(true);
    };
    //*TODO : Add Link img cover
    //*TODO : resolve variable backgroud bio ?

    return (
        <>
            <ProfileModalPicture
                isOpen={isOpenModalPicture}
                onRequestClose={() => setIsOpenModalPicture(false)}
            />

            <div className="profile-head">
                {/* Background */}
                <div tabIndex={0} className="profile-head__content">
                    <img
                        className="profile-head__content__background"
                        src="https://picsum.photos/680/400"
                        alt="cover"
                    />
                    {/* Profile logo */}
                    <div
                        tabIndex={0}
                        ref={setLogoProfileElement}
                        onClick={() => setIsOpenTooltipProfile(!isOpenTooltipProfile)}
                        className="profile-head__content__profile">
                        <div
                            style={{ pointerEvents: 'none' }}
                            className="profile-head__content__profile__logo">
                            <img
                                className="profile-head__content__profile__logo__image"
                                src="https://picsum.photos//168"
                                alt=""
                            />
                        </div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className="profile-head__content__profile__logo__upload">
                            <MdPhotoCamera className="profile-head__content__profile__logo__upload__image" />
                        </div>
                        {/* Tooltip profile */}

                        <Tooltip
                            isOpen={isOpenTooltipProfile}
                            setIsOpen={setIsOpenTooltipProfile}
                            className="tooltip-profile"
                            reference={logoProfileElement}
                            placement="bottom"
                            mode="click"
                            activeArrow>
                            <CustomLink className="tooltip-profile__content" to={'ok'}>
                                <ImProfile />
                                <span>View Profile Picture</span>
                            </CustomLink>
                            <div
                                className="tooltip-profile__content"
                                tabIndex={0}
                                onClick={() => setIsOpenModalPicture(true)}>
                                <ImFilePicture />
                                <span>Update Profile Picture</span>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                {/* Bio */}
                <div className="profile-head__content__bio">
                    <h1 className="profile-head__content__bio__name">Jeff Lrc</h1>
                    {biographyValue && (
                        <span className="profile-head__content__bio__content">
                            {!isOpenBio && biographyValue}
                        </span>
                    )}

                    {isOpenBio ? (
                        <ProfileBio
                            isOpenBioUpdate={isOpenBioUpdate}
                            biographyValue={biographyValue}
                            setBiographyValue={setBiographyValue}
                            setIsOpenBio={setIsOpenBio}
                            setIsOpenBioUpdate={setIsOpenBioUpdate}
                        />
                    ) : biographyValue ? (
                        <span
                            className="profile-head__content__bio__action"
                            style={{ marginTop: '5px' }}
                            onClick={handleEditBio}>
                            Edit
                        </span>
                    ) : (
                        <span
                            className="profile-head__content__bio__action"
                            onClick={() => setIsOpenBio(true)}>
                            Add bio
                        </span>
                    )}
                </div>
                <ProfileNav />
            </div>
        </>
    );
};

export default Head;
