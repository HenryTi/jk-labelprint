import { createContext } from "react";

export const CountContext = createContext<any>({});

const url = 'http://localhost:5173/label-print/';
export function assetsUrl(path: string) {
    return `${url}/${path}`;
}

export function iconUrl(path: string) {
    return `${url}/icon/${path}`;
}

export function printCssUrl(path: string) {
    return `${url}/printCss/${path}`;
}
