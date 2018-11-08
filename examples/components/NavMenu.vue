<!--Created by zhongjx on 2018/11/8.-->
<template>
    <div class="nav">
        <div  v-for="title in Object.keys(navObj)">
            <p>{{title}}</p>
            <div>
                <router-link v-for="sub in navObj[title]" :to="sub.path" :key="sub.path">{{sub.name}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import navObj from '../nav.config'

    export default {
        name: 'NavMenu',
        data() {
            return {
                navObj,
            }
        },
    }
</script>

<style>
.nav{
    display: flex;
    flex-direction: column;
}
</style>