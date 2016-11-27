const config = require('../config')
const server = require('../server/main')
const debug = require('debug')('app:bin:server')
const error = require('debug')('app:error')
const mongoose = require('mongoose')
const chalk = require('chalk')
const port = config.server_port
const mongoHost = config.mongo_host

try {
  mongoose.connect(mongoHost)
  mongoose.connection.on('error', () => {
    error(`Unable to connect to Mongo running at ${mongoHost} App will now exit ${chalk.red('✗')}`)
    process.exit()
  })
  mongoose.connection.once('open', function () {
    debug(`Successfully connected to Mongo running at ${mongoHost} ${chalk.green(' ✓')}`)
  })
  mongoose.Promise = global.Promise

  server.listen(port)
  debug(`Server is now running at http://localhost:${port}. ${chalk.green(' ✓')}`)
} catch (e) {
  error(e.message)
}

