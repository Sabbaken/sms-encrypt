const initialState = {
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE_SUCCESS':
      return Object.assign({}, state, {error: null});

    case 'UPLOAD_IMAGE_ERROR':
      return Object.assign({}, state, {error: action.payload.error});

    default:
      return state;
  }
}
