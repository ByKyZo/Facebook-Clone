import React, { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import ProfileBio from './ProfileBio';
import ProfileNav from './ProfileNav';
import Tooltip from '../../../utils/Tooltip';
import CustomLink from '../../../router/CustomLink';
import { ImProfile, ImFilePicture } from 'react-icons/im';

const Head = () => {
    const [isOpenBio, setIsOpenBio] = useState(false);
    const [isOpenBioUpdate, setIsOpenBioUpdate] = useState(false);
    const [biographyValue, setBiographyValue] = useState('');

    const [logoProfileElement, setLogoProfileElement] = useState<HTMLDivElement | null>(null);

    const handleEditBio = () => {
        setIsOpenBioUpdate(false);
        setIsOpenBio(true);
    };
    //*TODO : Add Link img cover
    //*TODO : resolve variable backgroud bio ?

    return (
        <>
            <div className="profile-head">
                {/* Background */}
                <div tabIndex={0} className="profile-head__content">
                    <img
                        className="profile-head__content__background"
                        src="https://picsum.photos/680/400"
                        alt="cover"
                    />
                    {/* Profile logo */}
                    <div tabIndex={0} className="profile-head__content__profile">
                        <div className="profile-head__content__profile__logo">
                            <img
                                ref={setLogoProfileElement}
                                className="profile-head__content__profile__logo__image"
                                src="https://picsum.photos//168"
                                alt=""
                            />
                            <div className="profile-head__content__profile__logo__upload">
                                <MdPhotoCamera className="profile-head__content__profile__logo__upload__image" />
                            </div>
                        </div>
                        <Tooltip
                            className="tooltip-profile"
                            reference={logoProfileElement}
                            placement="bottom"
                            mode="click"
                            activeArrow>
                            <CustomLink to={'ok'}>
                                <ImProfile />
                                <span>View Profile Picture</span>
                            </CustomLink>
                            <CustomLink to={'o'}>
                                <ImFilePicture />
                                <span>Update Profile Picture</span>
                            </CustomLink>
                        </Tooltip>
                    </div>
                </div>
                {/* Bio */}
                <div className="profile-head__content__bio">
                    <h1 className="profile-head__content__bio__name">Jeff Lrc</h1>
                    <span className="profile-head__content__bio__content">
                        {!isOpenBio && biographyValue}
                    </span>
                    {isOpenBio ? (
                        <ProfileBio
                            isOpenBioUpdate={isOpenBioUpdate}
                            biographyValue={biographyValue}
                            setBiographyValue={setBiographyValue}
                            setIsOpenBio={setIsOpenBio}
                            setIsOpenBioUpdate={setIsOpenBioUpdate}
                        />
                    ) : biographyValue ? (
                        <div
                            className="profile-head__content__bio__action"
                            style={{ marginTop: '5px' }}
                            onClick={handleEditBio}>
                            Edit
                        </div>
                    ) : (
                        <div
                            className="profile-head__content__bio__action"
                            onClick={() => setIsOpenBio(true)}>
                            Add bio
                        </div>
                    )}
                </div>
                <ProfileNav />
            </div>
        </>
    );
};

export default Head;
