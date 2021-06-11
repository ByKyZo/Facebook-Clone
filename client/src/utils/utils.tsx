import { toast } from 'react-toastify';
import ErrorToast from '../components/utils/toasts/ErrorToast';
import SuccessToast from '../components/utils/toasts/SuccessToast';

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
