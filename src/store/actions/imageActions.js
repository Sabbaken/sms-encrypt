export const uploadImage = (image) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.functions().httpsCallable('uploadImage')()
      .then((response) => {
        dispatch({type: 'UPLOAD_IMAGE_SUCCESS'})
      }).catch((error) => {
      dispatch({type: 'UPLOAD_IMAGE_ERROR', payload: {error}})
    })
  }
}
