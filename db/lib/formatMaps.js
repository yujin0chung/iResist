module.exports = (maps) => {
  let formattedMaps = {};

  maps.forEach((map) => {
    formattedMaps[map.id] = map;
  });

  return formattedMaps;
};
