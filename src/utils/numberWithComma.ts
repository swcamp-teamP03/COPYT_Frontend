const numberWithCommas = (numer: number) => {
  return numer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
