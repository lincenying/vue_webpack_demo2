<template>
    <vueheader></vueheader>
    <div class="content">
        <user></user>
        <intro></intro>
        <myway></myway>
        <mylife></mylife>
        <myinfo></myinfo>
    </div>
    <weixin></weixin>
</template>
<script>
    module.exports = {
        components: {
            'vueheader': require('./vue/vueheader.vue'),
            'user': require('./vue/user.vue'),
            'intro': require('./vue/intro.vue'),
            'myway': require('./vue/myway.vue'),
            'mylife': require('./vue/mylife.vue'),
            'myinfo': require('./vue/myinfo.vue'),
            'weixin': require('./vue/weixin.vue')
        }
    }
</script>
