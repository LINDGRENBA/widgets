import React, { useState } from 'react';

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const onAccordionTitleClick = (index) => {
    setActiveIndex(index);
  }

  // return React.Fragment instead of div to avoid double border on accordion which is a side effect of Semantic UI
  const renderedItems = items.map((item, index) => {
    return <React.Fragment key={item.title}>
      <div 
        className="title active"
        onClick={() => onAccordionTitleClick(index)}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className="content active">
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  });
  return <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>;
};

export default Accordion;