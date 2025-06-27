// JavaScript للنافبار (قائمة الهمبرجر)
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerContent = document.getElementById('hamburgerContent');

hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    hamburgerMenu.classList.toggle('active');
    hamburgerContent.classList.toggle('active');
});

// إغلاق قائمة الهمبرجر عند النقر خارجها
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !hamburgerContent.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        hamburgerContent.classList.remove('active');
    }
});

// JavaScript للأشكال المتحركة حول الصورة
const particleContainer = document.getElementById('particleContainer');
const numBubbles = 200;
const numArabicChars = 30;
const arabicCharacters = ['💙','💛','💚','💜','👌','✨️','✨️','✨️','💯','💯','💯','💯','💯','💯','علي','علي','العربي ','سهل','العربي','جدااا','جدااا' ];

function createParticle(type) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    if (type === 'bubble') {
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.classList.add('bubble');
    } else if (type === 'arabic') {
        const char = arabicCharacters[Math.floor(Math.random() * arabicCharacters.length)];
        particle.textContent = char;
        particle.classList.add('arabic');
    }

    const startX = (Math.random() - 0.5) * 600;
    const startY = (Math.random() - 0.5) * 600;
    particle.style.left = `calc(50% + ${startX}px)`;
    particle.style.top = `calc(50% + ${startY}px)`;

    const dx = (Math.random() - 0.5) * 800;
    const dy = (Math.random() - 0.5) * 800;
    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--dy', `${dy}px`);

    const endScale = Math.random() * 2 + 0.5;
    particle.style.setProperty('--s', endScale);

    const rotation = Math.random() * 360 - 180;
    particle.style.setProperty('--r', `${rotation}deg`);

    const delay = Math.random() * 18;
    particle.style.animationDelay = `${delay}s`;

    const duration = Math.random() * 8 + 12;
    particle.style.animationDuration = `${duration}s`;

    particleContainer.appendChild(particle);

    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle(type);
    });
}

for (let i = 0; i < numBubbles; i++) {
    createParticle('bubble');
}

for (let i = 0; i < numArabicChars; i++) {
    createParticle('arabic');
}

window.addEventListener('load', () => {
  document.querySelector('.loader-overlay').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
  document.body.classList.remove('loading');
});

