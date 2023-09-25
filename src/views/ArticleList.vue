<template>
    <div>
    </div>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px" class="common-layout_title">红色中国</el-aside>
            <el-main>
                <h1>文章列表</h1>
                <ul>
                    <li v-for="article in articles" :key="article.id">
                        <RouterLink :to="{ name: 'ArticleDetail', params: { id: article.id } }"> {{ article.title
                        }}</RouterLink>
                    </li>
                </ul>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            articles: [
                { id:1, title: "习近平向全球可持续交通高峰论坛致贺信" },
                { id:2, title: "李大钊：中国共产党的创始人之一" },
                { id:3, title: "蔡和森：中国共产党工人运动领袖"}
            ],
        };
    },
    components: { RouterLink }
};
</script>

<style lang="scss" scoped>
.common-layout_title {
    font-size: 30px;
    color: red;
}
</style>
