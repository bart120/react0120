import axios from 'axios';

class BaseService {

    get(url, token = '') {
        //const conf = { headers: { 'Authorization': `Bearer ${token}` } };
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    post(url, obj) {
        return axios.post(url, obj).then(this.promiseResolve).catch(this.promiseReject);
    }

    put(url, obj) {
        return axios.put(url, obj).then(this.promiseResolve).catch(this.promiseReject);
    }

    delete(url) {
        return axios.delete(url).then(this.promiseResolve).catch(this.promiseReject);
    }


    promiseResolve(resp) {
        //console.log(resp);
        if (resp.data == null) {
            return Promise.reject('La ressource est introuvable');
        }
        return Promise.resolve(resp.data);
    }

    promiseReject(err) {
        console.warn(err);
        return Promise.reject(err.message || err);
    }
}

export default BaseService;