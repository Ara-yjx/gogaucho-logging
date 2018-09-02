var knex = require('../services/knexInit');

module.exports = {

  async get(ctx) {
    var count = await knex('anything').count('data')
    // console.log('count anything: ')
    ctx.ok({count});
  },

  async post(ctx) {
    // console.log(ctx.request.body);
    var tags = ctx.request.body.tags
    var data = ctx.request.body.data
    var mode = ctx.request.query.mode
    if (tags && data) {
      // INSERT INTO anything VALUES 
      // (ARRAY['testTag'], '{"k":"v"}'::json, '2011-10-1 14:8:00.00 -8:00');
      var now = new Date();
      var timestamp = now.getFullYear() + '-'
        + now.getMonth() + '-'
        + now.getDate() + ' '
        + now.getHours() + ':'
        + now.getMinutes() + ':'
        + now.getSeconds() + '.'
        + now.getMilliseconds();
      var row = `INSERT INTO log.anything VALUES (ARRAY['${tags.join("','")}'], '${JSON.stringify(data)}'::json, '${timestamp}');`
      // console.log(row)
      if (mode == 'test') {
        ctx.ok({request: ctx.request.body, query: row});        
      } else {
        await knex.raw(row)
        ctx.ok({timestamp});
      }
    } else {
      ctx.status = 400;
      ctx.body = 'Missing parameter "tags" and/or "data"'
    }

  },
}
