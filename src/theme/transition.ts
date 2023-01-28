import {
  DEFAULT_TRANSITION_DURATION,
  DEFAULT_TRANSITION_TIMING
} from "./constant";

export default {
  create: (
    duration: number = DEFAULT_TRANSITION_DURATION,
    property: string = 'all',
    timing: string = 'linear',
    delay: number = DEFAULT_TRANSITION_TIMING
  ) => `${property} ${duration}ms ${timing} ${delay}ms`,
};
