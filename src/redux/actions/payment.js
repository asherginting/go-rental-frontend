import http from '../../helper/http';

export const addHistory = (token, id_user, id_vehicle, rent_start_date, rent_end_date) => {
    const param = new URLSearchParams();
    param.append('id_user', id_user);
    param.append('id_vehicle', id_vehicle);
    param.append('rent_start_date', rent_start_date);
    param.append('rent_end_date', rent_end_date);
    return ({
        type: 'ADD_HISTORY',
        payload: http(token).post('/histories', param)
    });
};

export const getNewHistory = (id) => {
    return ({
        type: 'GET_NEW_HISTORY',
        payload: http().get(`/histories/${id}`)
    });
};