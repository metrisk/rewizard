/**
 * Deep find all children with a prop of certain key
 *
 * @param {Array | Object} arr
 * The array or object to search in
 *
 * @param {String} key
 * The key to search for
 */
const findProps = (arr: any, key: string) => {
  let vals: any = []

  const rec = (val: any) => {
    if (!val) return
    if (Array.isArray(val)) {
      for (const x of val) rec(x)
    }
    if (val.props && val.props.children) {
      rec(val.props.children)
    }
    if (val.props && val.props[key]) {
      vals = [...vals, val.props[key]]
    }
  }

  rec(arr)
  return vals
}

export default findProps
