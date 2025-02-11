const messages = [
    "Hai kamu... ♥️",
    "Ada yang ingin aku sampaikan...",
    "Kamu tau nggak?",
    "Setiap kali aku melihatmu...",
    "Hatiku berdebar lebih kencang",
    "Dan aku merasa sangat bahagia",
    "Aku ingin mengatakan...",
    "Bahwa aku...",
    "Sangat menyayangimu ♥️",
    "Maukah kamu...",
    "Menjadi pendamping hidupku? 💍"
];

let currentMessage = 0;
let audio = new Audio('Kepastian_Rasa.mp3');
let isPlaying = false;

window.onload = async function() {
    await Swal.fire({
        title: 'Hai Cantik! ❤️',
        text: 'Ada sesuatu untukmu...',
        confirmButtonText: 'Buka',
        confirmButtonColor: '#ff1493'
    });
    startMessages();
    createHearts();
    audio.loop = true;
    toggleMusic();
};

function startMessages() {
    showNextMessage();
    setInterval(createFloatingHeart, 500);
}

function showNextMessage() {
    if (currentMessage < messages.length) {
        const messageContainer = document.getElementById('message-container');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messages[currentMessage];
        messageContainer.appendChild(messageElement);
        
        setTimeout(() => {
            messageElement.classList.add('visible');
        }, 100);

        currentMessage++;
        setTimeout(showNextMessage, 2000);
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function showLove() {
    Swal.fire({
        title: 'I Love You! ❤️',
        text: 'Kamu adalah yang terindah dalam hidupku',
        confirmButtonText: 'Love You Too!',
        confirmButtonColor: '#ff1493',
        background: '#fff5f5',
        showConfetti: true
    });
}

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}

function sendWhatsApp() {
    const message = encodeURIComponent("Aku sudah melihat pesanmu... Dan jawabanku adalah Aku juga mencintamu ❤️");
    const phoneNumber = "087830450253"; // Masukkan nomor WhatsApp tujuan
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`);
}

function createHearts() {
    const bgHearts = document.querySelector('.bg-hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        bgHearts.appendChild(heart);
    }
}