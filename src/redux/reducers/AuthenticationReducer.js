
const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem('USER')),
    isConnected: sessionStorage.getItem('USER') != null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'LOGON':
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return { isConnected: true, user: action.payload };

        case 'LOGOUT':
            sessionStorage.clear();
            return { isConnected: false, user: null };

        default:
            return state;
    }
}