<template>
<div>
    <h1>{{this.title}}</h1>
    <ul>
        <li v-for="post in posts" :key="post.title"> {{post.title}}</li>
    </ul>
</div>
</template>

<script>
export default{
    name:"StaticPosts",

    data: () =>({
        posts: [],
        title: "Welcome to the website!"
    }),

    //what we do when this post is mounted to DOM
    mounted(){
        this.getPosts();
    },
    // define all the methods that the component needs
    methods:{
        getPosts(){
            //TODO: return an array containing our posts
            this.posts =[
                {"title": "first post!"},
                {"title": "second post!"},
                {"title": "third post!"}
            ];
        }
    }
}
</script>
