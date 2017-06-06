module.exports = (date, hour, minute) => {
  date = date.split('-');
  // console.log('this is the hour in formatDate', hour);
  // console.log('this is the minute in formatDate', minute);
  const month = (parseInt(date[1]) - 1)
  console.log(Date.UTC(parseInt(date[0]), month, parseInt(date[2]), parseInt(hour), parseInt(minute)));
  return Date.UTC(parseInt(date[0]), month, parseInt(date[2]), parseInt(hour), parseInt(minute));

}
