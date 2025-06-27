document.addEventListener('DOMContentLoaded', function() {
  // Menangani pengiriman formulir kontak
  const contactForm = document.getElementById('contact-form');

  // Cek apakah elemen formulir ada di halaman saat ini
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // Mencegah perilaku default dari form (yang akan me-refresh halaman)
      event.preventDefault();

      // Mengambil nilai dari input nama untuk personalisasi pesan
      const contactNameInput = document.getElementById('contact-name');
      const name = contactNameInput.value || 'Anda';

      // Menampilkan popup sederhana (alert)
      alert(`Terima kasih, ${name}! Pesan Anda telah berhasil dikirim.`);

      // Mengosongkan kembali kolom-kolom formulir setelah berhasil dikirim
      contactForm.reset();
    });
  }

  // Bonus: Fungsionalitas untuk toggle menu di perangkat mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      // Menambah atau menghapus class 'active' untuk menampilkan/menyembunyikan menu
      // Anda perlu menambahkan styling untuk class 'nav.active' di file CSS Anda
      nav.classList.toggle('active');
    });
  }
});