/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
    interface Locals {
        isOn: (featureName: string) => Promise<any>,
        getData: (resData: string) => Promise<any>
    }
}