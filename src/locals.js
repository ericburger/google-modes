function storeLocal(context, name, scopes) {
  for (let cx = context; cx; cx = cx.parent)
    if (scopes.indexOf(cx.name) > -1)
      return (cx.locals || (cx.locals = [])).push(name)
}
function isLocal(context, name) {
  for (let cx = context; cx; cx = cx.parent)
    if (cx.locals && cx.locals.indexOf(name) > -1) return true
  return false
}

export function markLocals(type, scopes, stream, state) {
  if (type == "def") storeLocal(state.context, stream.current(), scopes)
  else if (type == "variable" && isLocal(state.context, stream.current())) type = "variable-2"
  return type
}