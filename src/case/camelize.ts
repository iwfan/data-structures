function camelize(str: String) {
  return str.replace(/(^[a-z]{1})|\-([a-z]{1})/g, s =>
    s.length > 1 ? s[1].toUpperCase() : s.toUpperCase()
  )
}

export default camelize
