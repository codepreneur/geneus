/* globals Firebase */
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://makkalu.firebaseio.com/')
});
