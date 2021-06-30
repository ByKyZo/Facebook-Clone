import React, { useCallback, useEffect, useRef, useState } from 'react';
import Modal from '../../utils/Modal';
import ReactModal from 'react-modal';
import ContentEditable from 'react-contenteditable';
import { insertSpecialCharacter, isEmpty } from '../../../utils/utils';
import { getActiveClassName } from '../../../utils/utils';
import axios from '../../../config/axios';
import { useAppSelector } from '../../../redux/redux.hook';
import { GrEmoji } from 'react-icons/gr';
import { MdEdit, MdLibraryAdd } from 'react-icons/md';

// TODO Rendre la modal responsive avec les preview (ajuster la taille la preview en responsive (leger decalage))
// TODO Faire la preview des video (+ avec l'icon play)
// TODO Ouvrir l'explorateur de fichier en cliquant sur bouton hover des attachments
// TODO Pouvoir cliquer sur edit all et ajouter une legende (caption) / supprimer un attachments

interface IProps extends ReactModal.Props {
    message: {
        text: string;
        html: string;
    };
    setMessage: React.Dispatch<React.SetStateAction<{ text: string; html: string }>>;
    attachments: File[];
    setAttachments: React.Dispatch<any>;
}

const AddPostModal = ({
    isOpen,
    onRequestClose,
    message,
    setMessage,
    attachments,
    setAttachments,
    ...rest
}: IProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const userID = useAppSelector((state) => state.user._id);
    const [isLoadingCreatePost, setIsLoadingCreatePost] = useState(false);
    const [attachmentPreviews, setAttachmentPreviews] = useState<string[]>([]);
    const [inputMessageRef, setInputMessageRef] = useState<HTMLDivElement | null>(null);
    const inputMessageRefCallback = useCallback((node) => setInputMessageRef(node), []);
    const MAX_PREVIEW = 5;

    const handleFocusContentEditable = () => {
        if (!inputMessageRef) return;
        inputMessageRef.focus();
        if (
            typeof window.getSelection != 'undefined' &&
            typeof document.createRange != 'undefined'
        ) {
            let range = document.createRange();
            range.selectNodeContents(inputMessageRef);
            range.collapse(false);
            let sel = window.getSelection();
            // @ts-ignore
            sel.removeAllRanges();
            // @ts-ignore
            sel.addRange(range);
            // @ts-ignore
        } else if (typeof document.body.createTextRange != 'undefined') {
            // @ts-ignore
            let textRange = document.body.createTextRange();
            textRange.moveToElementText(inputMessageRef);
            textRange.collapse(false);
            textRange.select();
        }
    };

    const isPossibleCreatePost = (): boolean => {
        return !!(message.text || !isEmpty(attachments));
    };

    const handleAddPost = (closeModal: any) => {
        if (!inputMessageRef) return;
        if (!isPossibleCreatePost()) return;

        const formData = new FormData();
        formData.append('userID', userID);
        formData.append('message', message.html);
        attachments.forEach((attachment) => {
            formData.append('attachments', attachment);
        });

        axios
            .post('/user/post', formData)
            .then((res) => {
                console.log(res);
                setAttachments([]);
                setAttachmentPreviews([]);
                handleSetMessage('text', '');
                handleSetMessage('html', '');
                closeModal();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSetMessage = (state: string, message: string) => {
        setMessage((oldState) => {
            return { ...oldState, [state]: message };
        });
    };

    const handleOnChange = (e: any) => {
        if (!inputMessageRef) return;
        // @ts-ignore
        handleSetMessage('text', inputMessageRef.textContent);
        handleSetMessage('html', e.target.value);
    };

    const handleInputPressedEnter = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (e.key === 'Enter' && fileInputRef.current) fileInputRef.current.click();
    };

    const handlePicturePreviewSize = (pictureIndex: number): string => {
        const length = attachmentPreviews.length;
        let classNameSupp = '';
        if (length <= 2) {
            classNameSupp = 'big';
        } else if (length <= 4) {
            if (pictureIndex > 0) {
                classNameSupp = 'medium';
                if (length > 3) {
                    classNameSupp = 'small';
                }
            } else {
                classNameSupp = 'big';
            }
        } else {
            if (pictureIndex < 2) {
                classNameSupp = 'big-max';
            } else {
                classNameSupp = 'medium-max';
            }
        }

        return `modal-addpost__content__attachement-preview__item modal-addpost__content__attachement-preview__item--${classNameSupp}`;
    };

    useEffect(() => {
        if (isOpen) {
            handleFocusContentEditable();
        }
    }, [inputMessageRef]);

    useEffect(() => {
        if (isEmpty(attachments)) return;

        let attachmentURL: string[] = [];
        attachments.forEach((attachment) => {
            attachmentURL.push(URL.createObjectURL(attachment));
        });
        setAttachmentPreviews(attachmentURL);
    }, [attachments]);

    return (
        <Modal
            {...rest}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            title="Create Post"
            className="modal-addpost">
            <div className="modal-addpost__profile">
                <div>
                    <img src="https://picsum.photos/50/50" alt="" />
                    <div className="">
                        <span>KyZo Zo</span>
                        <button>Public</button>
                    </div>
                </div>
            </div>
            <div className="modal-addpost__content__wrapper">
                <div
                    className="modal-addpost__content"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFocusContentEditable();
                    }}>
                    <ContentEditable
                        onClick={(e) => e.stopPropagation()}
                        innerRef={inputMessageRefCallback}
                        spellCheck={false}
                        className="modal-addpost__content__input"
                        placeholder="Test"
                        html={message.html}
                        onChange={handleOnChange}
                    />

                    <div className="modal-addpost__content__utils">
                        {/*<button />*/}
                        <button>
                            <GrEmoji />
                        </button>
                    </div>
                    {!isEmpty(attachmentPreviews) && (
                        <div
                            className={`modal-addpost__content__attachement-preview ${
                                attachmentPreviews.length >= MAX_PREVIEW
                                    ? 'modal-addpost__content__attachement-preview--max-preview'
                                    : ''
                            }`}>
                            {attachmentPreviews.map((attachmentPreview, index) => {
                                if (index < MAX_PREVIEW)
                                    return (
                                        <div
                                            key={index}
                                            className={handlePicturePreviewSize(index)}>
                                            <img
                                                className={handlePicturePreviewSize(index)}
                                                src={attachmentPreview}
                                                alt="post attachment preview"
                                            />
                                            {attachmentPreviews.length > MAX_PREVIEW &&
                                                index === 4 && (
                                                    <span className="modal-addpost__content__attachement-preview__display-more-max-previews">
                                                        +{attachmentPreviews.length - MAX_PREVIEW}
                                                    </span>
                                                )}
                                        </div>
                                    );
                            })}
                            <div className="modal-addpost__content__attachement-preview__menu">
                                <button>
                                    <MdEdit />
                                    <span>Edit All</span>
                                </button>
                                <button>
                                    <MdLibraryAdd />
                                    <span>Add Photos/Videos</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {/*<div className="modal-addpost__content__wrapper__scrollbar-placeholder"></div>*/}
            </div>
            <div className="modal-addpost__bottom">
                <div className="modal-addpost__bottom__tools">
                    <span>Add to Your Post</span>
                    <div className="modal-addpost__bottom__tools__wrapper">
                        <button className="modal-addpost__bottom__tools__wrapper__item">
                            <i />
                        </button>
                        <label
                            onKeyDown={(e) => handleInputPressedEnter(e)}
                            htmlFor="addpost-file-input"
                            className="modal-addpost__bottom__tools__wrapper__item"
                            tabIndex={0}>
                            <i />
                            <input
                                ref={fileInputRef}
                                type="file"
                                id="addpost-file-input"
                                onChange={(e) =>
                                    setAttachments((oldAttachment: any) => [
                                        ...oldAttachment,
                                        // @ts-ignore
                                        ...e.target.files,
                                    ])
                                }
                                accept="image/*,video/*"
                                multiple
                                hidden
                            />
                        </label>
                        <button className="modal-addpost__bottom__tools__wrapper__item">
                            <i />
                        </button>
                        <button className="modal-addpost__bottom__tools__wrapper__item">
                            <i />
                        </button>
                        <button className="modal-addpost__bottom__tools__wrapper__item">
                            <i />
                        </button>
                        <button className="modal-addpost__bottom__tools__wrapper__item">
                            <i />
                        </button>
                    </div>
                </div>

                <button
                    tabIndex={isPossibleCreatePost() ? 0 : 1}
                    className={getActiveClassName(
                        'modal-addpost__bottom__btn-post',
                        isPossibleCreatePost()
                    )}
                    onClick={() => isPossibleCreatePost() && handleAddPost(onRequestClose)}>
                    <span>Post</span>
                </button>
            </div>
        </Modal>
    );
};

export default AddPostModal;
