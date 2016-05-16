import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      title: 'Damien McMahon',
      position: 'Frontend Developer',
      location: 'London, UK',
      contact: {
        github: 'https://www.github.com/damien-mcmahon',
        twitter: 'https://www.twitter.com/damien_m',
        linkedIn: 'https://www.linkedin.com/in/damienmcmahon',
        skype: 'macoto__'
      },
      available: true,
      keitei: 'ゼロ七五九六四八七一五六'
    };
  }
});
