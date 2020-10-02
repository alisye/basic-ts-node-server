import { RequestHandler } from "express";
import * as Types from '../../types'
import { Express } from 'express'

import HttpStatus from 'http-status-codes'



/******************************************************************************
 *                                                                            *
 *                                                                            *
 *                    Market Call Handlers will be defined here               *
 *                                                                            *
 *                                                                            *
 ******************************************************************************/


/** The defined account endpoints. */
export enum OtherEndpoints {
    SOME_ENDPOINT = "/",
}

module.exports = function(app: Express) {
    /**
     * @access [NON-AUTHENTICATED]
     */
    app.get<any, {}, any>(
        OtherEndpoints.SOME_ENDPOINT, 
        (request, response) => {
            console.log("Handling / request")
            return response.status(HttpStatus.OK).json({})
        }
    )

}