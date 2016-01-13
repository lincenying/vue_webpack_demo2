<template>
    <div class="myway">
        <div class="title"><i></i></div>
        <div class="list">
            <ul>
                <template v-for="item in myway.list">
                    <li v-if="myway.total > 1" class="subject">{{ item.title }}</li>
                    <li class="content">{{{ item.content }}}</li>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                myway: {
                    page: 0,
                    total: 0,
                    list: []
                }
            }
        },
        ready: function() {
            this.loadMore();
        },
        methods: {
            loadMore: function() {
                var self = this;
                self.myway.page++;
                self.$http.get('./src/test.json', {
                    page: self.myway.page
                }, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    emulateJSON: true
                }).then(function(response) {
                    var data = response.data;
                    var items = data.items,
                        newData = [];
                    for (var i = 0; i < items.length; i++) {
                        newData.push({
                            "title": items[i].title,
                            "content": items[i].tags,
                        });
                    }
                    self.myway.total = newData.length;
                    self.myway.list = self.myway.list.concat(newData);
                }, function(response) {
                    // handle error
                });
            }
        }
    }
</script>
