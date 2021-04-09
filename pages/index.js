import Head from 'next/head'
import React, {useState} from 'react'
import cn from 'classnames'

export default function Home() {

  const [isFlipped, setIsFlipped] = useState(false)
  const classes = cn({
    'card': true,
    'flipped': isFlipped
  });

  console.log(classes)

  return (
    <div className="container">
      <div className={classes} onClick={() => {setIsFlipped(!isFlipped)}}>
        <div className="content">
          <div className="front-card"></div>
          <div className="back-card">
            <div className="statement">
              <p>
                <strong>Alla barn i hela världen har samma rättigheter</strong>
              </p>
            </div>
            <button className="button">
              <p>
                Det spelar ingen roll hur jag ser ut, vilken färg min hud har,
                vilken religion jag tillhör, var jag kommer ifrån.
              </p>
            </button>
            <button className="button">
              <p>Vuxna som bestämmer över mig behöver inte respektera mig.</p>
            </button>
            <button className="button">
              <p>
                Man får göra mig illa eller vara elak mot mig för något som jag
                eller min familj är eller har sagt eller gjort.
              </p>
            </button>
            <button className="button check">
              <p>Rätta</p>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        .container {
          font-family: sans-serif;
          text-align: center;
          padding: 3em;

        }
        
        .button {
          width: 100%;
          border: none;
          background: #a6ddf1;
          padding: 0.3em 0.7em;
          border-radius: 0.5em;
          margin-top: 1em;
          box-shadow: 0 4px 1px -1px #6dc5e6;
          cursor: pointer;
          border: 3px solid transparent;
        }
        
        .button:hover {
          background: #bdecff;
          border: 3px solid #6dc5e6;
          box-shadow: none;
        }
        
        .statement {
          width: 100%;
          padding: 1em 3em;
          border-radius: 0.5em;
          background: #d39cc7;
          box-shadow: none;
        }
        
        .check {
          color: #fff;
          background: #04a83e;
          box-shadow: 0 4px 1px -1px #028931;
          border: none;
        }
        
        .check:hover {
          background: #028931;
          border: none;
          box-shadow: 0 4px 1px -1px #028931;
        }
        
        p {
          font-size: 0.8em;
          line-height: 1.3em;
        }

        .card {
          position: absolute;
          width: 20em;
          height: 30em;
          perspective: 500px;
        }
        
        .content {
          position: absolute;
          width: 100%;
          height: 100%;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
        
          transition: transform 1s;
          transform-style: preserve-3d;
        }
        
        .flipped .content {
          transform: rotateY( 180deg ) ;
          transition: transform 0.5s;
        }

        /* .card:hover .content {
          transform: rotateY( 180deg ) ;
          transition: transform 0.5s;
        } */
        
        .front-card,
        .back-card {
          position: absolute;
          height: 100%;
          width: 100%;
          background: white;
          text-align: center;
          border-radius: 5px;
          backface-visibility: hidden;
        }

        .front-card {
          background-image: url('/images/front.png');
          background-size: cover;
          background-position: center;
        }
        
        .back-card {
          background: #fff;
          transform: rotateY( 180deg );
          padding: .5em;
        }
      `}</style>
    </div>
  )
}

