import { useNavigation } from "@react-navigation/native";
import { ACTION } from "./action";

export function reducer(state, action) {
  switch (action.type) {
    case ACTION.add:
      return [action.payload, ...state];
    case ACTION.update:
      return update(action.payload, state);
    case ACTION.delete:
      return state.filter((d) => d.id !== action.payload);
    default:
      return state;
  }
}

function update(payload, state) {
  const oldData = state.filter((d) => d.id !== payload.id);
  const newData = [payload, ...oldData];

  return newData;
}
