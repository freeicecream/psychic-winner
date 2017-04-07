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

  this.namespace = '/api';

  let users = [{
    type: 'users',
    id: '1',
    attributes: {
      firstName: 'Kamal',
      lastName: 'Narang',
      position: 'Vice President',
      photo: 'https://randomuser.me/api/portraits/lego/0.jpg',
    }, 
    relationships: {
      subordinates: {
        data: [{
          type: 'users',
          id: 2
        }, {
          type: 'users',
          id: 3
        }]
      }
    }
  }, {
    type: 'users',
    id: '2',
    attributes: {
      firstName: 'Sunil Kumar',
      lastName: 'Gupta',
      position: 'GM - Strat Ops',
      photo: 'https://randomuser.me/api/portraits/lego/1.jpg'
    },
    relationships: {
      superior: {
        data: {
          type: 'users',
          id: 1
        }
      },
      subordinates: {
        data: [{
          type: 'users',
          id: 4
        }]
      }
    }
  }, {
    type: 'users',
    id: '3',
    attributes: {
      firstName: 'Salman',
      lastName: 'Siddiqui',
      position: 'General Manager',
      photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
    },
    relationships: {
      superior: {
        data: {
          type: 'users',
          id: 1
        }
      }
    }
  }, {
    type: 'users',
    id: '4',
    attributes: {
      firstName: 'Anthony Misael',
      lastName: 'Dy',
      position: 'Manager Projects',
      photo: 'https://randomuser.me/api/portraits/lego/4.jpg'
    },
    relationships: {
      superior: {
        data: {
          type: 'users',
          id: 2
        }
      }
    }
  }];


  this.get('/users/:id', function(db, request) {
    return {
      data: users.find((user) => request.params.id === user.id)
    };
  });
}
