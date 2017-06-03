module.exports = (date, hour = '00', minute = '00') => {
  date = date.split('-');
  const month = (parseInt(date[1]) - 1).toString()
  return Date.UTC(date[0], month, date[2], hour, minute);
}