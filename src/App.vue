<template>
    <div class="app">
        <navigation-bar></navigation-bar>
        <router-view></router-view> 
    </div>
</template>

<script>
    import NavigationBar from '@/component/NavigationBar.vue'
    export default{
        components: {
            NavigationBar
        }
    }
</script>

<style>

</style>