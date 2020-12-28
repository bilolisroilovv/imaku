<template>
    <div class="search_dropdown">
      <ul class="" role="listbox">
        <li>
            <a href="categories.html" target="_blank">
            <b>бытов</b>ая техника <br>
            <span>Электротехника</span>
            </a>
        </li>
        <li>
            <a href="categories.html" target="_blank">
            <b>Iphon</b>e 12 Pro <br>
            <span>Мобильные телефоны</span>
            </a>
        </li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия для дома</a></li>

        <li><a href="categories.html" target="_blank"><b>бытов</b>ая техника для дома</a></li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия frosch</a></li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия grass</a></li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия unicum</a></li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия для унитаза</a></li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия frosch</a></li>
        <li><a href="categories.html" target="_blank"><b>бытов</b>ая химия чистящие средства</a></li>
      </ul>
    </div> <!-- search_dropdown -->
</template>

<script>
export default {
  name: 'SearchDropdown',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.search_dropdown {
  width: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 100%;
  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;
  overflow: hidden;
  padding: 10px 0;
}
.search_dropdown:before {
  content: '';
  /* width: 15px; */
  /* height: 25px; */
  background: #fff;
  position: absolute;
  display: block;
  left: 0;
  top: -5%;
}
.search_dropdown:after {
  content: '';
  /* width: 15px; */
  /* height: 25px; */
  background: #fff;
  position: absolute;
  display: block;
  right: 0;
  top: -5%;
}
.search_dropdown.active {
  display: block;
  pointer-events: inherit;
}
.search_dropdown ul li a {
  color: #697989;
  width: 100%;
  display: block;
  padding: 10px 25px 10px 25px;
  transition: all 0s;
}
.search_dropdown ul li a:hover {
  background: rgba(56, 56, 56, 0.042);
}
.search_dropdown ul li a span {
  color: var(--main-color);
  font-size: 14px;
}
</style>
