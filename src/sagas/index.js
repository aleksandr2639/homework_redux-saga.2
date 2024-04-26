import { takeLatest, put, spawn, call } from "redux-saga/effects";
import { getListApi, getDetailsApi } from "../api/index";
import { listRequest, listSuccess, listFailure } from "../slices/listSlice";
import {
  detailsRequest,
  detailsSuccess,
  detailsFailure,
} from "../slices/detailsSlice";

function* watchListRequestSaga() {
  yield takeLatest(listRequest().type, handleListRequestSaga);
}

function* handleListRequestSaga() {
  try {
    const data = yield call(getListApi);
    yield put(listSuccess(data)); // dispatch
  } catch (e) {
    yield put(listFailure(e.message)); // dispatch
  }
}

function* watchDetailsRequestSaga() {
  yield takeLatest(detailsRequest().type, handleDetailsRequestSaga);
}

// worker
function* handleDetailsRequestSaga(action) {
  try {
    const data = yield call(getDetailsApi, action.payload);
    yield put(detailsSuccess(data)); // dispatch
  } catch (e) {
    yield put(detailsFailure(e.message)); // dispatch
  }
}

export default function* saga() {
  yield spawn(watchListRequestSaga);
  yield spawn(watchDetailsRequestSaga);
}
