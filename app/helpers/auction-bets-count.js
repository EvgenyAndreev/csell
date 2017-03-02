import Ember from 'ember';

export function auctionBetsCount(params/*, hash*/) {
	params = params + ' ставок';
  return params;
}

export default Ember.Helper.helper(auctionBetsCount);
