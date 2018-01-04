const ResponseStatus = {

  ERROR: 'ERROR',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  EMPTY: 'EMPTY',

  empty: () => {
    return { status: ResponseStatus.EMPTY }
  },
  loading: () => {
    return { status: ResponseStatus.LOADING }
  },
  success: data => {
    return { status: ResponseStatus.SUCCESS, data }
  },
  error: message => {
    return { status: ResponseStatus.ERROR, message }
  }
}

export default ResponseStatus
