<template>
  <div class="">
    <h1 class="title">Магазины</h1>
    <div class="bread-crumbs">
      <router-link class="bread-crumbs-link" to="/">Главная</router-link>
      <router-link class="bread-crumbs-link active" to="/catalog"
        >Магазины</router-link
      >
    </div>
    <div
      class="wraper-search d-flex align-items-center justify-content-between"
    >
      <ul class="list-search d-inline-flex">
        <li class="search">
          <input
            class="search-input"
            type="text"
            v-model="search"
            placeholder="Поиск магазина"
          />
          <label></label>
        </li>
        <li>
          <select class="filter" name="filter-magazin">
            <option class="results-filter" value="cheap" selected>
              Категория магазинов
            </option>
          </select>
        </li>
      </ul>
      <ul class="list-view d-inline-flex">
        <li>
          <a class="view-link view-link-active" href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 6C13 5.46957 13.2107 4.96086 13.5858 4.58579C13.9609 4.21071 14.4696 4 15 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V9C20 9.53043 19.7893 10.0391 19.4142 10.4142C19.0391 10.7893 18.5304 11 18 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V6ZM18 6H15V9H18V6ZM6 13C5.46957 13 4.96086 13.2107 4.58579 13.5858C4.21071 13.9609 4 14.4696 4 15V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H9C9.53043 20 10.0391 19.7893 10.4142 19.4142C10.7893 19.0391 11 18.5304 11 18V15C11 14.4696 10.7893 13.9609 10.4142 13.5858C10.0391 13.2107 9.53043 13 9 13H6ZM6 15H9V18H6V15ZM15 13C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V18C13 18.5304 13.2107 19.0391 13.5858 19.4142C13.9609 19.7893 14.4696 20 15 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V15C20 14.4696 19.7893 13.9609 19.4142 13.5858C19.0391 13.2107 18.5304 13 18 13H15ZM15 15H18V18H15V15ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V9C4 9.53043 4.21071 10.0391 4.58579 10.4142C4.96086 10.7893 5.46957 11 6 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V6C11 5.46957 10.7893 4.96086 10.4142 4.58579C10.0391 4.21071 9.53043 4 9 4H6ZM6 6H9V9H6V6Z"
                fill="white"
              />
            </svg>
            <span class="visually-hidden">Значки</span>
          </a>
        </li>
        <li>
          <a class="view-link" href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.25 7C6.25 7.33152 6.1183 7.64946 5.88388 7.88388C5.64946 8.1183 5.33152 8.25 5 8.25C4.66848 8.25 4.35054 8.1183 4.11612 7.88388C3.8817 7.64946 3.75 7.33152 3.75 7C3.75 6.66848 3.8817 6.35054 4.11612 6.11612C4.35054 5.8817 4.66848 5.75 5 5.75C5.33152 5.75 5.64946 5.8817 5.88388 6.11612C6.1183 6.35054 6.25 6.66848 6.25 7ZM9 6C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8H19C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7C20 6.73478 19.8946 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6H9ZM9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H9ZM9 16C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16H9ZM5 13.25C5.33152 13.25 5.64946 13.1183 5.88388 12.8839C6.1183 12.6495 6.25 12.3315 6.25 12C6.25 11.6685 6.1183 11.3505 5.88388 11.1161C5.64946 10.8817 5.33152 10.75 5 10.75C4.66848 10.75 4.35054 10.8817 4.11612 11.1161C3.8817 11.3505 3.75 11.6685 3.75 12C3.75 12.3315 3.8817 12.6495 4.11612 12.8839C4.35054 13.1183 4.66848 13.25 5 13.25V13.25ZM5 18.25C5.33152 18.25 5.64946 18.1183 5.88388 17.8839C6.1183 17.6495 6.25 17.3315 6.25 17C6.25 16.6685 6.1183 16.3505 5.88388 16.1161C5.64946 15.8817 5.33152 15.75 5 15.75C4.66848 15.75 4.35054 15.8817 4.11612 16.1161C3.8817 16.3505 3.75 16.6685 3.75 17C3.75 17.3315 3.8817 17.6495 4.11612 17.8839C4.35054 18.1183 4.66848 18.25 5 18.25V18.25Z"
                fill="#1DA39F"
              />
            </svg>
            <span class="visually-hidden">Список</span>
          </a>
        </li>
        <li>
          <a class="view-link" href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0831 15.2001L21.2851 15.9211C21.3593 15.9655 21.4206 16.0283 21.4633 16.1035C21.5059 16.1787 21.5283 16.2636 21.5283 16.3501C21.5283 16.4365 21.5059 16.5214 21.4633 16.5966C21.4206 16.6718 21.3593 16.7347 21.2851 16.7791L12.5151 22.0411C12.3596 22.1345 12.1815 22.1839 12.0001 22.1839C11.8187 22.1839 11.6406 22.1345 11.4851 22.0411L2.7151 16.7791C2.64095 16.7347 2.57956 16.6718 2.53695 16.5966C2.49433 16.5214 2.47192 16.4365 2.47192 16.3501C2.47192 16.2636 2.49433 16.1787 2.53695 16.1035C2.57956 16.0283 2.64095 15.9655 2.7151 15.9211L3.9171 15.2001L12.0001 20.0501L20.0831 15.2001V15.2001ZM20.0831 10.5001L21.2851 11.2211C21.3593 11.2655 21.4206 11.3283 21.4633 11.4035C21.5059 11.4787 21.5283 11.5636 21.5283 11.6501C21.5283 11.7365 21.5059 11.8214 21.4633 11.8966C21.4206 11.9718 21.3593 12.0347 21.2851 12.0791L12.0001 17.6501L2.7151 12.0791C2.64095 12.0347 2.57956 11.9718 2.53695 11.8966C2.49433 11.8214 2.47192 11.7365 2.47192 11.6501C2.47192 11.5636 2.49433 11.4787 2.53695 11.4035C2.57956 11.3283 2.64095 11.2655 2.7151 11.2211L3.9171 10.5001L12.0001 15.3501L20.0831 10.5001ZM12.5141 1.30907L21.2851 6.57107C21.3593 6.61546 21.4206 6.67832 21.4633 6.75351C21.5059 6.82869 21.5283 6.91364 21.5283 7.00007C21.5283 7.0865 21.5059 7.17145 21.4633 7.24663C21.4206 7.32182 21.3593 7.38468 21.2851 7.42907L12.0001 13.0001L2.7151 7.42907C2.64095 7.38468 2.57956 7.32182 2.53695 7.24663C2.49433 7.17145 2.47192 7.0865 2.47192 7.00007C2.47192 6.91364 2.49433 6.82869 2.53695 6.75351C2.57956 6.67832 2.64095 6.61546 2.7151 6.57107L11.4851 1.30907C11.6406 1.21563 11.8187 1.16626 12.0001 1.16626C12.1815 1.16626 12.3596 1.21563 12.5151 1.30907H12.5141ZM12.0001 3.33207L5.8871 7.00007L12.0001 10.6681L18.1131 7.00007L12.0001 3.33207Z"
                fill="#1DA39F"
              />
            </svg>
            <span class="visually-hidden">Галерея</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="
        cards-catalog
        d-flex
        justify-content-between
        align-items-center
        flex-wrap
      "
    >
      <CardCatalog
        v-for="(card, index) in $store.state.magazin"
        :key="card.index"
        :product_data="card"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import CardCatalog from "./CardCatalog.vue";
export default {
  name: "CatalogMagazin",
  data() {
    return {
      cards: [],
    };
  },
  components: { CardCatalog },
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

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.cards-catalog {
  max-width: 1140px;
  height: 100%;
  gap: 30px;
  padding-top: 104px;
  margin-bottom: 230px;
}

.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #323232;
  margin: 56px 0 45px;
}

.bread-crumbs {
  margin-bottom: 43px;
}

.bread-crumbs-link {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  padding-right: 20px;
  position: relative;

  &::before {
    content: "";
    background: url(./icons/rightchevron.svg) no-repeat;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 1px;
    left: -15px;
  }
  &:hover {
    opacity: 0.6;
    transition: 0.5s;
    text-decoration: none;
  }
  &:active {
    opacity: 0.2;
    transition: 0.3s;
  }
}

.active {
  color: #ed704a;
}

.wraper-search {
  max-width: 1140px;
  height: 96px;
  background: #1da39f;
}

.list-search {
  list-style-type: none;
}

.search-input {
  padding: 5px 139px 5px 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 36px;
  color: #535252;
  border: none;
  position: relative;
  background: #ffffff url(./icons/searchinput.svg) no-repeat;
  background-position: right 16px center;
  appearance: none;
  cursor: pointer;
  &:hover {
    background: #e7f3f3 url(./icons/searchinput.svg) no-repeat;
    background-position: right 16px center;
    transition: 0.5s;
  }
  &:active {
    opacity: 0.9;
    transition: 0.3s;
  }
}

.filter {
  @extend .search-input;
  padding: 5px 150px 5px 20px;
  margin-left: 21px;
  background: #ffffff url(./icons/arrowdown.svg) no-repeat;
  background-position: right 16px center;
  appearance: none;
  cursor: pointer;
  &:hover {
    background: #e7f3f3 url(./icons/arrowdown.svg) no-repeat;
    background-position: right 16px center;
    transition: 0.5s;
  }
  &:active {
    opacity: 0.9;
    transition: 0.3s;
  }
}

.list-view {
  list-style-type: none;
  padding: 0;
}

.view-link {
  padding: 13px 12px;
  background-color: #ffffff;
  margin-right: 18px;
  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
  &:active {
    opacity: 0.2;
    transition: 0.3s;
  }
}

.view-link-active {
  background-color: #1da39f;
  outline: 1px solid #ffffff;
}

@media (max-width: 360px) {
  .title {
    font-size: 20px;
    justify-content: center;
    margin: 10px;
  }

  .bread-crumbs {
    margin-bottom: 15px;
    text-align: center;
    padding-right: 190px;
  }

  .cards-catalog {
    gap: 18px;
    padding: 30px 15px;
    margin-bottom: 0;
  }

  .wraper-search {
    flex-wrap: wrap;
    max-width: 340px;
    height: 190px;
    margin-left: 10px;
    padding-bottom: 10px;
  }

  .list-search {
    flex-direction: column;
    padding: 0;
  }

  .search,
  .filter {
    margin: 5px 0 5px 30px ;
    padding-right: 80px;
  }

  .search-input {
    padding-right: 115px;
  }

  .list-view {
    margin: 0 auto;

  }
}
</style>
