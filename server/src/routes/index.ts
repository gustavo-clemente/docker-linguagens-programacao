import express, { Application } from 'express'
import linguagensPromogracaoRoutes from '../routes/linguagem-programacao-routes.js'

const routes = (app: Application) =>{
    app.use(
        express.json(),
        linguagensPromogracaoRoutes
    )
}

export default routes