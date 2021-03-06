import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';

export const setting = {
    app: {
        name: 'WebNJGIS',
        version: 'v0.01'
    },
    auth: true,
    port: '9999',
    // session_secret: 'ashdfjhaxaskjfxfjksdjhflak',
    jwt_secret: 'asdl;fjl;asdjflasjkfsl;jfdl;asdfjl;asdjkflsda',
    platform: (function() {
        let platform = 1;
        if (os.type() == 'Linux') {
            platform = 2;
        }
        return platform;
    })(),
    mongodb: {
        // name: 'WebNJGIS',
        name: 'Comparison',
        host: '127.0.0.1',
        port: '27017'
    },
    model_service_container: {
        host: '172.21.213.146',
        // host: '127.0.0.1',
        port: '8060'
    },
    uploadPath: __dirname + '/../upload/',
    UDX: {
        parse: {
            maxSize: 10000
        }
    }
};