const faqs = document.querySelectorAll('.faq');

const toggle = document.querySelector('.toggle input');
const silverPack = document.getElementById('silverPackPrice');
const platPack = document.getElementById('platPackPrice');
const diamondPack = document.getElementById('diamondPackPrice');

const mobileToggle = document.getElementById('hamburger');

mobileToggle.addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-Menu');
  mobileMenu.classList.toggle('mobileToggle');

})

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('hey');
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})




const saveText = 'Save 20%';

const save = document.createElement('a');
const paymentPlan = document.createElement('p');
save.innerText = saveText;
paymentPlan.innerText = '$374 (Billed yearly)';
save.classList.add('discount');
paymentPlan.classList.add('payment-plan');
let saveSilver = save.cloneNode();
let savePlat = save.cloneNode();
savePlat.innerText = saveText;
saveSilver.classList.add('discount');
saveSilver.innerText = saveText;

let paymentPlanPlat = paymentPlan.cloneNode();
let paymentPlanDia = paymentPlan.cloneNode();
paymentPlanPlat.classList.add('payment-plan');
paymentPlanDia.classList.add('payment-plan');

paymentPlanPlat.innerText = '$279 (Billed yearly)';
paymentPlanDia.innerText = '$566 (Billed yearly)';


toggle.checked = false;
toggle.addEventListener('click', () => {
  if (toggle.checked) {
    console.log('checked')
    silverPack.innerHTML = '$39' + '<small>per month</small>';
    platPack.innerHTML = '$29' + '<small>per month</small>';
    diamondPack.innerHTML = '$59' + '<small>per month</small>';

    silverPack.appendChild(saveSilver);
    platPack.appendChild(savePlat);
    diamondPack.appendChild(save);

    silverPack.appendChild(paymentPlan);
    platPack.appendChild(paymentPlanPlat);
    diamondPack.appendChild(paymentPlanDia);
  } else {
    silverPack.innerHTML = '$31' + '<small>per month</small>';
    platPack.innerHTML = '$23' + '<small>per month</small>';
    diamondPack.innerHTML = '$47' + '<small>per month</small>';
  }
});

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
    faq.classList.toggle('border-color');
  });
})







