import React, { Component } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@material-ui/core';


class Footer extends Component {

    //count = 0;
    state = {
        count: 0,
        rooms: null
    };



    componentDidUpdate() {
        console.log('update');
    }

    componentDidMount() {
        console.log('componentDidMount');
        //        this.state.count = 1;
        this.setState({
            count: 1,
            rooms: [
                { name: 'Calliope', image: 'Calliope.jpg' },
                { name: 'Pegase', image: 'Pegase.jpg' },
                { name: 'Thalie', image: 'Thalie.jpg' }
            ]
        });
    }

    render() {

        return (
            <footer >
                &copy; formation reactjs version {this.state.count}
                {this.state.rooms ? (
                    <Grid container>
                        {this.state.rooms.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <Card variant="outlined" style={index === 1 ? cardStyle.error : null} >
                                    <CardMedia style={cardStyle.image}
                                        image={'/images/' + item.image}
                                        title="Salle"
                                    />
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            {item.name}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                ) : (<></>)}
            </footer >
        );
    }
}

const cardStyle = {
    error: {
        backgroundColor: 'red'
    },
    image: { height: 140 }
};

export default Footer;
