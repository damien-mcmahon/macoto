import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      title: 'Damien McMahon',
      position: 'Frontend Developer',
      contact: {
        github: 'https://www.github.com/damien-mcmahon',
        twitter: 'https://www.twitter.com/damien-m',
        linkedIn: 'https://www.linkedin.com/in/damienmcmahon',
        skype: 'macoto__'
      },
      available: true
    }
  }
});
