import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import Header from '../components/Header';
import SignInAndUp from '../components/SignInAndUp/SignInAndUp';
import { auth, createUserDoc } from '../firebase/firebaseUtility';
import './App.scss';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribe = null;
    componentDidMount = () => {
        this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserDoc(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                });

            }
            else {
                this.setState({
                    currentUser: null
                })
            }
        })
    }


    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signIn" component={SignInAndUp} />
                </Switch>

            </>
        );
    }

}

export default App;