interface IType {
  id: string;
  title: string;
  img: string;
  desc: string;
}

export const gameInfo: Array<IType> = [
  {
    id: 'Savanna',
    title: 'Саванна',
    img: './assets/images/savanna-card.jpg',
    desc:
      'Эта игра поможет перевести пассивное изучение новых слов в активную стадию. А регулярные тренировки научат на лету подбирать правильные слова при письме и говорении.',
  },
  {
    id: 'AudioCall',
    title: 'Аудиовызов',
    img: './assets/images/audiocall-card.jpg',
    desc:
      'В этой игре ты улучшишь звуковое восприятие английских слов. Слушай слово и выбирай правильный вариант перевода.',
  },
  {
    id: 'Sprint',
    title: 'Спринт',
    img: './assets/images/sprint-card.jpg',
    desc:
      'Это тренировка выученных слов на скорость. Запускай игру и отвечайте правильно переведено слово или нет.',
  },
  {
    id: 'OwnGame',
    title: 'Своя игра',
    img: './assets/images/owngame-card.jpg',
    desc: 'Добавить описание',
  },
];

export const arrGame = gameInfo.map((el) => el.id);
