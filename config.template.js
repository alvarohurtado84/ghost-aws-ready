//
// # Ghost Configuration
// You can set up environment variables to configure your database, Amazon S3 credentials and mail
// service (this one is optional).
//
// This Ghost configuration will run only in 'production' mode. 
// Full documentation can be found at http://support.ghost.org/config/
//

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        
        url: process.env.GHOST_URL,
        
        mail: {
            transport: process.env.MAIL_TRANSPORT,
            host: process.env.MAIL_HOST,
            options: {
                service: process.env.MAIL_SERVICE,
                auth: {
                    user: process.env.MAIL_USER, 
                    pass: process.env.MAIL_PASS 
                }
            }
        },
        
        database: {
            client: 'mysql',
            connection: {
                host     : process.env.MYSQL_HOST,
                user     : process.env.MYSQL_USER,
                password : process.env.MYSQL_PASSWORD,
                database : process.env.MYSQL_DATABASE,
                charset  : 'utf8'
            }
        },
        
        storage: {  
            active: 'ghost-s3',
            'ghost-s3': {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY_ID,
                bucket: process.env.S3_BUCKET_NAME,
                region: process.env.S3_REGION,
                assetHost: process.env.S3_ASSET_HOST
            }
        },        
        
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    }
};

// Makes mail configuration optional
if(!config.production.mail.transport){
    config.production.mail = {};
}

module.exports = config;
