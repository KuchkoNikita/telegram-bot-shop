module.exports = {
  extends: ['stylelint-config-standard-scss'],
  customSyntax: 'postcss-scss',
  ignoreFiles: [
    '/build',
    '/node_modules',
    '/public',
  ],
  plugins: ['stylelint-order'],
  rules: {
    linebreaks: 'unix',
    'string-quotes': 'single',
    'keyframe-selector-notation': 'percentage',
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'no-descending-specificity': null,
    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'extend',
        },
        'at-rules',
        'dollar-variables',
        'custom-properties',
        'declarations',
        'rules',
        {
          type: 'at-rule',
          name: 'if',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'desktop',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'macbook-twelve',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'tablet',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'below-tablet',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'phone',
        },
      ],
    ],
  },
};
