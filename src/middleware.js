export async function onRequest ({ locals, request }, next) {

    const requestUrl = import.meta.env.URL ? import.meta.env.URL : 'http://localhost:4321';

    locals.isOn = async (featureName) => {
        const response = await fetch(`${requestUrl}/flags/${featureName}.json`)
        const data = await response.json();
        return data[import.meta.env.ENV];
    }

    locals.getData = async (data) => {
        const response = await fetch(`${requestUrl}/resume/${data}.json`)
        const resumeData = await response.json();
        return resumeData;
    }

    // return a Response or the result of calling `next()`
    return next();
};