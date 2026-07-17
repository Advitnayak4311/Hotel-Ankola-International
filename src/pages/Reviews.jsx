import React, { useState } from 'react';
import { Star, MessageSquare, Award, CheckCircle } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';

export default function Reviews() {
  const { reviews, addReview } = useBooking();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    category: 'Rooms',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Calculate average rating
  const avgRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (stars) => {
    setFormData(prev => ({
      ...prev,
      rating: stars
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      addReview({
        name: formData.name,
        rating: Number(formData.rating),
        category: formData.category,
        comment: formData.comment
      });
      setSubmitted(true);
      setFormData({
        name: '',
        rating: 5,
        category: 'Rooms',
        comment: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="/4.jpg"
        eyebrow="Guest Voices"
        title={t('reviewsTitle')}
        subtitle={t('reviewsSubtitle')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Rating Overview and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Average Rating overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center space-y-4">
              <span className="text-gold font-bold tracking-widest text-xs uppercase block">GLOBAL RATING</span>
              <div className="text-6xl font-serif font-bold text-slate-950">{avgRating}</div>
              <div className="flex justify-center space-x-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 fill-gold ${
                      i < Math.round(avgRating) ? 'text-gold' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">Based on {reviews.length} verified guest reviews</p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-gold/20 shadow-md space-y-4">
              <h3 className="font-serif font-bold text-lg text-white flex items-center">
                <Award className="w-5 h-5 text-gold mr-2" />
                Hospitality Guarantee
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                We read every review. If your experience is anything less than perfect, please reach out to our lobby manager directly.
              </p>
            </div>
          </div>

          {/* Review form */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-2xl text-slate-900">Share Your Experience</h3>
              <p className="text-xs text-slate-500">Your feedback helps us maintain premium standards of hospitality.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 mx-auto text-emerald-600 animate-bounce" />
                <h4 className="font-bold text-lg font-serif">Review Submitted!</h4>
                <p className="text-xs text-emerald-700">Thank you for your feedback. Your review will be published shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Category of Stay</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="Rooms">Rooms & Lodging</option>
                      <option value="Dining">Restaurant / Food</option>
                      <option value="Events">Banquet / Weddings</option>
                      <option value="Service">Room Service & Staff</option>
                    </select>
                  </div>
                </div>

                {/* Rating selection stars */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 block">Rating Score</label>
                  <div className="flex space-x-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? 'text-gold fill-gold'
                              : 'text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Your Review Comments</label>
                  <textarea
                    name="comment"
                    rows="4"
                    required
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    placeholder="Tell us about the room quality, cleanliness, staff politeness..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 text-white hover:bg-slate-900 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <span>Submit Guest Review</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-2xl text-slate-950 border-b border-slate-200 pb-3">
            Guest Testimonials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 fill-gold ${
                            i < rev.rating ? 'text-gold' : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-slate-200">
                      {rev.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans italic">"{rev.comment}"</p>
                </div>

                <div className="flex items-center space-x-3 border-t border-slate-100 pt-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-9 h-9 rounded-full object-cover border border-gold"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                    <span className="text-[10px] text-slate-400">{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
    </div>
  );
}
