var modalwin = document.getElementById('modalwin');
var actCommon = document.getElementById('common');
var actAcro = document.getElementById('acrobatics');

function closeAllWin () {
    modalwin.style.display = 'none';
    actCommon.style.display = 'none';
    actAcro.style.display = 'none';
};

// Модальные окна

function openCommon () {
    modalwin.style.display = 'flex';
    actCommon.style.display = 'block';
};

function openAcro () {
    modalwin.style.display = 'flex';
    actAcro.style.display = 'block';
};
