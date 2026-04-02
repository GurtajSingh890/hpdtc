import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Star, Wifi, Coffee, Car, Utensils } from 'lucide-react';

const HOTELS = [
  {
    id: 1,
    name: 'The Himalayan Retreat',
    location: 'Manali, Himachal Pradesh',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/825045942.jpg?k=24e43ed0f939c8d308a048ec4d527b1f20bf622504555dbf95da3771d30a8556&o=',
    rating: 4.8,
    reviews: 124,
    price: '₹ 4,500',
    amenities: [<Wifi size={15} />, <Coffee size={15} />, <Car size={15} />, <Utensils size={15} />],
    featured: true,
  },
  {
    id: 2,
    name: 'Shimla Heritage Grand',
    location: 'Shimla, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviews: 89,
    price: '₹ 3,800',
    amenities: [<Wifi size={15} />, <Coffee size={15} />, <Utensils size={15} />],
    featured: false,
  },
  {
    id: 3,
    name: 'Spiti Valley Eco Resort',
    location: 'Kaza, Spiti Valley',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 210,
    price: '₹ 5,200',
    amenities: [<Wifi size={15} />, <Coffee size={15} />, <Car size={15} />],
    featured: true,
  },
  {
    id: 4,
    name: 'Dharamshala Pine Views',
    location: 'Dharamshala, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: 76,
    price: '₹ 2,900',
    amenities: [<Wifi size={15} />, <Utensils size={15} />],
    featured: false,
  },
  {
    id: 5,
    name: 'Dalhousie Heights',
    location: 'Dalhousie, Himachal Pradesh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdXWEHg9sMIEugL9CCQKckwjNO_d9Psbejw&s',
    rating: 4.7,
    reviews: 154,
    price: '₹ 4,100',
    amenities: [<Wifi size={15} />, <Coffee size={15} />, <Car size={15} />, <Utensils size={15} />],
    featured: true,
  },
  {
    id: 6,
    name: 'Kullu Riverside Camp',
    location: 'Kullu, Himachal Pradesh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQQlluHwHXAwHvfOluL06K7c-mYV4936gIw&s',
    rating: 4.4,
    reviews: 62,
    price: '₹ 2,100',
    amenities: [<Car size={15} />, <Utensils size={15} />],
    featured: false,
  },
];

export default function Hotels() {
  return (
    <div className="pb-20 min-h-screen" style={{ backgroundColor: '#f8f9fc', fontFamily: 'sans-serif' }}>

      {/* ── Hero ── */}
      <div className="relative mb-16 overflow-hidden min-h-[60vh] pb-12" style={{ borderRadius: '0 0 40px 40px' }}>
        <img loading="lazy" src="https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/himachal-pradesh/shimla/magnificent-tour-to-himachal-9-days-trip/kyelang-village-himachal-pradesh-tri-iter-day4.jpg"
          alt="Luxury Hotel in Himachal"
          className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,96,0.92) 0%, rgba(0,32,96,0.50) 100%)' }}
        ></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 h-full text-center min-h-[60vh]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
          >
            Find Your Perfect Room
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-white/85 mb-8 max-w-2xl"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
          >
            Discover handpicked hotels, cozy cottages, and luxury resorts across the beautiful landscapes of Himachal Pradesh.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="flex items-center w-full max-w-3xl"
            style={{
              background: 'white',
              borderRadius: 50,
              padding: '6px 6px 6px 20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            }}
          >
            <div className="flex items-center flex-1 text-gray-600 border-r border-gray-200 pr-4">
              <MapPin size={18} className="mr-3 shrink-0" style={{ color: '#FF5A2A' }} />
              <input
                type="text"
                placeholder="Where do you want to stay?"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <div className="hidden md:flex items-center flex-1 px-4 text-gray-600">
              <input type="date" className="w-full outline-none bg-transparent text-sm" />
            </div>
            <button
              className="flex items-center gap-2 font-bold text-white text-sm transition-all"
              style={{
                background: '#FF5A2A',
                padding: '12px 28px',
                borderRadius: 50,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255,90,42,0.4)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04a1f'}
              onMouseLeave={e => e.currentTarget.style.background = '#FF5A2A'}
            >
              <Search size={16} className="hidden sm:block" />
              Search
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Hotel Cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span
              className="text-uppercase font-bold d-block mb-1"
              style={{ color: '#FF5A2A', letterSpacing: '3px', fontSize: '0.78rem' }}
            >
              HANDPICKED FOR YOU
            </span>
            <h2 className="font-extrabold" style={{ color: '#002060', fontSize: '1.9rem', margin: 0 }}>
              Recommended Stays
            </h2>
            <p className="text-gray-500 mt-1" style={{ fontSize: '0.95rem' }}>
              Highly rated accommodations for your next adventure
            </p>
          </div>
          <button
            className="hidden sm:block font-bold transition-all"
            style={{
              color: '#FF5A2A',
              background: 'rgba(255,90,42,0.08)',
              border: '1.5px solid rgba(255,90,42,0.25)',
              borderRadius: 50,
              padding: '10px 24px',
              cursor: 'pointer',
              fontSize: '0.88rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FF5A2A'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,90,42,0.08)'; e.currentTarget.style.color = '#FF5A2A'; }}
          >
            View All Destinations
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOTELS.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.09, duration: 0.5 }}
              style={{
                background: 'white',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                border: '1px solid rgba(0,0,0,0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,32,96,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                <motion.img loading="lazy" src={hotel.image}
                  alt={hotel.name}
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)' }} />

                {hotel.featured && (
                  <span
                    style={{
                      position: 'absolute', top: 14, left: 14,
                      background: '#FF5A2A', color: 'white',
                      fontSize: '0.7rem', fontWeight: 700,
                      padding: '5px 12px', borderRadius: 50,
                      letterSpacing: '1.5px', textTransform: 'uppercase',
                      boxShadow: '0 4px 12px rgba(255,90,42,0.45)',
                    }}
                  >
                    Featured
                  </span>
                )}

                {/* Wishlist button */}
                <button
                  style={{
                    position: 'absolute', top: 14, right: 14,
                    width: 38, height: 38,
                    background: 'rgba(255,255,255,0.22)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'white'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 18, height: 18, color: 'white' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                  <h3 style={{ fontWeight: 700, color: '#002060', fontSize: '1.05rem', lineHeight: 1.3, margin: 0, flex: 1, paddingRight: 8 }}>
                    {hotel.name}
                  </h3>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', gap: 3,
                      background: '#ecfdf5', color: '#065f46',
                      padding: '4px 10px', borderRadius: 50,
                      fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
                    }}
                  >
                    <Star size={12} fill="currentColor" />
                    {hotel.rating}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: '#9ca3af', fontSize: '0.83rem', marginBottom: 16 }}>
                  <MapPin size={13} style={{ marginRight: 4, color: '#d1d5db', flexShrink: 0 }} />
                  {hotel.location}
                </div>

                {/* Amenities */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                  {hotel.amenities.map((icon, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#f0f4ff',
                        border: '1px solid #e0e7ff',
                        borderRadius: 50,
                        width: 34, height: 34,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#002060',
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                  <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600, marginLeft: 4 }}>
                    +{12 - hotel.amenities.length} more
                  </span>
                </div>

                {/* Price + CTA */}
                <div
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderTop: '1px solid #f3f4f6', paddingTop: 16, marginTop: 'auto',
                  }}
                >
                  <div>
                    <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: 1 }}>Starting from</div>
                    <div style={{ fontWeight: 800, color: '#FF5A2A', fontSize: '1.15rem', lineHeight: 1.2 }}>
                      {hotel.price}
                      <span style={{ fontWeight: 400, color: '#9ca3af', fontSize: '0.78rem' }}>/night</span>
                    </div>
                  </div>
                  <button
                    style={{
                      background: '#002060',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      padding: '10px 22px',
                      borderRadius: 50,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 6px 18px rgba(0,32,96,0.25)',
                      transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#001540';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,32,96,0.35)';
                      e.currentTarget.style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#002060';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,32,96,0.25)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div
          className="mt-16 flex flex-col md:flex-row items-center justify-between"
          style={{
            background: 'linear-gradient(135deg, #002060 0%, #1a3a6e 100%)',
            borderRadius: 28,
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: '0 24px 60px rgba(0,32,96,0.28)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blobs */}
          <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, background: 'rgba(255,255,255,0.07)', borderRadius: '50%', filter: 'blur(40px)' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -80, width: 240, height: 240, background: 'rgba(255,90,42,0.18)', borderRadius: '50%', filter: 'blur(40px)' }} />

          <div className="relative md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="font-extrabold text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
              Need help planning your perfect stay?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', maxWidth: 520 }}>
              Our travel experts can help you find accommodations that match your style and budget anywhere in Himachal.
            </p>
          </div>

          <div className="relative">
            <button
              style={{
                background: '#FF5A2A',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '14px 36px',
                borderRadius: 50,
                border: '2px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(255,90,42,0.4)',
                transition: 'background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#FF5A2A';
                e.currentTarget.style.borderColor = 'white';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#FF5A2A';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,90,42,0.4)';
              }}
            >
              Contact an Expert
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
