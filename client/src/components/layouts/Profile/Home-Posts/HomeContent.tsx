import React from 'react';
import AddPost from '../../global/AddPost';
import Post from '../../global/Post';
import { useAppSelector } from '../../../../redux/redux.hook';

const HomeContent = () => {
    const user = useAppSelector((state) => state.user);

    return (
        <div className="home-content">
            <AddPost />
            {user.posts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        post={post}
                        firstName={user.firstName}
                        lastName={user.lastName}
                    />
                );
            })}
        </div>
    );
};

export default HomeContent;
