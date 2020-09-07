import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { auth } from '../firebase/firebaseUtility';


const Header = ({ currentUser }) => {
    return (
        <>
            <Menu pointing secondary className="p-3">
                <Link to="/" >
                    <Menu.Item className="text-primary bold"
                        name='YouChic'
                    />
                </Link>

                <Menu.Menu position='right'>
                    <Link to="/shop">
                        <Menu.Item name='shop' />
                    </Link>

                    <Link to="/">
                        <Menu.Item name='contact' />
                    </Link>
                    {
                        currentUser ?
                            <Menu.Item name='sign out' onClick={() => auth.signOut()} /> :
                            <Link to="/signIn">
                                <Menu.Item name='sign in' />
                            </Link>

                    }


                </Menu.Menu>
            </Menu>
        </>
    );
};

export default Header;