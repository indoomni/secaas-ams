import { registerFunction } from '@plasmicapp/react-web/lib/host';
// import pkg from '@plasmicapp/react-web/lib/host';
// const { registerFunction } = pkg;

const setString = function (key, value) {
    console.log(`localStorage::setString ${key} -> ${value}`);
    try {
        localStorage.setItem(key, value);
    } catch (err) {
        console.error(err.message);
    }
};
registerFunction(setString, {
    namespace: 'localStorage',
    name: 'setString',
    importPath: './pages/utils_localStorage.js',
    params: [
        {
            name: 'key',
            type: 'string',
        },
        {
            name: 'value',
            type: 'string',
        },
    ],
});
console.log('--localStorage::setString function registered!');

const setObject = function (key, value) {
    console.log(`localStorage::setObject ${key} -> ${value}`);
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error(err.message);
    }
};
registerFunction(setObject, {
    namespace: 'localStorage',
    name: 'setObject',
    importPath: './pages/utils_localStorage.js',
    params: [
        {
            name: 'key',
            type: 'string',
        },
        {
            name: 'value',
            type: 'object',
        },
    ],
});
console.log('--localStorage::setObject function registered!');

const getString = function (key) {
    console.log(`localStorage::getString ${key}`);
    try {
        const value = localStorage.getItem(key);
        console.log(`localStorage::getString ${key} -> ${value}`);
        return value;
    } catch (err) {
        console.error(err.message);
    }
};
registerFunction(getString, {
    namespace: 'localStorage',
    name: 'getString',
    importPath: './pages/utils_localStorage.js',
    params: [
        {
            name: 'key',
            type: 'string',
        },
    ],
    returnValue: {
        type: 'string',
    },
});
console.log('--localStorage::getString function registered!');

const getObject = function (key) {
    console.log(`localStorage::getObject ${key}`);
    try {
        const value = localStorage.getItem(key);
        console.log(`localStorage::getObject ${key} -> ${value}`);
        return JSON.parse(value);
    } catch (err) {
        console.error(err.message);
    }
};
registerFunction(getObject, {
    namespace: 'localStorage',
    name: 'getObject',
    importPath: './pages/utils_localStorage.js',
    params: [
        {
            name: 'key',
            type: 'string',
        },
    ],
    returnValue: {
        type: 'object',
    },
});
console.log('--localStorage::getObject function registered!');

const remove = function (key) {
    console.log(`localStorage::remove ${key}`);
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.error(err.message);
    }
};
registerFunction(remove, {
    namespace: 'localStorage',
    name: 'remove',
    importPath: './pages/utils_localStorage.js',
    params: [
        {
            name: 'key',
            type: 'string',
        },
    ],
});
console.log('--localStorage::remove function registered!');

export { setString, setObject, getString, getObject, remove };
