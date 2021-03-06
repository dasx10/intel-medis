<template>
    <div>
        <h2 v-if='$store.state.names[$route.name]'>{{$store.state.names[$route.name]}}</h2>
        <div>
            <img src="/img/electro/1.jpg" width="33%" class='mx-2 aImg float-none float-md-right'>
            <p>Стрессы, нервные, физические и информационные перегрузки… Для жителей городов эти слова давно стали верными жизненными спутниками. Каждый человек пытается справиться с ними сам, в меру своих возможностей, образования и средств. Один – злоупотребляет алкоголем, другой принимает транквилизаторы, третий, в попытке отвлечься от каждодневных проблем, ищет экстремальных развлечений. Однако, для людей, желающих помочь себе без нанесения вреда здоровью, уже давно появилась альтернатива.</p>
            <p>Еще во времена СССР активно применялся метод электротранквилизации, который проходил по плану внедрения важнейших достижений медицинской науки и был рекомендован к использованию во всех лечебно-профилактических учреждениях, включая спортивную, морскую и авиационную медицину. В 1991 году данный метод был рекомендован приказом главкома ВВС СССР для восстановления работоспособности пилотов военной авиации.</p>
            <p>Двадцать пять лет работы и постоянного усовершенствования, привели к появлению высокоэффективной методики, которая может использоваться как самостоятельно, так и в комплексном лечении. Итак, центральная электроанальгезия (электротранквилизация) – метод электролечения, при котором на центральную нервную систему воздействуют импульсным током прямоугольной формы, длительностью импульса 0,15-0,5 мс, частотой 50-2000 Гц и силой до 2-3 мА.</p>
            <p>Импульсные токи избирательно возбуждают эндогенную опиоидную систему ствола головного мозга с выделением эндорфинов и энкефалинов. Снижается стимуляция эмоционально активных зон гипоталамуса и проявляется выраженное седативное, анальгезирующее и вегетостабилизирующее действие.</p>
        </div>
        <h4 class='text-center py-2'>Применение электротранквилизации</h4>

        <div class="card">
            <div class="card-body border-bottom">
                <h5 class="point" @click="show1=!show1">
                    <b-icon :icon="show1?'chevron-down':'chevron-right'"></b-icon>
                    Показания
                </h5>
                <ul class="list-group list-group-flush p-4" v-if='show1'>
                    <li v-for='e in indication' :key="e">{{e}}</li>
                </ul>
            </div>
            <div class="card-body border-bottom">
                <h5 class="point" @click="show2=!show2">
                    <b-icon :icon="show2?'chevron-down':'chevron-right'"></b-icon>
                    Противопоказания
                </h5>
                <ul class="list-group list-group-flush p-4" v-if='show2'>
                    <li v-for='e in contraindication' :key="e">{{e}}</li>
                </ul>
            </div>
            <div class="card-body border-bottom">
                <h5 class="point" @click="show3=!show3">
                    <b-icon :icon="show3?'chevron-down':'chevron-right'"></b-icon>
                    Лечебные эффекты
                </h5>
                <ul class="list-group list-group-flush p-4" v-if='show3'>
                    <li v-for='e in brain' :key="e">{{e}}</li>
                </ul>
            </div>
            <div class="card-body border-bottom">
                <h5 class="point" @click="show4=!show4">
                    <b-icon :icon="show4?'chevron-down':'chevron-right'"></b-icon>
                    Область применения
                </h5>
                <ol class="list-group list-group-flush p-4" v-if='show4'>
                    <li>
                        <h5>Купирование болевых синдромов в неврологии и других областях медицины</h5>
                        <ul>
                            <li>нормализация психофизиологического статуса, антистрессорный и антидепрессивный эффекты, повышение работоспособности, нормализация сна, снижение утомляемости, улучшение настроения, повышения качества жизни в целом</li>
                            <li>репаративный эффект: ускорение заживления повреждений различного генеза всех видов тканей, в том числе дефектов кожи и слизистых, регенерация гепатоцитов, периферических нервов, соединительной ткани</li>
                            <li>эффективное обезболивание, даже в тех случаях, когда медикаментозное лечение болевого синдрома оказывается неэффективным</li>
                            <li>нормализация процессов вегетативной регуляции, нормализация сосудистого тонуса, нормализация артериального давления; стимуляция иммунитета</li>
                            <li>купирование абстинентных синдромов, устранение постабстинентных аффективных нарушений при лечении алкоголизма, токсикомании и опиатной наркомании, устранение патологического влечения к алкоголю и наркотикам</li>
                            <li>вызывает противовоспалительный и противоаллергический эффекты</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Нормализация психофизиологического статуса</h5>
                        <ul>
                            <li>лечение неврологических, невротических, психических расстройств с преимущественно депрессивным и неврозоподобнными синдромами</li>
                            <li>лечение реактивной тревожности, синдрома хронической усталости, синдрома «беспокойных ног»</li>
                            <li>устранение явлений стресса разной степени интенсивности в разных условиях (профессиональная адаптация, пострадавшие в массовых катастрофах, их родственники, «синдром утраты», спасатели, посттравматический стресс)</li>
                            <li>повышение работоспособности здоровых людей</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Кардиология</h5>
                        <ul>
                            <li>нормализация артериального давления (при гипертонической болезни I-II степени, при гипотониях, при нейроциркуляторной, вегетососудистой дистонии)</li>
                            <li>лечение неосложнённого инфаркта миокарда (эффективное обезболивание, улучшение системной и регионарной гемодинамики, ускорение заживления повреждённого миокарда)</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Гастроэнтерология</h5>
                        <ul>
                            <li>при язвенной болезни желудка и 12-перстной кишки, гастритах, дуоденитах (ликвидация болевого синдрома, ускорение в 2-2,5 раза заживления язвенного дефекта на фоне нормализации секреции соляной кислоты и гастрина, потенцирование эрадикационной антихеликобактерной терапии, нормализация аппетита и перистальтики кишечника, нормализация вегетативного статуса, профилактика обострений)</li>
                            <li>при токсических гепатозах (уменьшение цитолиза и дегенеративных изменений гепатоцитов, нормализация антитоксической и синтетической функции печени)</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Наркология</h5>
                        <ul>
                            <li>купирование абстинентного синдрома при лечении алкоголизма, опийной наркомании, токсикомании</li>
                            <li>устранение постабстинентных аффективных нарушений</li>
                            <li>устранение патологического влечения</li>
                            <li>восстановление дезинтоксикационной функции печени</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Дерматология и косметология</h5>
                        <ul>
                            <li>лечение дерматозов различной локализации</li>
                            <li>эффективное устранение зуда</li>
                            <li>лечение поверхностной себореи</li>
                            <li>лечение псориаза</li>
                            <li>лечение трофических язв</li>
                            <li>снижение ломкости и профилактика выпадения волос</li>
                            <li>общее оздоровление кожи (улучшение микроциркуляции и трофики кожи, нормализация эластичности и цвета кожи)</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Спортивная медицина</h5>
                        <ul>
                            <li>повышение эффективности тренировочного процесса за счёт улучшения переносимости пиковых нагрузок, подъёма работоспособности на тренировках, ускорения восстановления после экстремальных нагрузок</li>
                            <li>снятие стрессов и устранение депрессий, вызванных спортивными ситуациями</li>
                            <li>стимуляция иммунитета, резко снижающегося у спортсменов на пике физических и психологических нагрузок</li>
                            <li>улучшение и ускорение адаптации к часовым поясам и акклиматизации</li>
                            <li>ускорение выздоровления после спортивных травм</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        show1:false,
        show2:false,
        show3:false,
        show4:false,
        indication:[
            "Купирование острых, подострых и хронических болевых синдромов: радикулиты, остеохондроз, невралгии, воспаление тройничного нерва, головные боли, в т.ч. мигрени, фантомные боли и боли у онкологических больных",
            "Стрессорные состояния, депрессии, тревожность, снижение работоспособности, синдром хронической усталости",
            "Гипертоническая болезнь I-II ст., гипотония, нейроциркуляторная дистония",
            "Нейросенсорная тугоухость, в том числе профессиональная",
            "Травматические и послеоперационные раны, ожоги и язвы, в том числе язвенная болезнь желудка и двенадцатиперстной кишки, трофические язвы",
            "Зудящие дерматозы, нейродермиты, экзема, себорея",
            "Стимуляция иммунной системы при иммунодефиците",
            "Первичный остеоартроз",
            "Алкогольный абстинентный синдром, алкогольные аффективные расстройства, патологическое влечение к алкоголю. Опийные наркомании",
            "Токсикозы первой половины беременности",
            "Климактерические неврозы",
            "Аллергические состояния: поллинозы, диатез, вазомоторный ринит, бронхиальная астма"
        ],
        contraindication:[
            "Судорожные состояния, эпилепсия",
            "Травмы и опухоли головного мозга, инфекционные поражения ЦНС",
            "Гипертонический криз",
            "Гидроцефалия",
            "Острые психические расстройства",
            "Тиреотоксикоз",
            "Мерцательная аритмия",
            "Наличие повреждений кожи в местах наложения электродов",
            "Наличие вживлённых электростимуляторов"
        ],
        brain:[
            "нормализация психофизиологического статуса, антистрессорный и антидепрессивный эффекты, повышение работоспособности, нормализация сна, снижение утомляемости, улучшение настроения, повышения качества жизни в целом",
            "репаративный эффект: ускорение заживления повреждений различного генеза всех видов тканей, в том числе дефектов кожи и слизистых, регенерация гепатоцитов, периферических нервов, соединительной ткани",
            "эффективное обезболивание, даже в тех случаях, когда медикаментозное лечение болевого синдрома оказывается неэффективным",
            "нормализация процессов вегетативной регуляции, нормализация сосудистого тонуса, нормализация артериального давления; стимуляция иммунитета",
            "купирование абстинентных синдромов, устранение постабстинентных аффективных нарушений при лечении алкоголизма, токсикомании и опиатной наркомании, устранение патологического влечения к алкоголю и наркотикам",
            "вызывает противовоспалительный и противоаллергический эффекты"
        ]
    })
}
</script>