<template>
<div>
    <div class="userlist" v-for="user in this.users" :key="user.id">
        <div>{{user.id}}</div>
        <div>{{user.name}}</div>
        <div>{{user.username}}</div>
        <div>{{user.email}}</div>

        <!-- Все падает если раскоментить, но если находится на этой странице
             с уже полученными данными и горячей перезагрузкой их подключить 
             они отрисуются и все будет в порядке. -->

        <!--<div>
            <div>{{user.address.street}}</div>
            <div>{{user.address.suite}}</div>
            <div>{{user.address.city}}</div>
            <div>{{user.address.zipcode}}</div>
            <div>
                <div>{{user.address.geo.lat}}</div>
                <div>{{user.address.geo.lng}}</div>
            </div>
        </div>
        <div>{{user.phone}}</div>
        <div>{{user.website}}</div>
        <div>
            <div>{{user.company.name}}</div>
            <div>{{user.company.catchPhrase}}</div>
            <div>{{user.company.bs}}</div>
        </div>-->
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    props:{
        userid: {
        }
    },
    data() {
        return {
            users: [{ }],
        }
    },
    methods:{
            async getUser(userid){
                try{
                    if (!Number.isInteger(userid)){
                        const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
                        console.log(response.data);
                        this.users = response.data;
                    }
                    else{
                        const response = await axios.get("https://jsonplaceholder.typicode.com/users/",userid);
                        this.users = response.data;
                    }
                }
                catch(exeption){
                    console.log(exeption);
                }
            },
        },
    mounted(){ 
        this.getUser(this.userid);
    }
}
</script>

<style>

</style>
