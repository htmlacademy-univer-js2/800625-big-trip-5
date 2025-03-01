const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа в приложение
  entry: './src/main.js',

  // Выходные данные сборки
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true, // Очистка папки сборки перед каждой сборкой
  },

  // Генерация source maps для удобной отладки
  devtool: 'source-map',

  // Настройка загрузчиков для модулей
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Транспиляция современного JS
          },
        },
      },
      // Если понадобятся лоадеры для CSS:
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },

  // Плагины для расширения функциональности сборки
  plugins: [
    // Копирование статических файлов из папки public в build (исключая index.html)
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'build'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    // Автоматическая генерация index.html с подключением бандла
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],

  // Настройка сервера разработки
  devServer: {
    static: path.resolve(__dirname, 'build'),
    open: true, // Автоматическое открытие браузера при старте
  },
};