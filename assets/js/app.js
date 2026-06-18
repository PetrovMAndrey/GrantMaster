/* ============== DATA MODEL ============== */

const steps = [
  {
    id:'general', tag:'Блок 01', title:'Общая информация', hint:'Название, регион, аудитория',
    why:'Это <b>визитная карточка маршрута</b> — её увидят первой и при верификации, и на сайте наука.рф. Чем точнее ответы, тем быстрее пройдёт проверка.',
    render:'general'
  },
  {
    id:'goals', tag:'Блок 02', title:'Цели и задачи', hint:'Зачем существует маршрут',
    why:'Опишите <b>главную идею маршрута одной фразой</b>, а затем отметьте, какие образовательные и воспитательные задачи он решает — это покажет, что маршрут продуман, а не собран «для галочки».',
    render:'goals'
  },
  {
    id:'science', tag:'Блок 03', title:'Научная составляющая', hint:'Направление, доля науки в программе',
    why:'Ключевой критерий отбора: <b>научная часть должна занимать больше половины</b> всего содержания маршрута. Это блок, на который верификаторы смотрят внимательнее всего.',
    render:'science'
  },
  {
    id:'program', tag:'Блок 04', title:'Программа маршрута', tag2:'',
    hint:'Расписание по дням', why:'Распишите маршрут <b>день за днём</b> — что происходит, куда едут участники, чем питаются и где ночуют. Для однодневного маршрута достаточно одного дня.',
    render:'program'
  },
  {
    id:'education', tag:'Блок 05', title:'Образовательный компонент', hint:'Теория, практика, методики',
    why:'Покажите, <b>как именно происходит обучение</b>: какие темы разбираются в теории, что участники делают руками, и какими методами это подаётся.',
    render:'education'
  },
  {
    id:'objects', tag:'Блок 06', title:'Научно‑популярные объекты', hint:'Что и где посещают',
    why:'Перечислите <b>конкретные точки маршрута</b>. Если это объекты из реестра научной инфраструктуры — это сильно ускорит верификацию.',
    render:'objects'
  },
  {
    id:'interactive', tag:'Блок 07', title:'Интерактивная составляющая', hint:'Форматы вовлечения участников',
    why:'Инициатива прямо рекомендует <b>делать упор на практику и исследования</b>, а не только на экскурсии. Отметьте, какие форматы есть в маршруте.',
    render:'interactive'
  },
  {
    id:'logistics', tag:'Блок 08', title:'Техническое обеспечение', hint:'Транспорт, питание, оборудование',
    why:'Бытовая сторона маршрута: <b>на чём едут, что едят, где живут</b> и какая инфраструктура доступна на месте (туалеты, аптеки, магазины).',
    render:'logistics'
  },
  {
    id:'safety', tag:'Блок 09', title:'Безопасность', hint:'Требования к участникам и меры защиты',
    why:'Опишите, <b>кому подходит маршрут</b> по возрасту, здоровью и физической подготовке, и какие меры безопасности предусмотрены.',
    render:'safety'
  },
  {
    id:'cost', tag:'Блок 10', title:'Стоимость', hint:'Цена и что в неё входит',
    why:'Прозрачная стоимость — что входит в базовую цену, а что можно докупить отдельно.',
    render:'cost'
  },
  {
    id:'promo', tag:'Блок 11', title:'Продвижение', hint:'Как о маршруте узнают участники',
    why:'Через какие каналы маршрут будет находить свою аудиторию — это помогает оценить его жизнеспособность после запуска.',
    render:'promo'
  },
  {
    id:'results', tag:'Блок 12', title:'Ожидаемые результаты', hint:'Что получит участник',
    why:'Сформулируйте <b>измеримый результат</b> для участника — какие знания, навыки и впечатления он унесёт с собой.',
    render:'results'
  },
  {
    id:'docs', tag:'Блок 13', title:'Документация', hint:'Портфель экскурсовода и фото',
    why:'Финальный блок. <b>Не менее 3 качественных авторских фотографий</b> (не из интернета!) для каждого объекта — частая причина отказа, если их нет.',
    render:'docs'
  }
];

const state = {
  general:{ name:'', matchesTitle:'', org:'', region:'', audience:'', duration:'', distance:'', groupSize:'', days:[], season:[] },
  goals:{ mainGoal:'', edu:[], educOther:'', upbr:[], upbrOther:'' },
  science:{ field:'', demoProcess:'', demoDesc:'', balance:'', achievements:false, youthAttraction:false },
  program:{ type:'', days:[ {time:'', move:'', activity:'', meals:''} ] },
  education:{ theory:'', practice:'', methods:'' },
  objects:{ fromRegistry:'', list:'', uniquePhenomena:'', transportAccess:'', selfVisit:'' },
  interactive:{ practical:[], research:[], formats:[] },
  logistics:{ transport:[], description:'', accommodation:'', meals:'', equipment:'', infra:[] },
  safety:{ ageReq:'', healthReq:'', fitnessReq:'', insurance:false, escort:false, medical:false },
  cost:{ basePrice:'', included:[], extra:'' },
  promo:{ digital:[], offline:[] },
  results:{ eduResults:[], socialResults:[] },
  docs:{ portfolioReady:'', photoNote:'' }
};

let currentStep = 0;

/* ============== QUICK NPT DIAGNOSTIC ============== */

const diagnosticQuestions = [
  {
    id:'scienceTopic',
    title:'У маршрута есть понятная научная тема?',
    hint:'Например: геология, экология, космос, медицина, инженерия, биология, новые материалы.',
    strength:'Есть научная тема',
    recommendation:'Сформулируйте научную тему маршрута: о какой области науки человек узнает и почему это важно.'
  },
  {
    id:'scienceObject',
    title:'Есть место или объект, где эту науку можно увидеть?',
    hint:'Лаборатория, музей, обсерватория, полигон, предприятие, природный объект, исследовательская площадка.',
    strength:'Есть научный объект или площадка',
    recommendation:'Добавьте конкретный объект: где участник столкнётся с наукой, а не только услышит рассказ о ней.'
  },
  {
    id:'scienceProcess',
    title:'Участник увидит или попробует, как работает наука?',
    hint:'Метод, эксперимент, наблюдение, демонстрация, работа с образцами или данными.',
    strength:'Показан научный процесс',
    recommendation:'Усилите научный процесс: что именно человек увидит, попробует, сравнит или исследует?'
  },
  {
    id:'educationResult',
    title:'Понятно, что участник поймёт или чему научится?',
    hint:'Не просто “расширит кругозор”, а получит конкретное знание, навык или интерес к направлению.',
    strength:'Есть образовательный результат',
    recommendation:'Опишите результат простыми словами: что участник унесёт с собой после маршрута?'
  },
  {
    id:'participantAction',
    title:'Участник будет что-то делать сам?',
    hint:'Задавать вопросы, выполнять задание, наблюдать, измерять, собирать, сравнивать, обсуждать выводы.',
    strength:'Есть активность участника',
    recommendation:'Добавьте действие участника: маршрут должен быть не только “послушать и посмотреть”.'
  },
  {
    id:'routeLogic',
    title:'Идея уже складывается в маршрут, а не в один разрозненный эпизод?',
    hint:'Есть последовательность точек, действий, времени и переходов между частями программы.',
    strength:'Есть логика маршрута',
    recommendation:'Соберите идею в программу: что происходит сначала, что потом и зачем такая последовательность.'
  },
  {
    id:'audience',
    title:'Понятно, для кого этот маршрут?',
    hint:'Школьники, студенты, семьи, специалисты, туристы с интересом к науке — с учётом возраста и подготовки.',
    strength:'Понятна целевая аудитория',
    recommendation:'Уточните аудиторию: от неё зависят язык, сложность, интерактив и длительность маршрута.'
  }
];

const diagnosticOptions = [
  { label:'Да', value:3 },
  { label:'Скорее да', value:2 },
  { label:'Скорее нет', value:1 },
  { label:'Нет', value:0 }
];

const diagnosticState = {};

function renderDiagnostic(){
  const host = document.getElementById('diagnosticQuestions');
  if(!host) return;
  host.innerHTML = diagnosticQuestions.map((question, index)=>{
    const current = diagnosticState[question.id];
    return `
      <div class="diagnostic-question">
        <div class="diagnostic-question-head">
          <span class="diagnostic-num">${index+1}</span>
          <div>
            <h3>${question.title}</h3>
            <p>${question.hint}</p>
          </div>
        </div>
        <div class="diagnostic-options">
          ${diagnosticOptions.map(option=>`
            <button type="button" class="diagnostic-option ${current===option.value?'selected':''}" onclick="setDiagnosticAnswer('${question.id}', ${option.value})">${option.label}</button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  renderDiagnosticResult();
}

function setDiagnosticAnswer(questionId, value){
  diagnosticState[questionId] = value;
  renderDiagnostic();
}

function getDiagnosticStatus(answeredCount, score, maxScore){
  if(answeredCount === 0) return null;
  const ratio = score / maxScore;
  if(answeredCount < diagnosticQuestions.length && ratio >= 0.68){
    return {
      type:'yellow',
      icon:'🟡',
      title:'Требует усиления',
      text:'Идея выглядит перспективно, но диагностика пока неполная. Ответьте на оставшиеся вопросы, чтобы увидеть более точную картину.'
    };
  }
  if(ratio >= 0.72){
    return {
      type:'green',
      icon:'🟢',
      title:'Похоже на НПТ',
      text:'В идее уже видны ключевые признаки научно‑популярного маршрута. Можно переходить к дальнейшей проработке требований и описанию маршрута.'
    };
  }
  if(ratio >= 0.42){
    return {
      type:'yellow',
      icon:'🟡',
      title:'Требует усиления',
      text:'В маршруте есть отдельные элементы НПТ, но часть требований выражена слабо. Усильте научную, образовательную или интерактивную составляющую.'
    };
  }
  return {
    type:'red',
    icon:'🔴',
    title:'Пока не соответствует НПТ',
    text:'Сейчас идея больше похожа на экскурсию, лекцию или обычную туристическую программу. Для НПТ потребуется заметно усилить научную логику и опыт участника.'
  };
}

function renderDiagnosticResult(){
  const result = document.getElementById('diagnosticResult');
  if(!result) return;
  const answers = diagnosticQuestions
    .filter(question=>diagnosticState[question.id] !== undefined)
    .map(question=>({ question, value:diagnosticState[question.id] }));

  if(answers.length === 0){
    result.innerHTML = `
      <div class="result-empty">
        <span>Ответьте на вопросы</span>
        <p>После этого здесь появится предварительный статус идеи и список направлений для усиления.</p>
      </div>
    `;
    return;
  }

  const score = answers.reduce((sum, item)=>sum + item.value, 0);
  const maxScore = diagnosticQuestions.length * 3;
  const status = getDiagnosticStatus(answers.length, score, maxScore);
  const strengths = answers
    .filter(item=>item.value >= 2)
    .map(item=>item.question.strength);
  const recommendations = diagnosticQuestions
    .filter(question=>(diagnosticState[question.id] ?? 0) < 2)
    .map(question=>question.recommendation);

  result.innerHTML = `
    <div class="result-card result-${status.type}">
      <div class="result-status">
        <span class="result-icon">${status.icon}</span>
        <div>
          <div class="result-label">Предварительный результат</div>
          <h3>${status.title}</h3>
        </div>
      </div>
      <p class="result-text">${status.text}</p>
      <div class="result-progress">
        <span>Отвечено ${answers.length} из ${diagnosticQuestions.length}</span>
        <b>${score} / ${maxScore} баллов</b>
      </div>
      <div class="result-columns">
        <div>
          <h4>Сильные стороны идеи</h4>
          ${strengths.length ? `<ul>${strengths.map(item=>`<li>${item}</li>`).join('')}</ul>` : '<p class="result-muted">Пока сильные стороны не проявились — начните с научной темы и объекта.</p>'}
        </div>
        <div>
          <h4>Что усилить</h4>
          ${recommendations.length ? `<ul>${recommendations.slice(0,4).map(item=>`<li>${item}</li>`).join('')}</ul>` : '<p class="result-muted">Ключевые признаки уже выглядят собранными. Дальше проверьте детали по Приложению 2.</p>'}
        </div>
      </div>
      <button class="btn btn-primary diagnostic-next" onclick="scrollToWorkspace()">Перейти к дальнейшей работе →</button>
    </div>
  `;
}

/* ============== RENDER: SIDEBAR + RIBBON ============== */

function isStepFilled(idx){
  const s = steps[idx];
  const d = state[s.id];
  // crude heuristic: any non-empty string/array field counts as touched
  return Object.values(d).some(v=>{
    if(Array.isArray(v)) return v.length>0;
    if(typeof v === 'object' && v!==null) return Object.values(v).some(x=>x && x.length>0);
    return v && v.toString().trim().length>0;
  });
}

function renderSidebar(){
  const sb = document.getElementById('sidebar');
  sb.innerHTML = steps.map((s,i)=>{
    const cls = ['step-item'];
    if(i===currentStep) cls.push('active');
    if(i<currentStep) cls.push('done');
    return `<div class="${cls.join(' ')}" onclick="goToStep(${i})">
      <div class="step-num"><span>${i+1}</span></div>
      <div class="step-texts">
        <div class="step-title">${s.title}</div>
        <div class="step-hint">${s.hint}</div>
      </div>
    </div>`;
  }).join('') + `<div class="step-item" onclick="goToStep(${steps.length})" style="margin-top:4px;border-top:1px solid var(--line);border-radius:0;padding-top:14px;">
      <div class="step-num" style="border-style:dashed;">★</div>
      <div class="step-texts">
        <div class="step-title">Итоговое описание</div>
        <div class="step-hint">Просмотр и экспорт</div>
      </div>
    </div>`;
}

function renderRibbon(){
  const stops = document.getElementById('ribbonStops');
  stops.innerHTML = steps.map((s,i)=>{
    const cls = ['ribbon-stop'];
    if(i<currentStep) cls.push('done');
    if(i===currentStep) cls.push('active');
    return `<div class="${cls.join(' ')}" title="${s.title}" onclick="goToStep(${i})"></div>`;
  }).join('');
  const maxIndex = steps.length - 1;
  const activeIndex = Math.min(currentStep, maxIndex);
  const pct = maxIndex > 0 ? (activeIndex / maxIndex) * 100 : 0;
  const doneCount = steps.filter((s,i)=>isStepFilled(i)).length;
  document.getElementById('ribbonFill').style.width = pct+'%';
  document.getElementById('progressLabel').textContent = `${doneCount} из ${steps.length} блоков`;
  const currentLabel = document.getElementById('currentBlockLabel');
  if(currentLabel){
    currentLabel.textContent = currentStep >= steps.length
      ? 'Сейчас вы находитесь в блоке: Итоговое описание'
      : `Сейчас вы находитесь в блоке: ${steps[currentStep].title}`;
  }
}

function goToStep(i){
  currentStep = i;
  renderAll();
  document.getElementById('workspace').scrollIntoView({behavior:'smooth', block:'start'});
}

function scrollToWorkspace(){
  document.getElementById('workspace').scrollIntoView({behavior:'smooth', block:'start'});
}

/* ============== FIELD HELPERS ============== */

function setVal(stateObj, key, val){ stateObj[key] = val; renderSidebar(); renderRibbon(); }

function chipGroupHtml(stateId, field, options, multi=true){
  const current = state[stateId][field];
  return `<div class="chip-group">` + options.map(opt=>{
    const selected = multi ? current.includes(opt) : current===opt;
    return `<button type="button" class="chip ${selected?'selected':''}" onclick="toggleChip('${stateId}','${field}','${opt.replace(/'/g,"\\'")}', ${multi})">${opt}</button>`;
  }).join('') + `</div>`;
}

function toggleChip(stateId, field, opt, multi){
  if(multi){
    const arr = state[stateId][field];
    const idx = arr.indexOf(opt);
    if(idx>-1) arr.splice(idx,1); else arr.push(opt);
  } else {
    state[stateId][field] = state[stateId][field]===opt ? '' : opt;
  }
  renderForm();
  renderSidebar();
  renderRibbon();
}

function checkListHtml(stateId, field, options){
  const current = state[stateId][field];
  return `<div class="check-list">` + options.map(opt=>{
    const checked = current.includes(opt);
    return `<div class="check-item ${checked?'checked':''}" onclick="toggleCheck('${stateId}','${field}','${opt.replace(/'/g,"\\'")}')">
      <div class="check-box"></div><div class="check-text">${opt}</div>
    </div>`;
  }).join('') + `</div>`;
}

function toggleCheck(stateId, field, opt){
  const arr = state[stateId][field];
  const idx = arr.indexOf(opt);
  if(idx>-1) arr.splice(idx,1); else arr.push(opt);
  renderForm();
  renderSidebar();
  renderRibbon();
}

function textInput(stateId, field, placeholder, type='text'){
  const val = state[stateId][field] || '';
  return `<input type="${type}" value="${escapeHtml(val)}" placeholder="${placeholder}"
    oninput="state['${stateId}']['${field}']=this.value; renderSidebar(); renderRibbon();" />`;
}

function textArea(stateId, field, placeholder, rows=3){
  const val = state[stateId][field] || '';
  return `<textarea rows="${rows}" placeholder="${placeholder}"
    oninput="state['${stateId}']['${field}']=this.value; renderSidebar(); renderRibbon();">${escapeHtml(val)}</textarea>`;
}

function escapeHtml(s){
  return (s||'').toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ============== RENDER FORM BODIES ============== */

function generalEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Общая информация">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Общая информация — это визитная карточка маршрута</h3>
        <p>Если здесь всё размыто, эксперт дальше будет читать описание с недоверием. В этом блоке нужно быстро показать, что это за маршрут, где он проходит, кто его делает и для кого он предназначен.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>что это за маршрут</span>
          <span>где он проходит</span>
          <span>кто организатор</span>
          <span>для кого он создан</span>
          <span>совпадает ли название с содержанием</span>
          <span>понятны ли формат, длительность, сезонность и размер группы</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>«Геология Хибин: как рождаются минералы»</h4>
          <p><b>Регион:</b> Мурманская область, Кировск и окрестности Хибин. <b>Организатор:</b> университетский геологический центр совместно с туроператором. <b>Аудитория:</b> школьники 8–11 классов, интересующиеся естественными науками. <b>Формат:</b> однодневный маршрут, группа 12–20 человек, сезон — май–сентябрь.</p>
          <small>Почему сильный: название сразу раскрывает научную тему, территория конкретна, аудитория понятна, формат и длительность выглядят реалистично.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>«Удивительное путешествие в мир науки»</h4>
          <p><b>Регион:</b> Россия. <b>Организатор:</b> партнёры проекта. <b>Аудитория:</b> все желающие. <b>Формат:</b> экскурсия, длительность зависит от ситуации.</p>
          <small>Почему слабый: название не раскрывает научную тему, территория слишком общая, аудитория не определена, организатор и длительность непонятны.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>название звучит красиво, но не объясняет суть маршрута;</li>
            <li>аудитория указана слишком широко;</li>
            <li>неясно, кто организатор;</li>
            <li>длительность и формат не соответствуют программе;</li>
            <li>регион или территория описаны слишком расплывчато.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, о чём маршрут;</li>
            <li>понятно ли, где он проходит;</li>
            <li>понятно ли, для кого он создан;</li>
            <li>совпадает ли название с содержанием;</li>
            <li>указаны ли базовые параметры маршрута.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала проверьте свою идею по критериям выше, затем заполните поля «Базовые сведения», «Аудитория и формат», «Сезонность и расписание» ниже.</span>
      </div>
    </section>
  `;
}

function goalsEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Цели и задачи">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Цели и задачи — это смысловой каркас маршрута</h3>
        <p>Это не красивые общие слова, а объяснение, ради чего человек идёт по маршруту и что маршрут должен изменить в его понимании науки. Если цель не связана с научной темой, программой и аудиторией, весь маршрут выглядит собранным “для галочки”.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>зачем существует маршрут</span>
          <span>какую научно-образовательную задачу он решает</span>
          <span>почему маршрут нужен именно этой аудитории</span>
          <span>как цель связана с программой маршрута</span>
          <span>как задачи ведут к ожидаемым результатам</span>
          <span>что должно измениться у участника после маршрута</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>Показать школьникам, как геологи читают историю гор по минералам и породам</h4>
          <p><b>Цель:</b> познакомить учеников 8–11 классов с методами полевой геологии на примере Хибин и показать, как наблюдения на маршруте превращаются в научные выводы. <b>Задачи:</b> научить отличать основные типы горных пород, показать работу с образцами, связать точки маршрута с этапами геологического исследования и помочь участникам сформулировать собственный вывод по итогам наблюдений.</p>
          <small>Почему сильный: цель связана с научной темой и аудиторией, задачи проверяемы, а программа маршрута может прямо показать, где участник наблюдает, сравнивает и делает вывод.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Популяризация науки и расширение кругозора</h4>
          <p><b>Цель:</b> популяризировать науку среди населения. <b>Задачи:</b> расширить кругозор, повысить интерес, провести экскурсию, рассказать много полезной информации.</p>
          <small>Почему слабый: цель звучит как лозунг, аудитория не определена, научная тема не названа, задачи невозможно проверить, связь с программой и результатами не видна.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>цель звучит как лозунг;</li>
            <li>задачи не связаны с программой маршрута;</li>
            <li>задачи не привязаны к аудитории;</li>
            <li>цель и ожидаемые результаты дублируют друг друга;</li>
            <li>нет связи с научной составляющей;</li>
            <li>непонятно, что изменится у участника после маршрута.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, зачем существует маршрут;</li>
            <li>связана ли цель с научной темой;</li>
            <li>соответствует ли цель выбранной аудитории;</li>
            <li>ведут ли задачи к программе маршрута;</li>
            <li>можно ли по задачам понять ожидаемые результаты.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала сформулируйте смысл маршрута через научную тему и аудиторию, затем заполните поля «Основная цель маршрута», «Образовательные задачи» и «Воспитательные задачи» ниже.</span>
      </div>
    </section>
  `;
}

function scienceEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Научная составляющая">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Научная составляющая — главный доказательный блок маршрута</h3>
        <p>Здесь нужно показать, что маршрут действительно научно-популярный: какую науку человек увидит, как она работает и почему это не просто экскурсионный рассказ с интересными фактами.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>какая научная тема раскрывается в маршруте</span>
          <span>какое научное направление заявлено</span>
          <span>есть ли демонстрация научного процесса</span>
          <span>видит ли участник реальную науку, а не набор фактов</span>
          <span>занимает ли научная составляющая значимую часть программы</span>
          <span>связана ли наука с объектами, программой, интерактивом и образовательным результатом</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>Геология Хибин: как по минералам читают историю гор</h4>
          <p><b>Научная тема:</b> минералообразование и геологическая история Хибин. <b>Направление:</b> науки о Земле. <b>Научный процесс:</b> участники на геологической тропе и в музейной лаборатории сравнивают образцы пород, наблюдают признаки минералов, учатся фиксировать полевые наблюдения и делают вывод, почему разные минералы встречаются в разных точках маршрута.</p>
          <small>Почему сильный: есть конкретная тема, объект маршрута, метод наблюдения, действие участника и понятный образовательный результат — участник не просто слушает рассказ, а видит, как работает геологическое исследование.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Участники узнают интересные факты о науке</h4>
          <p><b>Научная составляющая:</b> экскурсовод расскажет о научном объекте, известных учёных и интересных открытиях. Участники посетят музей и узнают много нового.</p>
          <small>Почему слабый: есть научный объект и справочная информация, но нет научного процесса, метода, действия участника и связи с программой. Непонятно, что именно человек увидит, попробует или поймёт.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>научная составляющая подменена рассказом об объекте;</li>
            <li>указана тема, но не раскрыт научный процесс;</li>
            <li>маршрут выглядит культурным или экскурсионным, а наука остаётся фоном;</li>
            <li>нет связи науки с интерактивом;</li>
            <li>нет связи науки с образовательным компонентом;</li>
            <li>неясно, какую часть программы занимает научная составляющая;</li>
            <li>используются общие формулировки без конкретики.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, какая научная тема раскрывается;</li>
            <li>указано ли научное направление;</li>
            <li>видно ли, как работает наука;</li>
            <li>есть ли научный процесс, метод, наблюдение, эксперимент или работа с данными;</li>
            <li>связана ли научная тема с объектами маршрута;</li>
            <li>связана ли научная составляющая с интерактивом и образовательным результатом;</li>
            <li>не выглядит ли маршрут обычной экскурсией с научными фактами.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала сформулируйте научную тему и процесс, который увидит участник, затем заполните поля «Научное направление», «Демонстрация научного процесса» и «Баланс научной и культурной составляющей» ниже.</span>
      </div>
    </section>
  `;
}

function programEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Программа маршрута">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Программа маршрута — это сценарий пользовательского опыта</h3>
        <p>Здесь важно показать не просто список мест, а понятную последовательность: куда участник приходит, что видит, что делает, чему учится и как один этап связан со следующим.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>как маршрут проходит по времени</span>
          <span>какие этапы есть в программе</span>
          <span>где происходит научная, образовательная и интерактивная часть</span>
          <span>как участники перемещаются между объектами</span>
          <span>предусмотрены ли питание, отдых и проживание, если маршрут длительный</span>
          <span>является ли программа логичной последовательностью, а не набором случайных посещений</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>Однодневный маршрут: от вводной к полевому наблюдению</h4>
          <p><b>09:30–10:00:</b> сбор группы и вводный инструктаж в визит-центре. <b>10:00–11:30:</b> музейная лаборатория: участники знакомятся с образцами минералов и методом их определения. <b>11:30–12:00:</b> переезд к геологической тропе. <b>12:00–14:00:</b> полевое наблюдение и мини-задание: найти признаки разных пород на маршруте. <b>14:00–14:40:</b> обед и отдых. <b>14:40–16:00:</b> обсуждение результатов и вывод, как наблюдения связаны с историей Хибин.</p>
          <small>Почему сильный: есть временной план, научная тема встроена в этапы, интерактив показан в конкретном месте, переезд и пауза учтены, а каждый этап готовит следующий.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Музей, лаборатория, экскурсия, прогулка</h4>
          <p><b>Программа:</b> посещение музея, затем лаборатории, потом экскурсия по территории и свободное время. При наличии времени возможны дополнительные объекты.</p>
          <small>Почему слабый: нет времени, логики переходов, места научной части и интерактива. Непонятно, как участники перемещаются, где отдыхают и что именно происходит на каждом этапе.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>программа выглядит как перечень объектов;</li>
            <li>нет временного плана;</li>
            <li>научная часть не встроена в маршрут;</li>
            <li>интерактив заявлен, но не показано, когда он происходит;</li>
            <li>слишком много объектов без понятной логики;</li>
            <li>не учтены переезды, питание, отдых;</li>
            <li>программа не соответствует возрасту и возможностям аудитории.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, сколько длится маршрут;</li>
            <li>есть ли последовательность по дням или этапам;</li>
            <li>понятно ли, что происходит в каждом этапе;</li>
            <li>видно ли, где находится научная составляющая;</li>
            <li>видно ли, где находится интерактив;</li>
            <li>учтены ли передвижение, питание и паузы;</li>
            <li>программа соответствует целевой аудитории.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала проверьте, что программа выглядит как связный сценарий, затем выберите тип маршрута и заполните день: время, передвижение, активности, питание и проживание.</span>
      </div>
    </section>
  `;
}

function educationEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Образовательный компонент">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Образовательный компонент — это путь от темы к результату</h3>
        <p>Это ответ на вопрос: что человек поймёт, попробует или освоит во время маршрута. Здесь важно показать не просто рассказ экскурсовода, а понятную образовательную логику: тема → действие → понимание → результат.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>чему участник научится во время маршрута</span>
          <span>какие темы раскрываются в теоретической части</span>
          <span>какие практические действия выполняет участник</span>
          <span>какие методики работы используются</span>
          <span>соответствует ли образовательная часть возрасту и уровню аудитории</span>
          <span>связана ли образовательная часть с научной составляющей, программой и ожидаемыми результатами</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>От минерала к научному выводу</h4>
          <p><b>Теория:</b> школьники 8–11 классов знакомятся с признаками минералов и тем, как геологи используют наблюдения в полевых исследованиях. <b>Практика:</b> участники сравнивают образцы пород, фиксируют признаки в маршрутном листе и делают мини-вывод по одной точке маршрута. <b>Методика:</b> работа в малых группах, проблемный вопрос, наблюдение, сравнение и обсуждение результата с научным сотрудником.</p>
          <small>Почему сильный: теория связана с научной составляющей, практика встроена в программу, методика соответствует школьной аудитории, а результат понятен — участник понимает, как наблюдение превращается в научный вывод.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Участники узнают много нового</h4>
          <p><b>Образовательный компонент:</b> экскурсовод расскажет интересные факты, покажет экспонаты и ответит на вопросы. Участники расширят кругозор и получат полезную информацию.</p>
          <small>Почему слабый: нет разделения на теорию и практику, не указаны методики работы, связь с научной темой слабая, а образовательный результат нельзя понять или проверить.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>образовательный компонент подменён экскурсией;</li>
            <li>нет практической части;</li>
            <li>нет связи между темой, заданием и результатом;</li>
            <li>методики указаны формально;</li>
            <li>образовательный уровень не соответствует аудитории;</li>
            <li>используются общие формулировки без конкретного результата.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, чему участник научится;</li>
            <li>есть ли теоретическая часть;</li>
            <li>есть ли практическая часть;</li>
            <li>указаны ли методики работы;</li>
            <li>соответствует ли образовательная часть аудитории;</li>
            <li>связана ли она с научной составляющей;</li>
            <li>можно ли по описанию понять будущий образовательный результат.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала проверьте связку «тема → действие → понимание → результат», затем заполните поля «Теоретическая часть», «Практическая часть» и «Методики работы» ниже.</span>
      </div>
    </section>
  `;
}

function objectsEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Научно-популярные объекты">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Научно-популярные объекты — это опорные точки научной логики</h3>
        <p>Это не просто список мест, которые участники посетят. Нужно показать, почему эти места нужны маршруту: какую науку они раскрывают, что участник там увидит, попробует или поймёт.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>какие объекты включены в маршрут</span>
          <span>почему именно эти объекты важны для научной темы</span>
          <span>какую роль каждый объект играет в маршруте</span>
          <span>есть ли среди объектов научная инфраструктура, лаборатории, музеи, предприятия, обсерватории, природные объекты или иные площадки</span>
          <span>связаны ли объекты с научной составляющей, программой, интерактивом и образовательным компонентом</span>
          <span>не являются ли объекты просто набором красивых точек без научной логики</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>Объекты раскрывают одну научную тему с разных сторон</h4>
          <p><b>Геологический музей:</b> вводит участников в тему минералов Хибин через коллекцию образцов и показывает, какие признаки нужно искать в полевых условиях. <b>Музейная лаборатория:</b> даёт возможность сравнить образцы и попробовать базовый метод определения минералов. <b>Геологическая тропа:</b> переносит знания в реальную среду: участники наблюдают породы на маршруте и фиксируют признаки в маршрутном листе.</p>
          <small>Почему сильный: каждый объект имеет роль, связан с научной темой и программой, а без этих объектов маршрут потеряет смысл — участник не увидит переход от образца к наблюдению в реальной среде.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Музей, лаборатория, парк, смотровая площадка</h4>
          <p><b>Объекты:</b> научный музей, лаборатория при университете, городской парк, красивая смотровая площадка и несколько достопримечательностей региона.</p>
          <small>Почему слабый: объекты просто перечислены. Непонятно, какую роль они играют, как связаны с научной темой, что участник делает на каждом объекте и почему это не обычная экскурсия по интересным местам.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>объекты перечислены без объяснения их роли;</li>
            <li>научный объект считается достаточным доказательством НПТ;</li>
            <li>объекты не связаны между собой программой маршрута;</li>
            <li>объекты не связаны с научной составляющей;</li>
            <li>неясно, что участник делает на объекте;</li>
            <li>туристические объекты подаются как научные без обоснования;</li>
            <li>отсутствует логика перехода от одного объекта к другому.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, какие объекты входят в маршрут;</li>
            <li>объяснена ли роль каждого ключевого объекта;</li>
            <li>связаны ли объекты с научной темой;</li>
            <li>видно ли, что участник делает или наблюдает на объекте;</li>
            <li>не выглядит ли список объектов случайным;</li>
            <li>связаны ли объекты с программой маршрута;</li>
            <li>помогают ли объекты раскрыть образовательный результат.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала проверьте роль каждого объекта в научной логике маршрута, затем заполните поля про реестр, объекты для посещения, уникальные явления и доступность ниже.</span>
      </div>
    </section>
  `;
}

function interactiveEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Интерактивная составляющая">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Интерактивная составляющая — это действие участника, а не просто показ</h3>
        <p>Это ответ на вопрос: что участник делает руками, головой или в группе, а не просто слушает и смотрит. Хороший интерактив помогает человеку самому прикоснуться к научному процессу.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>что участник делает сам</span>
          <span>какие форматы вовлечения используются</span>
          <span>есть ли практические занятия, мастер-классы, демонстрации, квесты, задания, наблюдения, эксперименты или исследовательские элементы</span>
          <span>связан ли интерактив с научной составляющей</span>
          <span>связан ли интерактив с образовательным результатом</span>
          <span>не подменяется ли интерактив рассказом экскурсовода или пассивным просмотром</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>Мини-исследование минералов на маршруте</h4>
          <p><b>Формат:</b> исследовательское задание в малых группах. <b>Действие участника:</b> выбрать образец породы, описать цвет, блеск и структуру, сравнить признаки с эталонными образцами, зафиксировать наблюдение в маршрутном листе и обсудить вывод с научным сотрудником. <b>Связь с наукой:</b> участник пробует базовый метод полевого наблюдения, который используют геологи.</p>
          <small>Почему сильный: интерактив связан с научной темой, встроен в программу, требует собственного действия и даёт образовательный результат — участник понимает, как наблюдение помогает делать научный вывод.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Интерактивная экскурсия с вопросами</h4>
          <p><b>Интерактив:</b> участники смогут задавать вопросы экскурсоводу, смотреть демонстрацию и участвовать в квесте по территории.</p>
          <small>Почему слабый: неясно, что именно делает участник, где здесь научный смысл и чему он учится. Вопросы экскурсоводу и просмотр демонстрации сами по себе не доказывают интерактивную составляющую.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>интерактив подменён рассказом или показом;</li>
            <li>нет действия участника;</li>
            <li>активность не связана с научной темой;</li>
            <li>интерактив развлекательный, но не образовательный;</li>
            <li>неясно, кто проводит активность и как она встроена в программу;</li>
            <li>не показано, что участник поймёт после выполнения задания;</li>
            <li>формулировки слишком общие: «квест», «мастер-класс», «интерактив» без содержания.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, что участник делает сам;</li>
            <li>связано ли действие с научной составляющей;</li>
            <li>есть ли практический, исследовательский или наблюдательный элемент;</li>
            <li>понятно ли, где интерактив находится в программе маршрута;</li>
            <li>понятно ли, какой образовательный результат даёт интерактив;</li>
            <li>не сводится ли интерактив к вопросам экскурсоводу;</li>
            <li>не выглядит ли активность просто развлечением без научного смысла.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала сформулируйте конкретное действие участника и его научный смысл, затем отметьте практические, исследовательские и другие форматы вовлечения ниже.</span>
      </div>
    </section>
  `;
}

function logisticsEducationCard(){
  return `
    <section class="edu-card" aria-label="Образовательная карточка Техническое обеспечение">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Техническое обеспечение — это проверка реализуемости маршрута</h3>
        <p>Здесь нужно показать, что маршрут не только интересно придуман, но и реально может быть проведён: участники смогут добраться, поесть, перемещаться, пользоваться оборудованием и пройти программу без организационных провалов.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>можно ли маршрут реально провести</span>
          <span>как организованы транспорт, питание, проживание и перемещения</span>
          <span>какое оборудование требуется для проведения маршрута</span>
          <span>есть ли технические условия для образовательных и интерактивных элементов</span>
          <span>хватает ли инфраструктуры для выбранной аудитории</span>
          <span>соответствует ли техническое обеспечение длительности, формату и программе маршрута</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>Однодневный маршрут с полевой практикой</h4>
          <p><b>Транспорт:</b> заказной автобус на 30 мест от кампуса до геологического полигона и обратно, переезд между двумя точками — 20 минут. <b>Питание:</b> обед в столовой научной базы и питьевая вода на полевом участке. <b>Проживание:</b> не требуется, маршрут однодневный. <b>Оборудование:</b> лупы, защитные очки, перчатки, планшеты для маршрутных листов, набор эталонных образцов. <b>Условия:</b> практическая часть проходит на оборудованной площадке под руководством научного сотрудника.</p>
          <small>Почему сильный: понятно, как маршрут проводится на практике, какие ресурсы нужны для каждого этапа и как техническая организация поддерживает программу, интерактив и безопасность участников.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>Транспорт предоставляется, питание по договорённости</h4>
          <p><b>Техническое обеспечение:</b> транспорт будет организован, питание по договорённости, оборудование для интерактивной части предоставляется принимающей стороной.</p>
          <small>Почему слабый: неясно, как участники перемещаются, где едят, какое оборудование нужно и соответствует ли всё это программе. Маршрут заявлен как практический, но технические условия для практики не раскрыты.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типовые ошибки</div>
          <ul>
            <li>техническое обеспечение описано слишком общими словами;</li>
            <li>не указано, как участники добираются до объектов;</li>
            <li>забыты питание, паузы или проживание при длительном маршруте;</li>
            <li>не описано оборудование для практических занятий;</li>
            <li>не учтены особенности аудитории;</li>
            <li>программа выглядит насыщенной, но непонятно, как её реально провести;</li>
            <li>техническая часть не связана с программой маршрута.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>понятно ли, как участники перемещаются по маршруту;</li>
            <li>указано ли, где и как организовано питание;</li>
            <li>нужно ли проживание и описано ли оно;</li>
            <li>понятно ли, какое оборудование требуется;</li>
            <li>хватает ли условий для практических и интерактивных занятий;</li>
            <li>соответствует ли техническое обеспечение длительности и формату маршрута;</li>
            <li>можно ли по описанию понять, что маршрут реально провести.</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала проверьте, поддерживает ли техническая организация каждый этап программы, затем заполните общее описание, транспорт, проживание, питание, оборудование и инфраструктуру ниже.</span>
      </div>
    </section>
  `;
}

const renderers = {

general:()=>`
  ${generalEducationCard()}

  <div class="field-cluster">
    <div class="field-cluster-title">Базовые сведения</div>
    <div class="field-group">
      <div class="field-label">Название маршрута</div>
      <div class="field-help">Оригинальное, запоминающееся — это то, что увидят на сайте.</div>
      ${textInput('general','name','Например: «Тропой геологов Хибин»')}
    </div>
    <div class="field-group">
      <div class="field-label">Название отражает суть маршрута?</div>
      ${chipGroupHtml('general','matchesTitle',['Да','Нет'],false)}
    </div>
    <div class="row-2">
      <div class="field-group">
        <div class="field-label">Организатор</div>
        <div class="field-help">Юридическое лицо или компания</div>
        ${textInput('general','org','Название организации')}
      </div>
      <div class="field-group">
        <div class="field-label">Регион реализации</div>
        ${textInput('general','region','Субъект РФ')}
      </div>
    </div>
  </div>

  <div class="field-cluster">
    <div class="field-cluster-title">Аудитория и формат</div>
    <div class="field-group">
      <div class="field-label">Целевая аудитория</div>
      <div class="field-help">Возраст, интересы, уровень подготовки (класс / курс)</div>
      ${textInput('general','audience','Например: ученики 8–11 классов, интересующиеся естественными науками')}
    </div>
    <div class="row-3">
      <div class="field-group">
        <div class="field-label">Продолжительность</div>
        ${textInput('general','duration','дни / часы')}
      </div>
      <div class="field-group">
        <div class="field-label">Протяжённость</div>
        ${textInput('general','distance','км')}
      </div>
      <div class="field-group">
        <div class="field-label">Размер группы</div>
        ${textInput('general','groupSize','мин.–макс. человек')}
      </div>
    </div>
  </div>

  <div class="field-cluster">
    <div class="field-cluster-title">Сезонность и расписание</div>
    <div class="field-group">
      <div class="field-label">Дни проведения</div>
      ${chipGroupHtml('general','days',['Будничные','Выходные','Праздничные'])}
    </div>
    <div class="field-group">
      <div class="field-label">Сезонность</div>
      ${chipGroupHtml('general','season',['Зима','Весна','Лето','Осень'])}
    </div>
  </div>
`,

goals:()=>`
  ${goalsEducationCard()}

  <div class="field-group">
    <div class="field-label">Основная цель маршрута</div>
    <div class="field-help">Ключевая идея в одном-двух предложениях</div>
    ${textArea('goals','mainGoal','Например: показать школьникам реальную работу геологов через полевые исследования')}
  </div>
  <div class="field-group">
    <div class="field-label">Образовательные задачи</div>
    ${checkListHtml('goals','edu',['Познание научных аспектов','Знакомство с исследованиями','Развитие компетенций'])}
  </div>
  <div class="field-group">
    <div class="field-label">Воспитательные задачи</div>
    ${checkListHtml('goals','upbr',['Патриотическое воспитание','Духовно-нравственное развитие','Профессиональная ориентация'])}
  </div>
`,

science:()=>`
  ${scienceEducationCard()}

  <div class="field-group">
    <div class="field-label">Научное направление</div>
    <div class="field-help">Согласно <a href="https://rscf.ru/contests/classification/" target="_blank">классификатору РНФ</a></div>
    ${textInput('science','field','Например: 1.5 — Биология и наука о жизни')}
  </div>
  <div class="field-group">
    <div class="field-label">Маршрут демонстрирует научный процесс участникам?</div>
    ${chipGroupHtml('science','demoProcess',['Да','Нет'],false)}
  </div>
  <div class="field-group" id="demoDescWrap" style="display:${state.science.demoProcess==='Да'?'block':'none'}">
    <div class="field-label">Кратко опишите научный процесс <span class="field-optional">если «да»</span></div>
    ${textArea('science','demoDesc','Что именно увидят участники: эксперимент, полевые работы, наблюдение в лаборатории…')}
  </div>
  <div class="field-group">
    <div class="field-label">Баланс научной и культурной составляющей</div>
    <div class="field-help"><b style="color:var(--ink-soft)">Научная часть должна занимать больше половины</b> всего содержания маршрута — оцените долю самостоятельно.</div>
    ${chipGroupHtml('science','balance',['Наука занимает больше половины','Примерно поровну','Нужно пересмотреть программу'],false)}
  </div>
  <div class="field-group">
    <div class="check-list">
      <div class="check-item ${state.science.achievements?'checked':''}" onclick="state.science.achievements=!state.science.achievements; renderForm(); renderSidebar(); renderRibbon();">
        <div class="check-box"></div><div class="check-text">Маршрут даёт представление о достижениях учёных в этом направлении</div>
      </div>
      <div class="check-item ${state.science.youthAttraction?'checked':''}" onclick="state.science.youthAttraction=!state.science.youthAttraction; renderForm(); renderSidebar(); renderRibbon();">
        <div class="check-box"></div><div class="check-text">Маршрут способствует привлечению молодёжи в науку</div>
      </div>
    </div>
  </div>
`,

program:()=>{
  const days = state.program.days;
  return `
  ${programEducationCard()}

  <div class="field-group">
    <div class="field-label">Тип маршрута</div>
    ${chipGroupHtml('program','type',['Выходной день','Однодневный','Многодневный'],false)}
  </div>
  <div class="field-group">
    <div class="field-label">Программа по дням</div>
    <div class="field-help">Заполните хотя бы один день. Для многодневного маршрута добавьте по карточке на каждый день.</div>
    ${days.map((d,i)=>`
      <div class="day-card">
        <div class="day-card-head">
          <div class="day-card-title">День ${i+1}</div>
          ${days.length>1?`<button class="remove-day" onclick="removeDay(${i})">Удалить</button>`:''}
        </div>
        <div class="field-group" style="margin-bottom:14px;">
          <div class="field-label" style="font-size:12.5px;">Временной план</div>
          ${textInput2('program','days',i,'time','Например: 9:00–18:00')}
        </div>
        <div class="field-group" style="margin-bottom:14px;">
          <div class="field-label" style="font-size:12.5px;">Передвижение</div>
          ${textInput2('program','days',i,'move','На чём и куда едут участники')}
        </div>
        <div class="field-group" style="margin-bottom:14px;">
          <div class="field-label" style="font-size:12.5px;">Активности</div>
          ${textArea2('program','days',i,'activity','Что происходит в этот день', 2)}
        </div>
        <div class="field-group" style="margin-bottom:0;">
          <div class="field-label" style="font-size:12.5px;">Питание и проживание</div>
          ${textInput2('program','days',i,'meals','Формат питания и ночёвки')}
        </div>
      </div>
    `).join('')}
    <button class="add-day-btn" onclick="addDay()">+ Добавить день</button>
  </div>
  `;
},

education:()=>`
  ${educationEducationCard()}

  <div class="field-group">
    <div class="field-label">Теоретическая часть</div>
    <div class="field-help">Какие темы разбираются</div>
    ${textArea('education','theory','Например: основы минералогии, методы полевой геологоразведки')}
  </div>
  <div class="field-group">
    <div class="field-label">Практическая часть</div>
    <div class="field-help">Какие эксперименты или практические задания выполняют участники</div>
    ${textArea('education','practice','Например: самостоятельный отбор и определение образцов пород')}
  </div>
  <div class="field-group">
    <div class="field-label">Методики работы</div>
    <div class="field-help">Какие педагогические или научные подходы используются</div>
    ${textArea('education','methods','Например: проблемное обучение, работа в малых группах под руководством научного сотрудника')}
  </div>
`,

objects:()=>`
  ${objectsEducationCard()}

  <div class="field-group">
    <div class="field-label">Объекты маршрута взяты из реестра НПТ?</div>
    <div class="field-help">Реестр объектов научной инфраструктуры доступен <a href="https://наука.рф/initiatives/nauchno-populyarnyy-turizm/?tab=initiatives-objectives" target="_blank">по ссылке</a></div>
    ${chipGroupHtml('objects','fromRegistry',['Да, все из реестра','Частично','Нет, новые объекты'],false)}
  </div>
  <div class="field-group">
    <div class="field-label">Объекты для посещения</div>
    <div class="field-help">Перечислите все точки маршрута. Если тур многодневный — обозначьте, в какой день что посещается.</div>
    ${textArea('objects','list','Например:\nДень 1 — Геологический музей им. Вернадского\nДень 2 — карьер «Восточный», смотровая площадка', 4)}
  </div>
  <div class="field-group">
    <div class="field-label">Уникальные явления и туристические объекты</div>
    ${textArea('objects','uniquePhenomena','Что делает маршрут особенным помимо научной части')}
  </div>
  <div class="row-2">
    <div class="field-group">
      <div class="field-label">Транспортная доступность</div>
      ${chipGroupHtml('objects','transportAccess',['Да','Нет'],false)}
    </div>
    <div class="field-group">
      <div class="field-label">Можно посетить объекты самостоятельно?</div>
      ${chipGroupHtml('objects','selfVisit',['Да','Нет'],false)}
    </div>
  </div>
`,

interactive:()=>`
  ${interactiveEducationCard()}

  <div class="gap-warning">💡 Инициатива рекомендует увеличивать долю практико‑ориентированных и исследовательских форматов по сравнению с экскурсионно‑демонстрационными.</div>
  <div class="field-group">
    <div class="field-label">Практические занятия</div>
    ${checkListHtml('interactive','practical',['Мастер-классы'])}
  </div>
  <div class="field-group">
    <div class="field-label">Исследовательские занятия</div>
    ${checkListHtml('interactive','research',['Эксперименты','Демонстрации'])}
  </div>
  <div class="field-group">
    <div class="field-label">Форматы</div>
    ${checkListHtml('interactive','formats',['Лекции','Презентации','Квесты'])}
  </div>
`,

logistics:()=>`
  ${logisticsEducationCard()}

  <div class="field-group">
    <div class="field-label">Общее описание технического обеспечения</div>
    <div class="field-help">Коротко объясните, как техническая организация поддерживает программу маршрута: транспорт, питание, оборудование, условия для практики и интерактива.</div>
    ${textArea('logistics','description','Например: маршрут однодневный; группа перемещается на заказном автобусе; питание организовано на научной базе; для полевого задания используются лупы, перчатки и маршрутные листы.', 3)}
  </div>
  <div class="field-group">
    <div class="field-label">Транспорт</div>
    ${chipGroupHtml('logistics','transport',['Авто','Ж/д','Авиа','Водный','Пешком'])}
  </div>
  <div class="field-group">
    <div class="field-label">Проживание</div>
    ${textInput('logistics','accommodation','Условия проживания, если маршрут многодневный')}
  </div>
  <div class="field-group">
    <div class="field-label">Питание</div>
    ${textInput('logistics','meals','Форматы питания')}
  </div>
  <div class="field-group">
    <div class="field-label">Оборудование</div>
    ${textArea('logistics','equipment','Список необходимого оборудования для занятий')}
  </div>
  <div class="field-group">
    <div class="field-label">Бытовая инфраструктура</div>
    ${checkListHtml('logistics','infra',['Санитарные комнаты','Магазины','Банкоматы','Медпункты'])}
  </div>
`,

safety:()=>`
  <div class="subblock" style="margin-top:0;">
    <div class="subblock-title">Требования к участникам</div>
    <div class="field-group">
      <div class="field-label" style="font-size:12.5px;">Возраст</div>
      ${textInput('safety','ageReq','Например: от 12 лет')}
    </div>
    <div class="field-group">
      <div class="field-label" style="font-size:12.5px;">Здоровье</div>
      ${textInput('safety','healthReq','Медицинские противопоказания, если есть')}
    </div>
    <div class="field-group" style="margin-bottom:0;">
      <div class="field-label" style="font-size:12.5px;">Физическая подготовка</div>
      ${textInput('safety','fitnessReq','Требуемый уровень подготовки')}
    </div>
  </div>
  <div class="field-group" style="margin-top:18px;">
    <div class="field-label">Меры безопасности</div>
    <div class="check-list">
      <div class="check-item ${state.safety.insurance?'checked':''}" onclick="state.safety.insurance=!state.safety.insurance; renderForm(); renderSidebar(); renderRibbon();"><div class="check-box"></div><div class="check-text">Страхование участников</div></div>
      <div class="check-item ${state.safety.escort?'checked':''}" onclick="state.safety.escort=!state.safety.escort; renderForm(); renderSidebar(); renderRibbon();"><div class="check-box"></div><div class="check-text">Сопровождение группы</div></div>
      <div class="check-item ${state.safety.medical?'checked':''}" onclick="state.safety.medical=!state.safety.medical; renderForm(); renderSidebar(); renderRibbon();"><div class="check-box"></div><div class="check-text">Медицинская поддержка на маршруте</div></div>
    </div>
  </div>
`,

cost:()=>`
  <div class="field-group">
    <div class="field-label">Базовая цена</div>
    ${textInput('cost','basePrice','Сумма за человека, ₽')}
  </div>
  <div class="field-group">
    <div class="field-label">Включённые услуги</div>
    ${checkListHtml('cost','included',['Трансфер','Проживание','Питание','Экскурсии'])}
  </div>
  <div class="field-group">
    <div class="field-label">Дополнительные опции</div>
    <div class="field-help">Что можно докупить отдельно от базового пакета</div>
    ${textArea('cost','extra','Например: индивидуальная фотосъёмка, расширенная экскурсия')}
  </div>
`,

promo:()=>`
  <div class="field-group">
    <div class="field-label">Цифровые каналы</div>
    ${checkListHtml('promo','digital',['Соцсети','Сайты','Сообщества'])}
  </div>
  <div class="field-group">
    <div class="field-label">Оффлайн каналы</div>
    ${checkListHtml('promo','offline',['Учебные заведения','Турагентства','Партнёры','Исполнительные органы власти'])}
  </div>
`,

results:()=>`
  <div class="field-group">
    <div class="field-label">Образовательные результаты</div>
    ${checkListHtml('results','eduResults',['Знания','Навыки','Компетенции'])}
  </div>
  <div class="field-group">
    <div class="field-label">Социальные результаты</div>
    ${checkListHtml('results','socialResults',['Расширение кругозора','Формирование интересов','Развитие soft skills'])}
  </div>
`,

docs:()=>`
  <div class="field-group">
    <div class="field-label">Портфель экскурсовода готов?</div>
    ${chipGroupHtml('docs','portfolioReady',['Готов','В процессе','Не готов'],false)}
  </div>
  <div class="field-group">
    <div class="photo-drop">
      <b>Не менее 3 качественных фотографий на каждый объект</b>
      Только авторские фото — не из интернета и не из стоков. Для каждого снимка нужно указать автора. В этом прототипе загрузка файлов не реализована — приложите фото к финальной заявке отдельно.
    </div>
  </div>
  <div class="field-group">
    <div class="field-label">Заметка об авторстве фотографий <span class="field-optional">опционально</span></div>
    ${textArea('docs','photoNote','Например: все фото сделаны организатором маршрута И. Петровым в мае 2026')}
  </div>
`

};

function textInput2(stateId, arrField, idx, key, placeholder){
  const val = state[stateId][arrField][idx][key] || '';
  return `<input type="text" value="${escapeHtml(val)}" placeholder="${placeholder}"
    oninput="state['${stateId}']['${arrField}'][${idx}]['${key}']=this.value; renderSidebar(); renderRibbon();" />`;
}
function textArea2(stateId, arrField, idx, key, placeholder, rows=2){
  const val = state[stateId][arrField][idx][key] || '';
  return `<textarea rows="${rows}" placeholder="${placeholder}"
    oninput="state['${stateId}']['${arrField}'][${idx}]['${key}']=this.value; renderSidebar(); renderRibbon();">${escapeHtml(val)}</textarea>`;
}
function addDay(){
  state.program.days.push({time:'',move:'',activity:'',meals:''});
  renderForm(); renderSidebar(); renderRibbon();
}
function removeDay(i){
  state.program.days.splice(i,1);
  renderForm(); renderSidebar(); renderRibbon();
}

/* ============== MAIN FORM RENDER ============== */

function renderForm(){
  const area = document.getElementById('formArea');

  if(currentStep >= steps.length){
    renderSummary(area);
    return;
  }

  const s = steps[currentStep];
  const isFirst = currentStep===0;
  const isLast = currentStep===steps.length-1;

  area.innerHTML = `
    <div class="card">
      <div class="card-intro">
        <span class="card-tag">${s.tag}</span>
        <h2 class="card-title">${s.title}</h2>
        <p class="card-why">${s.why}</p>
      </div>
      <div id="fieldsHost"></div>
      <div class="card-nav">
        <button class="btn btn-text" ${isFirst?'style="visibility:hidden"':''} onclick="goToStep(${currentStep-1})">← Назад</button>
        <span class="nav-progress-text">Блок ${currentStep+1} из ${steps.length}</span>
        <button class="btn btn-primary" onclick="goToStep(${currentStep+1})">${isLast?'К итоговому описанию →':'Далее →'}</button>
      </div>
    </div>
  `;
  document.getElementById('fieldsHost').innerHTML = renderers[s.render]();
}

/* ============== SUMMARY / EXPORT ============== */

function textOrEmpty(v){
  if(!v || v.toString().trim()==='') return '<span class="summary-empty">не указано</span>';
  return escapeHtml(v);
}

function plainOrNa(v){
  return v && v.toString().trim() ? v.toString().trim() : '[не указано]';
}

function arrOrNa(a){
  return a && a.length ? a.join(', ') : '[не указано]';
}

function getRouteDescriptionSections(){
  const g = state.general, go = state.goals, sc = state.science, pr = state.program,
        ed = state.education, ob = state.objects, it = state.interactive, lo = state.logistics,
        sa = state.safety, co = state.cost, pm = state.promo, re = state.results, dc = state.docs;

  return [
    {
      title:'Общая информация',
      lines:[
        `Название маршрута: ${plainOrNa(g.name)}`,
        `Соответствие содержания названию: ${plainOrNa(g.matchesTitle)}`,
        `Организатор: ${plainOrNa(g.org)}`,
        `Регион реализации: ${plainOrNa(g.region)}`,
        `Целевая аудитория: ${plainOrNa(g.audience)}`,
        `Продолжительность: ${plainOrNa(g.duration)}`,
        `Протяжённость: ${plainOrNa(g.distance)}`,
        `Размер группы: ${plainOrNa(g.groupSize)}`,
        `Дни недели: ${arrOrNa(g.days)}`,
        `Сезонность: ${arrOrNa(g.season)}`
      ]
    },
    {
      title:'Цели и задачи',
      lines:[
        `Основная цель: ${plainOrNa(go.mainGoal)}`,
        `Образовательные задачи: ${arrOrNa(go.edu)}`,
        `Воспитательные задачи: ${arrOrNa(go.upbr)}`
      ]
    },
    {
      title:'Научная составляющая',
      lines:[
        `Научное направление (по классификатору РНФ): ${plainOrNa(sc.field)}`,
        `Демонстрация научного процесса: ${plainOrNa(sc.demoProcess)}${sc.demoDesc?' — '+sc.demoDesc:''}`,
        `Баланс научной и культурной составляющей: ${plainOrNa(sc.balance)}`,
        `Маршрут даёт представление о достижениях учёных: ${sc.achievements?'да':'нет'}`,
        `Способствует привлечению молодёжи в науку: ${sc.youthAttraction?'да':'нет'}`
      ]
    },
    {
      title:'Программа маршрута',
      lines:[
        `Тип маршрута: ${plainOrNa(pr.type)}`,
        ...pr.days.map((d,i)=>[
          `День ${i+1}:`,
          `  Временной план: ${plainOrNa(d.time)}`,
          `  Передвижение: ${plainOrNa(d.move)}`,
          `  Активности: ${plainOrNa(d.activity)}`,
          `  Питание и проживание: ${plainOrNa(d.meals)}`
        ].join('\n'))
      ]
    },
    {
      title:'Образовательный компонент',
      lines:[
        `Теоретическая часть: ${plainOrNa(ed.theory)}`,
        `Практическая часть: ${plainOrNa(ed.practice)}`,
        `Методики работы: ${plainOrNa(ed.methods)}`
      ]
    },
    {
      title:'Научно-популярные объекты',
      lines:[
        `Объекты из реестра НПТ: ${plainOrNa(ob.fromRegistry)}`,
        `Объекты для посещения:\n${plainOrNa(ob.list)}`,
        `Уникальные явления / туристические объекты: ${plainOrNa(ob.uniquePhenomena)}`,
        `Транспортная доступность: ${plainOrNa(ob.transportAccess)}`,
        `Самостоятельное посещение возможно: ${plainOrNa(ob.selfVisit)}`
      ]
    },
    {
      title:'Интерактивная составляющая',
      lines:[
        `Практические занятия: ${arrOrNa(it.practical)}`,
        `Исследовательские занятия: ${arrOrNa(it.research)}`,
        `Форматы: ${arrOrNa(it.formats)}`
      ]
    },
    {
      title:'Техническое обеспечение',
      lines:[
        `Общее описание технического обеспечения: ${plainOrNa(lo.description)}`,
        `Транспорт: ${arrOrNa(lo.transport)}`,
        `Проживание: ${plainOrNa(lo.accommodation)}`,
        `Питание: ${plainOrNa(lo.meals)}`,
        `Оборудование: ${plainOrNa(lo.equipment)}`,
        `Бытовая инфраструктура: ${arrOrNa(lo.infra)}`
      ]
    },
    {
      title:'Безопасность',
      lines:[
        `Возраст: ${plainOrNa(sa.ageReq)}`,
        `Здоровье: ${plainOrNa(sa.healthReq)}`,
        `Физическая подготовка: ${plainOrNa(sa.fitnessReq)}`,
        `Страхование: ${sa.insurance?'да':'нет'}; Сопровождение: ${sa.escort?'да':'нет'}; Медподдержка: ${sa.medical?'да':'нет'}`
      ]
    },
    {
      title:'Стоимость',
      lines:[
        `Базовая цена: ${plainOrNa(co.basePrice)}`,
        `Включённые услуги: ${arrOrNa(co.included)}`,
        `Доп. опции: ${plainOrNa(co.extra)}`
      ]
    },
    {
      title:'Продвижение',
      lines:[
        `Цифровые каналы: ${arrOrNa(pm.digital)}`,
        `Оффлайн каналы: ${arrOrNa(pm.offline)}`
      ]
    },
    {
      title:'Ожидаемые результаты',
      lines:[
        `Образовательные: ${arrOrNa(re.eduResults)}`,
        `Социальные: ${arrOrNa(re.socialResults)}`
      ]
    },
    {
      title:'Документация',
      lines:[
        `Портфель экскурсовода: ${plainOrNa(dc.portfolioReady)}`,
        'Фотоматериалы: не менее 3 качественных авторских фото на объект (приложить отдельно)',
        `Заметка об авторстве: ${plainOrNa(dc.photoNote)}`
      ]
    }
  ];
}

function buildExportText(){
  let out = '';
  out += 'ОПИСАНИЕ НАУЧНО-ПОПУЛЯРНОГО МАРШРУТА\n';
  out += '(подготовлено на основе Приложения 2)\n\n';
  getRouteDescriptionSections().forEach(section=>{
    out += `— ${section.title.toUpperCase()} —\n`;
    out += section.lines.join('\n') + '\n\n';
  });

  return out;
}

function summaryTextHtml(text){
  return escapeHtml(text)
    .replace(/\[не указано\]/g, '<span class="summary-empty">не указано</span>')
    .replace(/\n/g, '<br>');
}

function renderSummarySections(){
  return getRouteDescriptionSections().map(section=>`
    <div class="summary-block">
      <div class="summary-block-title">${section.title}<span class="line"></span></div>
      ${section.lines.map(line=>`<div class="summary-line">${summaryTextHtml(line)}</div>`).join('')}
    </div>
  `).join('');
}

function renderSummary(area){
  const doneCount = steps.filter((s,i)=>isStepFilled(i)).length;
  const allDone = doneCount === steps.length;

  area.innerHTML = `
    <div class="card summary-view-card" style="grid-column:1/-1;">
      <div class="completion-banner">
        <div class="completion-text">
          <h2>${allDone?'Описание маршрута готово':'Черновик описания маршрута'}</h2>
          <p>${allDone?'Все 13 блоков заполнены. Скопируйте текст или скачайте файл и приложите авторские фотографии перед отправкой координатору.':`Заполнено ${doneCount} из ${steps.length} блоков. Можно скачать черновик уже сейчас и вернуться к оставшимся пунктам позже.`}</p>
        </div>
        <div class="completion-actions">
          <button class="btn btn-on-dark" onclick="copyExport()">⧉ Скопировать текст</button>
          <button class="btn btn-outline-dark" onclick="downloadExport()">⬇ Скачать .txt</button>
        </div>
      </div>

      ${!allDone?`<div class="gap-warning">⚠️ Некоторые блоки ещё не заполнены — в итоговом тексте они будут отмечены как «не указано». Координатор может вернуть заявку на доработку, если ключевые поля (научное направление, объекты, фото) останутся пустыми.</div>`:''}

      ${renderSummarySections()}

      <div class="summary-block" style="margin-top:30px;">
        <button class="btn btn-ghost" onclick="goToStep(0)">← Вернуться к редактированию блоков</button>
      </div>
    </div>
  `;
}

function copyExport(){
  const text = buildExportText();
  navigator.clipboard.writeText(text).then(()=>{
    const btn = document.querySelector('.btn-on-dark');
    if(btn){ const old = btn.textContent; btn.textContent='✓ Скопировано'; setTimeout(()=>btn.textContent=old, 1800); }
  }).catch(()=>{
    alert('Не удалось скопировать автоматически. Текст:\n\n'+text);
  });
}

function downloadExport(){
  const text = buildExportText();
  const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'описание_маршрута.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============== INIT ============== */

function renderAll(){
  renderSidebar();
  renderRibbon();
  renderForm();
  renderDiagnostic();
}

renderAll();
