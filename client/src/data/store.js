module.exports =
{
  events:
  {
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
      status: 'upcoming',
      eventStart: 1498931057000,
      eventDuration: 3600000,
      address: '100 huge lane, san francisco CA 99999'
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
      status: 'upcoming',
      eventStart: 1499449457000,
      eventDuration: 3600000,
      address: '9 huge lane, san francisco CA 99999'
    },
    3: {
      organizers:
      {
        userID: 10,
        userName: 'blackSpaniel'
      },
      name: 'ban kale',
      description: 'kale is a marketing lie and is actually not even that nutritious',
      cause: 'stop bb propagated lies',
      attendee_count: 10000,
      mapId: 3,
      feedId: 3,
      status: 'ongoing',
      eventStart: 1499708657000,
      eventDuration: 3600000,
      address: '101 huge lane, san francisco CA 99999'
    }
  },
  user: {
    10: {
      userName: 'blackSpaniel',
      events_attending: [1, 2],
      events_organizing: [3]
    }
  },

  users: {
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
  },

  maps: {
    1: {
      lat: 51.505,
      long: -0.09,
      eventId: 1,
      pins: [1]
    },
    2: {
      lat: 51.505,
      long: -0.09,
      eventId: 2,
      pins: [2, 3]
    },
    3: {
      lat: 51.505,
      long: -0.09,
      eventId: 3,
      pins: [4, 5, 6, 7]
    }
  },

  feed: {
    1: {
      feed_items: [1]
    },
    2: {
      feed_items: [2, 3, 4]
    },
    3: {
      feed_items: [5, 6]
    }
  },
  pins: {
    1: {
      userId: 10,
      pin_cred: 1,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    },
    2: {
      userId: 20,
      pin_cred: 10,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    },
    3: {
      userId: 40,
      pin_cred: 4,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    },
    4: {
      userId: 60,
      pin_cred: 0,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    },
    5: {
      userId: 30,
      pin_cred: 4,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    },
    6: {
      userId: 70,
      pin_cred: 5,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    },
    7: {
      userId: 20,
      pin_cred: 8,
      pin_type: 'string',
      pin_text: 'string',
      lat: 51.505,
      long: -0.09
    }
  },

  feedItems: {
    1: {
      userId: 10,
      item_text: 'look at mee',
      item_url: 'some url',
      item_created_at: '2017/03/25',
      item_cred: 8
    },
    2: {
      userId: 40,
      item_text: 'burning state',
      item_url: 'some url',
      item_created_at: '2017/10/01',
      item_cred: 2
    },
    3: {
      userId: 30,
      item_text: 'selfiee!',
      item_url: 'some url',
      item_created_at: '2017/10/01',
      item_cred: 6
    },
    4: {
      userId: 50,
      item_text: 'whee whee oui oui!',
      item_url: 'some url',
      item_created_at: '2017/10/01',
      item_cred: 3
    },
    5: {
      userId: 20,
      item_text: 'so many people',
      item_url: 'some url',
      item_created_at: '2017/12/12',
      item_cred: 9
    },
    6: {
      userId: 10,
      item_text: 'me bored at the protest',
      item_url: 'some url',
      item_created_at: '2017/12/12',
      item_cred: 2
    }
  }
};
