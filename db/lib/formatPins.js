module.exports = (pins) => {
  let formattedPins = {};
  let pinIds = [];

  pins.forEach((pin) => {
    formattedPins[pin.id] = pin;
    pinIds.push(pin.id);
  });

  formattedPins.allPins = pinIds;

  return formattedPins;
};
