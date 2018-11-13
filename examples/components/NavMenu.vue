<!--Created by zhongjx on 2018/11/8.-->
<template>
    <div class="nav">
        <div v-for="title in Object.keys(navObj) "class="group-container">
            <p class="nav-title">{{title}}</p>
            <router-link v-for="sub in navObj[title]" :to="sub.path" :key="sub.path">{{sub.name}}</router-link>
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
    .nav {
        padding-right: 20px;
        color: #3F536E;
        .group-container{
        }
        .nav-title{
            margin: 0;
            padding: 10px 8px;
            color: #8DABC4;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }
        a{
            display: block;
            position: relative;
            padding: 4px 24px;
            color: #444;
            font-weight: normal;
            font-size: 14px;
            line-height: 1.5;
            cursor: pointer;
            text-decoration: none;
        }
        .router-link-exact-active{
            color: #3FAAF5;
        }
    }
</style>