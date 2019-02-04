export function getBoatTypes(data) {
  return data
    .flatMap(item =>
      item.products.map(x => ({
        productClass: x.productClass,
        productClassId: x.productClassId
      }))
    )
    .filter(
      (obj, pos, arr) =>
        arr
          .map(mapObj => mapObj["productClass"])
          .indexOf(obj["productClass"]) === pos
    );
}
