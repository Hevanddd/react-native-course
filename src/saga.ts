import {call, put, takeLatest} from 'redux-saga/effects';

import * as actions from './actions';
import {getProducts} from './requests';
import {product} from './types';

export function* fetchProductsSaga() {
  try {
    type responseType = {
      data: product[];
    };
    const response: {data: responseType} = yield call(getProducts);

    yield put(actions.productsRequestSuccess(response.data.data));
  } catch (error) {
    yield put(actions.productsRequestFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.productsRequest, fetchProductsSaga);
}
