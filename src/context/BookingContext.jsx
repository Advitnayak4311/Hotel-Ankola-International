import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

const initialRooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 2500,
    maxGuests: 2,
    totalCount: 12,
    availableCount: 8,
    features: ['Air Conditioning (AC)', 'High-speed Wi-Fi', 'Flat Screen TV', 'Attached Modern Bathroom', 'King Size Bed', 'Room Service'],
    image: '/delux.jpg',
    description: 'Perfect for business travelers and couples, our Deluxe Room provides an elegant blend of comfort and modern amenities.'
  },
  {
    id: 'executive',
    name: 'Executive Room',
    price: 3800,
    maxGuests: 3,
    totalCount: 8,
    availableCount: 4,
    features: ['Premium AC', 'Smart TV with Streaming', 'Mini Bar', 'High-speed Wi-Fi', 'Super King Bed', 'City View Balcony', 'Complimentary Breakfast'],
    image: '/executive.jpg',
    description: 'Indulge in spacious elegance with additional seating areas, modern design details, and complimentary premium services.'
  },
  {
    id: 'family',
    name: 'Family Suite',
    price: 5200,
    maxGuests: 5,
    totalCount: 6,
    availableCount: 2,
    features: ['Double AC Units', '2 Smart TVs', 'Large Living Area', '2 Double Beds', 'Private Dining Table', 'Attached Luxury Bathroom', 'Kids Stay Free (under 5)'],
    image: '/suit.jpg',
    description: 'A luxurious multi-room suite designed to keep your family together in ultimate comfort, with extra space for relaxation.'
  },
  {
    id: 'banquet',
    name: 'Royal Banquet Room',
    price: 25000,
    maxGuests: 500,
    totalCount: 1,
    availableCount: 1,
    features: ['Central AC', 'Premium Sound System', 'Customizable Seating Layout', 'Stage & Lighting Setup', 'In-house Catering Option', 'Valet Parking', 'Dedicated Event Manager'],
    image: '/hall1.jpg',
    description: 'The premier venue in Ankola for grand weddings, birthdays, conferences, corporate events, and family receptions.'
  }
];

const initialMenu = {
  veg: [
    { name: 'Paneer Butter Masala', price: 240, description: 'Cottage cheese cooked in a rich tomato and butter-based creamy gravy.', popular: true },
    { name: 'Kaju Masala', price: 260, description: 'Cashew nuts simmered in a rich, spiced onion-tomato gravy.' },
    { name: 'Veg Biryani', price: 200, description: 'Fragrant basmati rice layered with spiced vegetables, served with raita.', popular: true },
    { name: 'Ankola Special Veg Thali', price: 180, description: 'Traditional local style lunch with roti, rice, two curries, dal, pickle, and papad.' },
    { name: 'Mushroom Pepper Fry', price: 210, description: 'Fresh button mushrooms tossed with crushed black pepper, onions, and curry leaves.' },
    { name: 'Dal Tadka', price: 150, description: 'Yellow lentils tempered with cumin, garlic, and red chilies in ghee.' },
    { name: 'Jeera Rice', price: 160, description: 'Fragrant basmati rice tempered with cumin seeds and pure ghee.' },
    { name: 'Gobi Manchurian', price: 180, description: 'Crispy cauliflower florets tossed in a spicy, tangy Indo-Chinese sauce.', popular: true },
    { name: 'Paneer Tikka Masala', price: 260, description: 'Grilled cottage cheese chunks simmered in a spiced onion-tomato gravy.' },
    { name: 'Aloo Gobi', price: 170, description: 'Diced potatoes and cauliflower cooked with cumin and Indian spices.' },
    { name: 'Baby Corn Chilli', price: 190, description: 'Crisp baby corn stir-fried with capsicum, onions, and green chilies.' }
  ],
  nonveg: [
    { name: 'Coastal Fish Curry (Anjil)', price: 350, description: 'Fresh local kingfish cooked in a rich coconut and tamarind gravy, traditional Karavali style.', popular: true },
    { name: 'Butter Chicken', price: 320, description: 'Tender chicken tikka pieces cooked in creamy tomato butter sauce.' },
    { name: 'Mutton Biryani', price: 380, description: 'Slow-cooked aromatic basmati rice layered with spiced tender mutton.', popular: true },
    { name: 'Chicken Ghee Roast', price: 300, description: 'Spicy Mangalorean-style chicken roast prepared with pure ghee and local spices.' },
    { name: 'Coastal Fish Fry (Surmai Rava)', price: 320, description: 'Fresh Kingfish slice coated with spiced semolina and shallow fried.', popular: true },
    { name: 'Prawns Ghee Roast', price: 380, description: 'Fresh prawns cooked in a fiery Kundapur style ghee roast spice mix.', popular: true },
    { name: 'Chicken Sukka', price: 260, description: 'Mangalorean style dry chicken dish prepared with freshly grated coconut and spices.' },
    { name: 'Egg Masala', price: 160, description: 'Hard-boiled eggs simmered in a rich, spicy onion-tomato gravy.' },
    { name: 'Prawns Biryani', price: 320, description: 'Fragrant basmati rice cooked with spiced prawns, saffron, and mint.' },
    { name: 'Chicken Kabab', price: 240, description: 'Deep-fried marinated chicken chunks flavored with local spices and curry leaves.' },
    { name: 'Mutton Sukka', price: 360, description: 'Dry mutton cooked with aromatic roasted spices and grated coconut.' }
  ],
  desserts: [
    { name: 'Gadbad Ice Cream', price: 150, description: 'Famous Mangalorean three-layer ice cream loaded with fruits, jelly, and dry fruits.', popular: true },
    { name: 'Sizzling Brownie', price: 180, description: 'Hot chocolate brownie served with vanilla ice cream on a sizzler plate.' },
    { name: 'Gulab Jamun with Ice Cream', price: 110, description: 'Warm milk dumplings soaked in sugar syrup, paired with cold vanilla ice cream.' },
    { name: 'Carrot Halwa', price: 120, description: 'Traditional sweet pudding made from grated carrots, milk, sugar, and ghee, garnished with nuts.' },
    { name: 'Kulfi Falooda', price: 140, description: 'Rich kulfi slices topped with falooda sev, sweet basil seeds, and rose syrup.' },
    { name: 'Ankola Banana Bun', price: 80, description: 'Sweet, fluffy deep-fried buns made with ripe bananas, served with coconut chutney.', popular: true },
    { name: 'Rasmalai', price: 120, description: 'Soft cottage cheese dumplings soaked in sweetened, saffron-infused milk.' }
  ],
  drinks: [
    { name: 'Coastal Kokum Soda', price: 80, description: 'A refreshing fizzy local drink made from natural wild kokum fruit extract.', popular: true },
    { name: 'Fresh Lime Mint Cooler', price: 90, description: 'Chilled lime juice blended with fresh mint leaves and sparkling water.' },
    { name: 'Mango Lassi', price: 100, description: 'Creamy yogurt drink flavored with fresh sweet mango pulp.' },
    { name: 'Buttermilk (Chaas)', price: 60, description: 'Spiced, refreshing yogurt drink flavored with ginger, coriander, and green chilies.' },
    { name: 'Sol Kadi', price: 70, description: 'Traditional coastal cooler made from kokum extract, coconut milk, garlic, and green chilies.', popular: true },
    { name: 'Sweet Lassi', price: 90, description: 'Thick, sweet whipped yogurt beverage served chilled.' },
    { name: 'Tender Coconut Water', price: 60, description: 'Natural fresh tender coconut water served chilled.' }
  ]
};

const initialReviews = [
  {
    id: 1,
    name: "Ramesh Hegde",
    rating: 5,
    date: "2026-07-10",
    comment: "Excellent stay on NH66. The rooms are spotless, and the service is top-notch. Highly recommend the Coastal Fish Curry at their restaurant! Banquet hall is huge.",
    category: "Rooms",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    name: "Anjali Sharma",
    rating: 5,
    date: "2026-07-08",
    comment: "We hosted our corporate meeting in the Banquet Room. Everything from the AV setup to the catering was managed perfectly. Staff is extremely polite.",
    category: "Events",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    name: "Vikram Kamath",
    rating: 4,
    date: "2026-07-05",
    comment: "Perfect location if you are traveling towards Gokarna or Goa. Large parking space and right on the highway. Rooms are spacious and very clean.",
    category: "Rooms",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const initialBookings = [];
const initialEnquiries = [];
const initialMessages = [];

export const BookingProvider = ({ children }) => {
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem('hotel_rooms_v4');
    return saved ? JSON.parse(saved) : initialRooms;
  });

  const [menu, setMenu] = useState(() => {
    const saved = localStorage.getItem('hotel_menu_v2');
    return saved ? JSON.parse(saved) : initialMenu;
  });

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('hotel_reviews');
    return saved ? JSON.parse(saved) : initialReviews;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('hotel_bookings_clean');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('hotel_enquiries_clean');
    return saved ? JSON.parse(saved) : initialEnquiries;
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('hotel_messages_clean');
    return saved ? JSON.parse(saved) : initialMessages;
  });

  const [subscribers, setSubscribers] = useState(() => {
    const saved = localStorage.getItem('hotel_subscribers_clean');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('hotel_rooms_v4', JSON.stringify(rooms));
  }, [rooms]);

  useEffect(() => {
    localStorage.setItem('hotel_menu_v2', JSON.stringify(menu));
  }, [menu]);

  useEffect(() => {
    localStorage.setItem('hotel_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('hotel_bookings_clean', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('hotel_enquiries_clean', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('hotel_messages_clean', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('hotel_subscribers_clean', JSON.stringify(subscribers));
  }, [subscribers]);

  // Actions
  const addBooking = (booking) => {
    const newId = `B-${Math.floor(100 + Math.random() * 900)}`;
    const newBooking = { ...booking, id: newId, status: 'Confirmed' };
    setBookings(prev => [newBooking, ...prev]);

    // Update Room availability count
    setRooms(prevRooms => prevRooms.map(room => {
      if (room.id === booking.roomType) {
        return { ...room, availableCount: Math.max(0, room.availableCount - 1) };
      }
      return room;
    }));
    return newBooking;
  };

  const cancelBooking = (id) => {
    const booking = bookings.find(b => b.id === id);
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b));
    if (booking && booking.status !== 'Cancelled') {
      setRooms(prevRooms => prevRooms.map(room => {
        if (room.id === booking.roomType) {
          return { ...room, availableCount: Math.min(room.totalCount, room.availableCount + 1) };
        }
        return room;
      }));
    }
  };

  const addBanquetEnquiry = (enquiry) => {
    const newId = `E-${Math.floor(500 + Math.random() * 499)}`;
    const newEnquiry = { 
      ...enquiry, 
      id: newId, 
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return newEnquiry;
  };

  const addContactMessage = (msg) => {
    const newId = `M-${Math.floor(300 + Math.random() * 699)}`;
    const newMsg = {
      ...msg,
      id: newId,
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'Unread'
    };
    setMessages(prev => [newMsg, ...prev]);
    return newMsg;
  };

  const addReview = (review) => {
    const newId = reviews.length + 1;
    const newReview = {
      ...review,
      id: newId,
      date: new Date().toISOString().split('T')[0],
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 999999)}?auto=format&fit=crop&w=100&h=100&q=80`
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const addSubscriber = (email) => {
    setSubscribers(prev => {
      if (prev.includes(email)) return prev;
      return [email, ...prev];
    });
  };

  const updateRoomPrice = (id, newPrice) => {
    setRooms(prev => prev.map(room => room.id === id ? { ...room, price: Number(newPrice) } : room));
  };

  const updateRoomAvailability = (id, newAvailable) => {
    setRooms(prev => prev.map(room => room.id === id ? { ...room, availableCount: Number(newAvailable) } : room));
  };

  const addMenuItem = (category, item) => {
    setMenu(prev => ({
      ...prev,
      [category]: [...prev[category], item]
    }));
  };

  const deleteMenuItem = (category, index) => {
    setMenu(prev => ({
      ...prev,
      [category]: prev[category].filter((_, idx) => idx !== index)
    }));
  };

  return (
    <BookingContext.Provider value={{
      rooms,
      menu,
      reviews,
      bookings,
      enquiries,
      messages,
      subscribers,
      addBooking,
      cancelBooking,
      addBanquetEnquiry,
      addContactMessage,
      addReview,
      addSubscriber,
      updateRoomPrice,
      updateRoomAvailability,
      addMenuItem,
      deleteMenuItem
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
