import express from 'express'
import bodyParser from 'body-parser'
import chalk from 'chalk'

const app = express()
app.use(bodyParser.json())
/**
 * Middleware to register usage on endpoints, handle retryable errors that occur, 
 *  and log every request sent to the server.
 * @type {RetryErrors} the type of error that can be thrown from this method.
 */
app.use((req, res, next) => {
    // Can do error logging here
    console.log("[Middleware] Received request: ", req.path)
    next();
})
/** 
 * Attaches all of the endpoints/handlers to the current
 *  Express app instance.
 */
require('./handlers')(app)
/** Starts the server on PORT 8085 */
export const PORT = 8085
app.listen(PORT, () => {
    console.log(chalk.cyanBright(`[http://localhost:${PORT}] Server has started..`))
})