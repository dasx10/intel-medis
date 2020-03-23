<template>
    <div>
        <h2 class='text-center'>Свидетельство и лицензии</h2>
        <div class="row">
            <img @click="modal(i)" v-for='i in count' :key='i' :src="`/img/doc/${i}.jpg`">
        </div>
        <div id='modal' v-if='show' @click="closeModal">
            <div id='inModal text-center'>
                <img :src="`/img/doc/${show}.jpg`">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        show:false,
        count:7
    }),
    methods:{
        modal(i){
            this.show=i;
        },
        closeModal(){
            this.show=false
        }
    }
}
</script>
<style scoped lang='scss'>
    #modal{
        width:100vw;
        height:100vh;
        position:fixed;
        background:rgba(0,0,0,.5);
        z-index:1000;
        display:flex;
        justify-content:center;
        top:0;
        right:0;
        img{
            margin-top:55px;
            height:95vh;
            width:auto;
        }
    }
    img{
        width:33%;
        padding:5px;
    }
    @media(max-width:1500px) {
        img{
            width:50%;
        }
    }
    @media(max-width:720px) {
        img{
            width:100%;
            padding:5px;
        }
    }
</style>