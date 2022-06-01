export const handleCaculateFee = (carts) => {
  let total = 0;
  for (let i = 0; i <= carts.length - 1; i++) {
    total += carts[i].count * carts[i].price;
  }

  return Number(total).toLocaleString("en");
};

export const handleFilterCategoryHelper = (filterValue, mainData) => {
  return mainData.filter((p) =>
    p.category.toUpperCase().includes(filterValue.toUpperCase())
  );
};

export const handleFilterPriceHelper = (filterValue, mainData) => {
  let results;
  switch (filterValue) {
    case "0-10":
      results = mainData.filter((product) => product.price < 10);
      break;
    case "10-60":
      results = mainData.filter(
        (product) => product.price < 60 && product.price > 10
      );
      break;
    case ">60":
      results = mainData.filter((product) => product.price > 60);
      break;
    default:
      results = mainData;
  }

  return results;
};
