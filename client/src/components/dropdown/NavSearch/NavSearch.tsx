import React from 'react';
import { VscClose } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import DropdownSearch from '../../utils/DropdownSearch';
import { IDropDownSearch } from '../../utils/DropdownSearch';

const NavSearch = ({ ...rest }: IDropDownSearch) => {
    return (
        <DropdownSearch {...rest} className="dropdown__search">
            <div style={{ height: '56px' }}></div>
            <div className="dropdown__search__title" style={{ height: '50px' }}>
                <h1>Recherches récentes</h1>
            </div>
            <div className="dropdown__search__user__content">
                <div className="dropdown__search__user__content__profile">
                    <span>
                        <CgProfile />
                    </span>
                    <div>Jeff</div>
                </div>
                <span className="dropdown__search__user__content__delete">
                    <VscClose />
                </span>
            </div>
            <div className="dropdown__search__user__content">
                <div className="dropdown__search__user__content__profile">
                    <span>
                        <CgProfile />
                    </span>
                    <div>Ky</div>
                </div>
                <span className="dropdown__search__user__content__delete">
                    <VscClose />
                </span>
            </div>
            <div className="dropdown__search__user__content">
                <div className="dropdown__search__user__content__profile">
                    <span>
                        <CgProfile />
                    </span>
                    <div>Antoine</div>
                </div>
                <span className="dropdown__search__user__content__delete">
                    <VscClose />
                </span>
            </div>
            <div className="dropdown__search__user__content">
                <div className="dropdown__search__user__content__profile">
                    <span>
                        <CgProfile />
                    </span>
                    <div>Jeremy</div>
                </div>
                <span className="dropdown__search__user__content__delete">
                    <VscClose />
                </span>
            </div>
        </DropdownSearch>
    );
};

export default NavSearch;
