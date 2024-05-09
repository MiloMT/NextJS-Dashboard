import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Myles Taylor Dev',
  brandUrl: 'https://mylestaylor.dev',
  brandTarget: '_blank',

  //
  colorPrimary: '#0d0d0d',
  colorSecondary: '#4fc963',

  // UI
  appBg: '#0d0d0d',
  appContentBg: '#0d0d0d',
  appPreviewBg: '#8c8c8c',
  appBorderColor: '#4fc963',
  appBorderRadius: 4,

  // Text colors
  textColor: '#f2f2f2',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#f2f2f2',
  barSelectedColor: '#4fc963',
  barHoverColor: '#ffffff',
  barBg: '#0d0d0d',

  // Form colors
  inputBg: '#0d0d0d',
  inputBorder: '#4fc963',
  inputTextColor: '#f2f2f2',
  inputBorderRadius: 2,
});