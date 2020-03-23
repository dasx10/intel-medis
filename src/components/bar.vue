<template>
  <div>
    <b-navbar fixed='top' toggleable="lg" type="light" variant="light">
      <img src="/img/logo.png" class="mr-3">
      <div class='d-flex flex-column mr-4'>
        <small class='text-center py-0 text-info'>Медецинский центр</small>
        <span class='text-primary text-center mx-0'>ИНТЕЛ-МЕДИС</span>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item exact active-class="text-primary" v-for='(l,i) in L' :key='i' :to="l.t">{{l.n}}</b-nav-item>
          <b-nav-item-dropdown text="Лечение зависимостей" left>
            <b-dropdown-item active-class="text-primary" v-for='z in Z' :to="'/'+z" :key='z'>{{$store.state.names[z]}}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-header id="dropdown-header-1">Применение в наркологии</b-dropdown-header>
            <b-dropdown-item active-class="text-primary" v-for='(f,i) in N' :to="'/'+f+'/narcology'" :key='i'>{{$store.state.names[f]}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Физиотерапия" left split>
              <b-dropdown-item active-class="text-primary" v-for='(f,i) in F' :to="'/'+f" :key='i'>{{i?$store.state.names[f]:"Физиотерапия - это..."}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    L:[{
        t:'/',
        n:'Главная'
      },{
        t:"/contact",
        n:'Контакты'
      },{
        t:'/doc',
        n:'Документы'
    }],
    Z:['drink','alc','drug','game'],
    N:['fiz','lazer','electro'],
    F:['fiz','lazer','electro','dars']
  })
}
</script>