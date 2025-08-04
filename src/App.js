export function createApp() {
  const businessInfo = {
    name: "Warung Makan Sederhana",
    type: "Food & Beverage",
    description: "Warung makan keluarga yang menyajikan masakan rumahan dengan cita rasa autentik dan harga terjangkau. Spesialisasi nasi gudeg, soto ayam, dan berbagai lauk pauk tradisional.",
    whatsapp: "+6281234567890" // Replace with your actual WhatsApp number
  };

  return `
    <!DOCTYPE html>
    <html lang="id" class="scroll-smooth">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${businessInfo.name}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
    </head>
    <body class="font-poppins bg-gray-100">

      <!-- Header -->
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">${businessInfo.name}</h1>
          <a href="https://wa.me/${businessInfo.whatsapp.replace('+62', '')}?text=Halo,%20saya%20ingin%20melakukan%20pemesanan." target="_blank" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Pesan Sekarang</a>
        </div>
      </header>

      <!-- Hero -->
      <section class="bg-cover bg-center bg-[url('https://source.unsplash.com/random/1920x1080/?food,indonesia')] py-20">
        <div class="container mx-auto text-center text-white">
          <h2 class="text-4xl font-bold mb-4">Rasakan Kelezatan Masakan Rumahan</h2>
          <p class="text-lg mb-8">Warung Makan Sederhana menyajikan hidangan lezat dengan cita rasa autentik dan harga terjangkau.</p>
          <a href="#menu" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Lihat Menu</a>
        </div>
      </section>


      <!-- About -->
      <section id="about" class="py-12">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Tentang Kami</h2>
          <p class="text-lg mb-8">${businessInfo.description} Kami berkomitmen untuk menyediakan makanan berkualitas tinggi dengan harga yang terjangkau bagi seluruh keluarga.  Kami menggunakan bahan-bahan segar dan berkualitas terbaik dalam setiap masakan kami.  Kunjugi kami dan rasakan sendiri kelezatannya!</p>
        </div>
      </section>

      <!-- Services (Menu) -->
      <section id="menu" class="py-12 bg-gray-50">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Menu Pilihan</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white shadow-md p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Nasi Gudeg</h3>
              <p class="text-gray-700">Nasi gudeg khas Yogyakarta dengan cita rasa yang autentik dan gurih.</p>
              <p class="text-gray-600">Rp 25.000</p>
            </div>
            <div class="bg-white shadow-md p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Soto Ayam</h3>
              <p class="text-gray-700">Soto ayam kampung dengan kuah yang gurih dan rempah-rempah yang harum.</p>
              <p class="text-gray-600">Rp 20.000</p>
            </div>
            <div class="bg-white shadow-md p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-2">Aneka Lauk Pauk</h3>
              <p class="text-gray-700">Tersedia berbagai macam lauk pauk tradisional seperti rendang, sayur asem, dan perkedel.</p>
              <p class="text-gray-600">Mulai dari Rp 10.000</p>
            </div>
            </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section id="testimonials" class="py-12">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Testimoni Pelanggan</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white shadow-md p-6 rounded-lg">
              <p class="text-gray-700">"Makanan di Warung Makan Sederhana enak banget! Rasanya seperti masakan rumah sendiri. Harga juga terjangkau."</p>
              <p class="text-gray-600">- Budi Santoso</p>
            </div>
            <div class="bg-white shadow-md p-6 rounded-lg">
              <p class="text-gray-700">"Saya suka sekali dengan nasi gudegnya.  Bumbu gudegnya meresap dan rasanya sangat otentik.  Sangat direkomendasikan!"</p>
              <p class="text-gray-600">- Ani Lestari</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-12 bg-gray-50">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Hubungi Kami</h2>
          <p class="mb-4">Untuk informasi lebih lanjut atau pemesanan, silahkan hubungi kami melalui WhatsApp:</p>
          <a href="https://wa.me/${businessInfo.whatsapp.replace('+62', '')}" target="_blank" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">Hubungi via WhatsApp</a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
          <p>&copy; ${new Date().getFullYear()} ${businessInfo.name}. All rights reserved.</p>
        </div>
      </footer>

    </body>
    </html>
  `;
}
