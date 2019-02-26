import {fork,all} from "redux-saga/effects";
import {watchHome} from "../../src/HomeSaga";

export default function* rootSaga() {
    yield [
        fork(watchHome)
    ];
}
