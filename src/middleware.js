export async function onRequest ({ locals, request }, next) {

    locals.isOn = async (featureName) => {
        const response = await fetch(`${import.meta.env.URL}/flags/${featureName}.json`);
        const data = await response.json();
        return data[import.meta.env.ENV];
    }

    locals.getData = async (resData) => {
        const response = await fetch(`${import.meta.env.URL}/resume/${resData}.json`);
        const data = await response.json();
        return data;
    }

    // return a Response or the result of calling `next()`
    return next();
};