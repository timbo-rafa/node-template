import nconf from 'nconf'

// Load arguments from argv (highest priority)
nconf.argv()
// Load from shell environment
nconf.env()
// Load from config.json (lowest priority)
nconf.file('./config.json')

export default nconf