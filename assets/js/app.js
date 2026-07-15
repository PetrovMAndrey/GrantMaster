/* ============== DATA MODEL ============== */

const steps = [
  {
    id:'diagnostic', tag:'Блок 01', title:'Первичная диагностика', hint:'Стадия, готовность, риски',
    why:'Зафиксируйте <b>стартовое состояние проекта</b>: на какой стадии находится идея, что уже собрано и какие пробелы стоит закрыть перед заявкой.',
    render:'diagnostic'
  },
  {
    id:'passport', tag:'Блок 02', title:'Паспорт проекта', hint:'Короткая карточка проекта',
    why:'Соберите <b>краткую карточку проекта в одном экране</b>: название, суть, тематику, формат, территорию и заявителя. Это опорная рамка для всех остальных разделов.',
    render:'passport'
  },
  {
    id:'problem', tag:'Блок 03', title:'Проблема', hint:'Актуальность и доказательства',
    why:'Опишите <b>значимую проблему</b>, которую решает проект: причины, актуальность, подтверждения, масштаб и последствия. Это точка ответа на вопрос, зачем проект нужен.',
    render:'problem'
  },
  {
    id:'audience', tag:'Блок 04', title:'Целевая аудитория', hint:'Группы, потребности, охват',
    why:'Покажите, <b>для кого создаётся проект</b>, какие у этих людей потребности и чем их интерес подтверждается не предположениями.',
    render:'audience'
  },
  {
    id:'concept', tag:'Блок 05', title:'Концепция проекта', hint:'Идея и механизм решения',
    why:'Сформулируйте <b>решение</b>: что предлагает проект, почему это должно повлиять на проблему и чем подход отличается от общих намерений.',
    render:'concept'
  },
  {
    id:'goalsTasks', tag:'Блок 06', title:'Цель и задачи', hint:'Цель, задачи, связи',
    why:'Свяжите <b>проблему, цель, задачи и результаты</b>. Задачи должны быть не списком пожеланий, а логическими шагами к цели.',
    render:'goalsTasks'
  },
  {
    id:'implementation', tag:'Блок 07', title:'Реализация', hint:'Мероприятия и календарный план',
    why:'Покажите, <b>что именно будет происходить</b>: мероприятия, этапы, сроки, территория, риски и ограничения реализации.',
    render:'implementation'
  },
  {
    id:'results', tag:'Блок 08', title:'Результаты', hint:'Показатели и изменения',
    why:'Опишите, <b>что изменится после проекта</b>, как это можно измерить и чем результаты связаны с проблемой, аудиторией и мероприятиями.',
    render:'results'
  },
  {
    id:'team', tag:'Блок 09', title:'Команда', hint:'Роли, компетенции, опыт',
    why:'Покажите, что проект есть кому реализовать: <b>руководитель, команда, роли, опыт и компетенции</b> должны соответствовать мероприятиям.',
    render:'team'
  },
  {
    id:'partners', tag:'Блок 10', title:'Партнёры', hint:'Вклад и подтверждения',
    why:'Зафиксируйте <b>реальный вклад партнёров</b>: кто поддерживает проект, что именно делает и какими документами это можно подтвердить.',
    render:'partners'
  },
  {
    id:'promotion', tag:'Блок 11', title:'Продвижение', hint:'Каналы и коммуникации',
    why:'Покажите, <b>как проект будет находить аудиторию</b> и взаимодействовать с ней до, во время и после реализации.',
    render:'promotion'
  },
  {
    id:'resources', tag:'Блок 12', title:'Ресурсы', hint:'Бюджет и обоснование',
    why:'Соберите <b>ресурсную и бюджетную рамку</b>: статьи расходов, расчёты, обоснования, софинансирование и допустимость затрат.',
    render:'resources'
  },
  {
    id:'support', tag:'Блок 13', title:'Поддержка', hint:'Какая помощь нужна',
    why:'Отделите внутренние ресурсы от того, что ещё требуется: <b>финансирование, экспертиза, площадки, партнёры, наставничество</b>.',
    render:'support'
  },
  {
    id:'sustainability', tag:'Блок 14', title:'Устойчивость', hint:'Развитие после финансирования',
    why:'Покажите, <b>что будет после завершения гранта</b>: продолжение работы, новые источники, масштабирование и долгосрочную модель.',
    render:'sustainability'
  },
  {
    id:'materials', tag:'Блок 15', title:'Дополнительные материалы', hint:'Файлы, ссылки, подтверждения',
    why:'Соберите материалы, которые усиливают проект и доверие: <b>презентации, фото, видео, исследования, письма, ссылки и подтверждения</b>.',
    render:'materials'
  }
];

const state = {
  diagnostic:{ maturityStage:'', readinessLevel:'', weakSpots:[], startRisks:[] },
  passport:{ name:'', shortDescription:'', topic:[], projectType:'', projectTypeOther:'', scale:'', territory:'', tags:[], applicantName:'', applicantPlace:'', applicantRole:'' },
  problem:{ problemTypes:[], description:'', causeTypes:[], causes:'', relevanceGrounds:[], relevance:'', significanceTargets:[], significance:'', evidenceSources:[], evidence:'', simpleExplanation:'' },
  audience:{ primaryGroups:[], secondaryGroups:[], needs:[], ageGroups:[], directReach:'', indirectReach:'', reachTerritory:'', interestProofTypes:[], interestProof:'', audienceSummary:'' },
  concept:{ ideaHints:[], idea:'', mechanismHints:[], mechanism:'', uniquenessHints:[], uniqueness:'', valueHints:[], value:'', advantageHints:[], advantages:'' },
  goalsTasks:{ goalHints:[], goal:'', taskHints:[], tasks:'', problemLinkHints:[], problemLink:'', resultLinkHints:[], resultLink:'', activityLinkHints:[], activityLink:'' },
  implementation:{ activityFormats:[], activityDescription:'', stageTypes:[], stageNotes:'', duration:'', startPeriod:'', startMonth:'', calendarNotes:'', territoryScale:'', territoryRegion:'', territoryCity:'', territoryMunicipality:'', territoryVenue:'', onlinePlatform:'', territoryRationale:'', riskTypes:[], riskMitigation:'', conditionTypes:[], conditionNotes:'' },
  results:{ quantitativeHints:[], quantitative:'', qualitativeHints:[], qualitative:'', effectHints:[], effects:'', measurementHints:[], measurement:'', audienceResultHints:[], resultAudienceLink:'' },
  team:{ leaderName:'', leaderRole:'', leaderRoleDescription:'', leaderCompetencies:[], leaderCompetenciesExtra:'', leaderExperience:'', memberTypes:[], members:'', participantRoles:[], roles:'', teamCompetencies:[], competencies:'', teamExperience:'', activityMatchChecks:[], activityMatch:'' },
  partners:{ partnersList:[{name:'', link:''},{name:'', link:''},{name:'', link:''}], contributions:[{partner:'', contribution:''}], supportForms:[{partner:'', forms:[]}], confirmationTypes:[], confirmationLinks:['','','','',''], moneySupportStatus:'', moneyItems:[{partner:'', amount:'', subject:''}] },
  promotion:{
    channels:[{type:'', customType:'', nameLink:'', purpose:''}],
    communicationPlan:[{message:'', channel:'', timing:'', timingCustom:'', goal:''}],
    interactionTypes:[],
    interactionMechanics:[{mechanic:'', channel:'', feedbackUse:''}],
    infoSupportTypes:[],
    infoSupportDescription:''
  },
  resources:{
    requiredItems:[{type:'', customType:'', amount:'', comment:''}],
    budgetItems:[{category:'', customCategory:'', amount:'', comment:''}],
    calculations:'',
    justification:'',
    cofundingStatus:'',
    cofundingItems:[{sourceType:'', sourceName:'', amount:'', description:''}],
    eligibilityChecks:[],
    eligibilityNotes:''
  },
  support:{ types:[], priorityLevels:{}, priorityNotes:{}, rationales:{}, statuses:{}, statusNotes:{}, priorities:'', rationale:'', criticalSupport:'' },
  sustainability:{
    developmentScenarios:[],
    development:'',
    fundingSourceTypes:[],
    fundingSources:'',
    scalingWays:[],
    scaling:'',
    longTermElements:[],
    longTermModel:'',
    remainingAssets:[],
    remainingValue:''
  },
  materials:{
    presentationsStatus:'',
    presentations:'',
    photosStatus:'',
    photos:'',
    videosStatus:'',
    videos:'',
    researchStatus:'',
    researchItems:[{type:'', description:''}],
    research:'',
    supportLettersStatus:'',
    supportLetterItems:[{author:'', comment:''}],
    supportLetters:'',
    linkItems:[{url:'', description:''}],
    links:''
  }
};

/* ============== LOCAL PROJECT STORAGE ============== */

const PROJECT_STORAGE_KEY = 'grantmaster:project-draft';
const PROJECT_SCHEMA_VERSION = 1;
const PROJECT_SAVE_DELAY = 500;
const defaultState = JSON.parse(JSON.stringify(state));

let projectSaveTimer = null;
let projectStorageReady = false;
let projectStorageWriteBlocked = false;
let lastSavedSnapshot = '';

function cloneJson(value){
  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value){
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function sanitizeJsonValue(value){
  if(value === null || typeof value === 'string' || typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value))){
    return value;
  }
  if(Array.isArray(value)) return value.map(sanitizeJsonValue).filter(item=>item !== undefined);
  if(isPlainObject(value)){
    return Object.fromEntries(
      Object.entries(value)
        .map(([key, item])=>[key, sanitizeJsonValue(item)])
        .filter(([, item])=>item !== undefined)
    );
  }
  return undefined;
}

function mergeSavedValue(defaultValue, savedValue){
  if(Array.isArray(defaultValue)){
    if(!Array.isArray(savedValue)) return cloneJson(defaultValue);

    if(defaultValue.length && isPlainObject(defaultValue[0])){
      const rows = savedValue
        .filter(isPlainObject)
        .map(item=>mergeSavedValue(defaultValue[0], item));
      return rows.length ? rows : cloneJson(defaultValue);
    }

    if(defaultValue.length){
      const itemType = typeof defaultValue[0];
      return savedValue.filter(item=>typeof item === itemType);
    }

    return savedValue.filter(item=>typeof item === 'string');
  }

  if(isPlainObject(defaultValue)){
    if(!isPlainObject(savedValue)) return cloneJson(defaultValue);
    const defaultKeys = Object.keys(defaultValue);
    if(!defaultKeys.length) return sanitizeJsonValue(savedValue) || {};
    return Object.fromEntries(
      defaultKeys.map(key=>[key, mergeSavedValue(defaultValue[key], savedValue[key])])
    );
  }

  return typeof savedValue === typeof defaultValue ? savedValue : defaultValue;
}

function replaceState(nextState){
  Object.keys(state).forEach(key=>delete state[key]);
  Object.assign(state, nextState);
}

function restoreDiagnosticState(savedDiagnosticState){
  Object.keys(diagnosticState).forEach(key=>delete diagnosticState[key]);
  if(!isPlainObject(savedDiagnosticState)) return;
  const validQuestionIds = new Set(diagnosticQuestions.map(question=>question.id));
  Object.entries(savedDiagnosticState).forEach(([key, value])=>{
    if(validQuestionIds.has(key) && Number.isInteger(value) && value >= 0 && value <= 3){
      diagnosticState[key] = value;
    }
  });
}

function migrateStoredProject(payload){
  if(!isPlainObject(payload)) throw new Error('Некорректная структура сохранённого проекта.');

  if(!Object.prototype.hasOwnProperty.call(payload, 'state')){
    payload = {schemaVersion:0, state:payload, diagnosticState:{}};
  }

  if(!isPlainObject(payload.state)){
    throw new Error('Сохранённое состояние проекта имеет неверный формат.');
  }

  let version = Number.isInteger(payload.schemaVersion) ? payload.schemaVersion : 1;
  let migrated = payload;

  if(version === 0){
    migrated = {...migrated, schemaVersion:1};
    version = 1;
  }

  if(version !== PROJECT_SCHEMA_VERSION){
    const error = new Error('Версия сохранённого проекта не поддерживается.');
    error.code = 'UNSUPPORTED_SCHEMA';
    throw error;
  }

  return migrated;
}

function currentProjectSnapshot(){
  return JSON.stringify({
    schemaVersion:PROJECT_SCHEMA_VERSION,
    state,
    diagnosticState
  });
}

function setProjectStorageStatus(message, type=''){
  const status = document.getElementById('projectStorageStatus');
  if(!status) return;
  status.textContent = message;
  status.dataset.status = type;
  const panel = status.closest('.project-storage-panel');
  if(panel) panel.dataset.status = type;
}

function loadSavedProject(){
  let raw;
  try {
    raw = localStorage.getItem(PROJECT_STORAGE_KEY);
  } catch(error){
    return {status:'unavailable'};
  }

  if(!raw) return {status:'empty'};

  try {
    const saved = migrateStoredProject(JSON.parse(raw));
    replaceState(mergeSavedValue(defaultState, saved.state));
    restoreDiagnosticState(saved.diagnosticState);
    normalizeSupportState();
    normalizeMaterialsState();
    return {status:'restored'};
  } catch(error){
    return {status:error.code === 'UNSUPPORTED_SCHEMA' ? 'unsupported' : 'invalid'};
  }
}

function saveProjectNow(){
  if(!projectStorageReady || projectStorageWriteBlocked) return false;
  if(projectSaveTimer){
    clearTimeout(projectSaveTimer);
    projectSaveTimer = null;
  }

  const snapshot = currentProjectSnapshot();
  if(snapshot === lastSavedSnapshot) return true;

  try {
    const data = JSON.parse(snapshot);
    data.savedAt = new Date().toISOString();
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(data));
    lastSavedSnapshot = snapshot;
    setProjectStorageStatus('Сохранено локально', 'saved');
    return true;
  } catch(error){
    setProjectStorageStatus('Не удалось сохранить в этом браузере', 'error');
    return false;
  }
}

function scheduleProjectSave(){
  if(!projectStorageReady || projectStorageWriteBlocked) return;
  if(currentProjectSnapshot() === lastSavedSnapshot) return;
  if(projectSaveTimer) clearTimeout(projectSaveTimer);
  setProjectStorageStatus('Сохраняется…', 'saving');
  projectSaveTimer = setTimeout(saveProjectNow, PROJECT_SAVE_DELAY);
}

function projectInteractionChanged(event){
  const target = event.target;
  if(!(target instanceof Element)) return;
  if(!target.closest('#projectDiagnostic, #workspace')) return;
  scheduleProjectSave();
}

function bindProjectStorage(){
  document.addEventListener('input', projectInteractionChanged);
  document.addEventListener('change', projectInteractionChanged);
  document.addEventListener('click', projectInteractionChanged);
  window.addEventListener('pagehide', saveProjectNow);
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'hidden') saveProjectNow();
  });
}

function clearSavedProject(){
  const confirmed = window.confirm('Удалить все данные текущего проекта из этого браузера? Это действие нельзя отменить.');
  if(!confirmed) return;

  if(projectSaveTimer){
    clearTimeout(projectSaveTimer);
    projectSaveTimer = null;
  }

  try {
    localStorage.removeItem(PROJECT_STORAGE_KEY);
  } catch(error){
    setProjectStorageStatus('Не удалось удалить сохранённые данные', 'error');
    window.alert('Браузер не разрешил удалить локально сохранённый проект.');
    return;
  }

  replaceState(cloneJson(defaultState));
  restoreDiagnosticState({});
  projectStorageWriteBlocked = false;
  currentStep = 0;
  partnerConfirmationVisibleLinks = 1;
  lastSavedSnapshot = currentProjectSnapshot();
  renderAll();
  setProjectStorageStatus('Новый проект. Автосохранение включено', 'saved');
  document.getElementById('workspace').scrollIntoView({behavior:'smooth', block:'start'});
}

let currentStep = 0;
let partnerConfirmationVisibleLinks = 1;

/* ============== PROJECT MATURITY DIAGNOSTIC ============== */

const diagnosticQuestions = [
  {
    id:'problem',
    title:'Понятно, какую проблему решает проект?',
    hint:'Проблема описывает не просто тему, а конкретное противоречие, дефицит или потребность, с которой сталкиваются люди.',
    strength:'Проблема проекта обозначена',
    recommendation:'Уточните проблему: что именно не работает сейчас, кого это затрагивает и почему без проекта ситуация не изменится.'
  },
  {
    id:'audience',
    title:'Понятно, для какой аудитории он нужен?',
    hint:'Важно понимать не только “для всех”, а конкретную группу людей, её ситуацию, потребности и ограничения.',
    strength:'Целевая аудитория понятна',
    recommendation:'Сузьте аудиторию: опишите, для кого проект, почему именно этой группе он нужен и как вы это понимаете.'
  },
  {
    id:'solution',
    title:'Есть понятное решение, а не только общая идея?',
    hint:'Решение показывает, за счёт чего проект повлияет на проблему: формат, подход, продукт, программа или сервис.',
    strength:'Есть замысел решения',
    recommendation:'Опишите решение как механизм: что вы будете делать, почему это поможет аудитории и чем подход отличается от общих намерений.'
  },
  {
    id:'evidence',
    title:'Есть подтверждения проблемы или потребности аудитории?',
    hint:'Это могут быть наблюдения, обращения, исследования, статистика, обратная связь, опыт организации или партнёров.',
    strength:'Есть опора на факты или наблюдения',
    recommendation:'Добавьте подтверждения: данные, примеры, отзывы, наблюдения или опыт, которые показывают, что проблема реальна.'
  },
  {
    id:'goalTasks',
    title:'Сформулированы цель и задачи?',
    hint:'Цель показывает желаемое изменение, а задачи раскладывают путь к нему на понятные направления работы.',
    strength:'Намечены цель и задачи',
    recommendation:'Соберите цель и задачи: какое изменение должно произойти и какие крупные шаги приведут к нему.'
  },
  {
    id:'actions',
    title:'Понятно, какие действия нужно выполнить?',
    hint:'Проект становится реалистичным, когда видны мероприятия, этапы, сроки и последовательность работы.',
    strength:'Появляется план действий',
    recommendation:'Разложите проект на действия: какие мероприятия или этапы нужны, в каком порядке и кто за них отвечает.'
  },
  {
    id:'resources',
    title:'Есть команда, партнёры или ресурсы?',
    hint:'Для заявки важно показать, что проект можно выполнить: люди, компетенции, площадки, материалы, партнёрская поддержка.',
    strength:'Есть исполнители или ресурсы',
    recommendation:'Проверьте ресурсную базу: кто будет делать проект, какие компетенции есть и чего пока не хватает.'
  },
  {
    id:'results',
    title:'Понятно, какие результаты должны получиться?',
    hint:'Результаты должны быть конкретными: что изменится, сколько людей будет вовлечено, какие продукты или эффекты появятся.',
    strength:'Намечены результаты проекта',
    recommendation:'Опишите результаты измеримо: что появится после проекта, для кого и по каким признакам это можно будет проверить.'
  },
  {
    id:'practice',
    title:'Есть первый опыт, прототип или реализованная практика?',
    hint:'Даже небольшой пилот, проведённое событие, тестовый формат или обратная связь усиливают доверие к проекту.',
    strength:'Есть опыт или прототип',
    recommendation:'Зафиксируйте первый опыт: что уже пробовали, какие выводы получили и как это подтверждает жизнеспособность проекта.'
  },
  {
    id:'sustainability',
    title:'Понятно, как проект может продолжаться или масштабироваться?',
    hint:'Экспертам важно видеть, что проект не заканчивается одним мероприятием и может жить дальше.',
    strength:'Есть понимание развития проекта',
    recommendation:'Продумайте устойчивость: что останется после гранта, кто поддержит продолжение и как модель можно развивать.'
  }
];

const diagnosticOptions = [
  { label:'Да, уже есть', value:3 },
  { label:'Частично', value:2 },
  { label:'Пока в общих чертах', value:1 },
  { label:'Нет / не проработано', value:0 }
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
  const resultValue = diagnosticState.results ?? 0;
  const practiceValue = diagnosticState.practice ?? 0;
  const sustainabilityValue = diagnosticState.sustainability ?? 0;
  const canScale = answeredCount === diagnosticQuestions.length
    && score >= 26
    && resultValue >= 2
    && practiceValue >= 2
    && sustainabilityValue >= 2;

  if(canScale){
    return {
      type:'green',
      icon:'🚀',
      title:'Сейчас проект на стадии: Масштабирование',
      text:'Есть доказанная модель и понимание дальнейшего развития. Теперь важно упаковать практику, результаты и условия расширения.',
      nextStep:'Опишите, что именно уже работает, какие результаты это подтверждают и как проект можно перенести на новые аудитории, территории или партнёрства.'
    };
  }

  if(score >= 22){
    return {
      type:'green',
      icon:'✅',
      title:'Сейчас проект на стадии: Практика',
      text:'Есть опыт реализации, результаты, команда или подтверждения. Проект уже можно готовить к сильному описанию для заявки.',
      nextStep:'Соберите доказательства: результаты, отзывы, партнёров, опыт команды и выводы, которые показывают реалистичность проекта.'
    };
  }

  if(score >= 15){
    return {
      type:'yellow',
      icon:'🧩',
      title:'Сейчас проект на стадии: Проект',
      text:'Есть базовая логика: аудитория, решение, задачи и действия. Следующий уровень — доказательность, ресурсы и измеримые результаты.',
      nextStep:'Проверьте связку “проблема → аудитория → решение → результаты” и уточните план реализации, ресурсы и показатели.'
    };
  }

  if(score >= 8){
    return {
      type:'yellow',
      icon:'🌱',
      title:'Сейчас проект на стадии: Инициатива',
      text:'Понятны проблема и намерение, но структуре проекта ещё не хватает связности и конкретики.',
      nextStep:'Сформулируйте аудиторию, решение, цель и первые действия так, чтобы стало понятно, как идея превращается в проект.'
    };
  }

  return {
    type:'red',
    icon:'💡',
    title:'Сейчас проект на стадии: Идея',
    text:'Есть замысел, но проектная логика ещё не собрана. Это нормальная стартовая точка: сейчас важно превратить общую мысль в понятную структуру.',
    nextStep:'Начните с трёх опор: какая проблема существует, кому она мешает и какое решение вы предлагаете.'
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
        <p>После этого здесь появится предварительная стадия проекта, сильные стороны и рекомендации по доработке.</p>
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
        <b>${score} / ${maxScore} баллов зрелости</b>
      </div>
      <div class="result-columns">
        <div>
          <h4>Что уже собрано</h4>
          ${strengths.length ? `<ul>${strengths.map(item=>`<li>${item}</li>`).join('')}</ul>` : '<p class="result-muted">Пока сильные стороны не проявились — начните с проблемы, аудитории и решения.</p>'}
        </div>
        <div>
          <h4>Что усилить</h4>
          ${recommendations.length ? `<ul>${recommendations.slice(0,4).map(item=>`<li>${item}</li>`).join('')}</ul>` : '<p class="result-muted">Ключевая проектная логика выглядит собранной. Дальше проверьте доказательства, ресурсы и устойчивость.</p>'}
        </div>
      </div>
      <div class="result-next-step">
        <h4>Следующий шаг</h4>
        <p>${status.nextStep}</p>
      </div>
      <button class="btn btn-primary diagnostic-next" onclick="scrollToWorkspace()">Перейти к дальнейшей работе →</button>
    </div>
  `;
}

/* ============== RENDER: SIDEBAR + RIBBON ============== */

function hasUserValue(value){
  if(Array.isArray(value)){
    return value.some(item=>hasUserValue(item));
  }
  if(value && typeof value === 'object'){
    return Object.values(value).some(item=>hasUserValue(item));
  }
  if(typeof value === 'boolean') return value;
  if(typeof value === 'number') return Number.isFinite(value);
  if(typeof value === 'string') return value.trim().length > 0;
  return false;
}

function isStepFilled(idx){
  const s = steps[idx];
  const d = state[s.id];
  return hasUserValue(d);
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
  }).join('');
}

function renderRibbon(){
  const doneCount = steps.filter((s,i)=>isStepFilled(i)).length;
  const progressLabel = document.getElementById('progressLabel');
  if(progressLabel){
    progressLabel.textContent = `${doneCount} из ${steps.length} блоков`;
  }
  const currentLabel = document.getElementById('currentBlockLabel');
  if(currentLabel){
    currentLabel.textContent = currentStep >= steps.length
      ? 'Сейчас вы находитесь в блоке: Итоговый паспорт проекта'
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

function scrollToDiagnostic(){
  document.getElementById('projectDiagnostic').scrollIntoView({behavior:'smooth', block:'start'});
}

function getCompletionStats(){
  const doneCount = steps.filter((s,i)=>isStepFilled(i)).length;
  const percent = steps.length ? Math.round((doneCount / steps.length) * 100) : 0;
  return {doneCount, percent};
}

function renderFinalEntry(){
  const {doneCount, percent} = getCompletionStats();
  return `
    <section class="final-entry" aria-label="Финальная область конструктора">
      <div class="readiness-bar" style="--readiness:${percent}%;" aria-label="Готовность проекта ${percent}%">
        <div class="readiness-fill"></div>
        <div class="readiness-text readiness-text-base">Заполнено ${percent}%</div>
        <div class="readiness-text readiness-text-fill">Заполнено ${percent}%</div>
      </div>
      <div class="final-entry-card">
        <div>
          <span class="final-entry-kicker">${doneCount} из ${steps.length} разделов</span>
          <h2>Итоговый паспорт проекта</h2>
        </div>
        <button class="btn btn-primary final-entry-btn" onclick="goToStep(${steps.length})">Сформировать</button>
      </div>
    </section>
  `;
}

/* ============== FIELD HELPERS ============== */

function setVal(stateObj, key, val){ stateObj[key] = val; renderSidebar(); renderRibbon(); }

function chipGroupHtml(stateId, field, options, multi=true){
  const current = state[stateId][field] || (multi ? [] : '');
  return `<div class="chip-group">` + options.map(opt=>{
    const selected = multi ? current.includes(opt) : current===opt;
    return `<button type="button" class="chip ${selected?'selected':''}" onclick="toggleChip('${stateId}','${field}','${opt.replace(/'/g,"\\'")}', ${multi})">${opt}</button>`;
  }).join('') + `</div>`;
}

function toggleChip(stateId, field, opt, multi){
  if(multi){
    if(!Array.isArray(state[stateId][field])) state[stateId][field] = [];
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

function checkListHtml(stateId, field, options, columns=1){
  const current = state[stateId][field] || [];
  const listClass = columns === 2 ? 'check-list check-list-2' : 'check-list';
  return `<div class="${listClass}">` + options.map(opt=>{
    const checked = current.includes(opt);
    return `<div class="check-item ${checked?'checked':''}" onclick="toggleCheck('${stateId}','${field}','${opt.replace(/'/g,"\\'")}')">
      <div class="check-box"></div><div class="check-text">${opt}</div>
    </div>`;
  }).join('') + `</div>`;
}

function toggleCheck(stateId, field, opt){
  if(!Array.isArray(state[stateId][field])) state[stateId][field] = [];
  const arr = state[stateId][field];
  const idx = arr.indexOf(opt);
  if(idx>-1) arr.splice(idx,1); else arr.push(opt);
  renderForm();
  renderSidebar();
  renderRibbon();
}

function multiSelectHtml(stateId, field, options, max=99, placeholder='Выберите из списка'){
  const current = state[stateId][field] || [];
  const label = current.length ? current.join(', ') : placeholder;
  return `
    <details class="multi-select">
      <summary class="${current.length ? 'has-value' : ''}">
        <span>${escapeHtml(label)}</span>
        <small>${current.length}/${max}</small>
      </summary>
      <div class="multi-select-menu">
        ${options.map(opt=>{
          const checked = current.includes(opt);
          const disabled = !checked && current.length >= max;
          return `<button type="button" class="multi-option ${checked?'selected':''}" ${disabled?'disabled':''} onclick="toggleMultiSelect('${stateId}','${field}','${opt.replace(/'/g,"\\'")}', ${max})">
            <span class="multi-box">${checked?'✓':''}</span>
            <span>${escapeHtml(opt)}</span>
          </button>`;
        }).join('')}
      </div>
    </details>
  `;
}

function toggleMultiSelect(stateId, field, opt, max){
  const arr = state[stateId][field];
  const idx = arr.indexOf(opt);
  if(idx>-1){
    arr.splice(idx,1);
  } else if(arr.length < max){
    arr.push(opt);
  }
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

const partnerRowTemplates = {
  partnersList:{name:'', link:''},
  contributions:{partner:'', contribution:''},
  supportForms:{partner:'', forms:[]},
  moneyItems:{partner:'', amount:'', subject:''}
};

function getPartnerNames(){
  return (state.partners.partnersList || [])
    .map(item=>item.name.trim())
    .filter(Boolean);
}

function setPartnerArrayValue(field, index, key, value){
  state.partners[field][index][key] = value;
  renderSidebar();
  renderRibbon();
}

function addPartnerRow(field){
  state.partners[field].push({...partnerRowTemplates[field]});
  renderForm();
  renderSidebar();
  renderRibbon();
}

function removePartnerRow(field, index){
  if(state.partners[field].length > 1){
    state.partners[field].splice(index, 1);
  } else {
    state.partners[field][0] = {...partnerRowTemplates[field]};
  }
  renderForm();
  renderSidebar();
  renderRibbon();
}

function togglePartnerSupportForm(index, option){
  const row = state.partners.supportForms[index];
  const current = row.forms || [];
  const optionIndex = current.indexOf(option);
  if(optionIndex > -1) current.splice(optionIndex, 1); else current.push(option);
  row.forms = current;
  renderForm();
  renderSidebar();
  renderRibbon();
}

function setConfirmationLink(index, value){
  state.partners.confirmationLinks[index] = value;
  renderSidebar();
  renderRibbon();
}

function getVisibleConfirmationLinkCount(){
  const lastFilledIndex = state.partners.confirmationLinks.reduce((lastIndex, link, index)=>link.trim() ? index : lastIndex, -1);
  return Math.max(1, partnerConfirmationVisibleLinks, lastFilledIndex + 1);
}

function addConfirmationLink(){
  const visibleCount = getVisibleConfirmationLinkCount();
  if(visibleCount >= state.partners.confirmationLinks.length){
    state.partners.confirmationLinks.push('');
  }
  partnerConfirmationVisibleLinks = visibleCount + 1;
  renderForm();
  renderSidebar();
  renderRibbon();
}

function removeConfirmationLink(index){
  if(state.partners.confirmationLinks.length <= 1){
    state.partners.confirmationLinks[0] = '';
    partnerConfirmationVisibleLinks = 1;
  } else {
    state.partners.confirmationLinks.splice(index, 1);
    partnerConfirmationVisibleLinks = Math.max(1, getVisibleConfirmationLinkCount() - 1);
  }
  renderForm();
  renderSidebar();
  renderRibbon();
}

function partnerSelectHtml(field, index, key){
  const names = getPartnerNames();
  const current = state.partners[field][index][key] || '';
  const options = names.length ? names : ['Сначала укажите партнёра'];
  return `
    <select ${names.length ? '' : 'disabled'} onchange="setPartnerArrayValue('${field}', ${index}, '${key}', this.value)">
      <option value="">Выберите партнёра</option>
      ${options.map(name=>`<option value="${escapeHtml(name)}" ${current===name?'selected':''}>${escapeHtml(name)}</option>`).join('')}
    </select>
  `;
}

function renderPartnerListField(){
  return `
    <div class="partner-rows">
      ${state.partners.partnersList.map((row, index)=>`
        <div class="partner-row partner-row-2">
          <input type="text" value="${escapeHtml(row.name)}" placeholder="Партнёр: организация или физическое лицо"
            oninput="setPartnerArrayValue('partnersList', ${index}, 'name', this.value)" onblur="renderForm()" />
          <input type="text" value="${escapeHtml(row.link)}" placeholder="Сайт / социальная сеть / ссылка"
            oninput="setPartnerArrayValue('partnersList', ${index}, 'link', this.value)" />
          <button type="button" class="mini-remove" onclick="removePartnerRow('partnersList', ${index})">Удалить</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addPartnerRow('partnersList')">+ Добавить партнёра</button>
  `;
}

function renderPartnerContributionsField(){
  return `
    <div class="partner-rows">
      ${state.partners.contributions.map((row, index)=>`
        <div class="partner-row partner-row-2">
          ${partnerSelectHtml('contributions', index, 'partner')}
          <input type="text" value="${escapeHtml(row.contribution)}" placeholder="Например: предоставляет площадку, помогает с участниками, даёт экспертов, распространяет информацию, предоставляет оборудование."
            oninput="setPartnerArrayValue('contributions', ${index}, 'contribution', this.value)" />
          <button type="button" class="mini-remove" onclick="removePartnerRow('contributions', ${index})">Удалить</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addPartnerRow('contributions')">+ Добавить вклад</button>
  `;
}

function renderPartnerSupportFormsField(options){
  return `
    <div class="partner-rows">
      ${state.partners.supportForms.map((row, index)=>`
        <div class="partner-row partner-row-stack">
          <div class="partner-row-head">
            ${partnerSelectHtml('supportForms', index, 'partner')}
            <button type="button" class="mini-icon-remove" aria-label="Удалить форму участия" onclick="removePartnerRow('supportForms', ${index})">×</button>
          </div>
          <div class="chip-group">
            ${options.map(option=>{
              const selected = (row.forms || []).includes(option);
              return `<button type="button" class="chip ${selected?'selected':''}" onclick="togglePartnerSupportForm(${index}, '${option.replace(/'/g,"\\'")}')">${option}</button>`;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addPartnerRow('supportForms')">+ Добавить форму участия</button>
  `;
}

function renderPartnerConfirmationsField(options){
  const visibleCount = getVisibleConfirmationLinkCount();
  const visibleLinks = state.partners.confirmationLinks.slice(0, visibleCount);
  return `
    ${chipGroupHtml('partners', 'confirmationTypes', options, true)}
    <div class="link-grid">
      ${visibleLinks.map((link, index)=>`
        <div class="link-row">
          <input type="text" value="${escapeHtml(link)}" placeholder="Ссылка ${index+1}: письмо, публикация, пост, документ, облачная папка или страница партнёра"
            oninput="setConfirmationLink(${index}, this.value)" />
          <button type="button" class="mini-icon-remove" aria-label="Удалить ссылку" onclick="removeConfirmationLink(${index})">×</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addConfirmationLink()">+ Добавить ссылку</button>
  `;
}

function renderPartnerMoneyField(){
  const showMoneyRows = state.partners.moneySupportStatus === 'Да';
  return `
    ${chipGroupHtml('partners', 'moneySupportStatus', ['Да','Нет','Пока не знаю'], false)}
    ${showMoneyRows ? `
      <div class="partner-rows money-rows">
        ${state.partners.moneyItems.map((row, index)=>`
          <div class="partner-row partner-row-3">
            ${partnerSelectHtml('moneyItems', index, 'partner')}
            <input type="number" value="${escapeHtml(row.amount)}" placeholder="Оценочная сумма, ₽"
              oninput="setPartnerArrayValue('moneyItems', ${index}, 'amount', this.value)" />
            <input type="text" value="${escapeHtml(row.subject)}" placeholder="Например: зал, печать материалов, работа экспертов, оборудование, транспорт, информационное размещение."
              oninput="setPartnerArrayValue('moneyItems', ${index}, 'subject', this.value)" />
            <button type="button" class="mini-remove" onclick="removePartnerRow('moneyItems', ${index})">Удалить</button>
          </div>
        `).join('')}
      </div>
      <button type="button" class="mini-add" onclick="addPartnerRow('moneyItems')">+ Добавить оценку</button>
    ` : ''}
  `;
}

const promotionRowTemplates = {
  channels:{type:'', customType:'', nameLink:'', purpose:''},
  communicationPlan:{message:'', channel:'', timing:'', timingCustom:'', goal:''},
  interactionMechanics:{mechanic:'', channel:'', feedbackUse:''}
};

const promotionChannelTypes = [
  'Группа ВКонтакте',
  'Канал Telegram',
  'Канал MAX',
  'Яндекс Дзен',
  'Сайт проекта',
  'Сайт организации-заявителя',
  'Сайт партнёра',
  'Электронная рассылка',
  'СМИ',
  'Социальные сети партнёров',
  'Блог или медиаплощадка',
  'Наружная реклама',
  'Печатные материалы',
  'Офлайн-площадка',
  'Профессиональное сообщество',
  'Образовательная организация',
  'Учреждение культуры',
  'Другое'
];

const promotionTimingOptions = [
  'До начала проекта',
  'Во время набора участников',
  'Перед мероприятием',
  'Во время реализации',
  'После каждого мероприятия',
  'Раз в неделю',
  'Несколько раз в месяц',
  'После завершения проекта',
  'Конкретная дата или период'
];

function getPromotionChannelLabels(){
  return (state.promotion.channels || [])
    .map(row=>{
      const type = (row.customType || row.type || '').trim();
      const name = (row.nameLink || '').trim();
      if(type && name) return `${type} — ${name}`;
      return name || type;
    })
    .filter(Boolean);
}

function setPromotionArrayValue(field, index, key, value){
  state.promotion[field][index][key] = value;
  renderSidebar();
  renderRibbon();
}

function addPromotionRow(field){
  state.promotion[field].push({...promotionRowTemplates[field]});
  renderForm();
  renderSidebar();
  renderRibbon();
}

function removePromotionRow(field, index){
  if(state.promotion[field].length > 1){
    state.promotion[field].splice(index, 1);
  } else {
    state.promotion[field][0] = {...promotionRowTemplates[field]};
  }
  renderForm();
  renderSidebar();
  renderRibbon();
}

function promotionChannelSelectHtml(field, index, key){
  const addedChannels = getPromotionChannelLabels();
  const current = state.promotion[field][index][key] || '';
  const baseChannels = promotionChannelTypes.filter(type=>!addedChannels.includes(type));
  return `
    <select onchange="setPromotionArrayValue('${field}', ${index}, '${key}', this.value)">
      <option value="">Выберите канал</option>
      ${addedChannels.length ? `
        <optgroup label="Добавленные каналы">
          ${addedChannels.map(channel=>`<option value="${escapeHtml(channel)}" ${current===channel?'selected':''}>${escapeHtml(channel)}</option>`).join('')}
        </optgroup>
      ` : ''}
      <optgroup label="Другие каналы">
        ${baseChannels.map(channel=>`<option value="${escapeHtml(channel)}" ${current===channel?'selected':''}>${escapeHtml(channel)}</option>`).join('')}
      </optgroup>
    </select>
  `;
}

function promoField(label, content, hint=''){
  return `
    <div class="promo-field">
      <div class="promo-field-label">${label}</div>
      ${content}
      ${hint ? `<div class="promo-focus-hint">${hint}</div>` : ''}
    </div>
  `;
}

function renderPromotionChannelsField(){
  return `
    <div class="partner-rows">
      ${state.promotion.channels.map((row, index)=>`
        <div class="partner-row promo-channel-row">
          ${promoField('Тип канала', `
            <select onchange="setPromotionArrayValue('channels', ${index}, 'type', this.value); renderForm();">
              <option value="">Тип канала</option>
              ${promotionChannelTypes.map(type=>`<option value="${type}" ${row.type===type?'selected':''}>${type}</option>`).join('')}
            </select>
          `)}
          ${promoField('Название или ссылка', `
            <input type="text" value="${escapeHtml(row.nameLink)}" placeholder="Название или ссылка"
              oninput="setPromotionArrayValue('channels', ${index}, 'nameLink', this.value)" onblur="renderForm()" />
          `, 'Укажите название конкретной группы, канала, сайта, СМИ или площадки. При наличии можно вставить ссылку.')}
          ${promoField('Для чего используется', `
            <input type="text" value="${escapeHtml(row.purpose)}" placeholder="Например: набор участников"
              oninput="setPromotionArrayValue('channels', ${index}, 'purpose', this.value)" />
          `, 'Например: набор участников, информирование аудитории, освещение хода проекта, работа с партнёрами или публикация результатов.')}
          <button type="button" class="mini-icon-remove" title="Удалить канал" aria-label="Удалить канал" onclick="removePromotionRow('channels', ${index})">×</button>
          ${row.type === 'Другое' ? `
            <div class="promo-custom-field">
              ${promoField('Уточнение типа канала', `
                <input type="text" value="${escapeHtml(row.customType)}" placeholder="Уточните тип канала"
                  oninput="setPromotionArrayValue('channels', ${index}, 'customType', this.value)" onblur="renderForm()" />
              `)}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addPromotionRow('channels')">+ Добавить канал</button>
  `;
}

function renderPromotionPlanField(){
  return `
    <div class="partner-rows">
      ${state.promotion.communicationPlan.map((row, index)=>`
        <div class="partner-row promo-plan-row">
          ${promoField('Что публикуется', `
            <input type="text" value="${escapeHtml(row.message)}" placeholder="Например: анонс набора"
              oninput="setPromotionArrayValue('communicationPlan', ${index}, 'message', this.value)" />
          `, 'Например: анонс набора, программа мероприятия, интервью, история участника, промежуточные итоги или итоговый отчёт.')}
          ${promoField('Канал', promotionChannelSelectHtml('communicationPlan', index, 'channel'))}
          ${promoField('Когда / как часто', `
            <select onchange="setPromotionArrayValue('communicationPlan', ${index}, 'timing', this.value); renderForm();">
              <option value="">Например: раз в неделю</option>
              ${promotionTimingOptions.map(timing=>`<option value="${timing}" ${row.timing===timing?'selected':''}>${timing}</option>`).join('')}
            </select>
          `, 'Укажите период или регулярность: за две недели до старта, раз в неделю, перед каждым мероприятием, после завершения проекта.')}
          ${promoField('Цель коммуникации', `
            <input type="text" value="${escapeHtml(row.goal)}" placeholder="Например: привлечь участников"
              oninput="setPromotionArrayValue('communicationPlan', ${index}, 'goal', this.value)" />
          `, 'Например: привлечь участников, напомнить о мероприятии, поддержать интерес, получить обратную связь или показать результаты.')}
          <button type="button" class="mini-icon-remove" title="Удалить действие" aria-label="Удалить действие" onclick="removePromotionRow('communicationPlan', ${index})">×</button>
          ${row.timing === 'Конкретная дата или период' ? `
            <div class="promo-custom-field">
              ${promoField('Конкретная дата или период', `
                <input type="text" value="${escapeHtml(row.timingCustom)}" placeholder="Уточните дату или период"
                  oninput="setPromotionArrayValue('communicationPlan', ${index}, 'timingCustom', this.value)" />
              `)}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addPromotionRow('communicationPlan')">+ Добавить действие в план</button>
  `;
}

function renderPromotionInteractionsField(){
  const mechanics = state.promotion.interactionTypes || [];
  return `
    <div class="partner-rows">
      ${state.promotion.interactionMechanics.map((row, index)=>`
        <div class="partner-row promo-interaction-row">
          ${promoField('Механика', `
            <select ${mechanics.length ? '' : 'disabled'} onchange="setPromotionArrayValue('interactionMechanics', ${index}, 'mechanic', this.value)">
              <option value="">${mechanics.length ? 'Выберите механику' : 'Сначала выберите механику выше'}</option>
              ${mechanics.map(mechanic=>`<option value="${escapeHtml(mechanic)}" ${row.mechanic===mechanic?'selected':''}>${escapeHtml(mechanic)}</option>`).join('')}
            </select>
          `)}
          ${promoField('Канал', promotionChannelSelectHtml('interactionMechanics', index, 'channel'))}
          ${promoField('Как используется обратная связь', `
            <input type="text" value="${escapeHtml(row.feedbackUse)}" placeholder="Как будет использована обратная связь"
              oninput="setPromotionArrayValue('interactionMechanics', ${index}, 'feedbackUse', this.value)" />
          `, 'Например: для корректировки программы, выбора тем, улучшения мероприятий, оценки удовлетворённости или планирования продолжения проекта.')}
          <button type="button" class="mini-icon-remove" title="Удалить механику взаимодействия" aria-label="Удалить механику взаимодействия" onclick="removePromotionRow('interactionMechanics', ${index})">×</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addPromotionRow('interactionMechanics')">+ Добавить механику взаимодействия</button>
  `;
}

const resourceRowTemplates = {
  requiredItems:{type:'', customType:'', amount:'', comment:''},
  budgetItems:{category:'', customCategory:'', amount:'', comment:''},
  cofundingItems:{sourceType:'', sourceName:'', amount:'', description:''}
};

const resourceTypeOptions = [
  'Сотрудники и специалисты',
  'Волонтёры',
  'Помещение',
  'Площадка',
  'Оборудование',
  'Инвентарь',
  'Расходные материалы',
  'Транспорт',
  'Проживание',
  'Питание',
  'Полиграфия',
  'Программное обеспечение',
  'Сайт или информационная система',
  'Связь и интернет',
  'Юридические услуги',
  'Информационные услуги',
  'Консультационные услуги',
  'Подрядные работы',
  'Иное'
];

const budgetCategoryOptions = [
  'Оплата труда штатных работников',
  'Выплаты по гражданско-правовым договорам',
  'Страховые взносы',
  'Командировочные расходы',
  'Транспортные расходы',
  'Проживание',
  'Питание',
  'Аренда помещений',
  'Офисные расходы',
  'Приобретение оборудования',
  'Аренда оборудования',
  'Приобретение инвентаря',
  'Расходные материалы',
  'Разработка сайта',
  'Поддержка сайта или информационной системы',
  'Юридические услуги',
  'Информационные услуги',
  'Консультационные услуги',
  'Расходы на проведение мероприятий',
  'Полиграфия',
  'Издательские расходы',
  'Продвижение и реклама',
  'Прочие прямые расходы с детализацией',
  'Иное'
];

const cofundingSourceOptions = [
  'Собственные средства заявителя',
  'Денежный вклад партнёра',
  'Помещение',
  'Оборудование',
  'Материалы',
  'Транспорт',
  'Работа специалистов',
  'Волонтёрский труд',
  'Информационная поддержка',
  'Организационная поддержка',
  'Услуги партнёров',
  'Иное'
];

function setResourceArrayValue(field, index, key, value){
  state.resources[field][index][key] = value;
  renderSidebar();
  renderRibbon();
}

function addResourceRow(field){
  state.resources[field].push({...resourceRowTemplates[field]});
  renderForm();
  renderSidebar();
  renderRibbon();
}

function removeResourceRow(field, index){
  if(state.resources[field].length > 1){
    state.resources[field].splice(index, 1);
  } else {
    state.resources[field][0] = {...resourceRowTemplates[field]};
  }
  renderForm();
  renderSidebar();
  renderRibbon();
}

function partnerOrSourceSelectHtml(index){
  const partners = getPartnerNames();
  const current = state.resources.cofundingItems[index].sourceName || '';
  return `
    <select onchange="setResourceArrayValue('cofundingItems', ${index}, 'sourceName', this.value)">
      <option value="">Партнёр / источник</option>
      ${partners.length ? `
        <optgroup label="Партнёры из раздела 10">
          ${partners.map(partner=>`<option value="${escapeHtml(partner)}" ${current===partner?'selected':''}>${escapeHtml(partner)}</option>`).join('')}
        </optgroup>
      ` : ''}
      <optgroup label="Другие источники">
        <option value="Заявитель" ${current==='Заявитель'?'selected':''}>Заявитель</option>
        <option value="Команда проекта" ${current==='Команда проекта'?'selected':''}>Команда проекта</option>
        <option value="Партнёр не указан" ${current==='Партнёр не указан'?'selected':''}>Партнёр не указан</option>
        <option value="Иной источник" ${current==='Иной источник'?'selected':''}>Иной источник</option>
      </optgroup>
    </select>
  `;
}

function focusTextArea(sectionId, field, placeholder, rows, hint){
  const val = state[sectionId][field] || '';
  return `
    <div class="promo-field">
      <textarea rows="${rows}" placeholder="${placeholder}"
        oninput="state['${sectionId}']['${field}']=this.value; renderSidebar(); renderRibbon();">${escapeHtml(val)}</textarea>
      ${hint ? `<div class="promo-focus-hint">${hint}</div>` : ''}
    </div>
  `;
}

function renderResourceRequiredField(){
  return `
    <div class="partner-rows">
      ${state.resources.requiredItems.map((row, index)=>`
        <div class="partner-row resource-required-row">
          ${promoField('Тип ресурса', `
            <select onchange="setResourceArrayValue('requiredItems', ${index}, 'type', this.value); renderForm();">
              <option value="">Тип ресурса</option>
              ${resourceTypeOptions.map(type=>`<option value="${type}" ${row.type===type?'selected':''}>${type}</option>`).join('')}
            </select>
          `)}
          ${promoField('Количество / объём', `
            <input type="text" value="${escapeHtml(row.amount)}" placeholder="Например: 3 специалиста"
              oninput="setResourceArrayValue('requiredItems', ${index}, 'amount', this.value)" />
          `)}
          ${promoField('Комментарий', `
            <input type="text" value="${escapeHtml(row.comment)}" placeholder="Для чего нужен ресурс"
              oninput="setResourceArrayValue('requiredItems', ${index}, 'comment', this.value)" />
          `, 'Уточните, для каких мероприятий и задач требуется этот ресурс.')}
          <button type="button" class="mini-icon-remove" title="Удалить ресурс" aria-label="Удалить ресурс" onclick="removeResourceRow('requiredItems', ${index})">×</button>
          ${row.type === 'Иное' ? `
            <div class="promo-custom-field">
              ${promoField('Уточнение типа ресурса', `
                <input type="text" value="${escapeHtml(row.customType)}" placeholder="Уточните ресурс"
                  oninput="setResourceArrayValue('requiredItems', ${index}, 'customType', this.value)" />
              `)}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addResourceRow('requiredItems')">+ Добавить ресурс</button>
  `;
}

function renderResourceBudgetField(){
  return `
    <div class="partner-rows">
      ${state.resources.budgetItems.map((row, index)=>`
        <div class="partner-row resource-budget-row">
          ${promoField('Статья расходов', `
            <select onchange="setResourceArrayValue('budgetItems', ${index}, 'category', this.value); renderForm();">
              <option value="">Статья расходов</option>
              ${budgetCategoryOptions.map(category=>`<option value="${category}" ${row.category===category?'selected':''}>${category}</option>`).join('')}
            </select>
          `)}
          ${promoField('Сумма, ₽', `
            <input type="number" min="0" value="${escapeHtml(row.amount)}" placeholder="0"
              oninput="if(this.value && Number(this.value)<0)this.value=''; setResourceArrayValue('budgetItems', ${index}, 'amount', this.value)" />
          `)}
          ${promoField('Краткий комментарий', `
            <input type="text" value="${escapeHtml(row.comment)}" placeholder="Что входит в сумму"
              oninput="setResourceArrayValue('budgetItems', ${index}, 'comment', this.value)" />
          `, 'Уточните, с каким мероприятием связан расход, зачем он нужен и как рассчитана стоимость.')}
          <button type="button" class="mini-icon-remove" title="Удалить статью расходов" aria-label="Удалить статью расходов" onclick="removeResourceRow('budgetItems', ${index})">×</button>
          ${row.category === 'Иное' ? `
            <div class="promo-custom-field">
              ${promoField('Уточнение статьи расходов', `
                <input type="text" value="${escapeHtml(row.customCategory)}" placeholder="Уточните статью расходов"
                  oninput="setResourceArrayValue('budgetItems', ${index}, 'customCategory', this.value)" />
              `)}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addResourceRow('budgetItems')">+ Добавить статью расходов</button>
  `;
}

function renderResourceCofundingField(){
  const showRows = state.resources.cofundingStatus === 'Да';
  return `
    ${chipGroupHtml('resources', 'cofundingStatus', ['Да','Нет','Пока не определено'], false)}
    ${showRows ? `
      <div class="partner-rows resource-cofunding-rows">
        ${state.resources.cofundingItems.map((row, index)=>`
          <div class="partner-row resource-cofunding-row">
            ${promoField('Источник софинансирования', `
              <select onchange="setResourceArrayValue('cofundingItems', ${index}, 'sourceType', this.value)">
                <option value="">Источник вклада</option>
                ${cofundingSourceOptions.map(source=>`<option value="${source}" ${row.sourceType===source?'selected':''}>${source}</option>`).join('')}
              </select>
            `, 'Софинансирование — собственные средства и привлечённые ресурсы, которые используются именно в этом проекте.')}
            ${promoField('Партнёр / источник', partnerOrSourceSelectHtml(index))}
            ${promoField('Сумма или эквивалент, ₽', `
              <input type="number" min="0" value="${escapeHtml(row.amount)}" placeholder="0"
                oninput="if(this.value && Number(this.value)<0)this.value=''; setResourceArrayValue('cofundingItems', ${index}, 'amount', this.value)" />
            `, 'Денежный эквивалент — оценочная стоимость помещения, оборудования, услуг, работы специалистов или других ресурсов.')}
            ${promoField('Описание вклада', `
              <input type="text" value="${escapeHtml(row.description)}" placeholder="Например: бесплатное помещение"
                oninput="setResourceArrayValue('cofundingItems', ${index}, 'description', this.value)" />
            `, 'Указывайте только тот вклад, который непосредственно используется для реализации данного проекта.')}
            <button type="button" class="mini-icon-remove" title="Удалить источник софинансирования" aria-label="Удалить источник софинансирования" onclick="removeResourceRow('cofundingItems', ${index})">×</button>
          </div>
        `).join('')}
      </div>
      <button type="button" class="mini-add" onclick="addResourceRow('cofundingItems')">+ Добавить источник софинансирования</button>
    ` : ''}
  `;
}

function renderResourceEligibilityField(options){
  return `
    ${checkListHtml('resources', 'eligibilityChecks', options, 2)}
    <div class="resource-warning">Требования разных конкурсов могут различаться. Перед подачей заявки обязательно проверьте положение и бюджетные правила конкретного конкурса.</div>
    <div class="conditional-field">
      <div class="field-label">Спорные или требующие проверки расходы</div>
      ${textArea('resources', 'eligibilityNotes', 'Укажите статьи, в допустимости которых вы не уверены или которые требуют дополнительного обоснования.', 3)}
    </div>
  `;
}

const supportTypeOptions = [
  'Финансовая поддержка',
  'Экспертная поддержка',
  'Партнёрская поддержка',
  'Площадки',
  'Материальные ресурсы',
  'Наставничество',
  'Информационная поддержка',
  'Волонтёрская поддержка',
  'Профессиональные контакты',
  'Организационная поддержка',
  'Административная поддержка',
  'Юридическая поддержка',
  'Иная поддержка'
];

const supportLegacyTypeMap = {
  'Финансирование':'Финансовая поддержка',
  'Экспертиза':'Экспертная поддержка',
  'Партнёрство':'Партнёрская поддержка',
  'Ресурсы':'Материальные ресурсы',
  'Волонтёры':'Волонтёрская поддержка',
  'Контакты':'Профессиональные контакты'
};

const supportPriorityHints = {
  '1':'Желательно, но проект может быть реализован без этой поддержки.',
  '2':'Полезно: поддержка заметно упростит реализацию.',
  '3':'Важно: без неё часть проекта придётся изменить.',
  '4':'Очень важно: отсутствие поддержки создаёт серьёзные риски.',
  '5':'Критически необходимо: без этой поддержки проект не сможет стартовать или достичь заявленного результата.'
};

const supportStatusOptions = [
  'Ещё не искали',
  'Планируем обратиться',
  'Ищем подходящую организацию или специалиста',
  'Ведём переговоры',
  'Есть предварительная договорённость',
  'Поддержка подтверждена',
  'Поддержка уже получена'
];

function normalizeSupportState(){
  const support = state.support;
  support.types = Array.isArray(support.types) ? support.types.map(type=>supportLegacyTypeMap[type] || type).filter(Boolean) : [];
  support.types = [...new Set(support.types)];
  support.priorityLevels = support.priorityLevels && typeof support.priorityLevels === 'object' ? support.priorityLevels : {};
  support.priorityNotes = support.priorityNotes && typeof support.priorityNotes === 'object' ? support.priorityNotes : {};
  support.rationales = support.rationales && typeof support.rationales === 'object' ? support.rationales : {};
  support.statuses = support.statuses && typeof support.statuses === 'object' ? support.statuses : {};
  support.statusNotes = support.statusNotes && typeof support.statusNotes === 'object' ? support.statusNotes : {};
}

function setSupportMapValue(mapName, supportType, value){
  normalizeSupportState();
  state.support[mapName][supportType] = value;
  renderSidebar();
  renderRibbon();
}

function supportSelectedTypes(){
  normalizeSupportState();
  return state.support.types || [];
}

function renderSupportEmptyState(){
  return '<div class="support-empty">Сначала выберите один или несколько видов поддержки выше.</div>';
}

function renderSupportTypesField(){
  normalizeSupportState();
  return chipGroupHtml('support', 'types', supportTypeOptions, true);
}

function renderSupportPriorityField(){
  const selectedTypes = supportSelectedTypes();
  if(!selectedTypes.length) return renderSupportEmptyState();
  return `
    <div class="support-table">
      ${selectedTypes.map(type=>{
        const level = state.support.priorityLevels[type] || '';
        return `
          <div class="support-row support-priority-row">
            <div class="support-row-title">${escapeHtml(type)}</div>
            ${promoField('Критичность', `
              <select onchange="setSupportMapValue('priorityLevels', '${type.replace(/'/g,"\\'")}', this.value); renderForm();">
                <option value="">Оценка 1–5</option>
                ${Object.keys(supportPriorityHints).map(value=>`<option value="${value}" ${level===value?'selected':''}>${value}</option>`).join('')}
              </select>
            `)}
            ${promoField('Пояснение оценки', `
              <input type="text" value="${escapeHtml(state.support.priorityNotes[type] || '')}" placeholder="Почему такая оценка"
                oninput="setSupportMapValue('priorityNotes', '${type.replace(/'/g,"\\'")}', this.value)" />
            `)}
            ${level ? `<div class="support-priority-hint">${escapeHtml(supportPriorityHints[level])}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderSupportRationaleField(){
  const selectedTypes = supportSelectedTypes();
  if(!selectedTypes.length) return renderSupportEmptyState();
  return `
    <div class="support-table">
      ${selectedTypes.map(type=>`
        <div class="support-row support-rationale-row">
          <div class="support-row-title">${escapeHtml(type)}</div>
          <textarea rows="2" placeholder="Почему эта поддержка нужна проекту"
            oninput="setSupportMapValue('rationales', '${type.replace(/'/g,"\\'")}', this.value)">${escapeHtml(state.support.rationales[type] || '')}</textarea>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSupportStatusField(){
  const selectedTypes = supportSelectedTypes();
  if(!selectedTypes.length) return renderSupportEmptyState();
  return `
    <div class="support-table">
      ${selectedTypes.map(type=>`
        <div class="support-row support-status-row">
          <div class="support-row-title">${escapeHtml(type)}</div>
          ${promoField('Статус', `
            <select onchange="setSupportMapValue('statuses', '${type.replace(/'/g,"\\'")}', this.value)">
              <option value="">Выберите статус</option>
              ${supportStatusOptions.map(status=>`<option value="${status}" ${state.support.statuses[type]===status?'selected':''}>${status}</option>`).join('')}
            </select>
          `)}
          ${promoField('Комментарий', `
            <input type="text" value="${escapeHtml(state.support.statusNotes[type] || '')}" placeholder="Организация или ситуация"
              oninput="setSupportMapValue('statusNotes', '${type.replace(/'/g,"\\'")}', this.value)" />
          `)}
        </div>
      `).join('')}
    </div>
  `;
}

const materialRowTemplates = {
  researchItems:{type:'', description:''},
  supportLetterItems:{author:'', comment:''},
  linkItems:{url:'', description:''}
};

const materialResearchTypes = [
  'Опрос',
  'Интервью',
  'Статистика',
  'Аналитический отчёт',
  'Исследование',
  'Мониторинг',
  'Иное'
];

function ensureMaterialRows(field){
  if(!Array.isArray(state.materials[field]) || !state.materials[field].length){
    state.materials[field] = [{...materialRowTemplates[field]}];
  }
}

function setMaterialStatus(field, value){
  state.materials[field] = state.materials[field] === value ? '' : value;
  renderForm();
  renderSidebar();
  renderRibbon();
}

function setMaterialArrayValue(field, index, key, value){
  ensureMaterialRows(field);
  state.materials[field][index][key] = value;
  renderSidebar();
  renderRibbon();
}

function addMaterialRow(field){
  ensureMaterialRows(field);
  state.materials[field].push({...materialRowTemplates[field]});
  renderForm();
  renderSidebar();
  renderRibbon();
}

function removeMaterialRow(field, index){
  ensureMaterialRows(field);
  if(state.materials[field].length > 1){
    state.materials[field].splice(index, 1);
  } else {
    state.materials[field][0] = {...materialRowTemplates[field]};
  }
  renderForm();
  renderSidebar();
  renderRibbon();
}

function materialToggleHtml(field){
  const current = state.materials[field] || '';
  return `
    <div class="chip-group">
      ${['Да','Нет'].map(value=>`
        <button type="button" class="chip ${current===value?'selected':''}" onclick="setMaterialStatus('${field}', '${value}')">${value}</button>
      `).join('')}
    </div>
  `;
}

function renderMaterialTextToggle(statusField, textField, placeholder, rows=2){
  return `
    ${materialToggleHtml(statusField)}
    ${state.materials[statusField] === 'Да' ? `
      <div class="conditional-field">
        ${textArea('materials', textField, placeholder, rows)}
      </div>
    ` : ''}
  `;
}

function renderMaterialsResearchField(){
  if(state.materials.researchStatus !== 'Да') return '';
  ensureMaterialRows('researchItems');
  return `
    <div class="partner-rows">
      ${state.materials.researchItems.map((row, index)=>`
        <div class="partner-row material-research-row">
          ${promoField('Тип исследования / данных', `
            <select onchange="setMaterialArrayValue('researchItems', ${index}, 'type', this.value)">
              <option value="">Тип данных</option>
              ${materialResearchTypes.map(type=>`<option value="${type}" ${row.type===type?'selected':''}>${type}</option>`).join('')}
            </select>
          `)}
          ${promoField('Описание', `
            <input type="text" value="${escapeHtml(row.description)}" placeholder="Краткое описание"
              oninput="setMaterialArrayValue('researchItems', ${index}, 'description', this.value)" />
          `)}
          <button type="button" class="mini-icon-remove" title="Удалить строку" aria-label="Удалить строку" onclick="removeMaterialRow('researchItems', ${index})">×</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addMaterialRow('researchItems')">+ Добавить данные</button>
  `;
}

function renderMaterialsLettersField(){
  if(state.materials.supportLettersStatus !== 'Да') return '';
  ensureMaterialRows('supportLetterItems');
  return `
    <div class="partner-rows">
      ${state.materials.supportLetterItems.map((row, index)=>`
        <div class="partner-row material-letter-row">
          ${promoField('Организация / автор письма', `
            <input type="text" value="${escapeHtml(row.author)}" placeholder="Кто готовит письмо"
              oninput="setMaterialArrayValue('supportLetterItems', ${index}, 'author', this.value)" />
          `)}
          ${promoField('Комментарий', `
            <input type="text" value="${escapeHtml(row.comment)}" placeholder="Статус или содержание"
              oninput="setMaterialArrayValue('supportLetterItems', ${index}, 'comment', this.value)" />
          `)}
          <button type="button" class="mini-icon-remove" title="Удалить письмо" aria-label="Удалить письмо" onclick="removeMaterialRow('supportLetterItems', ${index})">×</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addMaterialRow('supportLetterItems')">+ Добавить письмо</button>
  `;
}

function renderMaterialsLinksField(){
  ensureMaterialRows('linkItems');
  return `
    <div class="partner-rows">
      ${state.materials.linkItems.map((row, index)=>`
        <div class="partner-row material-link-row">
          ${promoField('Ссылка', `
            <input type="text" value="${escapeHtml(row.url)}" placeholder="https://..."
              oninput="setMaterialArrayValue('linkItems', ${index}, 'url', this.value)" />
          `)}
          ${promoField('Описание', `
            <input type="text" value="${escapeHtml(row.description)}" placeholder="Что находится по ссылке"
              oninput="setMaterialArrayValue('linkItems', ${index}, 'description', this.value)" />
          `)}
          <button type="button" class="mini-icon-remove" title="Удалить ссылку" aria-label="Удалить ссылку" onclick="removeMaterialRow('linkItems', ${index})">×</button>
        </div>
      `).join('')}
    </div>
    <button type="button" class="mini-add" onclick="addMaterialRow('linkItems')">+ Добавить ссылку</button>
  `;
}

function normalizeMaterialsState(){
  ['presentations','photos','videos','research','supportLetters'].forEach(field=>{
    const statusField = `${field}Status`;
    if(state.materials[field] && !state.materials[statusField]){
      state.materials[statusField] = 'Да';
    }
  });
}

/* ============== RENDER FORM BODIES ============== */

function diagnosticEducationCard(){
  return `
    <section class="edu-card edu-card-diagnostic" aria-label="Образовательная карточка Первичная диагностика">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Первичная диагностика — это честная точка старта</h3>
        <p>Диагностика показывает реальное состояние проекта, его слабые места и риски. Это не оценка шансов на победу или качества автора, а способ понять, что уже готово и что нужно проработать дальше.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>реальную стадию проекта</span>
          <span>обоснованный уровень готовности</span>
          <span>понимание слабых мест</span>
          <span>конкретные риски старта</span>
          <span>ясные приоритеты дальнейшей работы</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>«Городская мастерская профессиональных проб»</h4>
          <p><b>Стадия:</b> инициатива. <b>Готовность:</b> средняя.</p>
          <p><b>Уже есть:</b> идея коротких профессиональных проб, предварительный интерес педагогов и двух наставников.</p>
          <p><b>Требует доработки:</b> сузить целевую группу, подтвердить её потребность, закрепить площадку и определить показатели. <b>Риски:</b> договорённости пока устные, объём ресурсов не рассчитан.</p>
          <small>Почему сильный: автор честно отделяет готовую основу от того, что ещё предстоит проверить и подготовить.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>«Профориентационный проект для школьников города»</h4>
          <p><b>Стадия:</b> проект. <b>Готовность:</b> высокая. Планируются встречи и практические занятия. Партнёров привлекут позже, а результатом станет повышение интереса школьников к профессиям.</p>
          <small>Почему слабый: готовность завышена — аудитория и результат размыты, подтверждений нет, а риски заменены общими обещаниями.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типичные ошибки</div>
          <ul>
            <li>считать сильную идею готовым проектом;</li>
            <li>завышать стадию и уровень готовности;</li>
            <li>скрывать слабые места вместо их фиксации;</li>
            <li>называть риски слишком общо или не замечать их;</li>
            <li>не определять, что нужно проверить и подготовить первым.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>Могу ли я объяснить, почему выбрана эта стадия?</li>
            <li>Подтверждён ли заявленный уровень готовности?</li>
            <li>Какие слабые места нужно закрыть первыми?</li>
            <li>Какие реальные риски могут помешать старту?</li>
            <li>Понятны ли мне следующие шаги работы над проектом?</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>выберите стадию и готовность по фактам, затем зафиксируйте слабые места и риски. Используйте их как план дальнейшей работы в следующих разделах конструктора.</span>
      </div>
    </section>
  `;
}

function passportEducationCard(){
  return `
    <section class="edu-card edu-card-passport" aria-label="Образовательная карточка Паспорт проекта">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Паспорт проекта — это первое впечатление о заявке</h3>
        <p>Паспорт должен быстро показать суть и рамку проекта, а также кто отвечает за его реализацию. Если эта карточка размыта или противоречива, остальные разделы вызывают меньше доверия.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>понятное название, связанное с содержанием</span>
          <span>краткое описание без лозунгов</span>
          <span>согласованные тематику, тип и формат</span>
          <span>реалистичные масштаб и территорию</span>
          <span>понятного автора или заявителя</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <h4>«Первые пробы: мастерская выбора профессии»</h4>
          <p><b>Краткое описание:</b> подростки 14–17 лет пробуют разные профессиональные роли на коротких практических занятиях с наставниками и выбирают дальнейшие образовательные шаги.</p>
          <p><b>Тематика:</b> образование и просвещение; молодёжные инициативы. <b>Тип:</b> образовательный.</p>
          <p><b>Формат:</b> цикл коротких практических занятий с наставниками.</p>
          <p><b>Масштаб и территория:</b> муниципальный проект в округе Новые Берега.</p>
          <p><b>Заявитель:</b> команда педагогов и карьерных консультантов молодёжного центра.</p>
          <small>Почему сильный: из паспорта сразу понятны содержание, аудитория, территория и ответственная команда.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <h4>«Шаг в будущее»</h4>
          <p>Проект направлен на развитие молодёжи и раскрытие её потенциала. Планируются полезные мероприятия для школьников и студентов региона.</p>
          <small>Почему слабый: название и описание не раскрывают содержание. Масштаб, территория и заявитель остаются неясными.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типичные ошибки</div>
          <ul>
            <li>название не связано с содержанием проекта;</li>
            <li>описание звучит как лозунг;</li>
            <li>тематика или масштаб выбраны слишком широко;</li>
            <li>территория указана расплывчато;</li>
            <li>неясно, кто отвечает за реализацию.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>Понятно ли по названию, о чём проект?</li>
            <li>Можно ли быстро пересказать его суть?</li>
            <li>Совпадают ли тематика, тип и масштаб?</li>
            <li>Конкретно ли указана территория?</li>
            <li>Понятен ли заявитель и реалистична ли рамка проекта?</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>соберите паспорт как краткую и честную карточку проекта. Проблему, аудиторию, реализацию и результаты подробно раскройте в следующих разделах.</span>
      </div>
    </section>
  `;
}

function problemEducationCard(){
  return `
    <section class="edu-card edu-card-problem" aria-label="Образовательная карточка Проблема">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Проблема — это причина существования проекта</h3>
        <p>Проект нужен только тогда, когда существует конкретная и подтверждённая проблема. Пока неясно, что именно происходит и почему, цель, мероприятия и результаты не выглядят убедительно.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>конкретную проблему, а не общую тему</span>
          <span>понятную аудиторию и территорию</span>
          <span>причины сохранения проблемы</span>
          <span>факты, подтверждающие её актуальность</span>
          <span>описание ситуации без преждевременного решения</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <p>В округе Новые Берега подростки 14–17 лет выбирают дальнейшее обучение без практического знакомства с профессиями. Поэтому их представления о работе специалистов часто остаются поверхностными.</p>
          <p><b>Причины:</b> мало доступных профессиональных проб, а профориентация чаще ограничивается беседами и тестами.</p>
          <p><b>Подтверждения:</b> обращения родителей и повторяющиеся вопросы подростков на консультациях молодёжного центра.</p>
          <small>Почему сильный: понятно, что происходит, кого затрагивает проблема, почему она сохраняется и чем подтверждается.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <p>Молодёжи сложно выбрать профессию, поэтому необходимо проводить больше полезных встреч и мастер-классов, которые помогут школьникам раскрыть потенциал.</p>
          <small>Почему слабый: проблема сформулирована общо, аудитория и территория не уточнены, причин и подтверждений нет, а описание сразу переходит к решению.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типичные ошибки</div>
          <ul>
            <li>описывать тему, а не проблему;</li>
            <li>начинать с мероприятий и решения;</li>
            <li>не уточнять аудиторию и территорию;</li>
            <li>путать причины с последствиями;</li>
            <li>не приводить подтверждений или источников наблюдений.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>Понятно ли, что именно сейчас не работает?</li>
            <li>Ясно ли, кого затрагивает проблема?</li>
            <li>Объяснено ли, почему она существует?</li>
            <li>Есть ли факты или наблюдения, которые её подтверждают?</li>
            <li>Можно ли логично вывести из проблемы цель проекта?</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала опишите проблему, её аудиторию, причины и подтверждения. Только после этого переходите к решению, цели и другим разделам проекта.</span>
      </div>
    </section>
  `;
}

function audienceEducationCard(){
  return `
    <section class="edu-card edu-card-audience" aria-label="Образовательная карточка Целевая аудитория">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Целевая аудитория — это те, для кого должно произойти изменение</h3>
        <p>Аудитория определяет содержание, формат и масштаб всего проекта. Это не все, кто может увидеть или поддержать проект, а конкретные люди с общей ситуацией и потребностью.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>конкретную основную аудиторию</span>
          <span>значимые особенности этой группы</span>
          <span>понятные потребности участников</span>
          <span>подтверждённый интерес к проекту</span>
          <span>реалистичные территорию и охват</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <p><b>Основная аудитория:</b> подростки 14–17 лет из округа Новые Берега, которым предстоит выбирать дальнейшее обучение и профессию, но не хватает практического знакомства с работой специалистов.</p>
          <p><b>Потребность:</b> попробовать профессиональные роли, получить обратную связь и лучше понять возможные образовательные пути.</p>
          <p><b>Подтверждение интереса:</b> 36 из 48 опрошенных подростков хотели бы участвовать в профессиональных пробах; педагоги также фиксируют обращения родителей. <b>Планируемый прямой охват:</b> 40 участников первого набора.</p>
          <small>Почему сильный: аудитория конкретна, её потребность понятна, интерес подтверждён, а охват соответствует формату проекта.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <p>Проект предназначен для школьников, студентов, родителей и всех жителей региона, которые хотят развиваться, получать новые знания и интересно проводить время.</p>
          <small>Почему слабый: перечислены слишком разные группы без общей ситуации и потребности. Интерес предполагается, а территория и реальный охват не определены.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типичные ошибки</div>
          <ul>
            <li>указывать аудиторию «для всех»;</li>
            <li>считать целевой аудиторией всех участников и партнёров;</li>
            <li>перечислять группы без их потребностей;</li>
            <li>предполагать интерес без подтверждений;</li>
            <li>завышать прямой или косвенный охват.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>Могу ли я конкретно назвать основную аудиторию?</li>
            <li>Какая общая ситуация объединяет этих людей?</li>
            <li>Какая потребность делает проект важным именно для них?</li>
            <li>Чем подтверждается их заинтересованность?</li>
            <li>Реалистичны ли территория и планируемый охват?</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала определите основную аудиторию, её особенности, потребности и подтверждённый интерес. Дополнительные группы отделите от основных, а решение проекта стройте вокруг потребностей его непосредственных участников.</span>
      </div>
    </section>
  `;
}

function conceptEducationCard(){
  return `
    <section class="edu-card edu-card-concept" aria-label="Образовательная карточка Концепция проекта">
      <div class="edu-card-head">
        <span class="edu-card-kicker">Перед заполнением</span>
        <h3>Концепция проекта — это логика решения</h3>
        <p>Идея называет, что вы хотите создать, а концепция связывает формат, механизм и ценность с проблемой и аудиторией. Из неё должно быть понятно, что предлагается, как это сработает и что получат участники.</p>
      </div>

      <div class="edu-expert-box">
        <div class="edu-box-title">Что хотят увидеть эксперты</div>
        <div class="edu-expert-grid">
          <span>конкретное проектное решение</span>
          <span>понятный механизм его работы</span>
          <span>связь с проблемой и аудиторией</span>
          <span>ценность для непосредственных участников</span>
          <span>честные отличия и основания реалистичности</span>
        </div>
      </div>

      <div class="edu-examples">
        <article class="edu-example edu-example-good">
          <div class="edu-example-label">Хороший пример</div>
          <p><b>Идея:</b> цикл профессиональных проб для подростков 14–17 лет, выбирающих дальнейшее обучение.</p>
          <p><b>Механизм:</b> каждый участник пробует несколько профессиональных ролей, выполняет реальные мини-задания, получает обратную связь наставников и сравнивает опыт в личной карте выбора.</p>
          <p><b>Ценность:</b> подросток получает практический опыт и понимает, какие образовательные шаги подходят именно ему.</p>
          <p><b>Отличие и преимущество:</b> вместо бесед и тестов подростки получают опыт в реальной профессиональной ситуации; интерес участников подтверждён, а наставники готовы участвовать.</p>
          <small>Почему сильный: формат, механизм и ценность связаны с выявленной проблемой, а отличие и реализуемость имеют понятные основания.</small>
        </article>
        <article class="edu-example edu-example-weak">
          <div class="edu-example-label">Слабый пример</div>
          <p>Проект предлагает уникальную программу лекций, мастер-классов и встреч с интересными людьми. Инновационный подход поможет молодёжи развиваться, раскрывать потенциал и увереннее смотреть в будущее.</p>
          <small>Почему слабый: перечислены мероприятия, но механизм влияния на проблему не раскрыт. Ценность сформулирована общо, а уникальность ничем не подтверждена.</small>
        </article>
      </div>

      <div class="edu-support-grid">
        <div class="edu-support-card">
          <div class="edu-box-title">Типичные ошибки</div>
          <ul>
            <li>путать формат идеи с механизмом решения;</li>
            <li>заменять концепцию перечнем мероприятий;</li>
            <li>не связывать решение с проблемой и аудиторией;</li>
            <li>объявлять обычный подход уникальным;</li>
            <li>описывать пользу для организации вместо ценности для участников.</li>
          </ul>
        </div>
        <div class="edu-support-card">
          <div class="edu-box-title">Самопроверка</div>
          <ul class="edu-check-list">
            <li>Понятно ли, что именно предлагает проект?</li>
            <li>Могу ли я простыми словами объяснить механизм?</li>
            <li>Влияет ли решение на причины проблемы?</li>
            <li>Получает ли аудитория конкретную ценность?</li>
            <li>Честно ли обоснованы отличия и преимущества?</li>
          </ul>
        </div>
      </div>

      <div class="edu-work-link">
        <b>Как работать дальше:</b>
        <span>сначала соберите ясную концепцию: формат, механизм, ценность и реальные преимущества. Затем сформулируйте цель, задачи и переходите к планированию реализации проекта.</span>
      </div>
    </section>
  `;
}

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

const projectSectionSchemas = {
  diagnostic:{
    groups:[
      { title:'Стартовая оценка', fields:[
        {
          key:'maturityStage',
          label:'Стадия проекта',
          type:'chips',
          options:['Идея','Инициатива','Проект','Практика','Масштабирование'],
          multi:false,
          descriptions:{
            'Идея':'Начальный замысел, в котором уже видна тема или намерение, но ещё не собрана полная проектная логика: проблема, аудитория, решение, ресурсы и план требуют уточнения.',
            'Инициатива':'Проработанная концепция, где понятны проблема и предлагаемое решение, есть первичные данные или переговоры с заинтересованными сторонами, но план, команда, ресурсы и показатели ещё нуждаются в сборке.',
            'Проект':'Инициатива, упакованная в проектную рамку: определены цель, задачи, аудитория, мероприятия, команда, ресурсы, ожидаемые результаты и базовая логика реализации.',
            'Практика':'Уже реализованный или пилотный проект, который имеет опыт применения, первые результаты, обратную связь, подтверждения эффективности и может быть описан как рабочая модель.',
            'Масштабирование':'Доказанная практика, для которой понятны условия повторения, расширения на новые территории или аудитории, партнёрская модель, ресурсы и долгосрочное развитие.'
          }
        },
        {
          key:'readinessLevel',
          label:'Уровень готовности',
          type:'chips',
          options:['Низкий','Средний','Высокий'],
          multi:false,
          descriptions:{
            'Низкий':'Есть общий замысел, но ключевые элементы проекта описаны фрагментарно: не хватает доказательств проблемы, конкретной аудитории, плана действий, ресурсов или команды.',
            'Средний':'Базовая логика проекта уже просматривается, но отдельные разделы требуют усиления: нужно уточнить связи между проблемой, целью, мероприятиями, результатами, бюджетом и подтверждениями.',
            'Высокий':'Проект в целом готов к упаковке под конкурсную заявку: основные разделы согласованы между собой, есть реалистичный план, ресурсы, команда, показатели и подтверждающие материалы.'
          }
        },
        {
          key:'weakSpots',
          label:'Слабые места проекта',
          type:'checklist',
          columns:2,
          options:[
            'Проблема описана слишком общо',
            'Недостаточно подтверждений актуальности',
            'Целевая аудитория определена слишком широко',
            'Не раскрыты потребности аудитории',
            'Решение не связано с проблемой напрямую',
            'Цель не отражает ожидаемое изменение',
            'Задачи не связаны с мероприятиями',
            'Календарный план недостаточно конкретен',
            'Результаты не измеримы',
            'Нет понятных способов оценки результата',
            'Не хватает команды или компетенций',
            'Роль партнёров не подтверждена',
            'Бюджет не связан с содержанием проекта',
            'Не описана устойчивость после финансирования',
            'Не хватает подтверждающих материалов'
          ]
        },
        {
          key:'startRisks',
          label:'Риски старта',
          type:'checklist',
          columns:2,
          options:[
            'Не подтверждена реальная потребность аудитории',
            'Нет договорённостей с ключевыми партнёрами',
            'Не определены ответственные за реализацию',
            'Недостаточно ресурсов для первого этапа',
            'Сроки реализации выглядят нереалистично',
            'Бюджет требует дополнительных расчётов',
            'Есть расходы с сомнительной допустимостью',
            'Неясны условия использования площадок',
            'Не хватает правовых или организационных оснований',
            'Слабая коммуникация с целевой аудиторией',
            'Не продуман сбор обратной связи',
            'Не определены показатели успеха',
            'Зависимость от одного человека или партнёра',
            'Не подготовлены материалы для презентации проекта',
            'Нет плана действий при изменении условий'
          ]
        }
      ]}
    ]
  },
  passport:{
    groups:[
      { title:'Краткая карточка проекта', fields:[
        { key:'name', label:'Название проекта', type:'text', placeholder:'Например: Мастерская добрых соседей' },
        { key:'shortDescription', label:'Краткое описание', type:'textarea', placeholder:'В 2–4 предложениях: что это за проект, для кого он и в чём польза.', rows:4 },
        {
          key:'topic',
          label:'Тематика',
          type:'multiselect',
          max:2,
          placeholder:'Выберите до двух тематик',
          options:[
            'Социальные инициативы',
            'Предпринимательство и социальное предпринимательство',
            'Технологии и цифровые решения',
            'Кадры, образование и просвещение',
            'Экология и климат',
            'Культура, искусство и креативные индустрии',
            'Историческое наследие и память поколений',
            'Медиа и коммуникации',
            'Межкультурные и межнациональные коммуникации',
            'Развитие территорий и городской среды',
            'Ресурсы и инфраструктура развития',
            'Социокультурное благополучие',
            'Молодёжные инициативы',
            'Здоровье и качество жизни'
          ]
        },
        {
          key:'projectType',
          label:'Тип проекта',
          type:'chips',
          options:['Событийный','Образовательный','Социальный','Культурный','Исследовательский','Инфраструктурный','Другое'],
          multi:false,
          descriptions:{
            'Событийный':'Проект строится вокруг одного или серии событий: фестиваля, форума, конкурса, акции, выставки, конференции или иной публичной активности с понятной аудиторией и результатом.',
            'Образовательный':'Проект направлен на передачу знаний, развитие навыков, просвещение, наставничество, профориентацию, курсы, школы, тренинги или методическую работу.',
            'Социальный':'Проект решает общественно значимую проблему конкретных групп людей или территории и должен показать пользу, востребованность и измеримые изменения для аудитории.',
            'Культурный':'Проект связан с культурой, искусством, историческим наследием, творческими практиками, культурными событиями или созданием культурных благ.',
            'Исследовательский':'Проект предполагает сбор, анализ и обобщение данных, изучение практик, проведение исследований, подготовку выводов, методик или доказательной базы.',
            'Инфраструктурный':'Проект создаёт или развивает среду, площадку, сервис, пространство, ресурсную базу, платформу или условия для дальнейшей деятельности.',
            'Другое':'Используйте этот вариант, если проект не укладывается в основные типы или сочетает несколько форматов, требующих отдельного уточнения.'
          },
          conditionalText:{ value:'Другое', key:'projectTypeOther', label:'Укажите тип проекта', placeholder:'Например: акселерационная программа, сервисная модель, комплексный проект' }
        },
        {
          key:'scale',
          label:'Масштаб',
          type:'chips',
          options:['Локальный','Муниципальный','Региональный','Межрегиональный','Федеральный','Международный'],
          multi:false,
          descriptions:{
            'Локальный':'Проект реализуется на уровне конкретной площадки, организации, сообщества, микрорайона или небольшой территории.',
            'Муниципальный':'Проект охватывает город, район, муниципальное образование или несколько населённых пунктов внутри одного муниципального уровня.',
            'Региональный':'Проект реализуется в пределах одного субъекта РФ и учитывает особенности его территории, аудитории, партнёров и инфраструктуры.',
            'Межрегиональный':'Проект объединяет несколько субъектов РФ, предполагает работу с аудиториями, партнёрами или мероприятиями в разных регионах.',
            'Федеральный':'Проект рассчитан на значимый охват на уровне страны, федеральную повестку, широкую сеть участников или возможность применения в разных регионах.',
            'Международный':'Проект включает международных участников, партнёров, аудитории, обмен опытом, события или коммуникации за пределами одной страны.'
          }
        },
        { key:'territory', label:'Территория реализации', type:'text', placeholder:'Город, населённый пункт, регион или иная территория реализации проекта' },
        {
          key:'tags',
          label:'Ключевые теги',
          type:'multiselect',
          max:5,
          placeholder:'Выберите до пяти тегов',
          options:[
            'Культура',
            'Искусство',
            'Креативные индустрии',
            'Образование',
            'Просвещение',
            'Наука',
            'Молодёжь',
            'Волонтёрство',
            'Благотворительность',
            'Инклюзия',
            'Социальное предпринимательство',
            'Историческая память',
            'Патриотическое воспитание',
            'Медиа',
            'Новые медиа',
            'Цифровые решения',
            'Городская среда',
            'Развитие территорий',
            'Экология',
            'Здоровый образ жизни',
            'Наставничество',
            'Исследования',
            'Фестивали и события',
            'Методические материалы',
            'Партнёрства'
          ]
        },
        { key:'applicantName', label:'ФИО заявителя или название организации', type:'text', placeholder:'ФИО автора, название команды или организации' },
        { key:'applicantPlace', label:'Место работы / место учёбы', type:'text', placeholder:'Организация, учреждение, учебное заведение или статус' },
        { key:'applicantRole', label:'Должность или роль в проекте', type:'text', placeholder:'Например: руководитель проекта, автор идеи, координатор, специалист' }
      ]}
    ]
  },
  problem:{
    groups:[
      { title:'Проблемное поле', fields:[
        {
          key:'problemTypes',
          label:'Типы проблем',
          type:'multiselect',
          max:5,
          placeholder:'Выберите до пяти типов проблем',
          options:[
            'Недоступность услуг или возможностей',
            'Низкая информированность аудитории',
            'Дефицит знаний, навыков или компетенций',
            'Недостаток инфраструктуры или площадок',
            'Слабая вовлечённость целевых групп',
            'Социальная изоляция или исключённость',
            'Культурный или образовательный дефицит',
            'Утрата наследия, памяти или локальной идентичности',
            'Неразвитость партнёрств и коммуникаций',
            'Организационный или кадровый дефицит',
            'Экологическая или территориальная проблема',
            'Недостаток ресурсов для развития инициатив'
          ]
        },
        { key:'description', label:'Описание проблемы', type:'textarea', placeholder:'Опишите проблему своими словами', rows:4 },
        {
          key:'causeTypes',
          label:'Возможные причины',
          type:'multiselect',
          max:5,
          placeholder:'Выберите до пяти причин',
          options:[
            'Отсутствие доступных решений на территории',
            'Недостаточная координация участников и организаций',
            'Недостаток информации у целевой аудитории',
            'Недостаток компетенций у участников или специалистов',
            'Ограниченность инфраструктуры, оборудования или площадок',
            'Финансовые или ресурсные ограничения',
            'Низкая включённость партнёров',
            'Слабая коммуникация с целевыми группами',
            'Накопленные системные ограничения',
            'Изменение внешних условий или потребностей',
            'Недостаток успешных практик или методик',
            'Отсутствие устойчивой модели продолжения работы'
          ]
        },
        { key:'causes', label:'Пояснение причин', type:'textarea', placeholder:'Почему эта проблема возникла и сохраняется', rows:3 },
        {
          key:'relevanceGrounds',
          label:'Основания актуальности',
          type:'multiselect',
          max:6,
          placeholder:'Выберите основания актуальности',
          options:[
            'Проблема подтверждена на территории реализации',
            'Проблема существует давно и не решена',
            'Ситуация ухудшается или меняются условия',
            'Есть запрос со стороны целевой аудитории',
            'Тема соответствует приоритетам конкурса или территории',
            'Проблема имеет общественную значимость',
            'Проблема затрагивает значимое количество людей',
            'Решение требуется в ближайшее время',
            'Есть связь с культурными, социальными или образовательными ценностями',
            'Есть риск негативных последствий без вмешательства'
          ]
        },
        { key:'relevance', label:'Пояснение актуальности', type:'textarea', placeholder:'Почему проблема актуальна именно сейчас', rows:3 },
        {
          key:'significanceTargets',
          label:'Для кого или чего проблема значима',
          type:'multiselect',
          max:6,
          placeholder:'Выберите группы или сферы значимости',
          options:[
            'Для основной целевой аудитории',
            'Для потенциальных благополучателей',
            'Для местного сообщества',
            'Для территории реализации',
            'Для образовательной среды',
            'Для культурной среды',
            'Для социальной сферы',
            'Для молодёжи',
            'Для семей и детей',
            'Для людей с ограниченными возможностями здоровья',
            'Для профессионального сообщества',
            'Для общества в целом'
          ]
        },
        { key:'significance', label:'Пояснение значимости', type:'textarea', placeholder:'Почему проблема важна для выбранных групп, территории или сферы', rows:3 },
        {
          key:'evidenceSources',
          label:'Источники доказательств',
          type:'multiselect',
          max:6,
          placeholder:'Выберите источники подтверждений',
          options:[
            'Официальная статистика',
            'Исследования и аналитические материалы',
            'Опросы целевой аудитории',
            'Отзывы или обращения благополучателей',
            'Экспертные мнения',
            'Письма и отзывы партнёров',
            'Публикации СМИ или документы',
            'Контент-анализ открытых источников',
            'Собственные наблюдения и опыт работы',
            'Опыт предыдущих проектов',
            'Данные партнёров',
            'Запросы от организаций или сообществ'
          ]
        },
        { key:'evidence', label:'Описание подтверждений', type:'textarea', placeholder:'Опишите, какие подтверждения проблемы у вас уже есть', rows:4 },
        { key:'simpleExplanation', label:'Простое объяснение проблемы', type:'textarea', placeholder:'Объясните проблему простыми словами человеку, который не знаком с темой проекта', rows:3 }
      ]}
    ]
  },
  audience:{
    groups:[
      { title:'Портрет аудитории', fields:[
        {
          key:'primaryGroups',
          label:'Основные аудитории',
          type:'chips',
          options:['Дети','Подростки','Молодёжь','Студенты','Семьи','Родители','Педагоги','Старшее поколение','Жители территории','НКО','Специалисты','Творческие сообщества','Профессиональные сообщества','Участники культурных инициатив'],
          multi:true,
          descriptions:{
            'Дети':'Аудитория младшего возраста, для которой особенно важны безопасность, доступность, сопровождение взрослых и понятный формат участия.',
            'Подростки':'Школьники и несовершеннолетние участники, для которых важны вовлечение, самоопределение, коммуникация, обучение и безопасная среда.',
            'Молодёжь':'Молодые люди, для которых проект может создавать возможности участия, развития, самореализации, профориентации или общественной активности.',
            'Студенты':'Учащиеся колледжей, вузов и других образовательных организаций, для которых значимы практический опыт, компетенции, стажировки и профессиональные связи.',
            'Семьи':'Семейная аудитория, где проект влияет не только на одного участника, но и на совместное участие, досуг, поддержку и качество взаимодействия.',
            'Родители':'Взрослые, принимающие решения об участии детей или сопровождающие их; важно учитывать доверие, информирование и ожидаемую пользу.',
            'Педагоги':'Специалисты образования и наставники, которые могут быть участниками, проводниками методик, партнёрами или получателями образовательных продуктов.',
            'Старшее поколение':'Люди старшего возраста, для которых могут быть важны социальное участие, доступность среды, общение, поддержка и передача опыта.',
            'Жители территории':'Люди, проживающие на территории реализации проекта и сталкивающиеся с обозначенной проблемой в повседневной жизни.',
            'НКО':'Некоммерческие организации и инициативные объединения, которые могут быть получателями, партнёрами или участниками развития практики.',
            'Специалисты':'Профессионалы, эксперты или работники сферы, которым проект помогает развивать компетенции, инструменты или практики.',
            'Творческие сообщества':'Авторы, художники, музыканты, кураторы, медиаторы и другие участники культурной и креативной среды.',
            'Профессиональные сообщества':'Представители отрасли или профессиональной группы, для которых проект решает прикладную задачу развития среды или практики.',
            'Участники культурных инициатив':'Люди и группы, вовлечённые в культурные, творческие, просветительские или общественно значимые инициативы.'
          }
        },
        {
          key:'secondaryGroups',
          label:'Дополнительные аудитории',
          type:'multiselect',
          max:6,
          placeholder:'Выберите дополнительные аудитории',
          options:[
            'Родители и семьи участников',
            'Наставники и кураторы',
            'Образовательные организации',
            'Учреждения культуры',
            'Муниципалитет и органы власти',
            'Партнёрские организации',
            'Местное сообщество',
            'Профессиональная среда',
            'Волонтёры и добровольцы',
            'СМИ и лидеры мнений',
            'Потенциальные благополучатели',
            'Представители отраслей экономики'
          ]
        },
        {
          key:'needs',
          label:'Потребности аудитории',
          type:'checklist',
          columns:2,
          options:[
            'Нехватка знаний или информации',
            'Недостаток практических навыков',
            'Отсутствие доступа к возможностям',
            'Потребность в профориентации',
            'Потребность в культурном участии',
            'Потребность в социальной поддержке',
            'Потребность в общении и сообществе',
            'Потребность в безопасной среде',
            'Потребность в самореализации',
            'Потребность в наставничестве',
            'Потребность во включении в деятельность',
            'Потребность в содержательном досуге',
            'Потребность в новых впечатлениях и опыте',
            'Потребность в признании и видимости'
          ]
        },
        {
          key:'ageGroups',
          label:'Возрастные группы',
          type:'chips',
          options:['Дети дошкольного возраста','Школьники младшего возраста','Подростки','Молодёжь','Взрослые','Старшее поколение','Смешанная аудитория'],
          multi:true,
          descriptions:{
            'Дети дошкольного возраста':'Аудитория до школьного возраста; участие обычно требует адаптированного формата, сопровождения взрослых и повышенного внимания к безопасности.',
            'Школьники младшего возраста':'Дети младших классов; важны понятный язык, игровой или практический формат, сопровождение и короткие циклы активности.',
            'Подростки':'Школьники среднего и старшего возраста; важны самостоятельность, участие в выборе, общение, профориентация и признание результата.',
            'Молодёжь':'Участники молодого возраста, включая студентов и молодых специалистов; важны развитие компетенций, инициативность, практический опыт и социальная активность.',
            'Взрослые':'Совершеннолетняя аудитория трудоспособного возраста, для которой проект может решать профессиональные, семейные, культурные или социальные задачи.',
            'Старшее поколение':'Люди старшего возраста; важны доступность, социальная включённость, коммуникация, поддержка и учёт ограничений участия.',
            'Смешанная аудитория':'Проект рассчитан на несколько возрастных групп; для каждой группы желательно отдельно описать потребности, формат участия и ожидаемый результат.'
          }
        },
        { key:'directReach', label:'Планируемое количество прямых участников', type:'number', placeholder:'Например: 120' },
        { key:'indirectReach', label:'Планируемый косвенный охват', type:'number', placeholder:'Например: 1500' },
        { key:'reachTerritory', label:'Территория охвата', type:'text', placeholder:'Город, район, регион, площадка или сообщество' },
        {
          key:'interestProofTypes',
          label:'Подтверждение заинтересованности',
          type:'checklist',
          columns:2,
          options:[
            'Проведён опрос целевой аудитории',
            'Есть заявки или обращения',
            'Есть письма поддержки',
            'Есть данные партнёров',
            'Есть опыт прошлых мероприятий',
            'Есть статистика посещаемости',
            'Есть комментарии или отзывы',
            'Есть публикации или обсуждения',
            'Есть экспертные мнения',
            'Есть наблюдения команды проекта',
            'Есть запросы от организаций или сообществ',
            'Есть аналитические материалы или исследования'
          ]
        },
        { key:'interestProof', label:'Описание подтверждения интереса', type:'textarea', placeholder:'Кратко опишите, чем подтверждается интерес аудитории', rows:3 },
        { key:'audienceSummary', label:'Итоговое описание аудитории', type:'textarea', placeholder:'Кратко опишите целевую аудиторию проекта', rows:4 }
      ]}
    ]
  },
  concept:{
    intro:`
      <div class="concept-warning">
        <h3>Почему этот раздел важен</h3>
        <p>Этот раздел станет основой итогового паспорта проекта, черновика заявки и других документов.</p>
        <p>Чем подробнее вы опишете идею, механизм решения, уникальность и ценность проекта, тем качественнее будут итоговые материалы.</p>
        <p>Если мысль уже есть — лучше записать её сейчас. Позже текст можно сократить, но сложнее восстановить заново.</p>
        <div class="concept-warning-accent">💡 Лучше написать на страницу больше, чем потерять хорошую идею. При необходимости текст всегда можно сократить позже.</div>
      </div>
    `,
    groups:[
      { title:'Решение и ценность', fields:[
        {
          key:'ideaHints',
          label:'Формат идеи: о чём можно написать',
          type:'chips',
          options:['Образовательный формат','Культурное событие','Программа мероприятий','Сервис или платформа','Исследование','Конкурс','Фестиваль','Акселератор','Методика','Просветительский проект'],
          multi:true
        },
        { key:'idea', label:'Идея проекта', type:'textarea', placeholder:'Опишите конкретное предложение: что именно вы хотите сделать, для кого и какую проблему это поможет решить.', rows:5 },
        {
          key:'mechanismHints',
          label:'Механизм решения: через что проект будет работать',
          type:'chips',
          options:['Обучение','Вовлечение','Наставничество','Сопровождение','Создание продукта','Проведение мероприятий','Работа с сообществом','Информационная кампания','Партнёрская модель','Тиражирование практики'],
          multi:true
        },
        { key:'mechanism', label:'Механизм решения', type:'textarea', placeholder:'Раскройте, как проект будет воплощаться: кто и какие шаги выполняет, какие методы используются и почему это влияет на проблему.', rows:5 },
        {
          key:'uniquenessHints',
          label:'Уникальность: чем можно отличаться',
          type:'chips',
          options:['Новый формат для территории','Новая целевая аудитория','Сочетание разных направлений','Авторская методика','Новый способ вовлечения','Опыт в новом контексте','Межсекторное партнёрство','Масштабирование успешной практики'],
          multi:true
        },
        { key:'uniqueness', label:'Уникальность', type:'textarea', placeholder:'Поясните, чем проект отличается от похожих инициатив на этой территории или для этой аудитории, и почему это важно.', rows:4 },
        {
          key:'valueHints',
          label:'Ценность проекта: что получит аудитория',
          type:'chips',
          options:['Новые знания','Практические навыки','Доступ к возможностям','Развитие сообщества','Культурное участие','Профессиональное развитие','Социальная поддержка','Изменение отношения к проблеме','Новый продукт или сервис'],
          multi:true
        },
        { key:'value', label:'Ценностное предложение', type:'textarea', placeholder:'Опишите, какую пользу проект создаёт для целевой аудитории, территории, сообщества, партнёров или сферы.', rows:4 },
        {
          key:'advantageHints',
          label:'Преимущества: на что можно опереться',
          type:'chips',
          options:['Понятная проблема','Подтверждённый интерес аудитории','Опыт команды','Партнёрская поддержка','Реалистичный механизм','Измеримые результаты','Продолжение после гранта','Понятная территория реализации'],
          multi:true
        },
        { key:'advantages', label:'Преимущества', type:'textarea', placeholder:'Соберите сильные стороны идеи: почему проект реалистичен, кому он нужен и за счёт чего может дать результат.', rows:4 }
      ]}
    ]
  },
  goalsTasks:{
    intro:`
      <div class="concept-warning">
        <h3>Почему этот раздел важен</h3>
        <p>Цель и задачи показывают эксперту, к какому изменению ведёт проект и какими шагами оно будет достигнуто.</p>
        <p>Здесь важно не просто перечислить желания, а связать цель с проблемой, аудиторией, мероприятиями и результатами.</p>
        <div class="concept-warning-accent">💡 Хорошая цель отвечает на вопрос: что должно измениться после проекта, для кого и за счёт чего.</div>
      </div>
    `,
    groups:[
      { title:'Цель и задачи проекта', fields:[
        {
          key:'goalHints',
          label:'Тип изменения: что должно произойти',
          type:'chips',
          options:['Расширить доступ','Сформировать навыки','Вовлечь аудиторию','Создать условия','Развить сообщество','Изменить отношение','Поддержать участников','Запустить практику','Распространить опыт','Создать продукт'],
          multi:true
        },
        { key:'goal', label:'Цель проекта', type:'textarea', placeholder:'Сформулируйте конкретное изменение: что должно измениться, для какой аудитории, на какой территории и за счёт какого решения.', rows:4 },
        {
          key:'taskHints',
          label:'Типы задач: крупные практические шаги',
          type:'chips',
          options:['Провести исследование','Привлечь участников','Разработать программу','Подготовить команду','Провести мероприятия','Создать продукт','Организовать коммуникацию','Обеспечить партнёрства','Собрать обратную связь','Оценить результаты'],
          multi:true
        },
        { key:'tasks', label:'Задачи проекта', type:'textarea', placeholder:'Перечислите 3–6 задач как крупные шаги к цели. Не подменяйте задачи отдельными мероприятиями.', rows:5 },
        {
          key:'problemLinkHints',
          label:'Проверка связи цели с проблемой',
          type:'chips',
          options:['Устраняет причину проблемы','Снижает выявленный дефицит','Отвечает на потребность аудитории','Создаёт недостающие условия','Расширяет доступ','Повышает вовлечённость','Усиливает существующую практику','Закрывает выявленный разрыв'],
          multi:true
        },
        { key:'problemLink', label:'Связь цели с проблемой', type:'textarea', placeholder:'Поясните, как цель отвечает на заявленную проблему, потребности аудитории и начальное состояние, которое нужно изменить.', rows:3 },
        {
          key:'resultLinkHints',
          label:'Проверка связи задач с результатами',
          type:'chips',
          options:['У каждой задачи есть измеримый итог','Результат можно подтвердить','Результат связан с аудиторией','Результат показывает изменение','Результат можно посчитать','Результат можно описать качественно','Результат подтверждает достижение цели'],
          multi:true
        },
        { key:'resultLink', label:'Связь задач с результатами', type:'textarea', placeholder:'Опишите, какие количественные или качественные результаты подтвердят выполнение каждой задачи.', rows:3 },
        {
          key:'activityLinkHints',
          label:'Проверка связи задач с мероприятиями',
          type:'chips',
          options:['Задача раскрывается через мероприятия','Мероприятия имеют сроки','Мероприятия имеют ответственных','Мероприятия ведут к результату','Нет лишних мероприятий','Нет задачи без действий','Нет действия без задачи'],
          multi:true
        },
        { key:'activityLink', label:'Связь задач с мероприятиями', type:'textarea', placeholder:'Покажите, какие мероприятия реализуют каждую задачу, в какой логике и почему этих действий достаточно.', rows:3 }
      ]}
    ]
  },
  implementation:{
    intro:{
      title:'Почему этот раздел важен',
      text:'Эксперт должен понять, что именно будет происходить в проекте, в какие сроки, на какой территории и за счёт каких действий будут выполнены задачи.<br><br>Здесь важно показать не набор мероприятий, а реалистичную логику реализации: что делается сначала, что потом и как это ведёт к результатам.',
      accent:'💡 Хорошая реализация отвечает на вопрос: что конкретно будет сделано, когда, где и почему этих действий достаточно.'
    },
    groups:[
      { title:'Мероприятия и этапы', fields:[
        {
          key:'activityFormats',
          label:'Форматы мероприятий',
          type:'chips',
          multi:true,
          help:'Выбирайте только те мероприятия, которые действительно помогают выполнить задачи проекта и привести к результатам.',
          options:[
            'Образовательные мероприятия',
            'Мастер-классы',
            'Лекции',
            'Семинары',
            'Тренинги',
            'Форумы',
            'Фестивали',
            'Выставки',
            'Конкурсы',
            'Экскурсии',
            'Экспедиции',
            'Исследования',
            'Создание цифрового продукта',
            'Выпуск методических материалов',
            'Информационная кампания',
            'Работа с сообществом',
            'Наставничество',
            'Консультации',
            'Волонтёрские активности'
          ]
        },
        { key:'activityDescription', label:'Дополнительное описание мероприятий', type:'textarea', placeholder:'Опишите ключевые мероприятия: что будет происходить, для кого, в каком формате и как это связано с задачами проекта.', rows:4 },
        {
          key:'stageTypes',
          label:'Этапы реализации',
          type:'chips',
          multi:true,
          options:[
            'Подготовка',
            'Разработка материалов',
            'Набор участников',
            'Информационная кампания',
            'Запуск проекта',
            'Проведение мероприятий',
            'Сопровождение участников',
            'Работа с партнёрами',
            'Сбор обратной связи',
            'Оценка результатов',
            'Подведение итогов',
            'Распространение опыта'
          ]
        },
        { key:'stageNotes', label:'Дополнительные особенности этапов', type:'textarea', placeholder:'Если необходимо, уточните последовательность этапов или особенности их выполнения.', rows:3 }
      ]},
      { title:'Календарный план', fields:[
        {
          key:'duration',
          label:'Продолжительность проекта',
          type:'chips',
          options:[
            'До 1 месяца',
            '1–3 месяца',
            '3–6 месяцев',
            '6–12 месяцев',
            'Более 12 месяцев'
          ]
        },
        {
          key:'startPeriod',
          label:'Период старта',
          type:'chips',
          options:[
            'Весна',
            'Лето',
            'Осень',
            'Зима',
            'Конкретный месяц'
          ],
          conditionalText:{ value:'Конкретный месяц', key:'startMonth', label:'Укажите месяц старта', placeholder:'Например: март 2027' }
        },
        { key:'calendarNotes', label:'Особенности календарного плана', type:'textarea', placeholder:'Кратко опишите последовательность ключевых действий, сроки и зависимость мероприятий друг от друга.', rows:4 }
      ]},
      { title:'Территория реализации', fields:[
        {
          key:'territoryScale',
          label:'Масштаб территории',
          type:'chips',
          options:[
            'Одна площадка',
            'Один населённый пункт',
            'Муниципалитет',
            'Несколько муниципалитетов',
            'Регион',
            'Несколько регионов',
            'Федеральный уровень',
            'Международный уровень',
            'Онлайн / дистанционный формат',
            'Смешанный формат'
          ]
        },
        { key:'territoryRegion', label:'Регион', type:'text', placeholder:'Регион или субъекты реализации' },
        { key:'territoryCity', label:'Город / населённый пункт', type:'text', placeholder:'Город, посёлок, село или иной населённый пункт' },
        { key:'territoryMunicipality', label:'Район / муниципалитет', type:'text', placeholder:'Муниципальный район, городской округ или территория охвата' },
        { key:'territoryVenue', label:'Конкретная площадка', type:'text', placeholder:'Учреждение, пространство, маршрут, кампус, центр или другая площадка' },
        { key:'onlinePlatform', label:'Онлайн-платформа или цифровая среда', type:'text', placeholder:'Сайт, платформа, социальная сеть, сервис трансляций или цифровой продукт' },
        { key:'territoryRationale', label:'Почему выбрана эта территория', type:'textarea', placeholder:'Поясните, почему проект реализуется именно здесь и как территория связана с проблемой и аудиторией.', rows:3 }
      ]},
      { title:'Риски и условия', fields:[
        {
          key:'riskTypes',
          label:'Риски реализации',
          type:'checklist',
          columns:2,
          options:[
            'Недостаточный набор участников',
            'Перенос сроков',
            'Технические проблемы',
            'Кадровые риски',
            'Финансовые риски',
            'Отказ партнёров',
            'Погодные условия',
            'Сезонные ограничения',
            'Низкая информационная активность',
            'Административные ограничения',
            'Форс-мажор',
            'Сложность логистики',
            'Недостаточная вовлечённость аудитории'
          ]
        },
        { key:'riskMitigation', label:'Меры снижения рисков', type:'textarea', placeholder:'Кратко опишите, как команда будет снижать выбранные риски и что сделает, если что-то пойдёт не по плану.', rows:3 },
        {
          key:'conditionTypes',
          label:'Ограничения и условия',
          type:'checklist',
          columns:2,
          options:[
            'Сезонность',
            'Погодные условия',
            'Требования безопасности',
            'Правовые требования',
            'Наличие разрешений',
            'Требования к площадке',
            'Доступность площадки',
            'Требования к оборудованию',
            'Транспортная доступность',
            'Ограничения по возрасту участников',
            'Требования партнёров',
            'Санитарные или медицинские требования',
            'Техническая инфраструктура',
            'Кадровая доступность'
          ]
        },
        { key:'conditionNotes', label:'Дополнительные условия реализации', type:'textarea', placeholder:'Если необходимо, уточните условия, от которых зависит проведение мероприятий.', rows:3 }
      ]}
    ]
  },
  results:{
    groups:[
      { title:'Изменения и показатели', fields:[
        {
          key:'quantitativeHints',
          label:'Что можно посчитать',
          type:'chips',
          multi:true,
          options:[
            'Участники',
            'Мероприятия',
            'Публикации',
            'Материалы',
            'Образовательные продукты',
            'Методические материалы',
            'Партнёры',
            'Волонтёры',
            'Заявки',
            'Просмотры',
            'Охват',
            'Созданные продукты',
            'Проведённые консультации',
            'Обученные участники'
          ]
        },
        { key:'quantitative', label:'Количественные показатели', type:'textarea', explain:'Это всё, что можно посчитать: количество участников, мероприятий, публикаций, материалов, партнёров, волонтёров, заявок, просмотров или созданных продуктов.', placeholder:'Укажите конкретные числа: сколько участников, мероприятий, материалов, публикаций, продуктов или других измеримых результатов планируется получить.', rows:3 },
        {
          key:'qualitativeHints',
          label:'Какие изменения ожидаются',
          type:'chips',
          multi:true,
          options:[
            'Новые знания',
            'Практические навыки',
            'Рост вовлечённости',
            'Изменение отношения к проблеме',
            'Повышение мотивации',
            'Развитие сообщества',
            'Улучшение коммуникации',
            'Расширение доступа',
            'Повышение уверенности участников',
            'Появление новых практик',
            'Укрепление партнёрств'
          ]
        },
        { key:'qualitative', label:'Качественные изменения', type:'textarea', explain:'Это изменения, которые нельзя свести только к цифрам: новые знания, навыки, вовлечённость, изменение отношения к проблеме, развитие сообщества, улучшение взаимодействия или появление новых практик.', placeholder:'Опишите, что изменится в поведении, знаниях, навыках, отношении, возможностях или ситуации целевой аудитории.', rows:4 },
        {
          key:'effectHints',
          label:'Типы эффектов проекта',
          type:'chips',
          multi:true,
          options:[
            'Социальный эффект',
            'Культурный эффект',
            'Образовательный эффект',
            'Экономический эффект',
            'Инфраструктурный эффект',
            'Информационный эффект',
            'Организационный эффект',
            'Кадровый эффект',
            'Туристический эффект',
            'Территориальный эффект',
            'Экологический эффект',
            'Медийный эффект'
          ]
        },
        { key:'effects', label:'Эффекты проекта', type:'textarea', explain:'Это более широкие последствия проекта для аудитории, территории, сообщества или сферы: социальный, культурный, образовательный, экономический, инфраструктурный, информационный или организационный эффект.', placeholder:'Опишите, какой более широкий эффект проект создаст для аудитории, территории, сообщества, организации или сферы.', rows:3 },
        {
          key:'measurementHints',
          label:'Чем подтверждать результаты',
          type:'chips',
          multi:true,
          options:[
            'Регистрация участников',
            'Анкеты',
            'Опросы',
            'Обратная связь',
            'Статистика посещаемости',
            'Аналитика сайта или соцсетей',
            'Публикации в СМИ',
            'Фото- и видеоматериалы',
            'Отчёты',
            'Документы партнёров',
            'Экспертные оценки',
            'Отзывы участников',
            'Сертификаты',
            'Протоколы мероприятий'
          ]
        },
        { key:'measurement', label:'Способы измерения', type:'textarea', explain:'Это то, как вы подтвердите достижение результатов: регистрация участников, анкеты, опросы, обратная связь, статистика посещаемости, публикации, отчёты, фото- и видеоматериалы, экспертные оценки и документы партнёров.', placeholder:'Опишите, как команда поймёт и подтвердит, что результаты достигнуты.', rows:3 },
        {
          key:'audienceResultHints',
          label:'Как результаты связаны с аудиторией',
          type:'chips',
          multi:true,
          options:[
            'Отвечает на потребность аудитории',
            'Снижает выявленный дефицит',
            'Расширяет возможности участников',
            'Повышает доступность',
            'Помогает применить новые знания',
            'Усиливает вовлечённость',
            'Создаёт условия для продолжения',
            'Улучшает качество жизни',
            'Развивает профессиональные или личные навыки',
            'Формирует сообщество',
            'Меняет отношение к проблеме'
          ]
        },
        { key:'resultAudienceLink', label:'Связь результатов с аудиторией', type:'textarea', explain:'Это объяснение, почему заявленные результаты действительно важны для выбранной целевой аудитории и как они отвечают её потребностям.', placeholder:'Поясните, почему эти результаты важны именно для выбранной аудитории и как они отвечают её потребностям.', rows:3 }
      ]}
    ]
  },
  team:{
    groups:[
      { title:'Руководитель проекта', fields:[
        { key:'leaderName', label:'ФИО руководителя', type:'text', placeholder:'Например: Иванов Иван Иванович' },
        {
          key:'leaderRole',
          label:'Роль руководителя',
          type:'chips',
          options:[
            'Руководитель проекта',
            'Автор проекта',
            'Координатор',
            'Продюсер проекта',
            'Куратор',
            'Научный руководитель',
            'Художественный руководитель',
            'Руководитель направления',
            'Другое'
          ]
        },
        { key:'leaderRoleDescription', label:'Дополнительное описание роли', type:'textarea', placeholder:'Если необходимо, уточните обязанности руководителя в проекте.', rows:2 },
        {
          key:'leaderCompetencies',
          label:'Компетенции руководителя',
          type:'chips',
          multi:true,
          options:[
            'Управление проектами',
            'Организация мероприятий',
            'Работа с партнёрами',
            'Работа с молодёжью',
            'Просветительская деятельность',
            'Исследовательская деятельность',
            'Финансовое планирование',
            'Маркетинг',
            'PR',
            'Коммуникации',
            'Аналитика',
            'IT',
            'Дизайн',
            'Волонтёрские программы',
            'Фандрайзинг'
          ]
        },
        { key:'leaderCompetenciesExtra', label:'Дополнительные компетенции', type:'textarea', placeholder:'Если необходимо, уточните компетенции, которые особенно важны именно для данного проекта.', rows:2 },
        { key:'leaderExperience', label:'Опыт руководителя', type:'textarea', placeholder:'Опишите опыт руководителя: реализованные проекты, достижения, профессиональный опыт, успешные кейсы, участие в конкурсах или другие факты, подтверждающие способность руководить данным проектом.', rows:5 }
      ]},
      { title:'Состав и роли команды', fields:[
        {
          key:'memberTypes',
          label:'Участники команды',
          type:'chips',
          multi:true,
          options:[
            'Штатные сотрудники',
            'Волонтёры',
            'Эксперты',
            'Наставники',
            'Преподаватели',
            'Приглашённые специалисты',
            'Представители партнёров',
            'Подрядчики'
          ]
        },
        { key:'members', label:'Описание состава команды', type:'textarea', placeholder:'Кратко опишите состав команды и основные категории участников проекта.', rows:3 },
        {
          key:'participantRoles',
          label:'Роли участников',
          type:'chips',
          multi:true,
          options:[
            'Координатор',
            'Администратор',
            'Методист',
            'Эксперт',
            'Наставник',
            'Преподаватель',
            'Организатор мероприятий',
            'Волонтёр',
            'PR-специалист',
            'SMM',
            'Дизайнер',
            'Видеооператор',
            'Фотограф',
            'Бухгалтер',
            'Юрист',
            'IT-специалист',
            'Аналитик'
          ]
        },
        { key:'roles', label:'Дополнительное описание ролей', type:'textarea', placeholder:'При необходимости уточните обязанности участников и распределение ответственности внутри команды.', rows:3 }
      ]},
      { title:'Компетенции и опыт', fields:[
        {
          key:'teamCompetencies',
          label:'Компетенции команды',
          type:'chips',
          multi:true,
          options:[
            'Организация мероприятий',
            'Работа с детьми',
            'Работа с молодёжью',
            'Культурные проекты',
            'Образовательные программы',
            'Исследования',
            'Наставничество',
            'Проектное управление',
            'Работа с грантами',
            'Медиа',
            'Коммуникации',
            'Аналитика',
            'Работа с данными',
            'Цифровые технологии',
            'Фандрайзинг'
          ]
        },
        { key:'competencies', label:'Дополнительное описание компетенций', type:'textarea', placeholder:'Если необходимо, поясните, какие компетенции команды особенно важны для реализации проекта.', rows:3 },
        { key:'teamExperience', label:'Опыт команды', type:'textarea', placeholder:'Опишите опыт всей команды: какие проекты уже были реализованы, какие мероприятия проводились, какие достижения, публикации, портфолио, успешные кейсы, благодарности или другие результаты подтверждают способность команды выполнить данный проект.', rows:5 },
        {
          key:'activityMatchChecks',
          label:'Связь команды с мероприятиями',
          type:'checklist',
          columns:2,
          options:[
            'У каждой задачи есть ответственный',
            'Для всех мероприятий хватает специалистов',
            'Есть опыт проведения аналогичных мероприятий',
            'Есть резерв участников команды',
            'Компетенции соответствуют проекту',
            'При необходимости будут привлечены внешние эксперты'
          ]
        },
        { key:'activityMatch', label:'Пояснение связи команды с мероприятиями', type:'textarea', placeholder:'Если необходимо, поясните, почему состава команды достаточно для выполнения всех мероприятий проекта и каким образом распределяется ответственность.', rows:3 }
      ]}
    ]
  },
  partners:{
    groups:[
      { title:'Партнёрская поддержка', fields:[
        { key:'partnersList', label:'Партнёры', type:'partner-list', help:'Укажите организации или людей, которые поддерживают проект. Ссылка необязательна: это может быть сайт, социальная сеть, профиль, публикация или иной публичный источник.' },
        { key:'contributions', label:'Вклад партнёров', type:'partner-contributions' },
        {
          key:'supportForms',
          label:'Формы участия',
          type:'partner-support-forms',
          options:[
            'Информационная поддержка',
            'Организационная поддержка',
            'Экспертная поддержка',
            'Финансовая поддержка',
            'Ресурсная поддержка',
            'Методическая поддержка',
            'Консультационная поддержка',
            'Площадка',
            'Оборудование',
            'Доступ к аудитории',
            'Кадровая поддержка',
            'Волонтёрская поддержка',
            'Административная поддержка'
          ]
        },
        {
          key:'confirmationTypes',
          label:'Подтверждения',
          type:'partner-confirmations',
          help:'Добавьте только текстовые ссылки. Загрузка файлов в Грантмастере не используется.',
          options:[
            'Письмо поддержки',
            'Соглашение',
            'Договорённость',
            'Договор',
            'Публикация на сайте',
            'Публикация в соцсетях',
            'Новость',
            'Пост',
            'Страница проекта',
            'Облачная папка',
            'Документ по ссылке',
            'Иная ссылка'
          ]
        },
        { key:'moneySupportStatus', label:'Есть ли поддержка, которую можно оценить в деньгах?', type:'partner-money' }
      ]}
    ]
  },
  promotion:{
    groups:[
      { title:'Каналы продвижения', fields:[
        { key:'channels', label:'Каналы продвижения', type:'promotion-channels' }
      ]},
      { title:'Коммуникационный план', fields:[
        { key:'communicationPlan', label:'План коммуникаций', type:'promotion-plan' }
      ]},
      { title:'Взаимодействие с аудиторией', fields:[
        { key:'interactionTypes', label:'Способы взаимодействия и обратной связи', type:'chips', multi:true, options:[
          'Комментарии',
          'Опросы',
          'Анкеты',
          'Обсуждения',
          'Личные сообщения',
          'Открытые встречи',
          'Консультации',
          'Фокус-группы',
          'Конкурсные механики',
          'Пользовательский контент',
          'Обратная связь после мероприятий',
          'Сообщество участников',
          'Рассылка',
          'Чат проекта',
          'Горячая линия',
          'Поддержка участников',
          'Совместное создание материалов',
          'Сбор предложений',
          'Встречи с партнёрами и аудиторией'
        ] },
        { key:'interactionMechanics', label:'Механики взаимодействия', type:'promotion-interactions' }
      ]},
      { title:'Информационное сопровождение', fields:[
        { key:'infoSupportTypes', label:'Материалы сопровождения', type:'chips', multi:true, options:[
          'Анонсы',
          'Новости о ходе проекта',
          'Интервью',
          'Истории участников',
          'Экспертные комментарии',
          'Фотоотчёты',
          'Видеоматериалы',
          'Записи мероприятий',
          'Прямые эфиры',
          'Публикации партнёров',
          'Публикации в СМИ',
          'Методические материалы',
          'Образовательные материалы',
          'Итоговая публикация',
          'Публичный отчёт',
          'Страница проекта',
          'Архив материалов',
          'Презентация результатов',
          'Кейсы участников',
          'Информационные материалы после завершения проекта'
        ] },
        { key:'infoSupportDescription', label:'Как будет организовано информационное сопровождение', type:'textarea', placeholder:'Опишите, какие материалы будут выходить до, во время и после проекта, где они будут размещаться и что останется доступным после завершения проекта.', rows:5 }
      ]}
    ]
  },
  resources:{
    groups:[
      { title:'Необходимые ресурсы', fields:[
        { key:'requiredItems', label:'Необходимые ресурсы', type:'resource-required' }
      ]},
      { title:'Статьи расходов', fields:[
        { key:'budgetItems', label:'Статьи расходов', type:'resource-budget' }
      ]},
      { title:'Расчёты и обоснование', fields:[
        { key:'calculations', label:'Как рассчитаны расходы', type:'focus-textarea', placeholder:'Например: 5 мероприятий × 20 000 ₽; 3 специалиста × 2 месяца × 40 000 ₽; 500 экземпляров × 120 ₽.', rows:5, hint:'Покажите формулу расчёта, количество, стоимость единицы, тариф, рыночную цену или данные коммерческих предложений.' },
        { key:'justification', label:'Обоснование расходов', type:'focus-textarea', placeholder:'Объясните, почему крупные расходы необходимы и как они связаны с мероприятиями и результатами проекта.', rows:4, hint:'Эксперт должен понять не только стоимость, но и необходимость каждого существенного расхода.' }
      ]},
      { title:'Софинансирование и допустимость', fields:[
        { key:'cofundingStatus', label:'Есть ли собственный вклад или привлечённые ресурсы?', type:'resource-cofunding' },
        { key:'eligibilityChecks', label:'Допустимость расходов', type:'resource-eligibility', options:[
          'Все расходы непосредственно связаны с проектом',
          'Расходы соответствуют мероприятиям календарного плана',
          'Расходы соответствуют масштабу и ожидаемым результатам',
          'По каждой крупной статье есть расчёт',
          'По каждой крупной статье есть обоснование',
          'Отсутствуют недетализированные непредвиденные расходы',
          'Отсутствуют расходы на приобретение недвижимости',
          'Отсутствуют расходы на капитальное строительство',
          'Отсутствуют расходы на алкогольную и табачную продукцию',
          'Отсутствуют расходы на предметы роскоши',
          'Отсутствуют расходы на штрафы и пени',
          'Отсутствуют расходы на политические партии, кампании и акции',
          'Учтены ограничения по работе с аффилированными лицами',
          'Софинансирование относится только к данному проекту',
          'Бюджет можно подтвердить документами и рыночными ценами'
        ] }
      ]}
    ]
  },
  support:{
    groups:[
      { title:'Необходимые виды поддержки', fields:[
        { key:'types', label:'Виды поддержки', type:'support-types', help:'Выберите только ту помощь, которой проекту действительно не хватает для запуска или качественной реализации.' }
      ]},
      { title:'Приоритет поддержки', fields:[
        { key:'priorityLevels', label:'Критичность по каждому виду поддержки', type:'support-priority' }
      ]},
      { title:'Обоснование необходимости', fields:[
        { key:'rationales', label:'Зачем нужна поддержка', type:'support-rationale' }
      ]},
      { title:'Статус получения поддержки', fields:[
        { key:'statuses', label:'Текущий статус', type:'support-status' }
      ]}
    ]
  },
  sustainability:{
    groups:[
      { title:'Дальнейшее развитие', fields:[
        { key:'developmentScenarios', label:'Сценарии после основного этапа', type:'chips', multi:true, options:[
          'Регулярное продолжение проекта',
          'Запуск нового этапа',
          'Включение в постоянную деятельность организации',
          'Развитие проектного сообщества',
          'Передача опыта другим организациям',
          'Публичное распространение результатов',
          'Коммерциализация отдельных продуктов или услуг',
          'Временная приостановка проекта',
          'Проект завершится после достижения целей',
          'Иной сценарий'
        ] },
        { key:'development', label:'Описание дальнейшего развития', type:'textarea', placeholder:'Уточните, как будет развиваться проект после основного этапа', rows:2 }
      ]},
      { title:'Новые источники финансирования', fields:[
        { key:'fundingSourceTypes', label:'Возможные источники', type:'chips', multi:true, options:[
          'Собственные средства организации',
          'Повторное участие в грантовых конкурсах',
          'Федеральные программы',
          'Региональное финансирование',
          'Муниципальная поддержка',
          'Партнёрское финансирование',
          'Спонсорская поддержка',
          'Благотворительные пожертвования',
          'Краудфандинг',
          'Доход от собственной деятельности',
          'Платные услуги',
          'Продажа продуктов проекта',
          'Членские взносы',
          'Вклад команды',
          'Проект не требует постоянного финансирования',
          'Источник пока не определён',
          'Иной источник'
        ] },
        { key:'fundingSources', label:'Комментарий к финансовой модели', type:'textarea', placeholder:'Уточните, какие источники наиболее реалистичны', rows:2 }
      ]},
      { title:'Масштабирование', fields:[
        { key:'scalingWays', label:'Как проект можно повторить или расширить', type:'chips', multi:true, options:[
          'Повторное проведение на той же территории',
          'Увеличение количества участников',
          'Расширение на новые площадки или районы',
          'Распространение на другие города',
          'Распространение на другие регионы',
          'Всероссийский уровень',
          'Международный уровень',
          'Переход в онлайн-формат',
          'Сочетание офлайн- и онлайн-форматов',
          'Адаптация для других целевых аудиторий',
          'Подготовка тиражируемой методики и материалов',
          'Обучение других команд',
          'Передача модели партнёрам',
          'Франшиза или лицензируемая модель',
          'Масштабирование не планируется',
          'Иной способ'
        ] },
        { key:'scaling', label:'Описание масштабирования', type:'textarea', placeholder:'Как именно проект можно повторить или расширить', rows:2 }
      ]},
      { title:'Долгосрочная модель', fields:[
        { key:'longTermElements', label:'Элементы устойчивости', type:'checklist', columns:2, options:[
          'Постоянная команда',
          'Поддержка организации-заявителя',
          'Закреплённое финансирование',
          'Партнёрская сеть',
          'Подготовленные специалисты',
          'Наставники и эксперты',
          'Активное сообщество',
          'Волонтёрская команда',
          'Постоянная аудитория',
          'Регулярные мероприятия',
          'Методические материалы',
          'Собственная инфраструктура',
          'Оборудование и материальная база',
          'Цифровая платформа или сервис',
          'Устойчивый спрос на результаты проекта',
          'Платная или смешанная модель',
          'Интеграция в государственные или муниципальные программы',
          'Интеграция в деятельность учреждения',
          'Долгосрочная модель пока не сформирована'
        ] },
        { key:'longTermModel', label:'Главный фактор устойчивости', type:'textarea', placeholder:'Что прежде всего позволит проекту существовать дальше', rows:2 }
      ]},
      { title:'Что останется после проекта', fields:[
        { key:'remainingAssets', label:'Сохраняющиеся результаты', type:'checklist', columns:2, options:[
          'Методические материалы',
          'Образовательная программа',
          'База знаний',
          'Исследования и аналитика',
          'Архив материалов',
          'Публикации',
          'Фото- и видеоматериалы',
          'Сайт',
          'Цифровой сервис',
          'Информационные ресурсы',
          'Оборудование',
          'Созданная инфраструктура',
          'Подготовленные специалисты',
          'Повышенные компетенции участников',
          'Волонтёрская команда',
          'Сообщество участников',
          'Партнёрская сеть',
          'Новые профессиональные связи',
          'Отработанная практика',
          'Готовая модель проекта',
          'Тиражируемая методика',
          'Узнаваемость проекта или территории',
          'Изменения в поведении или знаниях аудитории',
          'Опыт команды',
          'Ничего не сохраняется, кроме достигнутого результата',
          'Иное наследие'
        ] },
        { key:'remainingValue', label:'Самое ценное наследие проекта', type:'textarea', placeholder:'Что останется главным результатом после завершения проекта', rows:2 }
      ]}
    ]
  },
  materials:{
    groups:[
      { title:'Презентации', fields:[
        { key:'presentations', statusKey:'presentationsStatus', label:'Есть ли презентации или описания проекта?', type:'material-text-toggle', placeholder:'Перечислите названия презентаций, коммерческих предложений или описаний проекта. По одному на строке.', rows:3 }
      ]},
      { title:'Фотографии / визуальные материалы', fields:[
        { key:'photos', statusKey:'photosStatus', label:'Есть ли визуальные материалы?', type:'material-text-toggle', placeholder:'Кратко опишите, какие визуальные материалы уже подготовлены', rows:2 }
      ]},
      { title:'Видео', fields:[
        { key:'videos', statusKey:'videosStatus', label:'Есть ли видеоматериалы?', type:'material-text-toggle', placeholder:'Какие видеоматериалы уже существуют или планируются', rows:2 }
      ]},
      { title:'Исследования и данные', fields:[
        { key:'researchItems', label:'Есть ли исследования или данные?', type:'material-research' }
      ]},
      { title:'Письма поддержки', fields:[
        { key:'supportLetterItems', label:'Есть ли письма поддержки?', type:'material-letters' }
      ]},
      { title:'Ссылки', fields:[
        { key:'linkItems', label:'Ссылки на материалы проекта', type:'material-links' }
      ]}
    ]
  }
};

function selectedFieldDescriptionHtml(sectionId, field){
  if(!field.descriptions) return '';
  const selected = state[sectionId][field.key];
  if(Array.isArray(selected)){
    const selectedDescriptions = selected
      .filter(item=>field.descriptions[item])
      .map(item=>`<li><b>${escapeHtml(item)}:</b> ${escapeHtml(field.descriptions[item])}</li>`);
    if(!selectedDescriptions.length) return '';
    return `<div class="choice-description"><ul>${selectedDescriptions.join('')}</ul></div>`;
  }
  if(!selected || !field.descriptions[selected]) return '';
  return `<div class="choice-description">${escapeHtml(field.descriptions[selected])}</div>`;
}

function renderProjectField(sectionId, field){
  if(field.type === 'text'){
    return textInput(sectionId, field.key, field.placeholder || '');
  }
  if(field.type === 'number'){
    return textInput(sectionId, field.key, field.placeholder || '', 'number');
  }
  if(field.type === 'textarea'){
    return textArea(sectionId, field.key, field.placeholder || '', field.rows || 3);
  }
  if(field.type === 'focus-textarea'){
    return focusTextArea(sectionId, field.key, field.placeholder || '', field.rows || 3, field.hint || '');
  }
  if(field.type === 'chips'){
    const base = chipGroupHtml(sectionId, field.key, field.options || [], field.multi !== false) + selectedFieldDescriptionHtml(sectionId, field);
    if(field.conditionalText && state[sectionId][field.key] === field.conditionalText.value){
      return base + `
        <div class="conditional-field">
          <div class="field-label">${field.conditionalText.label}</div>
          ${textInput(sectionId, field.conditionalText.key, field.conditionalText.placeholder || '')}
        </div>
      `;
    }
    return base;
  }
  if(field.type === 'checklist'){
    return checkListHtml(sectionId, field.key, field.options || [], field.columns || 1);
  }
  if(field.type === 'multiselect'){
    return multiSelectHtml(sectionId, field.key, field.options || [], field.max || 99, field.placeholder || 'Выберите из списка');
  }
  if(field.type === 'partner-list'){
    return renderPartnerListField();
  }
  if(field.type === 'partner-contributions'){
    return renderPartnerContributionsField();
  }
  if(field.type === 'partner-support-forms'){
    return renderPartnerSupportFormsField(field.options || []);
  }
  if(field.type === 'partner-confirmations'){
    return renderPartnerConfirmationsField(field.options || []);
  }
  if(field.type === 'partner-money'){
    return renderPartnerMoneyField();
  }
  if(field.type === 'promotion-channels'){
    return renderPromotionChannelsField();
  }
  if(field.type === 'promotion-plan'){
    return renderPromotionPlanField();
  }
  if(field.type === 'promotion-interactions'){
    return renderPromotionInteractionsField();
  }
  if(field.type === 'resource-required'){
    return renderResourceRequiredField();
  }
  if(field.type === 'resource-budget'){
    return renderResourceBudgetField();
  }
  if(field.type === 'resource-cofunding'){
    return renderResourceCofundingField();
  }
  if(field.type === 'resource-eligibility'){
    return renderResourceEligibilityField(field.options || []);
  }
  if(field.type === 'support-types'){
    return renderSupportTypesField();
  }
  if(field.type === 'support-priority'){
    return renderSupportPriorityField();
  }
  if(field.type === 'support-rationale'){
    return renderSupportRationaleField();
  }
  if(field.type === 'support-status'){
    return renderSupportStatusField();
  }
  if(field.type === 'material-text-toggle'){
    return renderMaterialTextToggle(field.statusKey, field.key, field.placeholder || '', field.rows || 2);
  }
  if(field.type === 'material-research'){
    return materialToggleHtml('researchStatus') + (state.materials.researchStatus === 'Да' ? `<div class="conditional-field">${renderMaterialsResearchField()}</div>` : '');
  }
  if(field.type === 'material-letters'){
    return materialToggleHtml('supportLettersStatus') + (state.materials.supportLettersStatus === 'Да' ? `<div class="conditional-field">${renderMaterialsLettersField()}</div>` : '');
  }
  if(field.type === 'material-links'){
    return renderMaterialsLinksField();
  }
  return '';
}

function renderProjectIntro(intro){
  if(!intro) return '';
  if(typeof intro === 'string') return intro;
  return `
    <div class="concept-warning">
      <h3>${intro.title}</h3>
      <p>${intro.text}</p>
      ${intro.accent ? `<div class="concept-warning-accent">${intro.accent}</div>` : ''}
    </div>
  `;
}

function renderProjectSection(sectionId){
  const schema = projectSectionSchemas[sectionId];
  if(!schema) return '<div class="gap-warning">Схема раздела пока не настроена.</div>';
  if(sectionId === 'materials') normalizeMaterialsState();
  const intro = renderProjectIntro(schema.intro);
  const educationCards = {
    diagnostic: diagnosticEducationCard,
    passport: passportEducationCard,
    problem: problemEducationCard,
    audience: audienceEducationCard,
    concept: conceptEducationCard
  };
  const education = educationCards[sectionId] ? educationCards[sectionId]() : '';
  return education + intro + schema.groups.map(group=>`
    <div class="field-cluster">
      <div class="field-cluster-title">${group.title}</div>
      ${group.fields.map(field=>`
        <div class="field-group">
          <div class="field-label-row">
            <div class="field-label">${field.label}</div>
            ${field.explain ? `
              <details class="field-explain">
                <summary>Что это?</summary>
                <div>${field.explain}</div>
              </details>
            ` : ''}
          </div>
          ${field.help ? `<div class="field-help">${field.help}</div>` : ''}
          ${renderProjectField(sectionId, field)}
        </div>
      `).join('')}
    </div>
  `).join('');
}

const renderers = Object.fromEntries(
  Object.keys(projectSectionSchemas).map(sectionId=>[sectionId, ()=>renderProjectSection(sectionId)])
);

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
        ${isLast ? '<span class="card-nav-spacer"></span>' : `<button class="btn btn-primary" onclick="goToStep(${currentStep+1})">Далее →</button>`}
      </div>
    </div>
    ${renderFinalEntry()}
  `;
  document.getElementById('fieldsHost').innerHTML = renderers[s.render]();
}

/* ============== SUMMARY / EXPORT ============== */

function formatProjectValue(value){
  if(Array.isArray(value)){
    if(!value.length) return '[не указано]';
    const formatted = value.map(item=>{
      if(item && typeof item === 'object'){
        const parts = Object.entries(item).map(([key, val])=>{
          if(Array.isArray(val)) return val.length ? val.join(', ') : '';
          return val && val.toString().trim() ? val.toString().trim() : '';
        }).filter(Boolean);
        return parts.join(' — ');
      }
      return item;
    }).filter(item=>item && item.toString().trim());
    return formatted.length ? formatted.join('; ') : '[не указано]';
  }
  if(value && typeof value === 'object'){
    const formatted = Object.entries(value)
      .filter(([, val])=>val && val.toString().trim())
      .map(([key, val])=>`${key}: ${val}`);
    return formatted.length ? formatted.join('; ') : '[не указано]';
  }
  return value && value.toString().trim() ? value.toString().trim() : '[не указано]';
}

function getProjectDescriptionSections(){
  return steps.map(step=>{
    const schema = projectSectionSchemas[step.id];
    const sectionState = state[step.id] || {};
    const fields = [];
    if(schema){
      schema.groups.forEach(group=>{
        group.fields.forEach(field=>{
          fields.push({
            label: field.label,
            value: formatProjectValue(sectionState[field.key])
          });
        });
      });
    }
    return {
      title:step.title,
      fields
    };
  });
}

function buildExportText(){
  let out = '';
  out += 'ПАСПОРТ ПРОЕКТА\n';
  out += '(итоговый черновик, подготовленный в Грантмастере)\n\n';
  getProjectDescriptionSections().forEach(section=>{
    out += `— ${section.title.toUpperCase()} —\n`;
    if(section.fields.length){
      out += section.fields
        .map(field=>`${field.label.toUpperCase()}: ${field.value}`)
        .join('\n') + '\n\n';
    } else {
      out += '[РАЗДЕЛ ПОКА НЕ НАСТРОЕН]\n\n';
    }
  });

  return out;
}

function summaryValueHtml(value){
  return escapeHtml(value)
    .replace(/\[не указано\]/g, '<span class="summary-empty">не указано</span>')
    .replace(/\n/g, '<br>');
}

function renderSummarySections(){
  return getProjectDescriptionSections().map(section=>`
    <div class="summary-block">
      <div class="summary-block-title">${section.title}<span class="line"></span></div>
      ${section.fields.length
        ? section.fields.map(field=>`
          <div class="summary-line">
            <b>${escapeHtml(field.label)}:</b> ${summaryValueHtml(field.value)}
          </div>
        `).join('')
        : '<div class="summary-line"><span class="summary-empty">раздел пока не настроен</span></div>'}
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
          <h2>${allDone?'Итоговый паспорт проекта готов':'Черновик паспорта проекта'}</h2>
          <p>${allDone?`Все ${steps.length} разделов заполнены. Скопируйте текст или скачайте черновик итогового паспорта проекта.`:`Заполнено ${doneCount} из ${steps.length} разделов. Можно скачать черновик уже сейчас и вернуться к оставшимся пунктам позже.`}</p>
        </div>
        <div class="completion-actions">
          <button class="btn btn-on-dark" onclick="copyExport()">⧉ Скопировать текст</button>
          <button class="btn btn-outline-dark" onclick="downloadExport()">⬇ Скачать .txt</button>
        </div>
      </div>

      ${!allDone?`<div class="gap-warning">⚠️ Некоторые разделы ещё не заполнены — в итоговом паспорте они будут отмечены как «не указано». Вернитесь к слабым местам перед адаптацией проекта под конкретную конкурсную заявку.</div>`:''}

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
  a.download = 'grantmaster_project_passport.txt';
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

const projectLoadResult = loadSavedProject();
lastSavedSnapshot = currentProjectSnapshot();
projectStorageWriteBlocked = projectLoadResult.status === 'unsupported';
projectStorageReady = true;
bindProjectStorage();
renderAll();

if(projectLoadResult.status === 'restored'){
  setProjectStorageStatus('Проект восстановлен и сохраняется локально', 'saved');
} else if(projectLoadResult.status === 'invalid'){
  setProjectStorageStatus('Сохранённые данные повреждены. Начат новый проект', 'error');
} else if(projectLoadResult.status === 'unavailable'){
  setProjectStorageStatus('Локальное сохранение недоступно в этом браузере', 'error');
} else if(projectLoadResult.status === 'unsupported'){
  setProjectStorageStatus('Проект создан в более новой версии. Очистите его, чтобы начать заново', 'error');
} else {
  setProjectStorageStatus('Автосохранение включено', 'saved');
}
