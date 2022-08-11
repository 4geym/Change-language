const select = document.querySelector('select');
const f = document.querySelector('.f');
const s = document.querySelector('.s');
const t = document.querySelector('.t');

select.addEventListener('change', changeLanguage);
 
function changeLanguage() {
    if(select.value == 'ua') {
        f.innerHTML = arrLang['ua']['f'];
        s.innerHTML = arrLang['ua']['s'];
        t.innerHTML = arrLang['ua']['t'];
    }
    if(select.value == 'en') {
        f.innerHTML = arrLang['en']['f'];
        s.innerHTML = arrLang['en']['s'];
        t.innerHTML = arrLang['en']['t'];
    }
    if(select.value == 'ru') {
        f.innerHTML = arrLang['ru']['f'];
        s.innerHTML = arrLang['ru']['s'];
        t.innerHTML = arrLang['ru']['t'];
    }
} 