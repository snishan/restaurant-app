
# Restaurant Management App

A modern, responsive restaurant management application built with Next.js 14, Redux, and various UI libraries. Manage menus, orders, and reservations with a sleek and efficient interface.
<img width="948" alt="restaurant-app" src="https://github.com/user-attachments/assets/a809ef68-1bcb-453c-bebe-fa8f8cb47e3d" />


## 🌟 Features

- **Menu Management**: View menu items
- **Order Processing**: Track customer orders in real-time
- **Reservation System**: Handle table reservations seamlessly
- **Analytics Dashboard**: View sales and performance metrics

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14
- **State Management**: Redux + Redux Saga
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
- **UI Components**: Radix UI
- **Charting**: Chart.js
- **TypeScript**: For type safety and better developer experience

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── menu-item.tsx     # Menu item component
│   ├── order-list.tsx    # Order list component
│   ├── reservation-form.tsx # Reservation form component
│   └── analytics.tsx     # Analytics dashboard
├── lib/                   # Application logic
│   ├── api/              # API configuration
│   ├── redux/            # Redux store, actions, reducers
│   ├── services/         # API services
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/snishan/restaurant-app.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

## 💻 Development

### Code Organization
- **Components**: Small, reusable UI components
- **Lib**: Business logic, API calls, and utilities
- **Redux**: State management with actions, reducers, and sagas

### Best Practices
- Modular component architecture
- Type safety with TypeScript
- Clean code principles
- Efficient state management

## 🔑 API Integration

The app uses a custom API for restaurant data. Key endpoints:

- Manage menu items
- Process orders
- Handle reservations
- Fetch analytics data

## 🎨 UI/UX Features

- Responsive grid layout
- Smooth animations
- Loading states
- Error handling
- Real-time order updates
- Interactive reservation form

## 📱 Responsive Design

The app is fully responsive and works great on:

- Desktop computers
- Tablets

## 🔄 State Management

Redux is used for state management with the following features:

- Menu management
- Order processing
- Reservation handling
- Loading states
- Error handling

## 🛠️ Future Improvements

- [ ] Advanced reservation options
- [ ] Customer feedback system
- [ ] Loyalty program integration
- [ ] Enhanced analytics
- [ ] Multi-language support

## Acknowledgments

- Radix UI for the beautiful UI components
- Next.js team for the amazing framework
- The open-source community for various tools and libraries

## LIVE LINK

[Restaurant Management App](https://restaurant-app-sage-iota.vercel.app/)
