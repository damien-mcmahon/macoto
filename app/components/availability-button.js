import Ember from 'ember';

const AVAILABLE_TEXT = 'available';
const NOT_AVAILABLE_TEXT = 'unavailable';


export default Ember.Component.extend({
  classNameBindings: ['available:is-available'],
  available: Ember.computed.bool('available', () => {
    return this.get('available');
  })
});
