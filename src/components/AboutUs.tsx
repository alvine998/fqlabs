const AboutUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          FQLabs
        </h1>
        <p className="text-gray-700 text-center mb-12">
          FQLabs adalah perusahaan IT konsultan yang berfokus pada penyediaan
          solusi teknologi terbaik untuk membantu bisnis Anda berkembang di era
          digital. Kami menawarkan berbagai layanan profesional dalam pembuatan
          website dan aplikasi yang dirancang khusus untuk memenuhi kebutuhan
          unik setiap klien.
        </p>
        <div>
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Visi
          </h1>
          <p className="text-gray-700 text-center mb-12">
            Menjadi perusahaan IT konsultan terdepan yang menyediakan solusi
            teknologi inovatif dan berkualitas tinggi untuk membantu bisnis
            mencapai potensi maksimal dalam dunia digital.
          </p>
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Misi
          </h1>
          <ul className="text-gray-700 text-center mb-12">
            <li>
              1. Menyediakan layanan IT konsultan yang profesional dan
              berorientasi pada solusi untuk mendukung pertumbuhan bisnis klien.
            </li>
            <li>
              2. Mengembangkan website dan aplikasi yang dirancang khusus,
              inovatif, dan responsif untuk memberikan pengalaman pengguna yang
              optimal.
            </li>
            <li>
              3. Menyediakan layanan yang berfokus pada kualitas, efisiensi, dan
              kepuasan pelanggan dalam setiap proyek yang kami kerjakan.
            </li>
            <li>
              4. Meningkatkan kapabilitas teknologi bisnis melalui adopsi
              teknologi terbaru dan metode terbaik dalam industri IT.
            </li>
            <li>
              5. Membangun hubungan jangka panjang dengan klien berdasarkan
              kepercayaan, transparansi, dan komitmen terhadap keberhasilan
              mereka.
            </li>
          </ul>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:-mt-5 duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Layanan Pembuatan Website
            </h2>
            <p className="text-gray-600">
              Dharma Buana Indonesia menyediakan jasa pembuatan website dengan
              desain modern, responsif, dan user-friendly. Kami membangun situs
              yang tidak hanya menarik tetapi juga fungsional, memberikan
              pengalaman pengguna yang optimal dan mendukung perkembangan bisnis
              Anda di dunia online.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:-mt-5 duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Layanan Pembuatan Aplikasi Android / iOS
            </h2>
            <p className="text-gray-600">
              Kami mengembangkan aplikasi mobile dan web custom yang sesuai
              dengan kebutuhan bisnis Anda. Dengan pendekatan berbasis pada
              riset dan pengembangan yang mendalam, kami memastikan aplikasi
              yang kami buat efektif, efisien, dan dapat diandalkan.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:-mt-5 duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Layanan Konsultasi IT
            </h2>
            <p className="text-gray-600">
              Kami memberikan layanan konsultasi IT untuk membantu bisnis Anda
              merencanakan dan mengimplementasikan solusi teknologi yang efisien
              dan efektif. Dari analisis sistem yang ada hingga rekomendasi
              teknologi terbaru, kami memastikan strategi IT Anda selaras dengan
              tujuan bisnis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
