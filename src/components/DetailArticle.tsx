import React from "react";

const DetailArticle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Article Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Pentingnya Teknologi Informasi (IT) dalam Era Digital
        </h1>

        {/* Article Metadata */}
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <span>Penulis: Alvine Yoga Pratama</span>
          <span className="mx-2">•</span>
          <span>19 Desember 2024</span>
        </div>

        {/* Article Image */}
        <div className="mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDvpiNtfeIiiFjMHRcBrsFYkHmqZufI6lMQ&s"
            alt="Article cover"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Di era digital yang serba cepat ini, teknologi informasi (IT) telah
            menjadi tulang punggung utama dalam berbagai aspek kehidupan, baik
            itu dalam dunia bisnis, pendidikan, pemerintahan, hingga kehidupan
            sehari-hari. IT tidak hanya membantu meningkatkan efisiensi, tetapi
            juga membuka peluang-peluang baru yang sebelumnya tidak terpikirkan.
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Apa Itu Teknologi Informasi (IT)?
          </h2>
          <p>
            Teknologi Informasi (IT) adalah penggunaan teknologi untuk mengelola
            dan memproses informasi. Hal ini mencakup perangkat keras
            (hardware), perangkat lunak (software), jaringan, serta berbagai
            aplikasi yang memungkinkan data dapat diakses, disimpan, diproses,
            dan dibagikan secara efisien.
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Manfaat IT dalam Kehidupan Modern
          </h2>
          <p>
            Dalam dunia bisnis, IT memungkinkan perusahaan untuk mengotomatisasi
            berbagai proses, seperti pengelolaan data pelanggan, penjualan, dan
            logistik. Contohnya, e-commerce telah mengubah cara berbelanja,
            memungkinkan konsumen untuk membeli barang dan jasa hanya dengan
            beberapa klik.
          </p>
          <p>
            IT menyediakan berbagai platform komunikasi, seperti email, pesan
            instan, dan video konferensi, yang memudahkan individu dan
            organisasi untuk tetap terhubung meskipun berada di lokasi yang
            berjauhan.
          </p>
          <p>
            Dengan adanya internet, informasi kini tersedia di ujung jari. IT
            telah membuka pintu bagi akses pendidikan, penelitian, dan
            pengetahuan yang tidak terbatas, memungkinkan orang untuk belajar
            dan berkembang tanpa batasan geografis.
          </p>
          <p>
            IT juga memainkan peran penting dalam menjaga keamanan informasi.
            Dengan sistem keamanan siber yang canggih, organisasi dapat
            melindungi data sensitif dari ancaman seperti peretasan dan
            pencurian.
          </p>
          <p>
            IT mendorong inovasi di berbagai sektor, termasuk kesehatan,
            pendidikan, dan transportasi. Misalnya, teknologi seperti kecerdasan
            buatan (AI) dan Internet of Things (IoT) telah menghadirkan solusi
            yang lebih canggih untuk berbagai tantangan global.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Tantangan di Dunia IT
          </h2>
          <p>
            Namun, di balik manfaatnya, IT juga menghadapi berbagai tantangan,
            seperti:
          </p>
          <ul>
            <li>Ancaman keamanan siber yang semakin kompleks.</li>
            <li>
              Kesenjangan digital antara daerah yang maju teknologi dan yang
              belum terjangkau.
            </li>
            <li>
              Etika penggunaan teknologi, termasuk privasi dan penyalahgunaan
              data.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 mb-4">Kesimpulan</h2>
          <p>
            Teknologi Informasi adalah elemen yang tak terpisahkan dari
            kehidupan modern. Bagi individu maupun organisasi, memanfaatkan IT
            secara optimal adalah kunci untuk bertahan dan berkembang di era
            digital ini. Dengan terus berinovasi dan mengatasi tantangan yang
            ada, IT akan terus menjadi pendorong utama kemajuan dunia.
          </p>
        </div>

        {/* Article Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags:</h3>
          <div className="flex space-x-2">
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
              IT
            </span>
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
              Inovasi
            </span>
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
              Teknologi Informasi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;
