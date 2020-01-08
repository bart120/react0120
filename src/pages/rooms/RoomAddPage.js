import React, { Component } from 'react';
import { Button, TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import RoomService from '../../services/RoomService';

class RoomAddPage extends Component {

    serv = new RoomService();

    state = {
        room: { image: '' },
        message: '',
        pictures: [
            { name: 'Calliope', value: 'Calliope.jpg' },
            { name: 'Thalie', value: 'Thalie.jpg' },
            { name: 'Pegase', value: 'Pegase.jpg' }
        ]
    }

    onChange = (ev) => {
        this.setState({ room: Object.assign(this.state.room, { [ev.target.name]: ev.target.value }) });
        //console.log(this.state);
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.serv.insertRoom(this.state.room).then((data) => {
            this.setState({ message: `La salle a été enregistrée avec l'ID ${data.id}` });
        });
    }

    render() {
        return (
            <>
                <h3>Ajouter une salle</h3>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <TextField label="Nom" name="name" onChange={this.onChange} />
                    </div>
                    <div>
                        <TextField label="Prix" name="price" onChange={this.onChange} />
                    </div>
                    <div>
                        <TextField label="Places" name="seatCount" onChange={this.onChange} />
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel id="image">Image</InputLabel>
                            <Select labelId="image" name="image" onChange={this.onChange} value={this.state.room.image}>
                                {this.state.pictures.map((item) => (
                                    <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                                ))}

                            </Select>

                        </FormControl>
                    </div>
                    <div>
                        <Button variant="contained" type="submit">Enregistrer</Button>
                    </div>
                </form>
                {this.state.message}
            </>
        );
    }
}

export default RoomAddPage;