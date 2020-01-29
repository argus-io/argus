require('dotenv').config()
const redis = require('redis'),
redist_options = {
	"host" : process.env.REDIS_HOST,
	"port" : 6379
},
client = redis.createClient(redist_options)

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function(err: any) {
    console.log('Something went wrong ' + err);
});

module.exports.setVal = function(key: string, val: string) {
    return client.set(key, val)
}

module.exports.getVal = function(key: string) {
    return new Promise((resolve, reject) => {
        client.get(key, (err: any, data: any) => {
            if(err) {
                return resolve(err)
            } else {
                return resolve(data);
            }
        });
    })
}

module.exports.delVal = function(key: string) {
    return client.del(key)
}