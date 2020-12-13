import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

const App = () => {

  // ACCORDION CODE
  // const items = [
  //   {
  //     title: 'What is React?',
  //     content: 'React is a front end javascript framework.'
  //   },
  //   {
  //     title: 'Why use React?',
  //     content: 'React is a favorite JS library among engineers.'
  //   },
  //   {
  //     title: 'How do you use React?',
  //     content: 'You use React by creating components.'
  //   },
  // ];

  // DROPDOWN
  const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'A Shade of Blue',
      value: 'blue'
    },
  ];

  const [ selected, setSelected ] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
      { showDropdown ?
        <Dropdown 
        selected={selected}
        options={options}
        onSelectedChange={setSelected}
        /> : null
        }
    </div>
  )
};

export default App;