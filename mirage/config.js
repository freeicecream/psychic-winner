export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/api/users/:id');
  this.get('/api/evaluations/:id');
  this.get('/api/activities/:id');
  this.get('/api/notifications/:id');
  this.post('/api/emails');
  // this.post('/api/evaluations');
  this.post('/api/activities');
  this.patch('/api/users/:id');

  this.post('api/evaluations', function({ contacts }, request) {
    let attrs = this.normalizedRequestAttrs();

    return contacts.create(attrs);
  });

  this.post('/token', (schema, request) => {
    let params = request.requestBody.split('&').map(item => {
      return item.split('=')[1];
    });
    return { 
      access_token: "secret token!",
      user_id: params[1]
    };
  });
}
