import React, { useState, useEffect } from 'react';

interface IProps {
    isOpenBioUpdate: boolean;
    biographyValue: string;
    setIsOpenBio: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenBioUpdate: React.Dispatch<React.SetStateAction<boolean>>;
    setBiographyValue: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileBio = ({
    isOpenBioUpdate,
    biographyValue,
    setIsOpenBio,
    setIsOpenBioUpdate,
    setBiographyValue,
}: IProps) => {
    const [areaValue, setAreaValue] = useState('');
    const maxLenghtCharacter = 101;
    const currentLenghtCharacter = maxLenghtCharacter - areaValue.length;

    const handleCancelBio = () => {
        setAreaValue(biographyValue);
        setIsOpenBio(false);
    };

    const isDescValid = () => {
        return areaValue.match(/^\s+$/gm) !== null || areaValue === biographyValue;
    };

    const handleSaveBio = () => {
        setBiographyValue(areaValue);
        setIsOpenBioUpdate(true);
    };

    const handleIgnorePublishShare = () => {
        handleCancelBio();
        setIsOpenBioUpdate(false);
    };

    useEffect(() => {
        setAreaValue(biographyValue);
    }, [biographyValue]);

    return (
        <div className="bio">
            <textarea
                disabled={isOpenBioUpdate ? true : false}
                placeholder="Describe who you are"
                value={areaValue}
                onChange={(e) => setAreaValue(e.target.value)}
                cols={30}
                rows={3}
                maxLength={maxLenghtCharacter}
            />
            {!isOpenBioUpdate && (
                <div className="bio__character">
                    {currentLenghtCharacter} character{currentLenghtCharacter <= 1 ? '' : 's'}{' '}
                    remaining
                </div>
            )}

            <div className="bio__action">
                {isOpenBioUpdate ? (
                    <div className="bio__action__publish">
                        <span>Saved &#x2714;</span>
                        <div className="bio__action__publish__question">
                            Post your bio to News Feed? ?
                        </div>
                        <button
                            className="bio__action__publish__ignore"
                            onClick={handleIgnorePublishShare}>
                            Skip
                        </button>
                        <button className="bio__action__publish__share">Share now</button>
                    </div>
                ) : (
                    <>
                        <button className="bio__action__cancel" onClick={handleCancelBio}>
                            Cancel
                        </button>
                        <button
                            className="bio__action__save"
                            disabled={isDescValid()}
                            onClick={handleSaveBio}>
                            Save
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileBio;
