import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string;
  background: string; // Add background property to interface
}

interface HomePageProps {
  menuData: MenuItem[];
}

const HomePage: React.FC<HomePageProps> = ({ menuData }) => {
  return (
    <div className="home-page">
      <h1>Pocket Viewer</h1>
      <ul>
        {menuData.map((section, index) => (
          <li
            key={index}
            className="menu-item"
            style={{ backgroundColor: section.background }} // Set background inline
          >
            <Link to={`/page/${index + 1}`}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
