import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	price: DS.attr(),
	user: DS.attr(),
	city: DS.attr(),
	timer: DS.attr(),
	bets: DS.attr(),
	status: DS.attr(),
	image: DS.attr()
});
