interface IType {
  id: string;
  title: string;
  status: string;
  img: string;
  url: string;
  desc: string;
}

export const teamInfo: Array<IType> = [
  {
    id: 'abrasimov',
    title: 'Ярослав Абрасимов',
    status: 'Team Lead',
    img: './assets/images/team/abrasimov.jpg',
    url: 'https://github.com/Ferri0',
    desc: `Настройка проекта:
    - Конфигурация eslint, prettier, stylelint
    - Конфигурация pre-commit hook (husky + lint-staged)
    - Конфигурация Webpack

    Концепция, дизайн и функционал электронного учебника:
    - Разработка авторского дизайна
    - Адаптивная верстка, свой стиль для каждого раздела
    - Воспроизведение аудио-файлов
    - Удаление слов, добавление слов в категорию сложные, навигация
    - Реализация настроек для кастомизации страницы учебника`,
  },
  {
    id: 'oleksiuk',
    title: 'Денис Олексюк',
    status: 'Software Engineer',
    img: './assets/images/team/oleksiuk.jpg',
    url: 'https://github.com/DenisOleksiuk',
    desc: `Разработка гейм стейта и игр:
      - Саванна
      - Аудиовызов

    Разработка компонентов:
      - ErrorBoundry
      - Spinner(индикатор загрузки)`,
  },
  {
    id: 'tytova',
    title: 'Катерина Титова',
    status: 'Experience Designer',
    img: './assets/images/team/tytova.jpg',
    url: 'https://github.com/kattitova',
    desc: `Разработка дизайна и функционала промо и дашборд страниц:
    - Авторской дизайн
    - Меню
    - Адаптивная верстка страниц и мини-игр
    - Концепция, дизайн и функционал блока о команде в виде кругового слайдера

    Разработка и реализация мини-игры "Спринт"
    Начальная настройка структуры проекта и роутинга`,
  },
  {
    id: 'alekseyenko',
    title: 'Игорь Алексеенко',
    status: 'Software Engineer',
    img: './assets/images/team/alekseyenko.jpg',
    url: 'https://github.com/IgorAleks88',
    desc: ` - Разработка и реализация мини-игры "Паззл"
    - Настройка и деплой АПИ проекта
    - Разработка и реализация бэкенда
    - Разработка и реализация блока Авторизации пользователей`,
  },
  {
    id: 'tur',
    title: 'Иван Тур',
    status: 'Software Engineer',
    img: './assets/images/team/tur.jpg',
    url: 'https://github.com/buiiz',
    desc: `- Миграция с js на ts
    - Настройка Redux
    - Раздел "Статистика" и "Словарь"
    - Написание юнит-тестов`,
  },
];
