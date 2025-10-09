import Navbar from "@/component/ui/navbar";
import SearchPage from "@/component/ui/search";
import MapComponent from "@/component/ui/map";
export default function home() {
  return (
    <main className="relative">
    <section id="home" className="h-1/2 flex flex-col justify-start items-center pt-50">
      <h1 className="lg:text-4xl font-bold text-center text-2xl">
        Temukan & Dukung Bisnis Lokal <br /> Melalui Peta Interaktif
      </h1>
      <p className="text-center text-green-400 pt-6 text-[11px] lg:text-[17px]">Jelajahi bisnis UMKM berkelanjutan di daerah Anda menggunakan platform WebGIS kami. <br /> Temukan, hubungkan, dan dukung wirausaha lokal yang memberikan dampak positif.</p>
    </section>
    <SearchPage />
   
    </main>



  );
}