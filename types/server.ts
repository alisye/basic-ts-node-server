



import {
    AuthenticationEndpoints,
    OtherEndpoints
} from '../src/handlers'

// import HttpStatus from 'http-status-codes'

export interface ResponseError {
    error: string
}

/** Errors that the client should retry on. */
export type RetryErrors =
    | 408 | 500 | 503 | 429

export type ServerEndpoint =
    | AuthenticationEndpoint | OtherEndpoint

export type OtherEndpoint = keyof Record<OtherEndpoints, string>;

export type AuthenticationEndpoint = keyof Record<AuthenticationEndpoints, string>

export type AuthData = {
    access: string,
    accessExpiry: number,
    refresh: string,
    refreshExpiry: number,
}