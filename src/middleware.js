import flagsData from '../src/assets/flags.json' assert {type: 'json'};

export async function onRequest ({ locals, request }, next) {

    locals.isOn = (featureName) => {
        return flagsData[featureName][import.meta.env.ENV]
    }

    // return a Response or the result of calling `next()`
    return next();
};