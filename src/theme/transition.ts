import {
  DEFAULT_TRANSITION_DURATION,
  DEFAULT_TRANSITION_TIMING
} from './constant';

export default {
  create: (
    duration: number = DEFAULT_TRANSITION_DURATION,
    properties: string[] = [],
    timing: string = 'linear',
    delay: number = DEFAULT_TRANSITION_TIMING
  ) =>
    properties.length === 0
      ? `all ${duration}ms ${timing} ${delay}ms`
      : properties.map((property) => `${property} ${duration}ms ${timing} ${delay}ms`).join(', '),
};
