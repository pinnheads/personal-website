import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ locals }, next) => {
    const url = import.meta.env.URL == undefined ? "https://utsavdeep.com" : import.meta.env.URL;
    locals.isOn = async (featureName: string) => {
        const response = await fetch(`${url}/flags/${featureName}.json`);
        const data = await response.json();
        return data[import.meta.env.ENV];
    }

    locals.getData = async (resData: string) => {
        const response = await fetch(`${url}/resume/${resData}.json`);
        const data = await response.json();
        return data;
    }

    // return a Response or the result of calling `next()`
    return next();
});