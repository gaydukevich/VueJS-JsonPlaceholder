<template>
<div>
    <template v-if="loadData">
       <post-item :posts="this.posts"/>
       <div class="page_wrapper" >
           <div 
                class="page" 
                v-for="pageNumber in totalPage"
                :key="pageNumber" 
                @click="changePage(pageNumber)"
                :class="{
                    'cureent-page': page === pageNumber}">
                    {{pageNumber}}
            </div>
       </div>
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
            page: 1,
            limit: 10,
            totalPage: 0,
        }
    },

    methods: {
      async getPosts(){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params:{
                    _page: this.page,
                    _limit: this.limit
                }
            });
            this.posts = response.data;
            this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        }
        catch(exeption){
            console.log(exeption);
        }
        finally{
            this.loadData = true;
        }
      },
      changePage(page){
        this.page = page;
        this.loadData = false;
        this.getPosts();
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
    background-color: rgb(212, 212, 212);
    padding: auto;
    border-block: solid;
    border-block-color: black;
}

.page_wrapper{
    display: flex;
    margin-top: 30px;
}

.page{
    border: 1px solid black;
    margin: 5px;
    padding: 10px;
}
.cureent-page{
    border: 3px solid green;
    margin: 5px;
    padding: 10px;
}
</style>