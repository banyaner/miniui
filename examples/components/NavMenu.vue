<!--Created by zhongjx on 2018/11/8.-->
<template>
    <div class="nav">
        <div v-for="title in Object.keys(navObj)">
            <p class="nav-title">{{title}}</p>
            <div class="group-container">
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
    .nav {
        padding-right: 100px;
        color: #3F536E;
        .group-container{
            margin-bottom: 32px;
        }
        .nav-title{
            padding: 0 24px 8px;
            color: #8DABC4;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }
        a{
            display: block;
            position: relative;
            padding: 8px 24px;
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