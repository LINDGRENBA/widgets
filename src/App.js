import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

  // const [ selected, setSelected ] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
        {/* <Dropdown
        label="Select a Color" 
        selected={selected}
        options={options}
        onSelectedChange={setSelected}
        /> */}
        <Translate />
    </div>
  )
};

export default App;