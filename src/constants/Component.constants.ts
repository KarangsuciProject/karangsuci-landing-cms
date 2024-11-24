const TITLE_VARIANTS = {
  REGULAR: 'regular',
  LOGIN_TITLE: 'loginTitle',
  LOGIN_SUBTITLE: 'loginSubtitle',
  REMEMBER_EMAIL: 'rememberEmail',
} as const;

export const TITLE = {
  VARIANTS: TITLE_VARIANTS,
};

const INPUT_VARIANTS = {
  REGULAR: 'regular',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export const INPUT = {
  VARIANTS: INPUT_VARIANTS,
};

const BUTTON_VARIANTS = {
  REGULAR: 'regular',
  LOGIN_BTN: 'loginBtn',
} as const;

export const BUTTON = {
  VARIANTS: BUTTON_VARIANTS,
};

const CHECKBOX_VARIANTS = {
  REMEMBEREMAIL: 'rememberEmail',
} as const;

export const CHECKBOX = {
  VARIANTS: CHECKBOX_VARIANTS,
};

const INPUT_LABEL_VARIANTS = {
  REGULAR: 'regular',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export const INPUT_LABEL = {
  VARIANTS: INPUT_LABEL_VARIANTS,
};
