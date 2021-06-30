import { toast } from 'react-toastify';
import ErrorToast from '../components/utils/toasts/ErrorToast';
import SuccessToast from '../components/utils/toasts/SuccessToast';
import React from 'react';

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

export const insertSpecialCharacter = (ref: React.RefObject<any>, character: number[]) => {
    let doc = ref.current.ownerDocument.defaultView;

    let sel = doc.getSelection();
    let range = sel.getRangeAt(0);

    let tabNode = document.createTextNode(String.fromCodePoint(...character)); // code point

    range.insertNode(tabNode);

    range.setStartAfter(tabNode);
    range.setEndAfter(tabNode);
    sel.removeAllRanges();
    sel.addRange(range);
};

export const getActiveClassName = (className: string, isActive: boolean) => {
    return isActive ? `${className} ${className}--active` : className;
};
