/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
export { };
declare namespace App {
    interface Locals {
        isOn: Function
        getData: Function
    }
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            URL: string;
            ENV: 'dev' | 'preview' | 'production';
        }
    }
}
