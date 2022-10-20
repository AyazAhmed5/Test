import { COUNTER_ACTION_TYPES } from "./counter-types";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTER_ACTION_TYPES.COUNTER_INCREMENT:
      return {
        ...state,
        count: payload,
      };
    case COUNTER_ACTION_TYPES.COUNTER_DECREMENT:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};
