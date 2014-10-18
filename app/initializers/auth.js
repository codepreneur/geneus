var Ref = new Firebase("https://qbe.firebaseio.com/geneus");

var auth = Ember.Object.extend({
	twitter: null,  
  authed: false,
  init: function() {
    this.authClient = new window.FirebaseSimpleLogin(Ref, function(error, twitterUser) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (twitterUser) {
        this.set('authed', true);
        this.set('twitter', twitterUser);
      } else {
        this.set('authed', false);
        this.set('twitter', null);
      }
    }.bind(this));
  },

  login: function() {
    this.authClient.login('twitter');
  },

  logout: function() {
    this.authClient.logout();
  }
});

export default {  
  name: 'Auth',

  initialize: function( container, app ) {
    app.register('auth:main', auth, {singleton: true});
    app.inject('controller', 'auth', 'auth:main');
    app.inject('route', 'auth', 'auth:main');

  }
};
