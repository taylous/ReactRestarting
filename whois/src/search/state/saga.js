import { all, put, call, takeEvery } from 'redux-saga/effects';
import { ACTIONS, TYPES } from '.';
import { callApi } from '../../common/util/api';

function* fetchAutoComplete({ keyword }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword },
  });

  if (isSuccess && data) {
    yield put(ACTIONS.setValue('autoCompletes', data));
  }
}

export default function* () {
  yield all([takeEvery(TYPES.FETCH_AUTOCOMPLETE, fetchAutoComplete)]);
}
