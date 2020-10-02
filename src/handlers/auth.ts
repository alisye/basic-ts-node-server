import { Express } from 'express'
import HttpStatus from 'http-status-codes'

import * as Types from '../../types'

/******************************************************************************
 *                                                                            *
 *                                                                            *
 *                    Auth Call Handlers will be defined here                 *
 *                                                                            *
 *                                                                            *
 ******************************************************************************/

/** The defined account endpoints. */
export enum AuthenticationEndpoints {
    AUTHENTICATE = "/authenticate",
    REFRESH = "/refresh"
}

interface RequestParams {
    username?:          string,
    password?:          string,
}

module.exports = function(app: Express): void {
    /**
     * This endpoint will be used to authenticate a user against the DB.
     * @access [NON-AUTHENTICATED]
     * @returns { {token: string, username: string} } the new access token that was refreshed
     * @throws {Types.ResponseError} response error if anything went wrong
     */
    app.post<any, { token: string, username: string } | Types.ResponseError, any>(
        AuthenticationEndpoints.AUTHENTICATE, 
        (request, response) => {

            const { username, password } = request.body as RequestParams

            if (!username || !password) {
                return response.status(HttpStatus.BAD_REQUEST).send({
                    error: "You are missing arguments in your body."
                })
            }

            const account = { token: "", username: "" }
            if (!account) {
                return response.status(HttpStatus.UNAUTHORIZED).send({error: "Invalid credentials."})
            }
            return response.status(HttpStatus.OK).send({ token: "", username: "" })
        }
    )

    /**
     * This endpoint will be used to refresh the token's of the user.
     * @access [AUTHENTICATED]
     * @returns { {token: string, username: string} } the new access token that was refreshed
     * @throws {Types.ResponseError} response error if anything went wrong
     */
    app.post<any, Types.AuthData | Types.ResponseError, any>(
        AuthenticationEndpoints.REFRESH,
        (request, response) => {
            const { authorization } = request.headers

            if (!authorization) {
                return response.status(HttpStatus.UNAUTHORIZED).send({
                    error: "You must be authenticated to access this endpoint."
                })
            }

            // Check the bearer in authorization vs DB/redis cache under here

            return response.status(HttpStatus.OK).send({
                access: "",
                // lasts 24 hours
                accessExpiry: Date.now() + 1000 * 60 * 60 * 24,
                refresh: "",
                // lasts 48 hours
                refreshExpiry: Date.now() + 1000 * 60 * 60 * 48,
            })
        }
    )

    //other routes..
}