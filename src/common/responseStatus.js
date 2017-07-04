export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const EMPTY= 'EMPTY';

export const empty = () => ({ status: EMPTY });
export const loading = () => ({ status: LOADING });
export const success = data => ({ status: SUCCESS, data });
export const error = errorMessage => ({ status: ERROR, errorMessage });
