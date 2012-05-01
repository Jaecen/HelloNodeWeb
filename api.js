var hunter = require('./hunter');

exports.get = (function(req, res) {

	var cards = [];
	var calls = 0;

	var getSubtypeFromSet = function(subtype, setName, callCount) {
		hunter.getCardsForSet(setName, function(set) {
			for(var cardIndex = 0; cardIndex < set.cards.length; cardIndex++) {
				if(set.cards[cardIndex].compactType.toLowerCase().indexOf(subtype) != -1) {
					cards.push({
						'name': set.cards[cardIndex].checklistName,
						'color': set.cards[cardIndex].checklistColor
					});
				}
			}
		
			if(++calls >= callCount) {
				var result = JSON.stringify(cards);
				res.send(result);
				res.end();
			}
		});
	};

	var subtype = req.params.subtype.toLowerCase();

	getSubtypeFromSet(subtype, 'Innistrad',		3);
	getSubtypeFromSet(subtype, 'Dark Ascension',	3);
	getSubtypeFromSet(subtype, 'Avacyn Restored',	3);
	
});
