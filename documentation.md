

# Client Documentation

This server was designed to run locally and has been chosen to run on PORT *8085*. If you have any conflicts with this port, please change it accordingly. 

In order to launch the server, please make sure you have *npm* and have installed the necessary dependencies by running:

    npm install

After this requirement has been met, the server will run on:
    
    http://localhost:8085

after running npm start.

<br />

# Endpoints

Note: Any changes to these endpoints' implementations must be documented.

<br />

<hr />

## &#x1F34F; Other Endpoints

The following are the routes for the "other" endpoints.


<hr />


### &#x1F534; [GET] /


<small>RESPONSE SCHEMA:</small>    application/json

    [200]: {}

<br />
<hr />


## &#x1F34F; Authentication Endpoints

The following are the routes for the authentication endpoints.

<hr />

### &#x1F534; [POST] /authenticate

<small>REQUEST BODY SCHEMA:</small>    application/json

    username:       string
    password:       string


<small>RESPONSE SCHEMA:</small>    application/json

    [200]: Account
        
        Account
            id:                 string
            username:           string
            password:           string
            authData:           AuthData
            creationDate:       number
        AuthData
            refresh:            string
            /** Time in UTC until the refresh token is expired. */
            refreshExpiry:      number
            access:             string
            /** Time in UTC until the access token is expired. */
            accessExpiry:       number


    [400, 599]:

        ResponseError 
           error:               string

<br />
<hr />

### &#x1F534; [POST] /refresh

Refreshes the tokens and returns the new access and refresh tokens respectively.

<small>REQUEST BODY SCHEMA:</small>    application/json

    refresh:                    string

<small>RESPONSE SCHEMA:</small>    application/json

    [200]: AuthData

        AuthData
            refresh:            string
            /** Time in UTC until the refresh token is expired. */
            refreshExpiry:      number
            access:             string
            /** Time in UTC until the access token is expired. */
            accessExpiry:       number


    [400, 599]:

        ResponseError 
           error:               string







