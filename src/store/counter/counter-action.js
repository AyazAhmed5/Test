import { COUNTER_ACTION_TYPES } from "./counter-types";
import { createAction } from "../../utils/reducer-utils";

export const INCREMENT = (temp) => {
  createAction(COUNTER_ACTION_TYPES.COUNTER_INCREMENT, temp);
};
export const DECREMENT = (temp) => {
  createAction(COUNTER_ACTION_TYPES.COUNTER_DECREMENT, temp);
};
