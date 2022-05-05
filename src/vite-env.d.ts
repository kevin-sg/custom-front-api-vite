/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_CUSTOM_API_GHIBLI: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
