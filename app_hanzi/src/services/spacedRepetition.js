const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;

export const calculateNextReview = (progress, quality) => {
  let { ease_factor, interval, repetitions } = progress;

  ease_factor = Math.max(MIN_EASE, ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease_factor);
    }
    repetitions += 1;
  }

  const now = new Date();
  const nextReview = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

  return {
    ease_factor,
    interval,
    repetitions,
    next_review: nextReview.toISOString(),
    last_review: now.toISOString(),
  };
};
