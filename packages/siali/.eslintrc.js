module.exports = {
  root: true,
  env: {node: true},
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'xo-space',
    'plugin:node/recommended',
    'plugin:unicorn/recommended'
  ],
  plugins: ['node', 'promise', 'unicorn'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {delimiter: 'none', requireLast: false}, singleline: {delimiter: 'comma', requireLast: false}
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-var-requires': 'off',
    'graphql/capitalized-type-name': 'error',
    'graphql/named-operations': 'error',
    'graphql/no-deprecated-fields': 'error',
    'graphql/template-strings': ['error', {env: 'literal', tagName: 'gql'}],
    'node/no-unsupported-features/es-syntax': 'off',
    'node/shebang': 'off',
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/valid-params': 'warn',
    'guard-for-in': ['error'],
    'accessor-pairs': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error'],
    'block-scoped-var': ['error'],
    'block-spacing': ['error'],
    'brace-style': 'off',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error', 'never'],
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eol-last': 'off',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error'],
    'func-style': ['warn', 'declaration', {allowArrowFunctions: true}],
    'generator-star-spacing': ['error', 'after'],
    'handle-callback-err': ['error'],
    'key-spacing': ['error', {beforeColon: false}],
    'keyword-spacing': ['error', {before: true, after: true}],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': 'off',
    'max-depth': ['error', 5],
    'max-len': ['warn', {code: 120, tabWidth: 2, ignoreUrls: true, comments: 140}],
    'max-nested-callbacks': ['error', 4],
    'max-statements-per-line': 'off',
    'new-parens': ['error'],
    'no-alert': ['error'],
    'no-await-in-loop': 'off',
    'no-buffer-constructor': ['error'],
    'no-caller': ['error'],
    'no-catch-shadow': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-console': 'off',
    'no-div-regex': ['error'],
    'no-duplicate-imports': ['error', {includeExports: true}],
    'no-else-return': ['error'],
    'no-empty-pattern': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-extra-parens': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-mixed-requires': ['error'],
    'no-multi-spaces': 'off',
    'no-multi-str': ['error'],
    'no-native-reassign': ['error'],
    'no-nested-ternary': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-require': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal-escape': ['error'],
    'no-path-concat': ['error'],
    'no-process-exit': 'off',
    'no-proto': ['error'],
    'no-prototype-builtins': ['warn'],
    'no-restricted-globals': ['error'],
    'no-restricted-modules': ['error'],
    'no-restricted-properties': ['error'],
    'no-return-await': ['warn'],
    'no-script-url': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-tabs': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-throw-literal': ['error'],
    'no-trailing-spaces': ['error'],
    'no-undef-init': ['error'],
    'no-unreachable': ['warn'],
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': ['error'],
    'no-whitespace-before-property': ['error'],
    'no-with': ['error'],
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': ['warn', 'never'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-template': ['error'],
    'quote-props': ['error', 'as-needed'],
    'require-await': ['warn'],
    'rest-spread-spacing': ['error'],
    'sort-imports': 'off',
    'sort-vars': ['error'],
    'space-before-blocks': ['error'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['error', 'always'],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error'],
    'template-tag-spacing': ['error'],
    'unicorn/escape-case': 'off',
    'unicorn/no-process-exit': 'off',
    'valid-jsdoc': 'off',
    'vars-on-top': ['error'],
    'wrap-iife': ['error', 'inside'],
    camelcase: ['error', {properties: 'never'}],
    complexity: ['error', 30],
    curly: ['error', 'multi-line', 'consistent'],
    indent: ['warn', 2, {SwitchCase: 1, MemberExpression: 1, ignoredNodes: []}],
    quotes: ['error', 'single', {avoidEscape: true}],
    radix: ['error'],
    semi: ['error', 'never'],
    yoda: ['error', 'never']
  }
}
