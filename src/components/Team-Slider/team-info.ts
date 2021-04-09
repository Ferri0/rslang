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
    title: 'Денис Олексиюк',
    status: 'Software Engineer',
    img: './assets/images/team/oleksiuk.jpg',
    url: 'https://github.com/DenisOleksiuk',
    desc: 'Добавить описание вклада в разработку приложения.',
  },
  {
    id: 'tytova',
    title: 'Катерина Титова',
    status: 'Experience Designer',
    img: './assets/images/team/tytova.jpg',
    url: 'https://github.com/kattitova',
    desc: 'Добавить описание вклада в разработку приложения.',
  },
  {
    id: 'alekseyenko',
    title: 'Игорь Алексеенко',
    status: 'Software Engineer',
    img: './assets/images/team/alekseyenko.jpg',
    url: 'https://github.com/IgorAleks88',
    desc: 'Добавить описание вклада в разработку приложения.',
  },
  {
    id: 'tur',
    title: 'Иван Тур',
    status: 'Software Engineer',
    img: './assets/images/team/tur.jpg',
    url: 'https://github.com/buiiz',
    desc: 'Добавить описание вклада в разработку приложения.',
  },
];
