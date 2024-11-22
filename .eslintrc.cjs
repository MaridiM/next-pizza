module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        // 'next/typescript',
        'next/core-web-vitals', // Оптимизированные правила для Next.js
        'eslint:recommended', // Базовые правила ESLint
        'plugin:@typescript-eslint/recommended', // Рекомендованные правила TypeScript
        'plugin:react/recommended', // Рекомендованные правила для React
        'plugin:prettier/recommended', // Интеграция с Prettier
    ],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['dist', '.eslintrc.cjs'], // Игнорируем ненужные директории и файлы
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint', // Плагин для TypeScript
        'react-hooks', // Дополнительные правила для хуков React
        'import', // Плагин для улучшения работы с импортами
        'react', // Плагин для React
        'prettier', // Интеграция с Prettier
    ],
    rules: {
        // Общие правила
        eqeqeq: 'warn',
        'no-var': 'error',
        'no-eval': 'error',
        'prefer-const': 'warn',
        'no-undef-init': 'warn',
        'no-duplicate-imports': 'warn',
        'no-empty-pattern': 'warn',

        // Правила для Next.js
        '@next/next/no-img-element': 'off', // Отключаем проверку для <img> (используйте <Image>)
        'jsx-a11y/alt-text': 'off', // Отключаем обязательный атрибут alt для всех элементов (не только img)

        // React правила
        'react/react-in-jsx-scope': 'off', // В Next.js не нужно импортировать React
        'react/jsx-no-target-blank': 'warn', // Предупреждение об открытии ссылок с target="_blank"
        'react/prop-types': 'off', // Отключаем проверку prop-types (используем TypeScript)
        'react/jsx-key': ['warn', { checkFragmentShorthand: false }], // Проверяем наличие ключей в JSX
        'react/no-unescaped-entities': ['warn', { forbid: ['>', '}', "'"] }], // Проверяем использование символов
        'react/no-deprecated': 'warn', // Предупреждение об устаревших методах React
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Используем только .tsx для JSX
        'react/self-closing-comp': ['error', { component: true, html: true }], // Предпочтение самозакрывающихся тегов
        'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости хуков
        'react-hooks/rules-of-hooks': 'error', // Проверяем правильность использования хуков

        // TypeScript правила
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение об использовании any
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Предупреждение о неиспользуемых переменных
        '@typescript-eslint/no-shadow': 'error', // Предотвращает затенение переменных
        '@typescript-eslint/no-duplicate-enum-values': 'warn', // Предупреждение о дублирующих значениях enum
        '@typescript-eslint/no-use-before-define': 'error', // Запрещает использование переменных до их объявления
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }], // Использование синтаксиса для массивов

        // Prettier
        'prettier/prettier': [
            'warn',
            {
                indent: 4,
                endOfLine: 'auto', // Решение проблемы с концами строк между ОС
            },
        ],

        // Дополнительные правила
        indent: ['warn', 4], // Два пробела для отступов
        'linebreak-style': 'off', // Используем unix-style (LF) для концов строк ['error', 'windows']
        quotes: ['error', 'single'], // Одинарные кавычки
        semi: ['error', 'always'], // Обязательные точки с запятой
        'object-curly-spacing': ['error', 'always'], // Пробелы внутри фигурных скобок
        'array-bracket-spacing': ['error', 'never'], // Нет пробелов в массивах
        'computed-property-spacing': ['error', 'never'], // Нет пробелов в вычисляемых свойствах
        'arrow-body-style': ['error', 'as-needed'], // Использовать тело стрелочной функции только при необходимости

        // Import правила
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '**/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                alphabetize: { order: 'asc' }, // Алфавитный порядок импортов
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off', // Отключаем для TypeScript
            },
        },
    ],
    reportUnusedDisableDirectives: true,
};



