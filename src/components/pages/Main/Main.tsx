import React from 'react';
import { Header } from '../../Header';
import { Games } from '../../Games';
import { Footer } from '../../Footer';
import style from './Main.module.scss';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <div className={style.mainPage}>
      <Header />
      <div className={style.greeting} id="top">
        <div className={style.greetingText}>
          <span className={style.greetingTextTitle}>
            Easy English - учи новые слова каждый день!
          </span>
          <p>
            Изучаешь английский язык? Запоминай английские слова эффективно с
            приложением Easy English! Наша учебная платформа поможет тебе быстро
            и легко изучить более 3000 английских слов!
          </p>
          <span>
            Учить английский язык - просто! Начни обучение прямо сейчас!
          </span>
          <Link to="/dashboard" className={style.greetingButton}>
            Начать обучение
          </Link>
        </div>
        <div className={style.greetingImg} />
        <div className={style.overlay} />
      </div>
      <div className={style.promo} id="promo">
        <div className={style.promoWrapper}>
          <div>Video</div>
          <div className={style.promoText}>
            <p>
              Представляем лучшее приложение для запоминания английских слов!*
            </p>
            <p>
              Easy English - это возможность учить английский язык бесплатно:
              изучая английские слова хотя бы по пять в день, за год ты
              пополнишь свой словарный запас на более 1800 слов.
            </p>
            <p>
              Для обучения мы собрали 3600 наиболее употребляемых слов и
              оформили их в удобный структурированный учебник из 6 разделов, в
              каждом из которых 30 страниц. Все слова имеют перевод, картинку,
              озвучку и примеры использования.
            </p>
            <p>
              Для повышения эффективности обучения изучаемые слова можно
              повторять в игровой форме. Для этого на нашей платформе имеется
              четыре увлекательнейшие игры!
            </p>
            <p>
              Чтобы сделать обучение еще эффективнее, рекомендуется использовать
              приложение два-три раза в день с интервалом в несколько часов.
            </p>
            <p>
              Easy English - действительно нужное приложение для тех, кто учит
              английский язык.
            </p>
            <span className={style.promoTip}>
              *По мнению разработчиков Easy English :)
            </span>
          </div>
        </div>
        <div className={style.overlay} />
      </div>
      <div className={style.textbook} id="textbook">
        <div className={style.textbookWrapper}>
          <h2 className={style.title}>Учебник английских слов</h2>
          <div className={style.textbookFeatures}>
            <div className={style.textbookFeaturesItem}>
              <div className={style.icon}>
                <i className="fas fa-spell-check" />
              </div>
              <span>3600 слов</span>
              <span>6 разделов</span>
              <span>180 страниц</span>
            </div>
            <div className={style.textbookFeaturesItem}>
              <div className={style.icon}>
                <i className="fas fa-volume-up" />
              </div>
              <span>Качественная</span>
              <span>озвучка</span>
              <span>слов</span>
            </div>
            <div className={style.textbookFeaturesItem}>
              <div className={style.icon}>
                <i className="fas fa-book" />
              </div>
              <span>Персональный словарь</span>
            </div>
            <div className={style.textbookFeaturesItem}>
              <div className={style.icon}>
                <i className="fas fa-image" />
              </div>
              <span>Картинки</span>
              <span>для всех</span>
              <span>слов</span>
            </div>
            <div className={style.textbookFeaturesItem}>
              <div className={style.icon}>
                <i className="fas fa-comment-dots" />
              </div>
              <span>Примеры</span>
              <span>использования</span>
              <span>слов</span>
            </div>
            <div className={style.textbookFeaturesItem}>
              <div className={style.icon}>
                <i className="fas fa-cogs" />
              </div>
              <span>Удобные</span>
              <span>персональные</span>
              <span>настройки</span>
            </div>
          </div>
        </div>
        <div className={style.overlay} />
      </div>
      <div className={style.games} id="games">
        <Games />
        <div className={style.overlay} />
      </div>
      <div className={style.stats} id="stats">
        <div className={style.statsWrapper}>
          <h2 className={style.title}>Статистика</h2>
          <div className={style.statsInfo}>
            <span>
              Отслеживай динамику своего обучения на странице статистики.
              Ежедневные результаты и статистика за весь период изучения
              отображаются в удобном для восприятия виде. Можно подробно
              отследить количество изученных слов, процент правильных ответов и
              самую длинную серию правильных ответов по каждой мини-игре
              отдельно, а также общее количество изученных слов и процент
              правильных ответов за день. В общей статистике отображается
              количество изученных слов за каждый день изучения, увеличение
              общего количества изученных слов за весь период изучения по дням.
            </span>
          </div>
        </div>
        <div className={style.overlay} />
      </div>
      <div className={style.info} id="info">
        <div className={style.infoWrapper}>
          <h2 className={style.title}>Наша команда</h2>
          <div className={style.infoTxt}>
            <span>
              раздел "О команде" с фото и ссылками на гитхабы всех участников
              команды, описанием вклада в разработку приложения каждого из них.{' '}
            </span>
            <div className={style.overlay} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
