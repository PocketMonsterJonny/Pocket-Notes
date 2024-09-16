import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import HomePage from './components/HomePage';
import ContentPage from './components/ContentPage';
import data from './assets/data.json'; // Import JSON data

const App: React.FC = () => {
  const [menuData] = useState(data.menu);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPageIndex = () => {
    const currentPageIndex = location.pathname.split('/').pop();
    return currentPageIndex ? parseInt(currentPageIndex) : 0;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const currentPageIndex = getCurrentPageIndex();
      if (currentPageIndex < menuData.length) {
        navigate(`/page/${currentPageIndex + 1}`);
      }
    },
    onSwipedRight: () => {
      const currentPageIndex = getCurrentPageIndex();
      if (currentPageIndex > 1) {
        navigate(`/page/${currentPageIndex - 1}`);
      } else {
        navigate(`/`);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers} className='router-wrapper'>
      <Routes>
        <Route path="/" element={<HomePage menuData={menuData} />} />
        {menuData.map((section, index) => (
          <Route
            key={index}
            path={`/page/${index + 1}`}
            element={<ContentPage section={section} pageIndex={index + 1} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
