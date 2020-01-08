import React, { Component } from 'react';
import RoomService from '../../services/RoomService';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

class RoomListPage extends Component {

    state = {
        rooms: null
    }

    serv = new RoomService();

    componentDidMount() {


        this.serv.getRooms().then(
            (data) => {
                this.setState({ rooms: data });
            }
        ).catch(
            (err) => {
                alert(err);
            }
        );

    }


    render() {
        return (
            <>
                <h3>Liste des salles</h3>
                {this.state.rooms ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Places</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rooms.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price} €</td>
                                    <td>{item.seatCount}</td>
                                    <td><Link to={`/rooms/detail/${item.id}`}><Icon>search</Icon></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<CircularProgress />)}
            </>);
    }
}

export default RoomListPage;