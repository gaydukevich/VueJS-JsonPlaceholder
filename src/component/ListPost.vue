<template>
  <div class="listpost" v-for="post in posts" :key="post.id">
      <div><strong>Заголовок: </strong>{{post.title}}</div>
      <div><strong>Текст: </strong>{{post.body}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
        return {
            posts: [{}],
        }
    },
    methods: {
      async getPosts(){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
            this.posts = response.data;
        }
        catch(exeption){
            console.log(exeption);
        }
        finally{

        }
      }
    },
    mounted(){  
        this.getPosts()
    }

}
</script>

<style>
.listpost{
    margin-top: 5px;
    background-color: rgb(240, 240, 240);
    padding: auto;
    border-block: solid;
    border-block-color: black;
}
</style>