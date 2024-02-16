export async function onRequest ({ locals, request }, next) {

    const url = import.meta.env.URL == undefined ? "https://utsavdeep.com" : import.meta.env.URL;
    locals.isOn = async (featureName) => {
        const response = await fetch(`${url}/flags/${featureName}.json`);
        const data = await response.json();
        return data[import.meta.env.ENV];
    }

    locals.getData = async (resData) => {
        const response = await fetch(`${url}/resume/${resData}.json`);
        const data = await response.json();
        return data;
    }

    // return a Response or the result of calling `next()`
    return next();
};