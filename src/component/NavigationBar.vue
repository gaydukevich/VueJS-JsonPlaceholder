<template>
  <div class="navbar">
    <button class="btnnavbar" @click="$router.push('/')">Главная</button>
    <button class="btnnavbar" @click="$router.push('/PostPage')">Страница с постами</button>
    <button class="btnnavbar" @click="$router.push('/UserPage')">Страница с пользователями</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    background-color: rgb(230, 230, 230);
    border-block: 5px solid;
    border-block-color: green;
    }
.btnnavbar{
  display: inline-block;
  margin: 10px;
  color: rgb(0, 0, 0);
  padding: .5em 2em;
  outline: none;
  border: 2px solid;
  border-radius: 1px;
}
</style>