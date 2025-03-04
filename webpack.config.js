const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа в приложение
  entry: './src/main.js', // Убедитесь, что файл main.js находится в корне проекта или скорректируйте путь

  // Выходные данные сборки
  output: {
    path: path.resolve(__dirname, 'build'), // Абсолютный путь к папке сборки
    filename: 'bundle.[contenthash].js', // Имя файла сборки с хешированием для кэширования
    clean: true, // Очистка директории build перед каждой сборкой
  },

  // Генерация source maps для отладки
  devtool: 'source-map',

  // Настройка загрузчиков (loaders)
  module: {
    rules: [
      {
        test: /\.m?js$/, // Применяем babel-loader ко всем файлам .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Транспиляция современного JS в совместимый с выбранными браузерами код
          }
        }
      }
    ]
  },

  // Плагины для расширения функциональности сборки
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'), // Исходная папка с файлами (например, index.html, стили, изображения)
          to: path.resolve(__dirname, 'build'),
          globOptions: {
            ignore: ['**/index.html'] // Исключаем index.html, чтобы html-webpack-plugin сгенерировал его заново
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // Файл-шаблон HTML
      filename: 'index.html'
    })
  ],

  // Настройки сервера разработки
  devServer: {
    static: path.resolve(__dirname, 'build'), // Папка, которую сервер будет обслуживать
    open: true, // Автоматическое открытие браузера
  }
};