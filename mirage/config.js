export default function() {
  this.namespace = '/api';

  let auctions = [{
        type: 'auctions',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          price: '5 850',
          user: 'San Francisco',
          timer: 'Estate',
          bets: 15,
          status: 'ended',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'auctions',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          price: '2 300',
          user: 'Seattle',
          timer: 'Condo',
          bets: 1,
          status: 'ended',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'auctions',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          price: '1 400',
          user: 'Portland',
          timer: 'Apartment',
          bets: 5,
          status: 'active',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
   }, {
        type: 'auctions',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          price: '2 300',
          user: 'Seattle',
          timer: 'Condo',
          bets: 1,
          status: 'active',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'auctions',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          price: '1 400',
          user: 'Portland',
          timer: 'Apartment',
          bets: 5,
          status: 'active',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
   }];
  
	this.get('/auctions', function(db, request) {
	    if(request.queryParams.city !== undefined) {
	      let filteredAuctions = auctions.filter(function(i) {
	        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
	      });
	      return { data: filteredAuctions };
	    } else {
	      return { data: auctions };
	    }
	  });
}