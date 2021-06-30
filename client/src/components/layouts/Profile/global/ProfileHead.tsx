import React, { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import ProfileBio from './ProfileBio';

const Head = () => {
    const [isOpenBio, setIsOpenBio] = useState(false);
    const [isOpenBioUpdate, setIsOpenBioUpdate] = useState(false);
    const [biographyValue, setBiographyValue] = useState('');

    const handleEditBio = () => {
        setIsOpenBioUpdate(false);
        setIsOpenBio(true);
    };
    //*TODO : Add Link img cover
    //*TODO : resolve variable backgroud bio ?

    return (
        <div className="head">
            <div tabIndex={0} className="head__content">
                <img
                    className="head__content__background"
                    src="https://picsum.photos/680/400"
                    alt="cover"
                />
                <div tabIndex={0} className="head__content__profile">
                    <div className="head__content__profile__logo">
                        <img
                            className="head__content__profile__logo__image"
                            src="https://picsum.photos//168"
                            alt=""
                        />
                        <div className="head__content__profile__logo__upload">
                            <MdPhotoCamera className="head__content__profile__logo__upload__image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="head__content__bio">
                <h1 className="head__content__bio__name">Jeff Lrc</h1>
                <span className="head__content__bio__content">{!isOpenBio && biographyValue}</span>
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
                        className="head__content__bio__action"
                        style={{ marginTop: '5px' }}
                        onClick={handleEditBio}>
                        Edit
                    </div>
                ) : (
                    <div className="head__content__bio__action" onClick={() => setIsOpenBio(true)}>
                        Add bio
                    </div>
                )}
            </div>
        </div>
    );
};

export default Head;