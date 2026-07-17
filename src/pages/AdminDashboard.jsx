import React, { useState } from 'react';
import { Shield, LayoutDashboard, Calendar, Utensils, FileText, Settings, ShieldAlert, LogOut, Check, Trash2, Plus, RefreshCw, BadgeAlert, Mail } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function AdminDashboard() {
  const {
    rooms,
    menu,
    bookings,
    enquiries,
    messages,
    subscribers,
    cancelBooking,
    updateRoomPrice,
    updateRoomAvailability,
    addMenuItem,
    deleteMenuItem
  } = useBooking();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Dashboard Tab state
  const [activeTab, setActiveTab] = useState('overview');

  // Menu Add Item Form State
  const [newFoodCategory, setNewFoodCategory] = useState('veg');
  const [newFoodItem, setNewFoodItem] = useState({
    name: '',
    price: '',
    description: '',
    popular: false
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Hint: admin / admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ username: '', password: '' });
  };

  // Analytics Helpers
  const confirmedBookings = bookings.filter(b => b.status === 'Confirmed');
  const totalRevenue = confirmedBookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const unreadMessages = messages.filter(m => m.status === 'Unread').length;

  const handleAddFood = (e) => {
    e.preventDefault();
    if (newFoodItem.name && newFoodItem.price) {
      addMenuItem(newFoodCategory, {
        name: newFoodItem.name,
        price: Number(newFoodItem.price),
        description: newFoodItem.description,
        popular: newFoodItem.popular
      });
      setNewFoodItem({ name: '', price: '', description: '', popular: false });
      alert("Food item added to menu!");
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white">
        <div className="w-full max-w-md bg-slate-900 border border-gold/25 p-8 rounded-2xl shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto border border-gold/20">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Admin Portal</h2>
            <p className="text-xs text-slate-400">Hotel Ankola International Control Room</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-slate-300">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold">Username</label>
              <input
                type="text"
                required
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold text-white"
                placeholder="E.g., admin"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold">Password</label>
              <input
                type="password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold text-white"
                placeholder="Enter password"
              />
            </div>

            {loginError && (
              <div className="flex items-center text-xs text-rose-500 space-x-1 bg-rose-500/10 p-2.5 rounded border border-rose-500/25">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-600 text-slate-950 py-3 rounded-md font-bold uppercase tracking-wider text-xs transition-colors shadow"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-slate-100 font-sans flex flex-col lg:flex-row">
      
      {/* Sidebar Controls */}
      <aside className="w-full lg:w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800">
        <div className="p-6 space-y-8">
          <div className="space-y-1 border-b border-slate-800 pb-4">
            <h3 className="text-lg font-serif font-bold text-white tracking-wide">Control Panel</h3>
            <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">Welcome Administrator</span>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium">
            {[
              { id: 'overview', label: 'Overview Dashboard', icon: <LayoutDashboard className="w-4.5 h-4.5" /> },
              { id: 'bookings', label: 'Room Reservations', icon: <Calendar className="w-4.5 h-4.5" />, badge: bookings.length },
              { id: 'enquiries', label: 'Banquet Inquiries', icon: <FileText className="w-4.5 h-4.5" />, badge: enquiries.length },
              { id: 'messages', label: 'Support Messages', icon: <BadgeAlert className="w-4.5 h-4.5" />, badge: unreadMessages },
              { id: 'subscribers', label: 'Newsletter Subs', icon: <Mail className="w-4.5 h-4.5" />, badge: subscribers ? subscribers.length : 0 },
              { id: 'rooms', label: 'Pricing & Inventory', icon: <Settings className="w-4.5 h-4.5" /> },
              { id: 'menu', label: 'Restaurant Menu', icon: <Utensils className="w-4.5 h-4.5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gold text-slate-950 font-bold'
                    : 'hover:bg-slate-850 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                {tab.badge > 0 && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-slate-950 text-gold' : 'bg-gold text-slate-950'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-slate-855">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-950/80 text-rose-500 border border-slate-800 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <LogOut className="w-4.5 h-4.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-10 space-y-8 overflow-x-hidden">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-slate-900 capitalize">
              {activeTab} Management
            </h1>
            <p className="text-xs text-slate-500">Manage real-time hotel operational files.</p>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 bg-white border border-slate-200 px-3.5 py-2 rounded-lg">
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow text-gold" />
            <span>Operational Mode: Local Sync</span>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Analytics Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Total Bookings */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">Reservations</span>
                  <div className="text-3xl font-serif font-bold text-slate-900">{bookings.length}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              {/* Estimated Revenue */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">Total Revenue</span>
                  <div className="text-3xl font-serif font-bold text-slate-900">₹{totalRevenue}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
              </div>

              {/* Banquet Enquiries */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">Banquet Enquiries</span>
                  <div className="text-3xl font-serif font-bold text-slate-900">{enquiries.length}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
              </div>

              {/* Unread message count */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">Support Chats</span>
                  <div className="text-3xl font-serif font-bold text-slate-900">{unreadMessages} Unread</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <BadgeAlert className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Newsletter Subscribers */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">Subscribers</span>
                  <div className="text-3xl font-serif font-bold text-slate-900">{subscribers ? subscribers.length : 0}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Quick overview of latest bookings */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Recent Bookings
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                      <th className="p-3">ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Check-in</th>
                      <th className="p-3">Check-out</th>
                      <th className="p-3">Room</th>
                      <th className="p-3 text-right">Amount</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.slice(0, 4).map((b) => (
                      <tr key={b.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-slate-800">{b.id}</td>
                        <td className="p-3 font-medium">{b.customerName}</td>
                        <td className="p-3 text-slate-550">{b.checkIn}</td>
                        <td className="p-3 text-slate-550">{b.checkOut}</td>
                        <td className="p-3 uppercase font-medium">{b.roomType}</td>
                        <td className="p-3 text-right font-bold">₹{b.totalPrice}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            b.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-800 border border-emerald-250' : 'bg-rose-50 text-rose-800'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Bookings */}
        {activeTab === 'bookings' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                    <th className="p-3">ID</th>
                    <th className="p-3">Customer Details</th>
                    <th className="p-3">Check In/Out</th>
                    <th className="p-3">Room Details</th>
                    <th className="p-3 text-right">Amount Charged</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-slate-900">{b.id}</td>
                      <td className="p-3 space-y-0.5">
                        <div className="font-semibold text-slate-900">{b.customerName}</div>
                        <div className="text-[10px] text-slate-400">{b.email} | {b.phone}</div>
                      </td>
                      <td className="p-3 space-y-0.5">
                        <div>In: {b.checkIn}</div>
                        <div>Out: {b.checkOut}</div>
                      </td>
                      <td className="p-3 uppercase">
                        <div>{b.roomType} Room</div>
                        <div className="text-[10px] text-slate-400">{b.guests} Guests</div>
                      </td>
                      <td className="p-3 text-right font-bold text-slate-950">₹{b.totalPrice}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          b.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        {b.status === 'Confirmed' && (
                          <button
                            onClick={() => cancelBooking(b.id)}
                            className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 px-3 py-1 rounded text-[10px] font-bold uppercase transition-colors"
                          >
                            Cancel Stay
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Banquet Enquiries */}
        {activeTab === 'enquiries' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                    <th className="p-3">ID</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Event Date</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Guests</th>
                    <th className="p-3">Message</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e) => (
                    <tr key={e.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-slate-900">{e.id}</td>
                      <td className="p-3 space-y-0.5">
                        <div className="font-semibold text-slate-900">{e.name}</div>
                        <div className="text-[10px] text-slate-400">{e.email} | {e.phone}</div>
                      </td>
                      <td className="p-3 text-slate-550">{e.eventDate}</td>
                      <td className="p-3 font-medium text-slate-700">{e.eventType}</td>
                      <td className="p-3 font-semibold">{e.guests}</td>
                      <td className="p-3 max-w-[200px] truncate text-slate-500" title={e.message}>
                        {e.message}
                      </td>
                      <td className="p-3">
                        <span className="bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                          {e.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Messages */}
        {activeTab === 'messages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messages.map((m) => (
              <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-gold bg-slate-900 px-2 py-0.5 rounded">
                    {m.id}
                  </span>
                  <span className="text-[10px] text-slate-400">{m.dateSubmitted}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-slate-900">{m.subject}</h4>
                  <p className="text-xs text-slate-600 font-sans italic">"{m.message}"</p>
                </div>
                <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-400 space-y-0.5">
                  <div className="font-semibold text-slate-700">{m.name}</div>
                  <div>Email: {m.email}</div>
                  {m.phone && <div>Phone: {m.phone}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Rooms Configuration */}
        {activeTab === 'rooms' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
              Room Inventory Controls
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rooms.map((room) => (
                <div key={room.id} className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50 flex items-center gap-4">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-24 h-24 object-cover rounded-lg border border-slate-200 shrink-0"
                  />
                  <div className="flex-grow space-y-2">
                    <h4 className="font-serif font-bold text-slate-900 text-sm">{room.name}</h4>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                      <div className="space-y-1">
                        <label className="font-semibold">Price (₹)</label>
                        <input
                          type="number"
                          value={room.price}
                          onChange={(e) => updateRoomPrice(room.id, e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded p-1.5 text-xs text-slate-800 focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold">Available Rooms</label>
                        <input
                          type="number"
                          value={room.availableCount}
                          onChange={(e) => updateRoomAvailability(room.id, e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded p-1.5 text-xs text-slate-800 focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Restaurant Menu Editor */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start font-sans">
            {/* Add Food form */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-1">
                <Plus className="w-5 h-5 text-gold shrink-0" />
                <span>Add Food Item</span>
              </h3>
              
              <form onSubmit={handleAddFood} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600">Food Category</label>
                  <select
                    value={newFoodCategory}
                    onChange={(e) => setNewFoodCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-gold"
                  >
                    <option value="veg">Vegetarian</option>
                    <option value="nonveg">Coastal Non-Veg</option>
                    <option value="desserts">Desserts</option>
                    <option value="drinks">Coolers & Drinks</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600">Item Name</label>
                  <input
                    type="text"
                    required
                    value={newFoodItem.name}
                    onChange={(e) => setNewFoodItem(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-gold"
                    placeholder="E.g., Chicken Kabab"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600">Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={newFoodItem.price}
                    onChange={(e) => setNewFoodItem(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-gold"
                    placeholder="E.g., 220"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600">Description (Optional)</label>
                  <textarea
                    value={newFoodItem.description}
                    onChange={(e) => setNewFoodItem(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-gold"
                    rows="2"
                    placeholder="Short ingredients description"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="popularToggle"
                    checked={newFoodItem.popular}
                    onChange={(e) => setNewFoodItem(prev => ({ ...prev, popular: e.target.checked }))}
                    className="w-4 h-4 rounded text-gold focus:ring-gold accent-gold cursor-pointer"
                  />
                  <label htmlFor="popularToggle" className="text-xs font-medium text-slate-600 cursor-pointer">
                    Chef Special / Popular
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 text-white hover:bg-slate-900 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow"
                >
                  Add to Menu List
                </button>
              </form>
            </div>

            {/* Menu List preview and deletion */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Live Restaurant Menu
              </h3>

              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {Object.keys(menu).map((category) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold bg-slate-900 px-3 py-1.5 rounded w-fit">
                      {category === 'veg' ? 'Veg Specials' : category === 'nonveg' ? 'Non-Veg Coastals' : category}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {menu[category].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between p-3 border border-slate-150 rounded-xl hover:bg-slate-50 text-xs"
                        >
                          <div>
                            <span className="font-bold text-slate-800 block">{item.name}</span>
                            <span className="text-[10px] text-slate-400">₹{item.price}</span>
                          </div>
                          <button
                            onClick={() => deleteMenuItem(category, index)}
                            className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 p-1.5 rounded transition-colors"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 7: Newsletter Subscribers */}
        {activeTab === 'subscribers' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
              Newsletter Subscribers
            </h3>
            
            {subscribers && subscribers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                      <th className="p-3">#</th>
                      <th className="p-3">Subscriber Email</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((email, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-slate-400">{idx + 1}</td>
                        <td className="p-3 font-medium text-slate-800">{email}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-250">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 text-sm">
                No active newsletter subscribers found.
              </div>
            )}
          </div>
        )}

      </main>
      
    </div>
  );
}
