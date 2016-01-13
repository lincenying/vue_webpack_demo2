<template>
    <div class="myinfo">
        <div class="title"><i></i></div>
        <div class="content">
            <a v-if="myinfo.naitang" href="{{ myinfo.naitang }}"><i class="naitang"></i></a>
            <a v-if="myinfo.weibo" href="{{ myinfo.weibo }}"><i class="weibo"></i></a>
            <a v-if="myinfo.weixin" href="{{ myinfo.weixin }}"><i class="weixin"></i></a>
            <a v-if="myinfo.ins" href="{{ myinfo.ins }}"><i class="ins"></i></a>
            <a v-if="myinfo.facebook" href="{{ myinfo.facebook }}"><i class="facebook"></i></a>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                myinfo: {
                    naitang: "http://www.baidu.com",
                    weibo: "http://www.weibo.com"
                }
            }
        },
        methods: {

        }
    }
</script>
