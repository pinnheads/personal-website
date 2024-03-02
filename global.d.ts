export { };
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            URL: string;
            ENV: 'dev' | 'preview' | 'production';
        }
    }
}