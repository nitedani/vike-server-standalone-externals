import * as vite from 'vite';

declare const config: {
    name: string;
    vite: {
        plugins: vite.Plugin<any>[];
    };
    require: {
        "vike-server": string;
    };
};

export { config as default };
