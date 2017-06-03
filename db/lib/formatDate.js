module.exports = (date, hour = '00', minute = '00') => {
  date = date.split('-');
  return Date.UTC(date[0], date[1], date[2], hour, minute);
}