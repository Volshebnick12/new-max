<template>
  <div>
    <img src="/image/svg/line-up-news.svg" alt="фон новостей" />
    <div>
      <div>
        <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="36.7695"
            width="30"
            height="4"
            transform="rotate(-45 0 36.7695)"
            fill="#F1AA1E"
          />
          <rect
            x="10.6066"
            y="36.0625"
            width="30"
            height="4"
            transform="rotate(-45 10.6066 36.0625)"
            fill="#22A09C"
          />
          <rect
            x="5.65686"
            y="21.2129"
            width="30"
            height="4"
            transform="rotate(-45 5.65686 21.2129)"
            fill="#DC112E"
          />
        </svg>
        <h2>Новости и акции</h2>
        <div>
          <div>
            <img src="/image/news1.jpg" alt="Девушка" />
            <div>
              <h3>Новая коллекция женской одежды в pull&bear</h3>
              <p>
                С другой стороны реализация намеченных плановых заданий играет
                важную роль в формировании дальнейших направлений развития.
                Задача организации, в особенности же дальнейшее развитие
                различных форм деятельности способствует подготовки и реализации
                существенных финансовых и административных условий.
              </p>
            </div>
          </div>
          <img src="/image/news2.jpg" alt="Гостинная" />
          <div>
            <img src="/image/news3.jpg" alt="Мужчина на мопеде" />
            <div>
              <h3>Тотальная распродажа во всех магазинах nikolsky mall</h3>
              <p>
                В то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов. Lorem Ipsum не только успешно пережил без заметных
                изменений пять веков, но и перешагнул в электронный дизай
              </p>
            </div>
          </div>
          <div>
            <h3>До 15 ноября всем посетителям Hoff бесплатный дизайн кухни</h3>
            <p>
              Равным образом рамки и место обучения кадров играет важную роль в
              формировании направлений прогрессивного развития. Товарищи!
              сложившаяся структура организации позволяет оценить значение
              направлений прогрессивного развития.
            </p>
          </div>
        </div>
        <p class="text-magazin">
          Смотреть еще
          <router-link class="link-magazin" to="/catalog"
            >37 магазинов</router-link
          >
        </p>
      </div>
    </div>
    <img src="/image/svg/line-down-news.svg" alt="фон новостей" />
  </div>
</template>

<script>
export default {
  name: "NewsStock",
};
</script>

<style leng="scss" scoped>


.cards-catalog {
  max-width: 1140px;
  height: 100%;
  gap: 30px;
  padding-top: 104px;
}

</style>
