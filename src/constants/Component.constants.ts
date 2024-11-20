const TITLE_VARIANTS = {
  REGULAR: 'regular',
  LOGIN_TITLE: 'loginTitle',
  LOGIN_SUBTITLE: 'loginSubtitle',
} as const;

export const TITLE = {
  VARIANTS: TITLE_VARIANTS,
};

const INPUT_VARIANTS = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export const INPUT = {
  VARIANTS: INPUT_VARIANTS,
};
