import BaseService from './BaseService';

const URL_ROOMS = 'http://formation-roomy.inow.fr/api/rooms';

class RoomService extends BaseService {

    getRooms() {
        /*axios.get(URL_ROOMS).then((resp) => {
            console.log('resp', resp);
            return resp.data;
        });*/

        return this.get(URL_ROOMS);
    }

    getRoomById(id) {
        return this.get(`${URL_ROOMS}/${id}`);
        //return axios.get(URL_ROOMS + '/' + id);
    }

    insertRoom(room) {
        return this.post(URL_ROOMS, room);
    }


}

export default RoomService;