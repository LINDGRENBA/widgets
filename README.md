## Widgets Application

### Description :
This project has four different widgets, an accordion, search capability, a dropdown and translation. It has navigation that updates the URL without refreshing the entire application and utilizes hooks for State management.  
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built by following along with Stephen Grider's Modern React with Redux course.  
<br/>  

### Setup :

If you would like this project on your local machine
1. Select the green `Code` button in the upper right of the github repository and copy the key (HTTPS or SSH)
2. Open your prefered text editor or EDI
3. Open the terminal
4. Enter `git clone [copied-github-key]`

To add an API Key to the project
**Google Translate API** 
1. Add a file to the project's `components` directory, name the file `Convert.js`
2. Add the following content to the file, replacing [API-KEY] with your own Google Translate API.
```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: '[API-KEY]'
        }
      });
      setTranslated(data.data.translations[0].translatedText);
    }
    doTranslation();
  }, [language, debouncedText]);

  return (
  <div>
    <h1 className="ui header">{translated}</h1>
  </div>
  );
};

export default Convert;
```


### Tools & Technology :
* CSS
* React
* Axios library
* YouTube API 
* Git & Github
* VS Code
* [Semantic-ui](https://semantic-ui.com/views/card.html)  
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

