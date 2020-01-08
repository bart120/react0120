import React, { Component } from 'react';
import RoomService from '../../services/RoomService';

class RoomDetailPage extends Component {
    serv = new RoomService();

    state = {
        room: {}
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);
        this.serv.getRoomById(this.props.match.params.id).then(
            data => {
                this.setState({ room: data });
            }
        );
    }

    render() {
        return (
            <h3>Salle {this.state.room.name}</h3>
        );
    }
}

export default RoomDetailPage;