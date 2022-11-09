import * as React from 'react';
import './style.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTumblr, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


export default function App() {

  const [quote,setQuote]=useState('');
  const [author,setAuthor]=useState('');
  const [count,setCount]=useState(Math.floor((Math.random()*10))%8);
  const [activeIndex, setActiveIndex] = useState(true);

  useEffect(()=>{
    fetchData(); 
},[]);

const url="https://api.quotable.io/random";

const fetchData = async () => {
  try {
      const response = await fetch(url);
      const json = await response.json();
      setQuote(json.content);
      setAuthor(json.author);
  } catch (error) {
      console.log("error", error);
  }
}

function handleClick(){
  fetchData();
  setCount((count+1)%colorarr.length);
  colorChange();
  setActiveIndex(!activeIndex);
}

const colorarr=['rgb(251, 105, 100)','rgb(71, 46, 50)','rgb(119, 177, 169)',' rgb(243, 156, 18)','rgb(71, 46, 50)','rgb(189, 187, 153)','rgb(115, 168, 87)','rgb(231, 76, 60)'];

let styles={
  'background-color': colorarr[count],
  'color': colorarr[count]
};

function colorChange(){
  console.log(count+"   "+colorarr.length);
  styles={
    "background-color": colorarr[count],
    "color": colorarr[count]
  };
  console.log(styles);
}

  return (
    <div>
      <div id="wrapper" style={styles}>
        <div id="quote-box">
          <div id="text" style={{"color": colorarr[count]}}>
          <FontAwesomeIcon icon={faQuoteLeft} />
            <span className={`transition duration-500 ${ activeIndex? "opacity-1" : "opacity-0" }`}>&emsp;{quote}</span> 
          </div>
          <div id="author">
            <p className={`transition duration-500 ${ activeIndex? "opacity-1" : "opacity-0" }`} style={{"color": colorarr[count]}}>-{author}</p>
          </div>
          <div className="buttons">
          <a className="button" id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22I%E2%80%99ve%20learned%20that%20people%20will%20forget%20what%20you%20said%2C%20people%20will%20forget%20what%20you%20did%2C%20but%20people%20will%20never%20forget%20how%20you%20made%20them%20feel.%22%20Maya%20Angelou" style={{'background-color': colorarr[count], 'color': 'white'}}><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="button" id="tumblr-quote" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Maya%20Angelou&content=I%E2%80%99ve%20learned%20that%20people%20will%20forget%20what%20you%20said%2C%20people%20will%20forget%20what%20you%20did%2C%20but%20people%20will%20never%20forget%20how%20you%20made%20them%20feel.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" style={{'background-color': colorarr[count], 'color': 'white'}}><FontAwesomeIcon icon={faTumblr} /></a>
            <button className="button" id="new-quote" onClick={handleClick} style={{"backgroundColor": colorarr[count]}}>New Quote</button>
          </div>
        </div>
        <div id="footer">
        <a href="https://codepen.io/hezag/">by shreyansh</a>
        </div>
      </div>
    </div>
  );
}
