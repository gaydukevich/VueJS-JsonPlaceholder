<template>
  <div class="listpost" v-for="post in posts" :key="post.id">
    <div v-for="user in users" :key="user.id">
      <template v-if="user.id === post.userId">
        <div :data-tooltip="user.email">
          <strong>Пользователь: </strong>{{ user.name }}
        </div>
      </template>
    </div>
    <!--<div><strong>ID: </strong>{{ post.id }}</div>-->
    <div><strong>Заголовок: </strong>{{ post.title }}</div>
    <div><strong>Текст: </strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
[data-tooltip] {
  position: relative; /* Относительное позиционирование */
}
[data-tooltip]::after {
  content: attr(data-tooltip); /* Выводим текст */
  opacity: 0; /*Скрываем подсказку*/
  transition: 1s; /*Время перехода*/
  pointer-events: none; /*Предотвращаем взаимодействие с мышью*/
}
[data-tooltip]:hover::after {
  opacity: 1; /* Показываем подсказку */
  margin: 2em; /* Положение подсказки */
}
</style>