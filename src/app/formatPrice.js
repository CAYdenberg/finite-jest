
export default function(price) {
  if (price <= 0 || isNaN(price)) {
    return null
  } else if (price < 1000) {
    return `$${Math.round(price)}`
  } else if (price < 1000000) {
    return `$${Math.round(price / 1000)}K`
  } else {
    return `$${Math.round(price / 1000000)}M`
  }
}
