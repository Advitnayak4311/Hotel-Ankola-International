import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';
import SectionHeader from '../components/Common/SectionHeader';

const attractions = [
  {
    name: "Gokarna Beach",
    distance: "26 km",
    time: "25 Mins",
    description: "Famous pilgrimage town and scenic beach destination. Popular for its pristine sandy stretches and Lord Mahabaleshwar temple.",
    image: "/gokarna beach.jpg",
    mapUrl: "https://www.google.com/maps/place/Gokarna+Main+Beach/@14.5437352,74.27552,6892m/data=!3m1!1e3!4m10!1m2!2m1!1sgokarna+beach!3m6!1s0x3bbe83d61cc8edb7:0x909513ca502e1759!8m2!3d14.5437352!4d74.3136288!15sCg1nb2thcm5hIGJlYWNoWg8iDWdva2FybmEgYmVhY2iSAQxwdWJsaWNfYmVhY2jgAQA!16s%2Fg%2F1tf2qp6_?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Om Beach",
    distance: "32 km",
    time: "35 Mins",
    description: "Named after its natural Om shape. A global traveler hub, perfect for watching coastal sunsets, enjoying water sports, and cafe dining.",
    image: "/om beach.webp",
    mapUrl: "https://www.google.com/maps/place/Om+Beach/@14.5188271,74.3203131,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbe8218126fad05:0x294f4f7ab4235873!8m2!3d14.5192405!4d74.3230039!16s%2Fg%2F1vlqnnmz?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Mirjan Fort",
    distance: "24 km",
    time: "20 Mins",
    description: "A majestic 16th-century fortress known for architectural elegance and green moss coverings during the monsoons. Built by Queen Chennabhairadevi.",
    image: "/mirjan fort.jpg",
    mapUrl: "https://www.google.com/maps/place/Mirjan+Fort/@14.4893403,74.4149897,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbc27e587672ccb:0xa2cb05388565e3c8!8m2!3d14.4893403!4d74.4175646!16s%2Fm%2F0c02qcf?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Vibhooti Falls",
    distance: "55 km",
    time: "1.2 Hours",
    description: "A hidden waterfall nestled deep within the Sahyadri forests, flowing over solid limestone rocks. Perfect for forest trekking.",
    image: "/viboothi falls.jpg",
    mapUrl: "https://www.google.com/maps/place/Vibhuthi+Falls/@14.5982024,74.5485839,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbe9f2bef5e5491:0x79b2f6b797926d5a!8m2!3d14.5981041!4d74.55118!16s%2Fg%2F11fk5v9md8?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Yana Caves",
    distance: "56 km",
    time: "1.3 Hours",
    description: "Giant black crystalline karst rock monolith structures rising amidst dense rain forests. Features a cave temple at the base.",
    image: "/yana caves.jpeg",
    mapUrl: "https://www.google.com/maps/place/Yana+Caves/@14.5897089,74.5562481,3445m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbe9f39015d1f5b:0x495fd0e583b087f1!8m2!3d14.5897094!4d74.5665479!16s%2Fg%2F11gzhv2m1?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Jog Falls",
    distance: "115 km",
    time: "2.5 Hours",
    description: "India's second-highest plunge waterfall, formed by the Sharavathi River. Becomes a roaring spectacle of nature during monsoons.",
    image: "/jog falls.jpg",
    mapUrl: "https://www.google.com/maps/place/Jog+Falls+View+Point/@14.5894775,74.2368849,110243m/data=!3m1!1e3!4m10!1m2!2m1!1sjog+falls!3m6!1s0x3bbc0dbcfaccf7ab:0xe1c8583cdc6c7385!8m2!3d14.226635!4d74.8073345!15sCglqb2cgZmFsbHNaCyIJam9nIGZhbGxzkgELc2NlbmljX3Nwb3TgAQA!16s%2Fg%2F11b6vdv4gn?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  }
];

export default function Attractions() {
  const { t } = useLanguage();
  const attractionImages = attractions.map((place) => place.image);

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        images={attractionImages}
        eyebrow="Explore Nearby"
        title={t('attractionsTitle')}
        subtitle={t('attractionsSubtitle')}
      />

      {/* Intro & Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <SectionHeader eyebrow="The Highway Gateway" title="Ideally Situated for Coastal Explorations" subtitle="Our location on NH66 offers seamless travel transitions. We have compiled a list of must-visit travel destinations within comfortable driving range from the hotel lobby." />

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((place, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-gold/30 text-gold px-3.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                  <Car className="w-3.5 h-3.5 text-gold" />
                  <span>{place.time} Away</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-gold transition-colors">{place.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{place.description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Ankola NH66</span>
                  </div>
                  <a
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 font-semibold text-teal-600 hover:text-teal-800 transition-colors cursor-pointer"
                    title="View on Google Maps"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Distance: {place.distance}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}
