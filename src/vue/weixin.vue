<template>
    <div v-show="weixinShow" @click="!weixinShow" class="weixin">
        <img v-if="mobile.wx && mobile.sys=='iPhone'" src="../../images/forios.png">
        <img v-if="mobile.wx && mobile.sys=='Android'" src="../../images/forandroid.png">
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                mobile: require("../module/isMobile")(),
                weixinShow: false
            }
        },
        methods: {

        }
    }
</script>
