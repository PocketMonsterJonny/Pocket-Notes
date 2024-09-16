import React, { useState } from 'react';

interface MenuItem {
  header: string;
  content: string;
}

interface Section {
  title: string;
  background: string; // Add background property to interface
  items: MenuItem[];
}

interface ContentPageProps {
  section: Section;
  pageIndex: number; // Add pageIndex to the interface
}

const ContentPage: React.FC<ContentPageProps> = ({ section, pageIndex }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="content-page"
      style={{ backgroundColor: section.background }} // Set background color dynamically
    >
      <h1>{section.title}</h1>
      <ul className="accordion">
        {section.items.map((item, index) => (
          <li
            key={index}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <h2 onClick={() => toggleAccordion(index)} className="accordion-header">
              {item.header}
            </h2>
            <div
              className="accordion-content"
              style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
            >
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentPage;
