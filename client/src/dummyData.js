module.exports.events = [{
	1: {
		organizers: 
          {  
             userID: 10, 
             userName: 'blackSpaniel'
          },
		name: 'PUTIN POOPOO',
		description: 'down with the oligarchy and dictatorship yaya',
		cause: 'dictatorships are bad', 
		attendee_count: 747474747,
		mapId: 1,
		feedId: 1,
    status: 'upcoming'
	},
    2: {
		organizers: 
          {  
             userID: 20, 
             userName: 'tabbyCat'
          },
		name: 'GOD SAVE EUGENE',
		description: 'treat eugene like the queen that she is',
		cause: 'yujin is her own sovereign', 
		attendee_count: 89317948374891,
		mapId: 2,
		feedId: 2,
    status: 'upcoming'
	},
    3: {
		organizers: 
          {  
             userID: 30, 
             userName: 'asian'
          },
		name: 'ban kale',
		description: 'kale is a marketing lie and is actually not even that nutritious',
		cause: 'stop bb propagated lies', 
		attendee_count: 10000,
		mapId: 3,
		feedId: 3,
    status: 'ongoing'
	}  
}];

module.exports.user = [{
	10: {
		userName: 'blackSpaniel',
		events_attending: [1, 2],
        events_organizing: []
	},
    20: {
		userName: 'tabbyCat',
		events_attending: [2],
        events_organizing: [2]
	},
    30: {
		userName: 'asian',
		events_attending: [2, 3],
        events_organizing: [3]
	},
    40: {
		userName: 'bey0nce',
		events_attending: [2],
        events_organizing: []
	},
    50: {
		userName: 'celineDion',
		events_attending: [2],
        events_organizing: [1]
	},
    60: {
		userName: 'stevenSeagall',
		events_attending: [1, 2],
        events_organizing: []
	},
    70: {
		userName: 'sneakyMustache',
		events_attending: [2],
        events_organizing: []
	}
}];

module.exports.users = [{
	10: {
		userName: 'blackSpaniel', 
		userCred: 1
	},
    20: {
		userName: 'tabbyCat', 
		userCred: 10
	},
    30: {
		userName: 'asian', 
		userCred: 7
	},
    40: {
		userName: 'bey0nce', 
		userCred: 3
	},
    50: {
		userName: 'celineDion', 
		userCred: 2
	},
    60: {
		userName: 'stevenSeagall', 
		userCred: 0
	},
    70: {
		userName: 'sneakyMustache', 
		userCred: 5
	}
}];

module.exports.maps = [{
	1: {
        map_location: 'nyc',
        eventId: 1,
		pins: {
			1: {
				userId: 10,
				pin_cred: 1,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			}
		}
	},
    2: {
        map_location: 'yujinia',
        eventId: 2,
		pins: {
			1: {
				userId: 20,
				pin_cred: 10,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			},
            2: {
				userId: 40,
				pin_cred: 4,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			},
		}
	},
    3: {
        map_location: 'ocean',
        eventId: 3,
		pins: {
			1: {
				userId: 60,
				pin_cred: 0,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			},
            2: {
				userId: 30,
				pin_cred: 4,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			},
            3: {
				userId: 70,
				pin_cred: 5,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			},
            4: {
				userId: 20,
				pin_cred: 8,
				pin_type: 'string',
				pin_text: 'string',
				pin_location: 'string?'
			}
		}
	}
}];

module.exports.feed = [{
	1: {
		feed_items: {
			1: {
				userId: 10,
				item_text: 'look at mee',
				item_url: 'some url',
				item_created_at: "2017/03/25",
				item_cred: 8
			}
		}
	},
    2: {
		feed_items: {
			1: {
				userId: 40,
				item_text: 'burning state',
				item_url: 'some url',
				item_created_at: "2017/10/01",
				item_cred: 2
			},
            2: {
				userId: 30,
				item_text: 'selfiee!',
				item_url: 'some url',
				item_created_at: "2017/10/01",
				item_cred: 6
			},
             3: {
				userId: 50,
				item_text: 'whee whee oui oui!',
				item_url: 'some url',
				item_created_at: "2017/10/01",
				item_cred: 3
			}
		}
	},
    3: {
		feed_items: {
			1: {
				userId: 20,
				item_text: 'so many people',
				item_url: 'some url',
				item_created_at: "2017/12/12",
				item_cred: 9
			},
            2: {
				userId: 10,
				item_text: 'me bored at the protest',
				item_url: 'some url',
				item_created_at: "2017/12/12",
				item_cred: 2
			}
		}
	}
}];



