import React from 'react';
import HomeAside from './HomeAside';
import HomeContent from './HomeContent';

// TODO Commencer le components post
// TODO Pouvoir crée un post
// TODO Afficher les posts etc...

const Home = () => {
    return (
        <div className="profile-home" style={{ marginTop: '50px' }}>
            <div className="profile-home--aside">
                <HomeAside />
            </div>
            <div className="profile-home--content">
                <HomeContent />
            </div>
        </div>
    );
};

export default Home;
