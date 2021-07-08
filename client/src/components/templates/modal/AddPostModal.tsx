import React, { useCallback, useEffect, useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { CgPlayButtonO } from 'react-icons/cg';
import { GrEmoji } from 'react-icons/gr';
import { MdEdit, MdLibraryAdd } from 'react-icons/md';
import ReactModal from 'react-modal';
import axios from '../../../config/axios';
import { useAppSelector } from '../../../redux/redux.hook';
import {
    getActiveClassName,
    getGenericFileType,
    handleAttachmentPreviewSize,
    handlePostFontSizeReduce,
    insertCharacterInContentEditable,
    isEmpty,
} from '../../../utils/utils';
import Modal from '../../utils/Modal';

// TODO Faire un composant pour le content editable avec feature : assigner des touches a des actions ,

// TODO Faire un controller video custom ? + intersection observer le play / pause de la video
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

interface IAttachmentPreview {
    genericFileType: string;
    url: string;
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
    const MAX_PREVIEW = 5;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const contentEditableRef = useRef<HTMLDivElement>(null);
    const attachmentPreviewParent = useRef<HTMLDivElement>(null);
    const userID = useAppSelector((state) => state.user._id);
    const [isLoadingCreatePost, setIsLoadingCreatePost] = useState(false);
    const [attachmentPreviews, setAttachmentPreviews] = useState<IAttachmentPreview[]>([]);
    const [inputMessageRef, setInputMessageRef] = useState<HTMLDivElement | null>(null);
    const inputMessageRefCallback = useCallback((node) => setInputMessageRef(node), []);

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

        // TODO Faire une regex pour avoir seulement un retour de ligne (<div><br></div>);
        // TODO Penser a decommenter axios ...

        // setMessage((oldState) => {
        //     return {
        //         ...oldState,
        //         html: oldState.html
        //             .replaceAll(/<div><br><\/div>*/gm, '$1__$/n')
        //             .replaceAll(/__\$\/n*/gm, '<div><br></div>'),
        //     };
        // });
        // console.log(
        //     message.html.replaceAll(/<div><br><\/div>*/gm, '$&')
        //     // .replace(/__\$\/n*/gm, 'TORTO')
        // );

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

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleInputPressedEnter = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (e.key === 'Enter') openFileInput();
    };

    useEffect(() => {
        if (isOpen) {
            handleFocusContentEditable();
        }
    }, [inputMessageRef]);

    useEffect(() => {
        if (isEmpty(attachments)) return;

        let attachmentPreviews: IAttachmentPreview[] = [];
        attachments.forEach((attachment, index) => {
            attachmentPreviews.push({
                genericFileType: getGenericFileType(attachment.type),
                url: URL.createObjectURL(attachment),
            });
        });

        setAttachmentPreviews(attachmentPreviews);
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
                        id="js-post-content-editable"
                        onClick={(e) => e.stopPropagation()}
                        onPaste={(e) => {
                            e.preventDefault();
                            const clipboardDataText = e.clipboardData.getData('text/plain');

                            const contentEditableEl = document.querySelector(
                                '#js-post-content-editable'
                            )!;

                            insertCharacterInContentEditable(
                                contentEditableEl,
                                'text',
                                clipboardDataText
                            );
                        }}
                        onKeyDown={(e) => {
                            const contentEditableEl = document.querySelector(
                                '#js-post-content-editable'
                            )!;
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                console.log('Enter');
                                insertCharacterInContentEditable(
                                    contentEditableEl,
                                    'htmlElement',
                                    'clipboardDataText'
                                );
                            }
                        }}
                        innerRef={inputMessageRefCallback}
                        spellCheck={false}
                        style={{
                            fontSize: handlePostFontSizeReduce(message.text, attachments),
                        }}
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
                    {/* TODO Regler fix la prob de ref en retard */}
                    {/* {!isEmpty(attachmentPreviews) && ( */}
                    <div
                        ref={attachmentPreviewParent}
                        style={{ border: isEmpty(attachmentPreviews) ? 'none' : '' }}
                        className="modal-addpost__content__attachement-preview">
                        {attachmentPreviews.map((attachmentPreview, index) => {
                            if (index < MAX_PREVIEW)
                                return (
                                    <div
                                        key={index}
                                        style={handleAttachmentPreviewSize(
                                            index,
                                            attachmentPreviews,
                                            attachmentPreviewParent
                                        )}>
                                        {attachmentPreview.genericFileType === 'video' && (
                                            <div className="modal-addpost__content__attachement-preview__item__video">
                                                <video
                                                    src={attachmentPreview.url}
                                                    style={{
                                                        height: '100%',
                                                        width: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <span>
                                                    <CgPlayButtonO />
                                                </span>
                                            </div>
                                        )}
                                        {attachmentPreview.genericFileType === 'image' && (
                                            <img
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'cover',
                                                }}
                                                src={attachmentPreview.url}
                                                alt="post attachment preview"
                                            />
                                        )}
                                        {attachmentPreviews.length > MAX_PREVIEW && index === 4 && (
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
                            <button onClick={() => openFileInput()}>
                                <MdLibraryAdd />
                                <span>Add Photos/Videos</span>
                            </button>
                        </div>
                    </div>
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
