import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RoomAddPage from '../pages/rooms/RoomAddPage';
import RoomDetailPage from '../pages/rooms/RoomDetailPage';
import LoginPage from '../pages/authentication/LoginPage';
import CircularProgress from '@material-ui/core/CircularProgress';

//import RoomListPage from '../pages/rooms/RoomListPage';
const roomListPage = React.lazy(() => import('../pages/rooms/RoomListPage'));

class Routes extends Component {

    render() {
        return (
            <Suspense fallback={(<CircularProgress />)}>
                <Route path="/" exact component={HomePage} />
                <Route path="/rooms/add" exact component={RoomAddPage} />
                <Route path="/rooms/list" exact component={roomListPage} />
                <Route path="/rooms/detail/:id" exact component={RoomDetailPage} />
                <Route path="/login" exact component={LoginPage} />
            </Suspense>


        );
    }
}

export default Routes;
