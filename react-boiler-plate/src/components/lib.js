import React from 'react'
import text from './../json/test.json' // importing json
import './../stylesheets/temp.scss' // imporing scss

export const hello = (
  <h1 id='title' className='hello'>
    {text.hello}
  </h1>
)

export const goodbye = (
  <h1 id='title' className='goodbye'>
    {text.goodbye}
  </h1>
)


/*
  This script is for importing from a JSON
  file (titles.json) and then using that
  data to make two React components that are
  being used in index.js

  Only use this file if you want to import data
  fron a json file

  P.S. the json data is saved into the variable
  text which could be something else, just a variable
*/
