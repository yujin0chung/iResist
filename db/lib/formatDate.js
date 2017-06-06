const tzwhere = require('tzwhere')
tzwhere.init();

module.exports = (lat, long, date, hour, minute) => {
  const tzOffset = tzwhere.tzOffsetAt(lat, long)

  console.log('OFFSET IS: ', tzOffset)
  date = date.split('-');
  const month = (parseInt(date[1]) - 1)
  return Date.UTC(parseInt(date[0]), month, parseInt(date[2]), parseInt(hour), parseInt(minute)) - tzOffset;

}
