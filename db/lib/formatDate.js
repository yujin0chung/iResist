module.exports = (date, hour = '00', minute = '00') => {
  
  console.log('DATE IN FORMATTER:', date)
  date = date.split('-');
  const month = (parseInt(date[1]) - 1)
  return Date.UTC(parseInt(date[0]), month, parseInt(date[2]), parseInt(hour), parseInt(minute));
}