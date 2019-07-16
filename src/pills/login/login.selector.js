export function getUuid(state) {
  return state.LoginReducer.uuid;
}

export function getNameSelector(state) {
  return state.LoginReducer.name;
}

export function getEmail(state) {
  return state.LoginReducer.email;
}

export function getToken(state) {
  return state.LoginReducer.token;
}
export function getStatusCode(state) {
  return state.LoginReducer.statusCode;
}
