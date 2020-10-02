import { Express } from 'express'
import fs from 'fs'

//Endpoint types
import { AuthenticationEndpoints } from './auth'
import { OtherEndpoints } from './other'

//Typing exports
export { OtherEndpoints, AuthenticationEndpoints }

/**
 * This function will attach all of the handlers defined in this directory
 *  to the Express app instance. 
 *  
 * If you would like to create another endpoint
 *  for the market endpoints, add the endpoint to market.ts.
 * 
 * If you would like to create another group of endpoints, please create another 
 *  *.ts file where * is any file name and export a function that accepts the 
 *  express instance.
 */
module.exports = function(app: Express) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
            return;
        const name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}