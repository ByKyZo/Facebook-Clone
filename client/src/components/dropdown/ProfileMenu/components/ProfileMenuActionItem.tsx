import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import ProfileMenuIcon from './ProfileMenuIcon';

interface IProps {
    icon: any;
    label: string;
    hasSubMenu?: boolean;
    onClick: () => void;
}

const ProfileMenuActionItem: React.FC<IProps & React.HTMLProps<HTMLDivElement>> = ({
    icon,
    label,
    hasSubMenu,
    onClick,
}: IProps) => {
    const handlePressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') onClick();
    };

    return (
        <div
            onClick={onClick}
            tabIndex={0}
            onKeyDown={(e) => handlePressEnter(e)}
            className="dropdown-profile-menu__item">
            <ProfileMenuIcon icon={icon} />
            <span className="dropdown-profile-menu__item__label">{label}</span>
            {hasSubMenu && <BsChevronRight className="dropdown-profile-menu__item__chevron" />}
        </div>
    );
};

export default ProfileMenuActionItem;
