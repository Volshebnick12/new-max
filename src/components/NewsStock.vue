<template>
  <div>
    <img src="/image/svg/line-up-news.svg" alt="фон новостей" />
    <div
      class="
        wrapper
        d-flex
        align-items-center
        flex-column
        justify-content-between
      "
    >
      <div>
        <div
          class="d-flex column-row align-items-center justify-content-center"
        >
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
          <h2 class="title">Новости и акции</h2>
        </div>
        <div class="cards-wrapper">
          <div class="card-news">
            <img src="/image/news1.jpg" alt="Девушка" />
            <div>
              <h3 class="title-news">
                Новая коллекция женской одежды в pull&bear
              </h3>
              <p class="text-news">
                С другой стороны реализация намеченных плановых заданий играет
                важную роль в формировании дальнейших направлений развития.
                Задача организации, в особенности же дальнейшее развитие
                различных форм деятельности способствует подготовки и реализации
                существенных финансовых и административных условий.
              </p>
            </div>
          </div>
          <div class="card-news2">
            <img src="/image/news2.jpg" alt="Гостинная" />
            <div>
              <h3 class="title-news">
                До 15 ноября всем посетителям Hoff бесплатный дизайн кухни
              </h3>
              <p class="text-news">
                Равным образом рамки и место обучения кадров играет важную роль
                в формировании направлений прогрессивного развития. Товарищи!
                сложившаяся структура организации позволяет оценить значение
                направлений прогрессивного развития.
              </p>
            </div>
          </div>
          <div class="card-news3">
            <img src="/image/news3.jpg" alt="Мужчина на мопеде" />
            <div>
              <h3 class="title-news">
                Тотальная распродажа во всех магазинах nikolsky mall
              </h3>
              <p class="text-news">
                В то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов. Lorem Ipsum не только успешно пережил без заметных
                изменений пять веков, но и перешагнул в электронный дизай
              </p>
            </div>
          </div>
        </div>
        <p class="text-magazin">
          Смотреть еще
          <router-link class="link-magazin" to="/*">9 новостей</router-link>
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

<style lang="scss" scoped>
*,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.wrapper {
  background-color: #f0f9fb;
  margin: 0 auto;
  position: relative;

  &:before {
    content: "";
    background: url(../components/icons/decorblue.svg) no-repeat;
    width: 100px;
    height: 199px;
    position: absolute;
    top: 115px;
    left: 200px;
  }

  &:after {
    content: "";
    background: url(../components/icons/decoryello.svg) no-repeat;
    width: 199px;
    height: 89px;
    position: absolute;
    bottom: 90px;
    right: 95px;
  }
}

.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 24px;
  color: #111111;
  padding: 82px 0 66px 16px;
  text-transform: uppercase;
}

.text-magazin {
  padding: 32px 0 31px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  margin: 0 auto;
}

.title-news {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #212121;
  padding: 45px 25px 15px 35px;
}

.text-news {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #8b8b8b;
  padding: 0 45px 25px 35px;
}

.cards-wrapper {
  width: 1140px;
  height: 730px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: start;
  gap: 30px;
  position: relative;
}

.card-news {
  background: #ffffff;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: row;
  width: 750px;
  height: 351px;
  margin: 0;
}

.card-news2 {
  background: #ffffff;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 732px;
  margin: 0;
  order: 3;
  position: absolute;
  top: 0;
  right: 0px;
}

.card-news3 {
  background: #ffffff;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: row;
  width: 750px;
  height: 351px;
  margin: 0;
  order: 2;
}

.link-magazin {
  color: #33348e;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    text-decoration: none;
  }

  &:active {
    opacity: 0.7;
    transition: 0.5s;
    text-decoration: none;
    color: #0e1085;
  }
}

@media (max-width: 360px) {
  .title {
    font-size: 20px;
    padding: 26px 0 22px 10px;
  }

  .cards-wrapper {
    display: inline-flex;
    width: 360px;
    height: 100%;
    gap: 18px;
    padding-left: 16px;
  }

  .card-news {
    display: flex;
    flex-direction: column;
    width: 155px;
    height: 347px;
  }
  .card-news2 {
    display: flex;
    flex-direction: column;
    width: 155px;
    height: 347px;
    position: static;
  }

  .card-news3 {
    display: none;
  }

  .title-news {
    font-size: 10px;
    line-height: 12px;
    padding: 14px 15px 11px 13px;
  }

  .text-news {
    font-size: 8px;
    line-height: 12px;
    padding: 0 10px 27px 13px;
  }

  .text-magazin {
    padding: 20px 0 17px;
    font-size: 14px;
  }
}
</style>
