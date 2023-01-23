const faqs = document.querySelectorAll('.faq');

const toggle = document.querySelector('.toggle input');
const silverPack = document.getElementById('silverPackPrice');
const platPack = document.getElementById('platPackPrice');
const diamondPack = document.getElementById('diamondPackPrice');

const previousBtn = document.getElementById('previousRev');
const nextBtn = document.getElementById('nextRev');

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


function carousel(review) {
  console.log('danger');
  let reviews = document.getElementsByClassName('reviews');
  console.log(reviews);

  if (review >= reviews.length) {
    review = 0;
    rev = 0;
  }
  else if (review < 0) {
    review = reviews.length - 1;
    rev = reviews.length - 1;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = 'none';
  }
  reviews[review].style.display = 'block';
}

function previousReview() {
  rev = rev - 1;
  carousel(rev);
}

function nextReview() {
  rev = rev + 1;
  carousel(rev);
}

previousBtn.addEventListener('click', () => {
  previousReview();
});

nextBtn.addEventListener('click', () => {
  nextReview();
});



