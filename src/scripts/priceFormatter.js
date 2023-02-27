export default function priceFormatter(price) {
  price = price.toString();
  return price.slice(0, -3) + ' ' + price.slice(-3);
}