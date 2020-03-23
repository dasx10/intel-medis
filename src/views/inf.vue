<template>
    <div class='inf' v-if='$store.state[$route.name]'>
        <h2 class='text-center' v-if='$store.state.names[$route.name]'>{{$store.state.names[$route.name]}}</h2>
        <div class='my-5' v-for='i in $store.state[$route.name].length' :key='i'>
            <img v-if='!(i===img.find(e=>e===i))' :src="`/img/${$route.name}/${i}.jpg`" :class="i%2!=0?'float-lg-left pr-lg-4':'float-lg-right pl-lg-4'" @error="err(i)" class='float-none'>
            <p class='px-4 text-justify' :class="{last:i===$store.state[$route.name].length&&i===img.find(e=>e===i)}">{{$store.state[$route.name][i-1]}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        img:[],
    }),
    methods:{
        err(i){
            this.img.push(i);
        },
        getData(){
            if(!this.$store.state[this.$route.name]){
                console.log('no')
            }
        }
    },
    mounted(){
        this.getData();
    },
    watch:{
        $route(){
            this.img=[],
            this.getData();
        }
    }
}
</script>
<style lang='scss'>
    .inf{
        img{
            height:33%;
            min-height:200px;
            max-height:300px;
        }
        p{
            min-height:270px;
        }
        .last{
            min-height:auto;
        }
    }
    @media(max-width:1140px){
        .inf{
            img{
                height:auto;
                min-height:0;
                max-height:100vmax;
                width:80%;
                min-width:210px;
                margin:0 10%;
            }
        }
        
    }
</style>