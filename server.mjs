#!/usr/bin/env node

import Fastify from 'fastify'
import fastifyMiddie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import { fileURLToPath } from 'node:url'
import { handler as ssrHandler } from './dist/server/entry.mjs'

const app = Fastify({ logger: true })

await app
  .register(import('@fastify/rate-limit'), {
    global: true,
    max: 25,
    timeWindow: 1000 * 60 * 5,
  })
  .register(fastifyStatic, {
    root: fileURLToPath(new URL('./dist/client', import.meta.url)),
  })
  .register(fastifyMiddie)

app.use(ssrHandler)

await app.setNotFoundHandler(
  {
    preHandler: app.rateLimit(),
  },
  function (request, reply) {
    reply.code(404).send({ nothing: 'to see here' })
  }
)

await app.setErrorHandler(function (error, request, reply) {
  if (error.statusCode === 429) {
    reply.code(429)
    error.message = 'You hit the rate limit! Slow down please!'
  }
  reply.send(error)
})

app.listen({ port: 4321 })
