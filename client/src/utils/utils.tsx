import React from 'react';
import { toast } from 'react-toastify';
import ErrorToast from '../components/utils/toasts/ErrorToast';
import SuccessToast from '../components/utils/toasts/SuccessToast';
import { API_URL } from '../config/config';

export const isEmpty = (value: any) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

export const toastCatchError = (content?: string) => {
    toast.error(<ErrorToast content={content} />);
};

export const toastSuccess = (content: string) => {
    toast.success(<SuccessToast content={content} />);
};

enum ITypesInsert {
    text = 'text',
    unicode = 'unicode',
}

export const insertCharacterInContentEditable = (
    htmlElement: Element,
    type: string,
    content: any
) => {
    let doc = htmlElement.ownerDocument.defaultView;

    if (!doc) return console.log('no doc');

    let sel = doc.getSelection();

    if (!sel) return console.log('no selection');

    let range = sel.getRangeAt(0);

    let contentNode: any;

    if (type === 'unicode') {
        contentNode = document.createTextNode(String.fromCodePoint(content)); // code point
    } else if (type === 'text') {
        contentNode = document.createTextNode(content);
    } else if (type === 'htmlElement') {
        contentNode = document.createElement('br');
    } else {
        throw new Error('insertCharacterInContentEditable() -> Invalid type');
    }

    range.insertNode(contentNode);

    range.setStartAfter(contentNode);
    range.setEndAfter(contentNode);
    sel.removeAllRanges();
    sel.addRange(range);
};

export const getActiveClassName = (className: string, isActive: boolean) => {
    return isActive ? `${className} ${className}--active` : className;
};

export const getFileURL = (path: string) => {
    return `${API_URL}/upload/${path}`;
};

export const getGenericFileType = (mimetype: string): string => {
    if (
        mimetype === 'image/jpg' ||
        mimetype === 'image/jpeg' ||
        mimetype === 'image/png' ||
        mimetype === 'image/gif' ||
        mimetype === 'image/webp'
    )
        return 'image';
    else if (
        mimetype === 'video/mp4' ||
        mimetype === 'video/MP2T' ||
        mimetype === 'video/quicktime'
    )
        return 'video';
    throw new Error('Invalid mimetype');
};

interface IAttachmentPreviewOption {
    singleHeight: number;
    multiHeight: number;
}

export const handleAttachmentPreviewSize = (
    itemIndex: number,
    items: any[],
    parentRef: React.RefObject<HTMLDivElement>,
    options?: IAttachmentPreviewOption
): any => {
    if (!parentRef.current) return;

    const option: IAttachmentPreviewOption = {
        singleHeight: options?.singleHeight || 300,
        multiHeight: options?.singleHeight || 500,
    };

    const length = items.length;

    let defaultStyle = { position: 'absolute', boxSizing: 'border-box', padding: '1px' };
    let currentStyle: any = {};

    // const props = {
    //     full: 100,
    //     onSevenght: 70,
    //     oneHalf: 50,
    //     oneThirds: 33.33,
    // };

    if (length <= 1) {
        parentRef.current.style.height = `${option.singleHeight}px`;
        currentStyle.height = '100%';
        currentStyle.width = '100%';
    } else {
        parentRef.current.style.height = `${option.multiHeight}px`;
        if (length <= 2) {
            currentStyle.height = '50%';
            currentStyle.width = '100%';
            if (itemIndex === 0) {
                currentStyle.top = '0';
            } else if (itemIndex === 1) {
                currentStyle.bottom = '0';
            }
        } else if (length <= 3) {
            if (itemIndex === 0) {
                currentStyle.height = '70%';
                currentStyle.width = '100%';
                currentStyle.top = '0';
            } else {
                currentStyle.height = '30%';
                currentStyle.width = '50%';
                currentStyle.bottom = '0';
                if (itemIndex === 1) {
                    currentStyle.left = '0';
                } else if (itemIndex === 2) {
                    currentStyle.right = '0';
                }
            }
        } else if (length <= 4) {
            if (itemIndex === 0) {
                currentStyle.height = '70%';
                currentStyle.width = '100%';
                currentStyle.top = '0';
            } else {
                currentStyle.height = '30%';
                currentStyle.width = '33.33%';
                currentStyle.bottom = '0';
                if (itemIndex === 1) {
                    currentStyle.left = '0';
                } else if (itemIndex === 2) {
                    currentStyle.right = '33.33%';
                } else if (itemIndex === 3) {
                    currentStyle.right = '0';
                }
            }
        } else if (length >= 5) {
            currentStyle.width = '50%';
            if (itemIndex === 0) {
                currentStyle.height = '50%';
                currentStyle.top = '0';
                currentStyle.left = '0';
            } else if (itemIndex === 1) {
                currentStyle.height = '50%';
                currentStyle.bottom = '0';
                currentStyle.left = '0';
            } else {
                currentStyle.height = '33.33%';
                currentStyle.right = '0';
                if (itemIndex === 2) {
                    currentStyle.top = '0';
                } else if (itemIndex === 3) {
                    currentStyle.top = '33.33%';
                } else if (itemIndex === 4) {
                    currentStyle.bottom = '0';
                }
            }
        }
    }

    return { ...defaultStyle, ...currentStyle };
};

export const handlePostFontSizeReduce = (message: string, attachments: any[]) => {
    return message.length > 85 || !isEmpty(attachments) ? '1rem' : '1.4rem';
};

export const closeOnClickOutside = (
    ref: React.RefObject<HTMLElement>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const handleCloseModal = (e: any) => {
        if (!ref.current) return () => setIsOpen(false);

        !ref.current.contains(e.target) && setIsOpen(false);
    };

    window.addEventListener('mousedown', handleCloseModal);
};
