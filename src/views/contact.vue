<template>
    <b-container fluid>
        <h2 class='text-center'>Контакты</h2>
        <div class="row text-center mt-5">
            <div class="col-12 border-bottom">
                <div class="row">
                    <div class="col-sm-4">
                        <h5>ВЫЗОВ ВРАЧЕЙ НА ДОМ</h5>
                        <p v-for='t in $store.state.tel[2]' :key="t"><a :href="`tel:+38${t}`">{{cor(t)}}</a></p>
                    </div>
                    <div class="col-sm-4">
                        <h5>ВЫВЕДЕНИЕ ИЗ ЗАПОЯ НА ДОМУ</h5>
                        <p v-for='t in $store.state.tel[3]' :key="t"><a :href="`tel:+38${t}`">{{cor(t)}}</a></p>
                    </div>
                    <div class="col-sm-4">
                        <h5>ЛЕЧЕНИЕ ЗАВИСИМОСТЕЙ</h5>
                        <p v-for='t in $store.state.tel[4]' :key="t"><a :href="`tel:+38${t}`">{{cor(t)}}</a></p>
                    </div>
                </div>
            </div>
            
            <div class='col-md-12 col-xl-6 mt-md-5'>
                <h3 class='mt-6'>Первый филиал</h3>
                <p v-for='t in $store.state.tel[0]' :key="t"><a :href="`tel:+38${t}`">{{cor(t)}}</a></p>
                <p><a href="mailto:die@spammers.die">intel-medis@ukr.net</a></p>
                <p>г.Запорожье, ул.Яценко, 16</p>
            </div>
            <div class='col-md-12 col-xl-6'>
                <iframe width='100%' height='350px' class="mt-2 py-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10713.72248826186!2d35.149234!3d47.832238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc6752b0c8f257%3A0x546fb498b0c48a28!2z0YPQuy4g0K_RhtC10L3QutC-LCAxNiwg0JfQsNC_0L7RgNC-0LbRjNC1LCDQl9Cw0L_QvtGA0L7QttGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2OTAwMA!5e0!3m2!1sru!2sua!4v1549852899402" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>

            <div class='col-md-12 col-xl-6 mt-md-5'>
                <h3>Второй филиал</h3>
                <p v-for='t in $store.state.tel[1]' :key="t"><a :href="`tel:+38${t}`">{{cor(t)}}</a></p>
                <p><a href="mailto:die@spammers.die">intel-medis@ukr.net</a></p>
                <p>г.Запорожье, пр. Соборный, 177</p>
            </div>
            <div class='col-md-12 col-xl-6'>
                <iframe width='100%' height='350px' class="mt-2 py-2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2677.1003890854654!2d35.105044!3d47.857019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc66d0425aa5b3%3A0xc148072b86ba1a30!2z0L_RgNC-0YHQvy4g0KHQvtCx0L7RgNC90YvQuSwgMTc3LCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1549853531486" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
    </b-container>
</template>
<script>
export default {
    methods:{
        cor(e){
            return "("+e[0]+e[1]+e[2]+') '+e[3]+e[4]+e[5]+" "+e[6]+e[7]+" "+e[8]+e[9];
        }
    }
}
</script>