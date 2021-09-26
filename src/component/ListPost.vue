<template>
<div>
    <template v-if="loadData">
       <post-item :posts="this.posts"/>
    </template>
    <template v-else>
        <div>
            <p>Загрузка данный, пожалуйста подождите</p>
        </div>
    </template>
</div>
</template>

<script>
import axios from 'axios'
import PostItem from './PostItem.vue';
export default {
    components: {
        PostItem
    },

     data() {
        return {
            posts: [{ }],
            loadData: false,
        }
    },

    methods: {
      async getPosts(){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1");
            this.posts = response.data;
        }
        catch(exeption){
            console.log(exeption);
        }
        finally{
            this.loadData = true;
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