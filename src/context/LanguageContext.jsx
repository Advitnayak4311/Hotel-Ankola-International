import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navRooms: "Rooms",
    navRestaurant: "Restaurant",
    navBanquet: "Banquet Hall",
    navGallery: "Gallery",
    navAttractions: "Attractions",
    navContact: "Contact",
    navReviews: "Reviews",
    navFaq: "FAQs",
    navAdmin: "Admin",
    btnBookNow: "Book Now",
    btnViewRooms: "View Rooms",
    btnInquire: "Inquiry Now",
    btnSubmit: "Submit",
    hotelName: "Hotel Ankola International",
    tagline: "Comfortable Stay | Delicious Food | Banquet Hall | Premium Hospitality",
    weatherTitle: "Ankola Weather",
    roomsLeft: "Only {count} rooms left!",
    copyright: "All Rights Reserved.",
    callNow: "Call Now",
    whatsapp: "WhatsApp Booking",
    checkIn: "Check-in Date",
    checkOut: "Check-out Date",
    guests: "Guests",
    roomType: "Room Type",
    specialRequest: "Special Requests (Optional)",
    aboutTitle: "About Hotel Ankola International",
    aboutSubtitle: "Over two decades of hospitality excellence in Ankola",
    roomsTitle: "Our Premium Rooms & Suites",
    roomsSubtitle: "Choose from our curated collection of luxury stays",
    restaurantTitle: "Karavali Seafood Restaurant",
    restaurantSubtitle: "Savor the authentic coastal delicacies and multi-cuisine preparations",
    banquetTitle: "The Royal Banquet Hall",
    banquetSubtitle: "An elegant, air-conditioned venue for weddings and corporate events",
    galleryTitle: "Our Photo Gallery",
    gallerySubtitle: "Visual highlights of Hotel Ankola International",
    attractionsTitle: "Nearby Attractions",
    attractionsSubtitle: "Explore beautiful beaches, historic forts, and waterfalls around Ankola",
    contactTitle: "Contact Us",
    contactSubtitle: "Reach out to us for bookings, enquiries, or support",
    contactFormTitle: "Send Us a Message",
    reviewsTitle: "Guest Reviews",
    reviewsSubtitle: "Read verified feedback from our guests",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to common queries about our stays, amenities, and policies",
    welcomeHeader: "Welcome to Ankola's Finest",
    facilitiesHeader: "Our Facilities",
  },
  kn: {
    navHome: "ಮುಖಪುಟ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navRooms: "ಕೊಠಡಿಗಳು",
    navRestaurant: "ರೆಸ್ಟೋರೆಂಟ್",
    navBanquet: "ಸಭಾಂಗಣ",
    navGallery: "ಗ್ಯಾಲರಿ",
    navAttractions: "ಪ್ರವಾಸಿ ತಾಣಗಳು",
    navContact: "ಸಂಪರ್ಕಿಸಿ",
    navReviews: "ವಿಮರ್ಶೆಗಳು",
    navFaq: "ಪ್ರಶ್ನೋತ್ತರ",
    navAdmin: "ಅಡ್ಮಿನ್",
    btnBookNow: "ಈಗಲೇ ಬುಕ್ ಮಾಡಿ",
    btnViewRooms: "ಕೊಠಡಿಗಳನ್ನು ನೋಡಿ",
    btnInquire: "ವಿಚಾರಣೆ ಮಾಡಿ",
    btnSubmit: "ಸಲ್ಲಿಸು",
    hotelName: "ಹೋಟೆಲ್ ಅಂಕೋಲಾ ಇಂಟರ್ನ್ಯಾಷನಲ್",
    tagline: "ಆರಾಮದಾಯಕ ವಾಸ್ತವ್ಯ | ರುಚಿಕರವಾದ ಆಹಾರ | ಸಭಾಂಗಣ | ಪ್ರೀಮಿಯಂ ಆತಿಥ್ಯ",
    weatherTitle: "ಅಂಕೋಲಾ ಹವಾಮಾನ",
    roomsLeft: "ಕೇವಲ {count} ಕೊಠಡಿಗಳು ಬಾಕಿ ಇವೆ!",
    copyright: "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    callNow: "ಕರೆ ಮಾಡಿ",
    whatsapp: "ವಾಟ್ಸಾಪ್ ಬುಕಿಂಗ್",
    checkIn: "ಚೆಕ್-ಇನ್ ದಿನಾಂಕ",
    checkOut: "ಚೆಕ್-ಔಟ್ ದಿನಾಂಕ",
    guests: "ಅತಿಥಿಗಳು",
    roomType: "ಕೊಠಡಿಯ ವಿಧ",
    specialRequest: "ವಿಶೇಷ ವಿನಂತಿಗಳು (ಐಚ್ಛಿಕ)",
    aboutTitle: "ಹೋಟೆಲ್ ಅಂಕೋಲಾ ಇಂಟರ್ನ್ಯಾಷನಲ್ ಬಗ್ಗೆ",
    aboutSubtitle: "ಅಂಕೋಲಾದಲ್ಲಿ ಎರಡು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲದಿಂದ ಶ್ರೇಷ್ಠ ಆತಿಥ್ಯ ಸೇವೆ",
    roomsTitle: "ನಮ್ಮ ಪ್ರೀಮಿಯಂ ಕೊಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳು",
    roomsSubtitle: "ನಮ್ಮ ಪ್ರಮುಖ ಆಡಳಿತಾತ್ಮಕ ಕೊಠಡಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    restaurantTitle: "ಕಾರಾವಳಿ ಸೀಫುಡ್ ರೆಸ್ಟೋರೆಂಟ್",
    restaurantSubtitle: "ಅಪ್ಪಟ ಕರಾವಳಿ ಖಾದ್ಯಗಳು ಮತ್ತು ವಿವಿಧ ತಿನಿಸುಗಳ ರುಚಿ ಸವಿಯಿರಿ",
    banquetTitle: "ದಿ ರಾಯಲ್ ಸಭಾಂಗಣ",
    banquetSubtitle: "ಮದುವೆಗಳು ಮತ್ತು ಸಾಂಸ್ಥಿಕ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸುಸಜ್ಜಿತ ಹವಾನಿಯಂತ್ರಿತ ಸಭಾಂಗಣ",
    galleryTitle: "ನಮ್ಮ ಫೋಟೋ ಗ್ಯಾಲರಿ",
    gallerySubtitle: "ಹೋಟೆಲ್ ಅಂಕೋಲಾ ಇಂಟರ್ನ್ಯಾಷನಲ್ ದೃಶ್ಯ ಮುಖ್ಯಾಂಶಗಳು",
    attractionsTitle: "ಹತ್ತಿರದ ಪ್ರವಾಸಿ ತಾಣಗಳು",
    attractionsSubtitle: "ಅಂಕೋಲಾ ಸುತ್ತಲಿನ ಸುಂದರ ಕಡಲತೀರಗಳು, ಐತಿಹಾಸಿಕ ಕೋಟೆಗಳು ಮತ್ತು ಜಲಪಾತಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    contactTitle: "ಸಂಪರ್ಕಿಸಿ",
    contactSubtitle: "ಬುಕಿಂಗ್ ಮತ್ತು ವಿಚಾರಣೆಗಾಗಿ ನಮಗೆ ಕರೆ ಮಾಡಿ",
    contactFormTitle: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    reviewsTitle: "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು",
    reviewsSubtitle: "ನಮ್ಮ ಅತಿಥಿಗಳಿಂದ ಪರಿಶೀಲಿಸಿದ ಪ್ರತಿಕ್ರಿಯೆ ಓದಿ",
    faqTitle: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    faqSubtitle: "ನಮ್ಮ ವಾಸ್ತವ್ಯ ಮತ್ತು ನೀತಿಗಳ ಬಗ್ಗೆ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳು",
    welcomeHeader: "ಅಂಕೋಲಾದ ಅತ್ಯುತ್ತಮ ಹೋಟೆಲ್‌ಗೆ ಸುಸ್ವಾಗತ",
    facilitiesHeader: "ನಮ್ಮ ಸೌಲಭ್ಯಗಳು",
  },
  hi: {
    navHome: "मुख्य पृष्ठ",
    navAbout: "हमारे बारे में",
    navRooms: "कमरे",
    navRestaurant: "रेस्टोरेंट",
    navBanquet: "बैंक्वेट हॉल",
    navGallery: "गैलरी",
    navAttractions: "आकर्षण",
    navContact: "संपर्क",
    navReviews: "समीक्षाएं",
    navFaq: "पूछे जाने वाले प्रश्न",
    navAdmin: "एडमिन",
    btnBookNow: "अभी बुक करें",
    btnViewRooms: "कमरे देखें",
    btnInquire: "पूछताछ करें",
    btnSubmit: "जमा करें",
    hotelName: "होटल अंकोला इंटरनेशनल",
    tagline: "आरामदायक प्रवास | स्वादिष्ट भोजन | बैंक्वेट हॉल | प्रीमियम आतिथ्य",
    weatherTitle: "अंकोला मौसम",
    roomsLeft: "केवल {count} कमरे शेष हैं!",
    copyright: "सर्वाधिकार सुरक्षित।",
    callNow: "अभी कॉल करें",
    whatsapp: "व्हाट्सएप बुकिंग",
    checkIn: "आगमन तिथि",
    checkOut: "प्रस्थान तिथि",
    guests: "अतिथि",
    roomType: "कमरे का प्रकार",
    specialRequest: "विशेष अनुरोध (वैकल्पिक)",
    aboutTitle: "हॉटेल अंकोला इंटरनेशनल के बारे में",
    aboutSubtitle: "अंकोला में दो दशकों से अधिक की उत्कृष्ट आतिथ्य सेवा",
    roomsTitle: "हमारे प्रीमियम कमरे और सुइट्स",
    roomsSubtitle: "आरामदायक प्रवास के लिए हमारे विशेष कमरों में से चुनें",
    restaurantTitle: "कारवली सीफूड रेस्टोरेंट",
    restaurantSubtitle: "प्रामाणिक तटीय व्यंजनों और विभिन्न प्रकार के व्यंजनों का स्वाद लें",
    banquetTitle: "द रॉयल बैंक्वेट हॉल",
    banquetSubtitle: "शादियों और कॉर्पोरेट आयोजनों के लिए एक सुंदर वातानुकूलित स्थल",
    galleryTitle: "हमारी फोटो गैलरी",
    gallerySubtitle: "होटल अंकोला इंटरनेशनल की दृश्य झलकियां",
    attractionsTitle: "आस-पास के आकर्षण",
    attractionsSubtitle: "अंकोला के चारों ओर सुंदर समुद्र तटों, ऐतिहासिक किलों और झरनों का पता लगाएं",
    contactTitle: "संपर्क करें",
    contactSubtitle: "बुकिंग, पूछताछ या सहायता के लिए हमसे संपर्क करें",
    contactFormTitle: "हमें संदेश भेजें",
    reviewsTitle: "अतिथि समीक्षाएं",
    reviewsSubtitle: "हमारे मेहमानों से सत्यापित प्रतिक्रिया पढ़ें",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSubtitle: "हमारे कमरों, सुविधाओं और नीतियों के बारे में सामान्य प्रश्नों के उत्तर",
    welcomeHeader: "अंकोला के बेहतरीन होटल में आपका स्वागत है",
    facilitiesHeader: "हमारी सुविधाएं",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('hotel_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('hotel_lang', language);
  }, [language]);

  const t = (key, replaceObj = {}) => {
    let text = translations[language]?.[key] || translations['en']?.[key] || key;
    Object.keys(replaceObj).forEach(placeholder => {
      text = text.replace(`{${placeholder}}`, replaceObj[placeholder]);
    });
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
