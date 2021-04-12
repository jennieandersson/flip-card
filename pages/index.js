import Head from 'next/head'
import React, { useState } from 'react'
import cn from 'classnames'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

export default function Home() {

  const [isFlipped, setIsFlipped] = useState(false)
  const [check, setCheck] = useState(false)
  const classes = cn({
    'card': true,
    'flipped': isFlipped
  })

  const alternatives = [
    'Det spelar ingen roll hur jag ser ut, vilken färg min hud har, vilken religion jag tillhör, var jag kommer ifrån.',
    'Vuxna som bestämmer över mig behöver inte respektera mig.',
    'Man får göra mig illa eller vara elak mot mig för något som jag eller min familj är eller har sagt eller gjort.'
  ]

  const divVariants = {
    show: { 
      transition: {
        staggerChildren: .4,
        delayChildren: .8,
      }
    },
    hide: { 
      transition: {
        staggerChildren: .1,
        staggerDirection: -1,
        delayChildren: .4
      }
     },
     check: { 
      transition: {
        staggerChildren: .2,
        staggerDirection: -1,
      }
     }
  }

  const buttonVariants = {
    show: { 
      y: 0, 
      opacity: 1,
      height: 'auto'
    },
    hide: { 
      y: -20, 
      opacity: 0, 
      height: 0 
    },
    check: { 
      y: 0, 
      x: -40, 
      opacity: 0,
      height: 'auto'
    }
  }

  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={classes} 
        onClick={() => {setIsFlipped(true)}}
      >
        <div className="content">
          <div className="front-card"></div>
          <AnimatePresence>
            {isFlipped && (
              <div className="back-card">
                {check && (
                  <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [.4, .7, 1.1, 1, 1.1, 1] }}
                  transition={{ duration: 1, delay: .7 }} 
                    className="button correct-answer" 
                  >
                    <p>
                      {alternatives[0]}
                    </p>
                  </motion.button>
                )}
                <motion.div
                  className="statement"
                >
                  <p>
                    <strong>Alla barn i hela världen har samma rättigheter</strong>
                  </p>
                </motion.div>
                <motion.div 
                  variants={ divVariants }
                  initial="hide" // ulVariants[]
                  animate={check ? 'check' : 'show'}
                  exit="hide"
                >
                  {alternatives.map((alternative, index) => (
                    <motion.button 
                      variants={buttonVariants} 
                      className="button" 
                      key={index}
                    >
                      <p>
                        {alternative}
                      </p>
                    </motion.button>
                  ))}
                </motion.div>
                <button className="button check" onClick={() => {setCheck(true)}}>
                  <p>Rätta</p>
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

