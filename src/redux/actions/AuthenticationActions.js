

export const logon = (user) => {
    return { type: 'LOGON', payload: user };
}

export const logout = () => {
    return { type: 'LOGOUT', payload: null };
}