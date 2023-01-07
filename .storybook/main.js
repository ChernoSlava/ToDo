module.exports = {
    "stories": [
        "../src/**/*.stories.jsx"
    ],
    "core": {
        "builder": "webpack5"
    },
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-essentials'
    ]
}