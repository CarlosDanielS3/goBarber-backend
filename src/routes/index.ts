import { Router } from 'express';
import AppointmentsRouter from './Appointment.routes';
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'

const routes = Router();

routes.use('/appointments', AppointmentsRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)



export default routes;
