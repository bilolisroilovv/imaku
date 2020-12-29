<template>
  <div>
    <div id="top"></div>
    <a href="#top" class="top_btn flex-center anim d-flex">
      <svg
        class="svg-inline--fa fa-chevron-left fa-w-10"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path
          fill="#fff"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        ></path>
      </svg>
    </a><!-- top_btn -->
    <Header2 />

    <section class="product_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center mb-3">
              <a href="index.html" class="back_btn mainbtn mr-4 dark">
                <img src="@/assets/lite/back_btn.png" class="mr-2" alt="">
                Назад
              </a> <!-- back_btn -->

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item"><router-link to="/category">Автомобили</router-link></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item"><router-link to="/category">Легковые автомобили</router-link></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item"><router-link to="/category">Mercedes</router-link></li>
                  <span class="mx-2 px-1">/</span>
                  <li class="breadcrumb-item active" aria-current="page">Mercedes Benz E-53</li>
                </ol>
              </nav>

            </div> <!-- d-flex -->
            <h2 class="section_title">
              Mercedes Benz E-5
            </h2> <!-- section_title -->

          </div> <!-- col-md-12 -->
        </div> <!-- row -->

        <div class="row mt-4">
          <div class="col-md-8">
            <ProductMainSlider />
          </div> <!-- col-md-8 -->

          <div class="col-md-4">
            <div class="bg-white product_sidebar">
              <div class="d-flex justify-content-between align-items-center pb-2 ">
                <h2 class="product_price">125 000 y.e.</h2>

                <div class="product_favourite mycard_favorite_stroke2 flex-center d-flex" v-b-tooltip.hover title="Добавить в избранное">
                  <ToggleFavorite class="d-flex align-items-center"/>
                </div> <!-- product_favourite -->
              </div> <!-- d-flex -->

              <div class="d-flex align-items-center mt-0 mb-3">
                <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="20" inactive-color="transparent" active-color="#fc8301" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
                <a href="#reviews" class="product_revew_text ml-4 anim">Комментарии (2762)</a>
              </div> <!-- d-flex -->

              <hr>

              <div class="mycard_btns myproduct_btns d-flex align-items-center pb-1 pt-3">
                <button class="like_btn card_like_btn d-flex align-items-center mr-3" title="Мне нравится">
                  <div class="like_btn_icon d-flex align-items-center">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.95088 3.86499H0.639545C0.458503 3.86499 0.311707 4.01176 0.311707 4.19283V9.43807C0.311707 9.61911 0.458481 9.76591 0.639545 9.76591H1.95086C2.1319 9.76591 2.27869 9.61913 2.27869 9.43807V4.19281C2.27869 4.01177 2.13194 3.86499 1.95088 3.86499Z"
                        fill="#7D95AE" />
                      <path
                        d="M10.1399 4.73397C10.0821 4.22542 9.60704 3.86497 9.09521 3.86497H6.53936C6.75657 3.47603 6.87315 2.37597 6.86798 1.9266C6.85941 1.18276 6.24341 0.58667 5.49955 0.58667H5.22903C5.04784 0.58667 4.90119 0.733292 4.90119 0.914509C4.90119 1.67259 4.60601 3.04092 4.04929 3.59766C3.67458 3.97237 3.35424 4.10815 2.9342 4.31807V9.23714C3.5773 9.45148 4.39382 9.76591 5.63836 9.76591H7.78286C8.48946 9.76591 9.03979 9.11147 8.76598 8.42003C9.18314 8.30638 9.49078 7.9238 9.49078 7.4711C9.49078 7.34335 9.46613 7.22107 9.42163 7.10869C10.1246 6.91716 10.3834 6.04914 9.89546 5.50412C10.0747 5.30386 10.1736 5.02994 10.1399 4.73397Z"
                        fill="#7D95AE" />
                    </svg>
                  </div>
                  <!-- like_btn_icon -->
                  <div class="like_btn_count">+422</div>
                  <!-- like_btn_count -->
                </button>
                <!-- like_btn -->
                <button class="dislike_btn card_like_btn d-flex align-items-center mr-3" title="Мне не нравится">
                  <div class="dislike_btn_icon d-flex align-items-center">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.85912 6.67188H0.468556C0.276576 6.67188 0.120911 6.51623 0.120911 6.32423V0.762087C0.120911 0.570107 0.276553 0.414442 0.468556 0.414442H1.85909C2.05107 0.414442 2.20674 0.570084 2.20674 0.762087V6.32425C2.20674 6.51623 2.05112 6.67188 1.85912 6.67188Z"
                        fill="#7D95AE" />
                      <path
                        d="M10.5432 5.75057C10.4818 6.28985 9.97809 6.67207 9.43534 6.67207H6.72507C6.9554 7.08451 7.07903 8.25103 7.07355 8.72755C7.06446 9.51634 6.41124 10.1484 5.62243 10.1484H5.33557C5.14343 10.1484 4.98793 9.99296 4.98793 9.80079C4.98793 8.9969 4.67491 7.54591 4.08456 6.95553C3.6872 6.55818 3.34752 6.4142 2.9021 6.19159V0.975336C3.58404 0.748036 4.4499 0.414617 5.76963 0.414617H8.04369C8.79299 0.414617 9.37657 1.10859 9.08621 1.84181C9.52858 1.96232 9.8548 2.36802 9.8548 2.84807C9.8548 2.98354 9.82867 3.11321 9.78148 3.23237C10.5269 3.43548 10.8013 4.35594 10.2839 4.93389C10.474 5.14625 10.5788 5.43672 10.5432 5.75057Z"
                        fill="#7D95AE" />
                    </svg>
                  </div>
                  <!-- dislike_btn_icon -->
                  <div class="dislike_btn_count">-84</div>
                  <!-- dislike_btn_count -->
                </button>
                <!-- dislike_btn -->
                <div class="d-flex align-items-center mycard_views" title="Просмотры">
                  <svg width="18" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.0441 3.71484C9.99799 1.64824 7.927 0.25 5.55567 0.25C3.18433 0.25 1.11277 1.64922 0.0672412 3.71504C0.0231134 3.80342 0.00012207 3.90107 0.00012207 4.0001C0.00012207 4.09913 0.0231134 4.19678 0.0672412 4.28516C1.11334 6.35176 3.18433 7.75 5.55567 7.75C7.927 7.75 9.99857 6.35078 11.0441 4.28496C11.0882 4.19658 11.1112 4.09893 11.1112 3.9999C11.1112 3.90087 11.0882 3.80322 11.0441 3.71484ZM5.55567 6.8125C5.00627 6.8125 4.46922 6.64755 4.01242 6.33851C3.55561 6.02947 3.19958 5.59021 2.98934 5.0763C2.77909 4.56238 2.72408 3.99688 2.83126 3.45131C2.93844 2.90574 3.203 2.4046 3.59148 2.01126C3.97996 1.61793 4.47491 1.35006 5.01375 1.24154C5.55259 1.13302 6.1111 1.18872 6.61868 1.40159C7.12625 1.61446 7.56008 1.97495 7.86531 2.43746C8.17053 2.89997 8.33345 3.44374 8.33345 4C8.33362 4.36939 8.2619 4.7352 8.12236 5.07651C7.98283 5.41782 7.77822 5.72794 7.52025 5.98914C7.26227 6.25034 6.95598 6.4575 6.61889 6.59878C6.28179 6.74006 5.9205 6.81268 5.55567 6.8125ZM5.55567 2.125C5.39038 2.12734 5.22615 2.15224 5.06743 2.19902C5.19826 2.37904 5.26105 2.60056 5.24439 2.82343C5.22774 3.04629 5.13276 3.25573 4.97667 3.41377C4.82059 3.57181 4.61373 3.66798 4.39362 3.68484C4.17351 3.7017 3.95472 3.63813 3.77692 3.50566C3.67568 3.88332 3.69396 4.28361 3.82918 4.6502C3.9644 5.01678 4.20975 5.33121 4.53071 5.54921C4.85166 5.76722 5.23206 5.87782 5.61835 5.86547C6.00465 5.85311 6.37739 5.71841 6.68412 5.48033C6.99084 5.24225 7.21611 4.91278 7.3282 4.53828C7.4403 4.16378 7.43359 3.76312 7.309 3.39269C7.18442 3.02226 6.94825 2.70071 6.63372 2.4733C6.31919 2.2459 5.94215 2.12408 5.55567 2.125Z"
                      fill="#7D95AE" />
                  </svg>
                  <span>1253</span>
                </div>
                <!-- d-flex -->
              </div> <!-- myproduct_btns -->

              <!-- mycard_btns -->
              <div class="product_seller d-flex align-items-center mt-4">
                <a href="seller.html" target="_blank" class="product_seller_img mybg_center mr-3"
                  :style="{ 'background-image': 'url(' + this.avatarImage + ')' }"></a> <!-- product_cusomer_img -->
                <div class="seller_text">
                  <a href="seller.html" title="Алексеев Эдуaрд Львович" target="_blank"
                    class="product_seller_name d-block text_ellipsis1 myhover_text">Алексеев Эдуaрд Львович</a>
                  <!-- product_seller_name -->
                  <span>(12 объявлений)</span>
                  <button class="d-block mt-1 subscribe_btn" data-show="true">Подписаться</button>
                </div> <!-- seller_text -->

              </div> <!-- product_cusomer -->

              <div class="product_btns mt-4">
                <a href="#" class="show_number_btn mb-2 d-block w-100 text-center">
                  <img src="@/assets/lite/show_number_icon.png" alt="">
                  Показать номер
                </a> <!-- show_number_btn -->
                <a href="#" class="send_message_btn mainbtn d-block w-100 text-center">
                  <img src="@/assets/lite/send_message_icon.png" alt="">
                  Написать продавцу
                </a> <!-- send_message_btn -->
              </div> <!-- product_btns -->

              <hr class="mt-3">
              <div class="pt-2 pb-2 product_adress">

                <h4 class="pb-2">Адрес:</h4>
                <p class="mb-2">Г. Ташкент, Яккасарайский район, улица Таффакур, дом 15</p>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A82c9b4a2e8ccf86a57718e06a3d4ec2a03aee27235dcf51300db4b6fdc836b89&amp;source=constructor"
                  width="100%" height="123" frameborder="0"></iframe>
              </div> <!-- product_adress -->

              <hr>

              <div class="d-flex justify-content-between product_sidebar_bottom mt-2">

                <div class="product_sidebar_socials">
                  <span>Поделиться в :</span>
                  <div class="d-flex pt-1">
                    <a href="#" target="_blank">
                      <img src="@/assets/lite/instagram.png" class="img-width" alt="">
                    </a>
                    <a href="#" target="_blank">
                      <img src="@/assets/lite/twitter.png" class="img-width" alt="">
                    </a>
                    <a href="#" target="_blank">
                      <img src="@/assets/lite/vk.png" class="img-width" alt="">
                    </a>
                    <a href="#" target="_blank">
                      <img src="@/assets/lite/facebook.png" class="img-width" alt="">
                    </a>
                    <a href="#" target="_blank">
                      <img src="@/assets/lite/tik-tok.png" class="img-width" alt="">
                    </a>
                  </div> <!-- d-flex -->
                </div> <!-- product_sidebar_socials -->

                <div class="product_sidebar_date text-right">
                  <span class="mt-2 d-block">Дата публикации:</span>
                  <h6 class="mt-1">13.02.2020</h6>
                </div> <!-- product_sidebar_date -->

              </div> <!-- product_sidebar_bottom -->

            </div> <!-- product_sidebar -->
          </div> <!-- col-md-4 -->

        </div> <!-- row -->

      </div> <!-- container -->

      <div class="py-4">
      <div class="container">
        <div class="row ">
          <div class="col-md-12">
            <div class="bg-white product_bottom_info">
              <h3 class="pb-3">Описание</h3>
              <div class="desc_text">
                <p>
                  ЕСТЬ ДОСТАВКА! <br>
                  <br>
                  Nike Knitposite JAMES 17 привезли из США размеры от 40 до 46. <br>
                  <br>
                  С момента появления первой фирменной обуви Nike KRIP 2003 году многое изменилось. Теперь на его 17-й
                  модели оснащен верхом Knitposite, который сочетает в себе популярную конструкцию Nike Flyknit с
                  формованной термостойкой пряжей. Этот новый материал предлагает больше поддержки и увеличивает
                  долговечность, в то же время устойчивый к растяжению, чтобы помочь держать вашу ногу на месте. С
                  добавлением каблука Max Air с максимальной громкостью в баскетбольные кроссовки James эта обувь
                  поможет вам играть как величайший игрок на корте.
                  <br>• Верх Knitposite для максимальной гибкости и воздухопроницаемости.
                  <br>• Air Max и Zoom Air для отскока и амортизации.
                  <br>• Не маркировочная резиновая подошва для тяги и долговечности.
                  <br>
                  ФУНКЦИИ <br>
                  <br>
                  Поддержка лодыжки <br>
                  Высокие стопы, которые фиксируют лодыжку в положении для дополнительной поддержки. <br>
                  <br>
                  Баскетбол <br>
                  Помогает поднять вашу игру от тротуара до лиственных пород.

                </p>
              </div> <!-- desc_text -->

              <div class="row pt-4">
                <div class="col-md-6">
                  <h4 class="pb-4">Характеристики</h4>

                  <div class="product_params">
                    <div class="pp">
                      <span><b>Операционная система</b></span>
                      <span>Windows</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Тип карманов</b></span>
                      <span>прорезные</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Декоративные элементы</b></span>
                      <span>без элементов</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Длина по внутреннему шву</b></span>
                      <span>82 см</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Утеплитель</b></span>
                      <span>без утепления</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Тип посадки</b></span>
                      <span>высокая </span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Ширина низа брючин</b></span>
                      <span>20 см</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Комплектация</b></span>
                      <span>джинсы</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Страна производитель</b></span>
                      <span>Китай</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Модель</b></span>
                      <span>прямые</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Комплектация</b></span>
                      <span>джинсы</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Длина по внутреннему шву</b></span>
                      <span>82 см</span>
                    </div> <!-- pp -->
                    <div class="pp">
                      <span><b>Утеплитель</b></span>
                      <span>без утепления</span>
                    </div> <!-- pp -->
                  </div> <!-- product_params -->

                </div> <!-- col-md-6 -->
                <div class="col-md-6">
                  <h4 class="pb-3">Хештеги</h4>
                  <div class="product_hashtags mb-4">
                    <a href="categories.html" class="product_hashtag">
                      <span>#Обогреватель</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#хочуврек</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#mercedes</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#ноутбук hp</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#хочуврек</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#Обогреватель</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#хочуврек</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#mercedes</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#ноутбук hp</span>
                    </a> <!-- product_hashtag -->
                    <a href="categories.html" class="product_hashtag">
                      <span>#хочуврек</span>
                    </a> <!-- product_hashtag -->
                  </div> <!-- product_hashtags -->

                  <h4 class="pb-4">Другие товары продавца</h4>

                </div> <!-- col-md-6 -->
              </div> <!-- row -->

            </div> <!-- product_bottom_info -->
          </div> <!-- col-md-12 -->
        </div> <!-- row -->
      </div> <!-- container -->
    </div>

    </section> <!-- product_section -->

    <section class="product_review_section pb-5 pt-4" id="reviews">

    <div class="container">
      <h2 class="section_title pb-4">
        Комментарии
      </h2> <!-- section_title -->

      <div class="row">

        <div class="col-md-8">

          <div class="product_reviews_section">

            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center product_review_filter">
                <span class="mr-3">Сортировать по:</span>

                <div class="product_review_sort">

                  <a href="#" class="product_review_sort_text product_review_sort_text1 mr-3 active">
                    Дате
                    <svg class="product_review_sort_icon product_review_sort_icon1 product_review_sort_icon_down"
                      width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 3.58579L1.5364 0.292893C1.18492 -0.0976311 0.615076 -0.0976311 0.263604 0.292893C-0.087868 0.683418 -0.087868 1.31658 0.263604 1.70711L3.8636 5.70711C4.21508 6.09763 4.78492 6.09763 5.1364 5.70711L8.7364 1.70711C9.08787 1.31658 9.08787 0.683418 8.7364 0.292893C8.38492 -0.0976311 7.81508 -0.0976311 7.4636 0.292893L4.5 3.58579Z"
                        fill="#585858" />
                    </svg>

                  </a> <!-- product_review_sort_text -->

                  <a href="#" class="product_review_sort_text product_review_sort_text2 mr-3">
                    Оценке
                    <svg class="product_review_sort_icon product_review_sort_icon2 product_review_sort_icon_down"
                      width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 3.58579L1.5364 0.292893C1.18492 -0.0976311 0.615076 -0.0976311 0.263604 0.292893C-0.087868 0.683418 -0.087868 1.31658 0.263604 1.70711L3.8636 5.70711C4.21508 6.09763 4.78492 6.09763 5.1364 5.70711L8.7364 1.70711C9.08787 1.31658 9.08787 0.683418 8.7364 0.292893C8.38492 -0.0976311 7.81508 -0.0976311 7.4636 0.292893L4.5 3.58579Z"
                        fill="#585858" />
                    </svg>

                  </a> <!-- product_review_sort_text -->

                </div> <!-- product_review_sort -->
                <label class="control control--checkbox">
                  <input type="checkbox" checked="checked" />
                  <div class="control__indicator"></div>
                  С фото (9)
                </label>
              </div> <!-- product_review_filter -->

              <button class="write_review_btn mainbtn" v-b-modal.my-modal>
                Написать комментарий
              </button>
            </div> <!-- d-flex -->

            <div class="reviews">

              <div class="review">
                <div class="d-flex">
                  <a href="#" class="review_avatar"
                  :style="{ 'background-image': 'url(' + this.avatarImage + ')' }">

                  </a> <!-- review_avatar -->
                  <div class="review_content w-100">
                    <div class="d-flex mb-1">
                      <a href="#" class="review_name">Шухрат Тамзаев</a>
                      <span class="review_time">11 Ноября 2020, 19:17</span>
                    </div> <!-- d-flex -->
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="12" inactive-color="transparent" active-color="#fc8301" :show-rating="false" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
                        <h3 class="review_title">Хорошая Куртка за свои деньги</h3>
                      </div>
                      <div class="d-flex">
                        <button class="review_btn d-flex align-items-center review_like">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                              fill="#D6D9DC" />
                          </svg>
                          <span class="ml-1">87</span>
                        </button> <!-- review_like -->
                        <button class="review_btn d-flex align-items-center review_dislike ml-3">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                              fill="#D6D9DC" />
                          </svg>

                          <span class="ml-1">4</span>
                        </button> <!-- review_like -->
                      </div> <!-- d-flex -->
                    </div> <!-- d-flex -->
                    <div class="review_text">
                      <p>
                        Далеко-далеко за словесными го Далеко-далеко за словесными горами, в стране
                        гласных и согласных живут рыбные
                        тексты. Своего предупреждал рукопись эта свою решила продолжил безопасную рами, в стране гласных и
                        согласных живут рыбные
                        тексты. Своего предупреждал рукопись эта свою решила продолжил безопасную прямо силуэт
                      </p>

                      <div class="d-flex mt-2 position-relative">

                        <a href="#" class="complain_review_btn mr-4">
                          Пожаловаться

                        </a>

                        <a href="#" class="complain_review_btn review_reply_btn d-block">
                          Ответить
                        </a>
                      </div> <!-- d-flex -->
                      <form action="" class="reply_form">
                        <textarea name="" id="" rows="4" placeholder="Напишите сообщение"></textarea>
                        <div class="d-flex align-items-center justify-content-end mt-2">
                          <span class="reply_form_cancelbtn mr-4">Отменить</span>
                          <button class="mainbtn reply_form_sendbtn">Отправить</button>
                        </div> <!-- d-flex -->
                      </form> <!-- reply_form -->
                    </div>
                  </div> <!-- review_content -->
                </div> <!-- d-flex -->

              </div> <!-- review -->
              <div class="review">
                <div class="d-flex">
                  <a href="#" class="review_avatar"
                  :style="{ 'background-image': 'url(' + this.avatarImage + ')' }">

                  </a> <!-- review_avatar -->
                  <div class="review_content w-100">
                    <div class="d-flex mb-1">
                      <a href="#" class="review_name">Шухрат Тамзаев</a>
                      <span class="review_time">2 августа 2019, 19:17</span>
                    </div> <!-- d-flex -->
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="12" inactive-color="transparent" active-color="#fc8301" :show-rating="false" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
                        <h3 class="review_title">Хорошая Куртка за свои деньги</h3>
                      </div>
                      <div class="d-flex">
                        <button class="review_btn d-flex align-items-center review_like">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                              fill="#D6D9DC" />
                          </svg>
                          <span class="ml-1">87</span>
                        </button> <!-- review_like -->
                        <button class="review_btn d-flex align-items-center review_dislike ml-3">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                              fill="#D6D9DC" />
                          </svg>

                          <span class="ml-1">4</span>
                        </button> <!-- review_like -->
                      </div> <!-- d-flex -->
                    </div> <!-- d-flex -->
                    <div class="review_text">
                      <p>
                        Далеко-далеко за словесными горами, в стране гласных и
                      </p>
                      <div class="review_photos">

                        <a data-fancybox="gallery" href="images/mercedes.jpg">
                          <div class="mybg_center w-100 h-100" style="background-image: url(images/mercedes.jpg);">

                          </div> <!-- mybg_center -->
                        </a>
                        <a data-fancybox="gallery" href="images/mercedes2.jpg">
                          <div class="mybg_center w-100 h-100" style="background-image: url(images/mercedes2.jpg);">

                          </div> <!-- mybg_center -->
                        </a>

                      </div> <!-- review_photos -->

                      <div class="d-flex  mt-2">

                        <a href="#" class="complain_review_btn mr-4">
                          Пожаловаться
                        </a>

                        <a href="#" class="complain_review_btn review_reply_btn">
                          Ответить
                        </a>
                      </div> <!-- d-flex -->
                    </div> <!-- review_text -->
                  </div> <!-- review_content -->
                </div> <!-- d-flex -->

              </div> <!-- review -->
              <div class="review">
                <div class="d-flex">
                  <a href="#" class="review_avatar"
                  :style="{ 'background-image': 'url(' + this.avatarImage + ')' }">

                  </a> <!-- review_avatar -->
                  <div class="review_content w-100">
                    <div class="d-flex mb-1">
                      <a href="#" class="review_name">Шухрат Тамзаев</a>
                      <span class="review_time">Вчера, 19:17</span>
                    </div> <!-- d-flex -->
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="12" inactive-color="transparent" active-color="#fc8301" :show-rating="false" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
                        <h3 class="review_title">Хорошая Куртка за свои деньги</h3>
                      </div>
                      <div class="d-flex">
                        <button class="review_btn d-flex align-items-center review_like">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                              fill="#D6D9DC" />
                          </svg>
                          <span class="ml-1">87</span>
                        </button> <!-- review_like -->
                        <button class="review_btn d-flex align-items-center review_dislike ml-3">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                              fill="#D6D9DC" />
                          </svg>

                          <span class="ml-1">4</span>
                        </button> <!-- review_like -->
                      </div> <!-- d-flex -->
                    </div> <!-- d-flex -->
                    <p class="review_text">Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные
                      тексты. Своего предупреждал рукопись эта свою решила продолжил безопасную прямо силуэт.</p>
                    <div class="d-flex mt-2">

                      <a href="#" class="complain_review_btn mr-4">
                        Пожаловаться
                      </a>

                      <a href="#" class="complain_review_btn review_reply_btn">
                        Ответить
                      </a>
                    </div> <!-- d-flex -->

                  </div> <!-- review_content -->
                </div> <!-- d-flex -->

                <div class="subreview review">
                  <div class="d-flex">
                    <a href="#" class="review_avatar"
                    :style="{ 'background-image': 'url(' + this.avatarImage + ')' }">

                    </a> <!-- review_avatar -->
                    <div class="review_content w-100">

                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex mb-1">
                          <a href="#" class="review_name">Шухрат Тамзаев</a>
                          <span class="review_time">Вчера, 19:17</span>
                        </div> <!-- d-flex -->
                        <div class="d-flex">
                          <button class="review_btn d-flex align-items-center review_like">
                            <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                                fill="#D6D9DC" />
                              <path
                                d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                                fill="#D6D9DC" />
                            </svg>
                            <span class="ml-1">87</span>
                          </button> <!-- review_like -->
                          <button class="review_btn d-flex align-items-center review_dislike ml-3">
                            <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                                fill="#D6D9DC" />
                              <path
                                d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                                fill="#D6D9DC" />
                            </svg>

                            <span class="ml-1">4</span>
                          </button> <!-- review_like -->
                        </div> <!-- d-flex -->
                      </div> <!-- d-flex -->
                      <p class="review_text pt-0 mt-0">Далеко-далеко за словесными горами, в стране гласных и согласных
                        живут
                        рыбные тексты. Своего прямо силуэт.</p>
                      <div class="d-flex mt-2">

                        <a href="#" class="complain_review_btn mr-4">
                          Пожаловаться
                        </a>

                        <a href="#" class="complain_review_btn review_reply_btn">
                          Ответить
                        </a>
                      </div> <!-- d-flex -->

                    </div> <!-- review_content -->
                  </div> <!-- d-flex -->

                </div> <!-- subreview -->

              </div> <!-- review -->
              <div class="review">
                <div class="d-flex">
                  <a href="#" class="review_avatar"
                  :style="{ 'background-image': 'url(' + this.avatarImage + ')' }">
                  </a> <!-- review_avatar -->
                  <div class="review_content w-100">
                    <div class="d-flex mb-1">
                      <a href="#" class="review_name">Шухрат Тамзаев</a>
                      <span class="review_time">10.11.2020, 19:17</span>
                    </div> <!-- d-flex -->
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="12" inactive-color="transparent" active-color="#fc8301" :show-rating="false" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
                        <h3 class="review_title">Хорошая Куртка за свои деньги</h3>
                      </div>
                      <div class="d-flex">
                        <button class="review_btn d-flex align-items-center review_like">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.2222 6.52344H1.2382C0.964286 6.52344 0.742188 6.7858 0.742188 7.10944V16.4853C0.742188 16.8089 0.964253 17.0713 1.2382 17.0713H3.22217C3.49608 17.0713 3.71817 16.8089 3.71817 16.4853V7.10941C3.71817 6.7858 3.49614 6.52344 3.2222 6.52344Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.6109 8.07726C15.5234 7.16823 14.8046 6.52394 14.0303 6.52394H10.1634C10.492 5.82873 10.6684 3.8624 10.6606 3.05915C10.6476 1.72955 9.71564 0.664062 8.59022 0.664062H8.18094C7.9068 0.664062 7.68494 0.926146 7.68494 1.25007C7.68494 2.60513 7.23834 5.05098 6.39605 6.04613C5.82913 6.71592 5.34448 6.95863 4.70898 7.33386V16.1266C5.68195 16.5097 6.9173 17.0717 8.80023 17.0717H12.0447C13.1138 17.0717 13.9464 15.9019 13.5322 14.666C14.1633 14.4629 14.6287 13.779 14.6287 12.9698C14.6287 12.7415 14.5915 12.5229 14.5241 12.322C15.5877 11.9797 15.9792 10.4281 15.241 9.45388C15.5122 9.09592 15.6618 8.6063 15.6109 8.07726Z"
                              fill="#D6D9DC" />
                          </svg>
                          <span class="ml-1">87</span>
                        </button> <!-- review_like -->
                        <button class="review_btn d-flex align-items-center review_dislike ml-3">
                          <svg width="20" height="20" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.29935 11.3018H1.31534C1.04143 11.3018 0.819336 11.0394 0.819336 10.7158V1.33994C0.819336 1.01633 1.0414 0.753933 1.31534 0.753933H3.29931C3.57322 0.753933 3.79532 1.01629 3.79532 1.33994V10.7158C3.79532 11.0394 3.57329 11.3018 3.29935 11.3018Z"
                              fill="#D6D9DC" />
                            <path
                              d="M15.688 9.74794C15.6005 10.657 14.8818 11.3013 14.1074 11.3013H10.2405C10.5692 11.9965 10.7456 13.9628 10.7377 14.766C10.7248 16.0956 9.79279 17.1611 8.66736 17.1611H8.25809C7.98395 17.1611 7.76208 16.899 7.76208 16.5751C7.76208 15.2201 7.31548 12.7742 6.4732 11.7791C5.90628 11.1093 5.42163 10.8666 4.78613 10.4913V1.69864C5.7591 1.31549 6.99445 0.753468 8.87738 0.753468H12.1219C13.191 0.753468 14.0236 1.92325 13.6093 3.1592C14.2405 3.36233 14.7059 4.0462 14.7059 4.85537C14.7059 5.08373 14.6686 5.3023 14.6013 5.50317C15.6649 5.84554 16.0564 7.3971 15.3182 8.37132C15.5894 8.72927 15.7389 9.2189 15.688 9.74794Z"
                              fill="#D6D9DC" />
                          </svg>

                          <span class="ml-1">4</span>
                        </button> <!-- review_like -->
                      </div> <!-- d-flex -->
                    </div> <!-- d-flex -->
                    <div class="review_text">
                      <p>
                        Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные
                        тексты. Своего предупреждал рукопись эта свою решила продолжил безопасную прямо силуэт.
                      </p>

                      <div class="d-flex mt-2">

                        <a href="#" class="complain_review_btn mr-4">
                          Пожаловаться
                        </a>

                        <a href="#" class="complain_review_btn review_reply_btn">
                          Ответить
                        </a>
                      </div> <!-- d-flex -->
                    </div>
                  </div> <!-- review_content -->
                </div> <!-- d-flex -->

              </div> <!-- review -->

            </div> <!-- reviews -->

            <button class="mainbtn see_more_btn ml-5">
              <svg width="12" height="12" viewBox="0 0 341.333 341.333"
                style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
                <g>
                  <g>
                    <polygon points="311.253,140.587 192,259.627 192,0 149.333,0 149.333,259.627 30.293,140.373 0,170.667 170.667,341.333 341.333,170.667" />
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
              Показать еще
            </button>

          </div> <!-- product_reviews_section -->

        </div> <!-- col-md-8 -->

        <div class="col-md-4">
          <div class="product_review_stats d-flex justify-content-between">
            <div class="d-flex flex-column align-items-center">
              <h4>4.5</h4>
              <h6 class="py-2">20 отзывов</h6>
              <star-rating border-color="#fc8301" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="19" inactive-color="transparent" active-color="#fc8301" :show-rating="false" :rating="4.5" text-class="custom-text" :read-only="true" :increment="0.5"></star-rating>
            </div> <!-- d-flex -->

            <div class="progressbar_part">
              <div class="progress_star">
                <span>5 звезд</span>
                <div class="progress myprogress">
                  <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100">

                  </div> <!-- progress-bar -->
                </div> <!-- progress -->
                <span>60%</span>
              </div> <!-- progress_star -->
              <div class="progress_star">
                <span>4 звезд</span>
                <div class="progress myprogress">
                  <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0"
                    aria-valuemax="100">

                  </div> <!-- progress-bar -->
                </div> <!-- progress -->
                <span>20%</span>
              </div> <!-- progress_star -->
              <div class="progress_star">
                <span>3 звезд</span>
                <div class="progress myprogress">
                  <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0"
                    aria-valuemax="100">

                  </div> <!-- progress-bar -->
                </div> <!-- progress -->
                <span>10%</span>
              </div> <!-- progress_star -->
              <div class="progress_star">
                <span>2 звезд</span>
                <div class="progress myprogress">
                  <div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0"
                    aria-valuemax="100">

                  </div> <!-- progress-bar -->
                </div> <!-- progress -->
                <span>5%</span>
              </div> <!-- progress_star -->
              <div class="progress_star">
                <span>1 звезд</span>
                <div class="progress myprogress">
                  <div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0"
                    aria-valuemax="100">

                  </div> <!-- progress-bar -->
                </div> <!-- progress -->
                <span>5%</span>
              </div> <!-- progress_star -->
            </div> <!-- progressbar_part -->
          </div> <!-- product_review_stats -->
        </div> <!-- col-md-4 -->

      </div> <!-- row -->

    </div> <!-- container -->

  </section> <!-- product_review_section -->

  <!-- The modal -->
  <b-modal id="my-modal" centered>

  </b-modal>
  </div>
</template>

<script>
import Header2 from '@/components/lite/desktop/Header2'
import ToggleFavorite from '@/components/lite/desktop/ToggleFavorite'
import ProductMainSlider from '@/components/lite/desktop/Sliders/ProductMainSlider'

export default {
  name: 'ProductPage',
  components: {
    Header2,
    ToggleFavorite,
    ProductMainSlider
  },
  data () {
    return {
      avatarImage: "'https://picsum.photos/500?random=1'"
    }
  }
}
</script>

<style lang="scss" scoped>
.product_btns a {
  background: #343538;
  border-radius: 4px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding: 11px 20px;
  width: 100%;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
}
.product_btns a:hover {
  background: #2b2c2e;
}
.show_number_btn {
}
.product_btns a img {
  position: relative;
  bottom: 2px;
  margin-right: 5px;
}
/* START Product page styles */
.like_btn {
  border-radius: 2px;
  background: #ecf2f9;
  height: 19px;
}
.like_btn_icon {
  background: #dde9f7;
  border-radius: 2px;
  height: 19px;
  padding: 3px 6px 4px 7px;
}
.like_btn_count {
  font-weight: 500;
  font-size: 10px;
  padding: 3px 15px 3px 7px;

  color: #898eaf;
}
.like_btn.active {
  background: #fff2d2;
}
.like_btn.active .like_btn_icon {
  background: #ffe19a;
}
.like_btn.active .like_btn_icon svg path {
  fill: #fca947;
}
.like_btn.active .like_btn_count {
  color: #fca947;
}
.dislike_btn {
  border-radius: 2px;
  background: #ecf2f9;
  height: 19px;
}
.dislike_btn_icon {
  background: #dde9f7;
  border-radius: 2px;
  height: 19px;
  padding: 3px 6px 4px 7px;
}
.dislike_btn_count {
  font-weight: 500;
  font-size: 10px;
  padding: 3px 15px 3px 7px;

  color: #898eaf;
}

.dislike_btn.active {
  background: #ffd8d2;
}
.dislike_btn.active .dislike_btn_icon {
  background: #ffa09a;
}
.dislike_btn.active .dislike_btn_icon svg path {
  fill: #fc4747;
}
.dislike_btn.active .dislike_btn_count {
  color: #fc4747;
}
.breadcrumb {
  background: transparent!important;
  display: flex;
  align-items: center;
}

.breadcrumb-item a {
  color: #555!important;
  transition: all 0.2s;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
}
.breadcrumb-item a:hover {
  color: #000!important;
}
.breadcrumb-item.active {
  color: #555!important;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}

.breadcrumb span {
  font-size: 12px;
  color: #777;
}
.back_btn {
  color: #fff;
  font-size: 14px;
  padding: 7px 20px 7px 15px;
  background: #343538!important;
  color: #FFFFFF;
}
.back_btn:hover {
  background: #343538!important;
}
.gallery-top {
  height: 600px;
  width: 100%;
  border-radius: 5px;
}

.gallery-thumbs {
  height: 150px;
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  cursor: pointer;
  opacity: 1;
  border-radius: 3px!important;
  overflow: hidden;
}

.gallery-thumbs .swiper-slide-thumb-active {
  -webkit-box-shadow: inset 0px 0px 0px 3px var(--main-color);
  -moz-box-shadow: inset 0px 0px 0px 3px var(--main-color);
  box-shadow: inset 0px 0px 0px 3px var(--main-color);
  opacity: 1;
}

.product_slider_next {
  top: 50%;
  right: -50px;
}
.product_slider_prev {
  top: 50%;
  left: -50px;
}
.gallery-top:hover .product_slider_prev {
  left: 25px;
}
.gallery-top:hover .product_slider_next {
  right: 25px;
}
.zoom-imgs {
  cursor: pointer;
}

.product_sidebar {
  border-radius: 6px;
  padding: 30px 30px 20px 30px;
}
.product_price {
  font-weight: bold;
  font-size: 33px;
  letter-spacing: 1px;

  color: #343538;
}
.myproduct_btns .like_btn_icon {
  height: 27px;
  padding: 3px 10px 4px 10px;
}
.myproduct_btns .like_btn_icon svg {
  width: 16px;
  height: 16px;
}
.myproduct_btns .like_btn_count {
  font-size: 13px;
  padding: 5px 15px 5px 10px;
}

.myproduct_btns .like_btn {
  height: inherit;
}

.subscribe_btn {
  font-size: 13px;
  color: var(--main-color);
  border-radius: 5px;
  font-weight: normal;
  padding: 5px 13px;
  border: none;
  border: 1px solid transparent;
  background: #ff902948;
}
.subscribe_btn.active {
  background: transparent;
  transition: all 0.2s;
  border: 1px solid #ff902948;
}
.subscribe_btn.active:hover {
  border: 1px solid var(--main-color);
}

.myproduct_btns .dislike_btn_icon {
  height: 27px;
  padding: 3px 10px 4px 10px;
}
.myproduct_btns .dislike_btn_icon svg {
  width: 15px;
  height: 15px;
}
.myproduct_btns .dislike_btn_count {
  font-size: 13px;
  padding: 5px 15px 5px 10px;
}

.myproduct_btns .dislike_btn {
  height: inherit;
}

.myproduct_btns .mycard_views svg {
  width: 18px;
  height: 18px;
}

.myproduct_btns .mycard_views span {
  font-size: 14px;
  margin-left: 3px;
}

.product_favourite {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  cursor: pointer;
  padding-top: 2px;
  transition: all 0.2s;
  border: 1px solid rgb(230, 230, 230);
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.product_favourite:hover {
}

.product_favourite .mycard_favorite {
  position: inherit;
}
.product_seller_img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.product_seller_name {
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  color: #000;
}
.seller_text {
  width: 74%;
}
.seller_text span {
  font-weight: normal;
  font-size: 15px;

  color: #737680;
}

.product_btns a {
  background: #343538;
  border-radius: 4px;
  color: #fff;
  font-size: 17px;
  padding: 11px 20px;
  width: 100%;
  transition: all 0.2s;
}
.product_btns a:hover {
  background: #2b2c2e;
}

.product_btns a img {
  position: relative;
  bottom: 2px;
  margin-right: 5px;
}
.product_revew_text {
  font-weight: 500;
  font-size: 19px;

  color: #343538;
  font-family: 'Inter', sans-serif;
}
.product_revew_text:hover {
  color: #343538;
}

.custom-text {
  font-weight: 500;
  position: relative;
  top: 5px;
  font-family: 'Inter', sans-serif;
}
.product_adress h4 {
  font-weight: 500;
  font-size: 25px;
  color: #343538;
}
.product_adress p {
  font-weight: normal;
  font-size: 17px;
  line-height: 1.4;
  color: #737680;
  height: 47px;
}

.product_sidebar_bottom span {
  font-weight: 300;
  font-size: 12px;
  color: #938F8F;
}
.product_adress a {
  font-weight: normal;
  font-size: 16px;
  text-decoration-line: underline!important;
  color: var(--main-color);
}
.product_sidebar_socials a {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.product_sidebar_date h6 {
  font-weight: bold;
  font-size: 17px;

  color: #737680;
}
.product_bottom_info {
  background: #FFFFFF;
  border-radius: 6px;
  padding: 30px 30px;
}
.product_bottom_info h3 {
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1px;
  color: #000000;
}
.product_bottom_info h4 {
  font-weight: bold;
  font-size: 27px;
  letter-spacing: 1px;
  color: #000000;
}
.desc_text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: #000000;
}
.product_params .pp {
  margin-bottom: 12px;
}
.product_params .pp span {
  display: inline-block;
  width: 33%;
}

.product_params .pp > span:first-child {
  color: #8b8b8b;
  margin: 0 2.5% 0 0;
  position: relative;
  vertical-align: top;
  width: 63%;
}
.product_params .pp b {
  background: #fff;
  font-weight: 400;
  position: relative;
  z-index: 1;
  padding: 0 20px 0 0;
}
.product_params .pp>span:first-child:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 5px;
  left: 0;
  height: 20px;
  width: 100%;
  border-bottom: 1px dashed #ccc;
}

.product_hashtags {
  display: inline-block;
}
.product_hashtag {
  border-radius: 100px;
  padding: 6px 16px;
  margin-top: 9px;
  background: #f2f3f5;
  margin-right: 4px;
  color: #333;
  display: inline-flex;
  transition: all 0.15s;
}
.product_hashtag:hover {
  background: #eaecf0;
  color: #333;
}
.product_hashtag:active {
  background: #eaecf0;
}
.product_hashtag:focus {
  background: #eaecf0;
}
.product_reviews_section   {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 25px 30px;
}
.write_review_btn {
  border-radius: 3px;
  padding: 9px 15px;
}
.product_review_filter span {
  font-size: 15px;
  line-height: 16px;
  color: #666666;
}
.product_review_filter .control {
  font-weight: 500;
  font-size: 14px;
  color: #222;
}
.control {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
}
.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.control__indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: transparent;
  border: 2px solid #cacaca;
  border-radius: 3px;
}
.control--radio .control__indicator {
  border-radius: 50%;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: transparent;
}
.control input:checked ~ .control__indicator {
  background: var(--main-color);
  border: 2px solid var(--main-color);
}
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: var(--main-color);
  border: 2px solid var(--main-color);
}
.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control__indicator:after {
  content: '';
  position: absolute;
  display: none;
}
.control input:checked ~ .control__indicator:after {
  display: block;
}
.control--checkbox .control__indicator:after {
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}
.control--radio .control__indicator:after {
  left: 7px;
  top: 7px;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: #fff;
}
.control--radio input:disabled ~ .control__indicator:after {
  background: #7b7b7b;
}

.product_review_sort_text {
  font-weight: 500;
  font-size: 14px;
  color: #222;
}
.product_review_sort_text svg {
  margin-left: 3px;
}
.product_review_sort_text svg path {
}
.product_review_sort_text:hover {
  color: #222;
}

.product_review_sort_text.active {
  color: var(--main-color);
}
.product_review_sort_text.active:hover {
  color: var(--main-color);
}
.product_review_sort_text.active > svg path {
  fill: var(--main-color);
}

.product_review_sort_icon_up {
  transform: rotate(180deg);
}

.reviews {
}

.review {
  border-bottom: 1px solid #eee;
  padding: 30px 0 22px 0;
}

.subreview {
  margin-left: 45px;
}
.review:last-child {
  border-bottom: 0;
}
.review_avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 16px;
}

.review_name {
  font-weight: normal;
  font-size: 15px;
  font-weight: 500;
  color: #000000;
}
.review_name:hover {
  color: #000000;
}
.review_title {
  font-weight: 500;
  font-size: 17px;
  margin-left: 10px;

  color: #000000;
}

.review_time {
  font-weight: normal;
  font-size: 13px;
  margin-left: 6px;
  color: #949494;
}

.review_text {
  font-weight: normal;
  font-size: 15px;
  line-height: 26px;
  margin: 10px 0;
  letter-spacing: 0.3px;

  color: #000;
}

.review_content {
  max-width: 90%;
}
.review_photos {
  display: flex;
  margin-top: 20px;
}

.review_photos a {
  width: 105px;
  height: 120px;
  overflow: hidden;
  display: block;
  margin-right: 10px;
  position: relative;
  border-radius: 5px;
}

.review_photos a > div {
  transition: all 0.35s;
}
.review_photos a:hover > div {
  filter: brightness(80%);
  transform: scale(1.05);
}
.review_photos a img {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.25s;
  filter: brightness(100%);
}

.review_photos a:hover > div {
}
.review_btn {
  background: transparent;
}
.review_btn span {
  font-size: 14px;
  color: #8F8F8F;

}
.review_like {
  position: relative;
  bottom: 2px ;
}
.review_btn.active svg path {
  fill: var(--main-color);
}
.review_btn.active span {
  color:  var(--main-color);
}
.reply_btn {
  padding: 5px 20px;
  font-size: 14px;
}
.complain_review_btn  {
  color: #555;
  transition: all 0.2s;
  font-size: 15px;
  border-bottom: 1px dashed #555;
}
.complain_review_btn:hover {
  color: var(--main-color);
  border-bottom: 1px dashed var(--main-color);
}
.see_more_btn {
  background: transparent!important;
  border: 2px solid var(--main-color)!important;
  color: var(--main-color);
  font-weight: 500;
  font-size: 14px;
  padding: 10px 25px;
  text-transform: uppercase;
}
.see_more_btn svg {
  margin-right: 7px;
}
.see_more_btn svg g {
  fill: var(--main-color);
}
.see_more_btn:hover {
  color: #fff;
  background: var(--main-color)!important;
}
.see_more_btn:hover svg g {
  fill: #fff;
}
.product_review_stats {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 22px 25px;
}
.product_review_stats h4 {
  color: var(--main-color);
  font-weight: bold;
  font-size: 55px;
}

.product_review_stats h6 {
  font-weight: 300;
  font-size: 15px;

  color: #666666;
}

.progressbar_part {
  display: flex;
  flex-direction: column;
}

.progress_star {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.progress_star:last-child {
  margin-bottom: 0;
}
.progress_star span {
  font-size: 14px;

  color: #666666;
}

.myprogress {
  width: 150px;
  height: 8px !important;
  margin: 0 10px;
  border-radius: 2px !important;
}

.myprogress .progress-bar {
  background: var(--main-color);
  border-radius: 2px;
}

.subreview {
  border: none;
}

.reply_form {
  margin-top: 25px;
  width: 100%;
  display: none;
}
.reply_form.active {
  display: block;
}
.reply_form textarea {
  width: 100%;
  outline: none;
  background: #F8F8FC;
  border-radius: 5px;
  border: none;
  padding: 20px 25px;
  color: #505050;
}
.reply_form_cancelbtn {
  background: transparent;
  color: var(--main-color);
  font-size: 15px;
  cursor: pointer;
}
.reply_form_cancelbtn:hover {
}
.reply_form_sendbtn {
  padding: 8px 30px;
  border-radius: 5px;
  font-size: 15px;
}
</style>
