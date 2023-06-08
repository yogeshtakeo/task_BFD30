import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const fetchingTheData = fetch("https://jsonplaceholder.typicode.com/")
  console.log(fetchingTheData)

  fetchingTheData
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
  console.log('This is an absolute error', error)
  })
