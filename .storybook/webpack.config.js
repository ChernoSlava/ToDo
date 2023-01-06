module.exports = ({ config }) => {
    const cssLoaderRule = config.module.rules.find(rule => rule.test.test('.css'));

    cssLoaderRule.exclude = /\.css$/;

    config.module.rules.push({
        test: /\.css$/,
        use: [
            "style-loader",
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name][local][hash:base64:5]',
                },
              },
            }
          ],
    });
    
    return {
        ...config,
    };
};

