import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsFetch, getCatsError } from "../redux/catSlice";

const API_URL = "https://api.thecatapi.com/v1/breeds?limit=10";

function* handleCatsFetch() {
  try {
    const cats = yield call(() => fetch(API_URL));
    const catsJSON = yield cats.json();
    yield put(getCatsSuccess(catsJSON));
  } catch (err) {
    yield put(getCatsError(err.message));
  }
}

function* catSaga() {
  yield takeEvery(getCatsFetch.type, handleCatsFetch);
}

export default catSaga;
