<template>
  <footer>
    <div class="container">
      <div class="row footer_top">
        <div class="logo">
          <img src="@/assets/lite/logo.png" class="img-fluid" alt="" />
        </div>
        <!-- logo -->
      </div>
      <!-- row -->
      <div class="row">
        <div class="col-md-2">
          <ul class="footer_list">
            <li class="footer_list_title">
              Покупателям
            </li>
            <li>
              <a href="#">Как сделать заказ</a>
            </li>
            <li>
              <a href="#">Вопросы и ответи</a>
            </li>
            <li>
              <a href="#">Поддержка</a>
            </li>
            <li>
              <a href="#">Условия использования</a>
            </li>
          </ul>
        </div>
        <!-- col-md-2 -->
        <div class="col-md-2">
          <ul class="footer_list">
            <li class="footer_list_title">
              Категории
            </li>
            <li>
              <a href="#">Электроника</a>
            </li>
            <li>
              <a href="#">Авто</a>
            </li>
            <li>
              <a href="#">Недвижимость</a>
            </li>
            <li>
              <a href="#">Все для дома и сада</a>
            </li>
          </ul>
        </div>
        <!-- col-md-2 -->
        <div class="col-md-2">
          <ul class="footer_list">
            <li class="footer_list_title">
              Партнерам
            </li>
            <li>
              <a href="#">Как сделать заказ</a>
            </li>
            <li>
              <a href="#">Сотрудничество</a>
            </li>
            <li>
              <a href="#">Обратная связь</a>
            </li>
          </ul>
        </div>
        <!-- col-md-2 -->
        <div class="col-md-2">
          <ul class="footer_list">
            <li class="footer_list_title">
              Компания
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <!-- col-md-2 -->
        <div class="col-md-2">
          <ul class="footer_list">
            <li class="footer_list_title">
              Соцсети
            </li>
            <li>
              <a href="#">Инстаграм</a>
            </li>
            <li>
              <a href="#">Фейсбук</a>
            </li>
            <li>
              <a href="#">Тикток</a>
            </li>
          </ul>
        </div>
        <!-- col-md-2 -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 30px;
  padding: 40px 0 55px 0;
  background: #fff;
  min-height: 345px;
}
.footer_top {
  padding-bottom: 40px;
}
.logo {
  width: 150px;
}
.footer_list .footer_list_title {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  font-family: "Inter";
  margin-bottom: 12px;
}
.footer_list li a {
  font-size: 15px;
  color: rgb(71, 71, 71);
  font-weight: 400;
  font-family: "Inter";
  padding: 2px 0;
  transition: all 0.2s;
}
.footer_list li a:hover {
  color: var(--main-color);
}
.footer_list li {
  margin: 4px 0;
}
</style>
