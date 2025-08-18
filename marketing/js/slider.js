document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSlide = 0;
    
    // Buat dots (titik indikator) secara dinamis
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dots span');

    function showSlide(index) {
        // Batasi index agar tidak keluar dari jumlah slide
        if (index >= slides.length) {
            index = 0;
        }
        if (index < 0) {
            index = slides.length - 1;
        }

        // Sembunyikan semua slide dan non-aktifkan semua dot
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Tampilkan slide dan dot yang dipilih
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    }

    // Fungsi untuk tombol next dan prev
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Tambahkan event listener ke tombol
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Otomatis pindah slide setiap 5 detik
    setInterval(nextSlide, 5000); // 5000 milidetik = 5 detik
});