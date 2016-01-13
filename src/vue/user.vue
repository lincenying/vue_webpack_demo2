<template>
    <div class="user">
        <div class="img" :style="user.background"></div>
        <div class="avatar">
            <img :src="user.avatar">
            <span v-if="user.level" class="v v{{ user.level }}"></span>
        </div>
        <div class="name">{{ user.name }}</div>
        <div class="signature">{{ user.signature }}</div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                user: {
                    background: "background: url(http://dev.zdimg.com/background/20151218/d60c99edf7bd4176905ae4c4e8afb754.jpg)",
                    avatar: "http://dev.zdimg.com/user/avatar/20151221/c7df1662a6a76bafc149130095dc2d0a.jpeg@1e_50w_50h_1c_0i_0o_100Q_2x.jpeg",
                    name: "林岑影",
                    signature: "这家伙很懒, 什么都没留下",
                    isFollow: false,
                    level: 1
                }
            }
        },
        methods: {
            
        }
    }
</script>
