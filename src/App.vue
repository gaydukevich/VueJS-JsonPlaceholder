<template>
    <div>
        <list-post/>
    </div>
</template>

<script>
import ListPost from '@/component/ListPost.vue'
import axios from 'axios'

export default {
    components: { ListPost, axios },
}
</script>

<style>

</style>