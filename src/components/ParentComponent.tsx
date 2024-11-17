
import React, { useState } from 'react';
import Account from '../origanism/Account';
import Follower from '../molecules/Follower';

const ParentComponent: React.FC = () => {
    const [followed, setFollowed] = useState<boolean>(false);

    const handleFollowChange = (newFollowed: boolean) => {
        setFollowed(newFollowed);
    };

    return (
        <>
            <Account onFollowChange={handleFollowChange} followed={followed} /* other props */ />
            <Follower onFollowChange={handleFollowChange} followed={followed} /* other props */ />
        </>
    );
};

export default ParentComponent;