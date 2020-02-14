let id = 0

exports.createUrlObj = (name, url, isInternal) => {
  return {
    id: id++,
    name,
    url,
    isInternal
  }
}
