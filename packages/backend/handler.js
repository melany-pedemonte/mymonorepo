// handler.js
module.exports.function = function (event, context, callback) {
    const response = {
        statusCode : 200,
        body : JSON.stringify({
            message: 'Hello!',
            input: event,
        }),
    };

    callback(null,response)
};