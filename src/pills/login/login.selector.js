export function getUuidSelector(state) {
  return state.Login.uuid;
}

export function getNameSelector(state) {
  return state.Login.name;
}

export function getEmailSelector(state) {
  return state.Login.email;
}

export function getTokenSelector(state) {
  return state.Login.token;
}

export function getStatusCodeSelector(state) {
  return state.Login.statusCode;
}
