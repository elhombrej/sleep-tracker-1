const time_maker = () => {
  let date = new Date();
  let hours = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return hours;
};

module.exports = { time_maker };
