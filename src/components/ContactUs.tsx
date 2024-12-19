import Link from "next/link";

const ContactUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Hubungi Kami
        </h1>
        <p className="text-gray-700 text-center mb-12">
          Punya pertanyaan atau ingin menghubungi kami? Kami siap membantu.
          Hubungi kami melalui formulir di bawah ini atau melalui detail kontak
          yang tersedia.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Detail Kontak
            </h2>
            <Link href={`mailto:cs@darmabuanaindonesia.com`}>
              <p className="text-gray-600 mb-2 hover:text-blue-500 duration-200">Email: cs@darmabuanaindonesia.com</p>
            </Link>
            <Link href={`https://wa.me/6285295959656`}>
              <p className="text-gray-600 mb-2 hover:text-blue-500 duration-200"> No Telepon / WA: +62 852 9595 9656</p>
            </Link>
            <p className="text-gray-600 mb-2">
              Alamat: Jl. Gading Tutuka Residence Blok F.23, Kec. Banjaran,
              Kab. Bandung, Jawa Barat
            </p>
            <p className="text-gray-600">
              Jam Operasional: Senin-Jum'at, 09.00 - 17.00
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Kirim Pesan
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Masukkan Nama"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Masukkan Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ketik Pesan..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
