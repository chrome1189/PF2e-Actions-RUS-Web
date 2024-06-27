var modalwin = document.getElementById('modalwin');
var actCommon = document.getElementById('common');
var actAcro = document.getElementById('acrobatics');
var actAthl = document.getElementById('athletics');
var actThif = document.getElementById('thievery');
var actSurv = document.getElementById('survival');
var actDipl = document.getElementById('diplomacy');
var actIntm = document.getElementById('intimidation');
var actPerf = document.getElementById('performance');
var actMedc = document.getElementById('medicine');
var actArcn = document.getElementById('arcana');
var actDecp = document.getElementById('deception');
var actSoci = document.getElementById('society');
var actOclt = document.getElementById('occultism');
var actNetr = document.getElementById('nature');
var actRelg = document.getElementById('religion');
var actCrft = document.getElementById('crafting');
var actStel = document.getElementById('stealth');

// Функция закрытия всех окон

function closeAllWin () {
    modalwin.style.display = 'none';
    actCommon.style.display = 'none';
    actAcro.style.display = 'none';
    actAthl.style.display = 'none';
    actThif.style.display = 'none';
    actSurv.style.display = 'none';
    actDipl.style.display = 'none';
    actIntm.style.display = 'none';
    actPerf.style.display = 'none';
    actMedc.style.display = 'none';
    actArcn.style.display = 'none';
    actDecp.style.display = 'none';
    actSoci.style.display = 'none';
    actOclt.style.display = 'none';
    actNetr.style.display = 'none';
    actRelg.style.display = 'none';
    actCrft.style.display = 'none';
    actStel.style.display = 'none';
};

// Функции открытия модальных окон

// Базовые действия
function openCommon () {
    modalwin.style.display = 'flex';
    actCommon.style.display = 'block';
};

// Акробатика
function openAcro () {
    modalwin.style.display = 'flex';
    actAcro.style.display = 'block';
};


// Атлетика
function openAthl () {
    modalwin.style.display = 'flex';
    actAthl.style.display = 'block';
};

// Воровство
function openThif() {
    modalwin.style.display = 'flex';
    actThif.style.display = 'block';
};

// Выживание
function openSurv () {
    modalwin.style.display = 'flex';
    actSurv.style.display = 'block';
};

// Дипломатия
function openDipl () {
    modalwin.style.display = 'flex';
    actDipl.style.display = 'block';
};

// Запугивание
function openIntm () {
    modalwin.style.display = 'flex';
    actIntm.style.display = 'block';
};

// Исполнение
function openPerf () {
    modalwin.style.display = 'flex';
    actPerf.style.display = 'block';
};

// Медицина
function openMedc () {
    modalwin.style.display = 'flex';
    actMedc.style.display = 'block';
};

// Мистицизм
function openArcn () {
    modalwin.style.display = 'flex';
    actArcn.style.display = 'block';
};

// Обман
function openDecp () {
    modalwin.style.display = 'flex';
    actDecp.style.display = 'block';
};

// Общество
function openSoci () {
    modalwin.style.display = 'flex';
    actSoci.style.display = 'block';
};

// Окультизм
function openOclt () {
    modalwin.style.display = 'flex';
    actOclt.style.display = 'block';
};

// Природа
function openNetr () {
    modalwin.style.display = 'flex';
    actNetr.style.display = 'block';
};

// Религия
function openRelg () {
    modalwin.style.display = 'flex';
    actRelg.style.display = 'block';
};

// Крафт
function openCrft () {
    modalwin.style.display = 'flex';
    actCrft.style.display = 'block';
};

// Скрытность
function openStel () {
    modalwin.style.display = 'flex';
    actStel.style.display = 'block';
};