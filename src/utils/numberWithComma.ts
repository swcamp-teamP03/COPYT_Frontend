const numberWithCommas = (number: number | undefined) => {
  if (typeof number === 'undefined') {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default numberWithCommas;
