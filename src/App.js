import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import './App.css';


const App = () => {

  // ACCORDION CODE
  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework.'
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers.'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components.'
    },
  ];

  // DROPDOWN
  const options = [
    {
      label: 'The Color Red',
      value: 'red',
      hex: '#f03a47'
    },
    {
      label: 'The Color Green',
      value: 'green',
      hex: '#86cd82'
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
      hex: '#276fbf'
    },
  ];

  const [ selected, setSelected ] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
        label="Select a Color" 
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  )
};

export default App;