<template>
   <div class="listpost" v-for="post in posts" :key="post.id">
            <div><strong>Заголовок: </strong>{{post.title}}</div>
            <div><strong>Текст: </strong>{{post.body}}</div>
        </div>
</template>

<script>
export default {
    props: {
        posts:{
            type: Array,
            required: true
            }
    },

}
</script>

<style>

</style>