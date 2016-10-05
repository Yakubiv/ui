import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string')
});
