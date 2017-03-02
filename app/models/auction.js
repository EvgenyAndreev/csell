import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	city: DS.attr(),
	price: DS.attr(),
	user: DS.attr(),
	timer: DS.attr(),
	bets: DS.attr(),
	status: DS.attr(),
	image: DS.attr()
});
