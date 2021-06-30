import React, { useEffect, useState } from 'react';
import AddPostModal from '../../templates/modal/AddPostModal';
import { isEmpty } from '../../../utils/utils';

const AddPost = () => {
    const [isOpenAddPost, setIsOpenAddPost] = useState(false);
    const [attachments, setAttachments] = useState<File[]>([]);
    const [message, setMessage] = useState({
        text: '',
        html: '',
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') setIsOpenAddPost(true);
    };

    useEffect(() => {
        if (!isOpenAddPost && !isEmpty(attachments)) setIsOpenAddPost(true);
    }, [attachments]);

    return (
        <>
            <AddPostModal
                isOpen={isOpenAddPost}
                message={message}
                setMessage={setMessage}
                attachments={attachments}
                setAttachments={setAttachments}
                onRequestClose={() => setIsOpenAddPost(false)}
            />

            <div className="addpost">
                <div className="addpost__head">
                    <img
                        className="addpost__head__profile"
                        src="https://picsum.photos/50/50"
                        alt="profile"
                    />
                    {/*<div className="addpost__head__profile"></div>*/}
                    <div
                        role="button"
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        className="addpost__head__btn"
                        onClick={() => setIsOpenAddPost(true)}>
                        <span>{message.text ? message.text : "What's on your mind?"}</span>
                    </div>
                </div>
                <div className="addpost__btns">
                    <button className="addpost__btns__item">
                        <i />
                        <span>Live Video</span>
                    </button>

                    <label
                        role="button"
                        tabIndex={0}
                        htmlFor="addpost-file-input2"
                        className="addpost__btns__item">
                        <i />
                        <span>Photo/Video</span>
                        <input
                            id="addpost-file-input2"
                            type="file"
                            onChange={(e) =>
                                // @ts-ignore
                                setAttachments((oldState) => [...oldState, ...e.target.files])
                            }
                            accept="image/*,video/*"
                            multiple
                            hidden
                        />
                    </label>

                    <button className="addpost__btns__item">
                        <i />
                        <span>Life Event</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddPost;
