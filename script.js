const languageSelectors = document.querySelectorAll('input[name="language"]');
languageSelectors.forEach(selector => {
    selector.addEventListener('change', () => {
        const language = selector.value;
        if (language === 'English') {
            translateToEnglish();
        } else if (language === 'Kinyarwanda') {
            translateToKinyarwanda();
        }
    });
});

function translateToEnglish() {
    document.getElementById('lang-selection').innerText = "Select language";
    document.getElementById('election-type').innerText = "Choose the type of Election:";
    document.querySelector('.btn-primary').innerText = "Business/Co_operative";
    document.querySelector('.btn-secondary').innerText = "School";
    document.querySelector('.btn-tertiary').innerText = "Presidential";
}

function translateToKinyarwanda() {
    document.getElementById('lang-selection').innerText = "Hitamo ururimi";
    document.getElementById('election-type').innerText = "Hitamo ubwoko bw'amatora:";
    document.querySelector('.btn-primary').innerText = "Ubucuruzi / Koperative";
    document.querySelector('.btn-secondary').innerText = "Ishuri";
    document.querySelector('.btn-tertiary').innerText = "Amatora y'Umukuru w'Igihugu";
     document.querySelector('.btn-secondary').innerText = "Ishuri";
}