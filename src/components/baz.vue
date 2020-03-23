<template>
  <div class='mt-5' >
    <b-carousel id="carousel" v-model="slide" :interval="4000" controls background="#ababab" img-width="1024" img-height="480" @sliding-start="onSlideStart()" @sliding-end="onSlideEnd()">
      <b-carousel-slide v-for='i in 4' :key='i'>
        <template v-slot:img >
          <div class="prev" width="1024" height="480" :style="`background-image:url(/img/slide/${i}.jpg)`" alt="image slot">
            <div class='minf'>
              <h1 class='m-2'>ИНТЕЛ-МЕДИС</h1>
              <h3 class='m-2'>{{$store.state.names[navs[i]]}}</h3>
              <b-button @click='forTo(navs[i])' class='m-2' size="lg" variant="info" style='max-width:200px;'>Подробнее</b-button>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <nav class='myNav'>
      <ul class="wrap d-flex justify-content-between text-center font-weight-bold">
        <li class='d-flex flex-column text-center justify-content-center' v-for='e in navs' :key='e' @click='forTo(e)'>
          <img class='d-block mx-auto mb-1' width='60px' :src='"/img/icon/"+e+".svg"'/>
          {{$store.state.names[e]}}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        navs:['drink','alc','drug','game','fiz']
      }
    },
    mounted(){
    },
    methods: {
      forTo(e){
        location.hash='#'+e
      },
      onSlideStart() {
        // console.log(slide)
        this.sliding = true
      },
      onSlideEnd() {
        // console.log(slide)  
        this.sliding = false
      }
    }
  }
</script>
<style lang='scss'>
  #carousel{
    height:calc(100vmin - 55px);
    min-height:30vmax;
    max-height:60vmax;
  }
  .prev{
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    width:100%;
    height:calc(100vmin - 55px);
    min-height:30vmax;
    max-height:60vmax;
  }
  .minf{
    transition:.5s;
    position:absolute;
    left:200px;
    top:40vmin;
    text-shadow:2px 2px 2px #fff;
  }
  .myNav{
    margin-top:-150px;
    position:absolute;
    width:100%;
  }
  .wrap{
    width:80%;
    margin:0 auto;
    list-style:none;
    li{
      cursor:pointer;
      transition:.5s;
      width:100%;
      max-width:230px;
      height:130px;
      background:rgba(255,255,255,0.8);
      border-radius:5px;
      box-shadow:2px 2px 5px rgba(128,128,128,0.5);
    }
    li:hover{
      background:rgba(255,255,255,0.95);
      box-shadow:2.5px 2.5px 7.5px rgba(128,128,128,0.5);
    }
  }
  @media(max-width:1500px){
    .wrap{
      li{
        max-width:15vw;
      }
    }
  }
  @media(max-width:1140px){
    .minf{
      left:60px;
      top:11vmin;
    }
    .wrap{
      width:95%;
    }
  }
  @media(max-width:900px){
    .wrap{
      li{
        max-width:17vw;
      }
    }
    .minf{
      position:static;
      text-align:center;
      padding-top:135px;
    }
  }
  @media(max-width:800px){
    .minf{
      position:static;
      text-align:center;
      padding-top:75px;
    }
  }
  @media(max-width:680px){
    .myNav{
      display:none;
    }
  }
</style>