export const Status = {
  EMPTY: 'EMPTY',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const empty = () => ({ status: Status.EMPTY });
export const loading = () => ({ status: Status.LOADING });
export const success = data => ({ status: Status.SUCCESS, data });
export const error = errorMessage => ({ status: Status.ERROR, errorMessage });
