import React, { useState } from 'react';
import AddPostModal from '../../templates/modal/AddPostModal';
import { log } from 'util';

const AddPost = () => {
    const [isOpenAddPost, setIsOpenAddPost] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') setIsOpenAddPost(true);
    };

    return (
        <>
            <AddPostModal isOpen={isOpenAddPost} onRequestClose={() => setIsOpenAddPost(false)} />

            <div className="addpost">
                <div className="addpost__head">
                    {/*<img src="" alt="" />*/}
                    <div className="addpost__head__profile"></div>
                    <div
                        role="button"
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        className="addpost__head__btn"
                        onClick={() => setIsOpenAddPost(true)}>
                        <span>What's on your mind?</span>
                    </div>
                </div>
                <div className="addpost__btns">
                    <button>
                        <i />
                        <span>Live Video</span>
                    </button>
                    <button>
                        <i />
                        <span>Photo/Video</span>
                    </button>
                    <button>
                        <i />
                        <span>Life Event</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddPost;
