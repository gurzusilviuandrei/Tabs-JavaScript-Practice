const tabs = document.querySelectorAll('.tab');

const activeTab = document.querySelector('.tab-active');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab-active'));

tab.classList.add('tab-active');
const color = tab.getAttribute('data-color');
document.body.style.backgroundColor = color;


    });
});

if(tabs.length > 0) {
   tabs[0].classList.add('tab-active');
   const initialColor = tabs[0].getAttribute('data-color');
   document.body.style.backgroundColor = initialColor;
}

