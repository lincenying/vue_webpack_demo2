<template>
    <header>
        <div class="logo"><a href="./"><i></i></a></div>
        <div class="open-app">
            <a class="openApp" @click="openApp" href="javascript:;"><i class="iconfont icon-shouji"></i><span>打开App</span></a>
        </div>
    </header>
</template>
<script>
    module.exports = {
        methods: {
            openApp: require("../module/openApp")
        }
    }
</script>
