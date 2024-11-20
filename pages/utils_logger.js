import { registerFunction } from '@plasmicapp/react-web/lib/host';
// import pkg from '@plasmicapp/react-web/lib/host';
// const { registerFunction } = pkg;

const log = function (text) {
    console.log('Logger ->', text);
};
registerFunction(log, {
    namespace: 'logger',
    name: 'log',
    importPath: './pages/utils_logger.js',
    params: [
        {
            name: 'text',
            type: 'string',
        },
    ],
});
console.log('--logger::log function registered!');

export { log };
