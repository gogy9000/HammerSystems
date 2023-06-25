import {protectedInstance} from "../instanses/protectedInstance";
import {publicInstance} from "../instanses/publicInstance";

export const request = async (config) => {

    const onSuccess = (response) => {
        return response
    }
    const onError = (error) => {
        return Promise.reject(error);
    }

    const store = await import('../../store');


    const isAuth=store.default.getState().auth.isAuth


    if (!isAuth) {
        return publicInstance(config).then(onSuccess).catch(onError)
    }
    return protectedInstance(config).then(onSuccess).catch(onError)

}