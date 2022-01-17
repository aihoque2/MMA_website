<script>
Vue.component('static-posts',{
    template: '#static-posts-template',

    data(): =>({
        posts: [],
    }),

    //what we do when this post is mounted to DOM
    mounted(){

    },
    // define all the methods that the component needs
    methods:{
        getPosts(){
            //TODO: return an array containing our p[osts]
        }
    }
})
</script>
