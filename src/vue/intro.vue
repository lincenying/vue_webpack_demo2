<template>
    <div class="intro">
        {{{ intro.content }}}
        <div class="title">
            <span>{{ intro.title }}</span>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                intro: {
                    title: "成就",
                    content: "~~Flexbox真正的发光是在HTML5 Web应用上。大多数Web Apps 由一系列模块化、可重用的组件组成。你可以使用Flexbox来为那些令你头痛的和依赖于脆弱的CSS hack 的地方布局。好的方法是使用Flexbox对小模块的地方进行布局，然后用float和其它工具来布局更广泛的地方。"
                }
            }
        },
        ready: function() {
            console.log(this.$root.$data);
        },
        methods: {

        }
    }
</script>
