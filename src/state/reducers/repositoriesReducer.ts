// repositoriesState 에 관련한 내용(리덕스 안에 들어갈 정보) 의 인터페이스

import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   payload?: any;
// }

// 각각의 액션에 대한 payload 양식과 타입을 정할 수 있음.
const initialStat: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialStat,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS: // 타입 가드가 자동으로 됨.
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
