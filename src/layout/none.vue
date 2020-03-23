<template>
    <div>
        <baz v-if='$route.meta.head'/>
        <header v-else id='head' class='d-flex justify-content-center align-items-center flex-column'>
                <h1>ИНТЕЛ-МЕДИС</h1>
                <h4>Медицина с интеллектом</h4>
        </header>
        <b-container fluid id='b' class='py-2 py-md-3 py-lg-4'>
            <router-view id='view' class='p-4'/>
        </b-container>
    </div>
</template>
<script>
export default {
    components:{
        baz:()=>import('@/components/baz.vue'),
    }
}
</script>
<style>
    #head{
        padding-top:60px;
        background:fixed url('/img/slide/3.jpg') center -265px  no-repeat;
        /* background-size:100%; */
        height:320px;
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
        text-shadow: 2px 5px 3px #fff;
        color:#225;
    }
    #vbar{
        width:280px;
        height:auto;
        background:linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.6));
        box-shadow: 0 0 10px rgba(128,128,128,0.7);
    }
    #view{
        width:85%;
        background:linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.6));
        box-shadow: 0 0 10px rgba(128,128,128,0.7);
        margin:0 auto;
    }
    .aImg{
        width:33%;
        padding:10px;
    }
    @media(max-width:1500px){
        #view{
            width:90%;
        }
    }
    @media(max-width:1300px){
        #view{
            width:95%;
        }
    }
    @media(max-width:1140px){
        #vbar{
            display:none;
        }
        #view{
            width:100%;
        }
        .aImg{
            width:42%;
        }
    }
    @media(max-width:768px){
        .aImg{
            height:auto;
            width:100%;
            padding:5px 10%;
        }
    }
</style>