import React, { useEffect, useRef } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IUserPost } from '../../../typescript/types';
import {
    getFileURL,
    handleAttachmentPreviewSize,
    handlePostFontSizeReduce,
} from '../../../utils/utils';

interface IProps {
    firstName: string;
    lastName: string;
    post: IUserPost;
}

// TODO Formatter la date

const Post = ({ firstName, lastName, post: { message, attachments, createdAt } }: IProps) => {
    const attachmentsParentRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.innerHTML = message;
        }
    }, [message]);

    return (
        <div className="post">
            <div className="post__head">
                <div className="post__head__profile">
                    <img src="https://picsum.photos/50/50" alt="" />
                    <div className="post__head__profile__infos">
                        <span className="post__head__profile__infos__username">
                            {firstName} {lastName}
                        </span>
                        <span className="post__head__profile__infos__date">
                            {/*June 25 at 9:56 PM .*/}
                            {createdAt}
                        </span>
                    </div>
                </div>
                <button className="post__head__btn-menu">
                    <HiDotsHorizontal />
                </button>
            </div>
            <div className="post__content">
                {message && (
                    <p
                        ref={messageRef}
                        style={{
                            fontSize: handlePostFontSizeReduce(message, attachments),
                        }}
                        className="post__content__message"
                    />
                )}
                <div ref={attachmentsParentRef} className="post__content__attachments">
                    {attachments.map((attachment, index) => {
                        return attachment.genericFileType === 'image' ? (
                            <img
                                style={handleAttachmentPreviewSize(
                                    index,
                                    attachments,
                                    attachmentsParentRef,
                                    {
                                        singleHeight: 500,
                                        multiHeight: 700,
                                    }
                                )}
                                key={index}
                                src={getFileURL(attachment.path)}
                                alt="post"
                            />
                        ) : (
                            <video
                                style={handleAttachmentPreviewSize(
                                    index,
                                    attachments,
                                    attachmentsParentRef,
                                    {
                                        singleHeight: 500,
                                        multiHeight: 700,
                                    }
                                )}
                                key={index}
                                controls
                                src={getFileURL(attachment.path)}></video>
                        );
                    })}
                </div>
            </div>
            <div className="post__bottom">
                <div className="post__bottom__infos"></div>
                <div className="post__bottom__actions">
                    <button>
                        <i />
                        <span>Like</span>
                    </button>
                    <button>
                        <i />
                        <span>Comment</span>
                    </button>
                    <button>
                        <i />
                        <span>Share</span>
                    </button>
                </div>
                <div className="post__bottom__comment"></div>
            </div>
        </div>
    );
};

export default Post;
