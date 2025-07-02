import cors from '@fastify/cors';
import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import {env} from "./config/env";
import routes from './routes';

const app:FastifyInstance = Fastify({
  logger: {
    level: env.NODE_ENV === "development" ? "info" : "error"
  }
})

app.register(cors) 

app.register(routes, {prefix: '/api'});

export default app;
