import Ember from 'ember';

export default Ember.Controller.extend({
	
	actions: {
    login: function() {
      this.get('auth').login();
    },

    logout: function() {
      this.get('auth').logout();
    }
  }
});
