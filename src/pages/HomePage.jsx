import { connect, useDispatch, useSelector } from 'react-redux';
import { Component, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomePage = (props) => {
  const dispatch = useDispatch()



  return (
    <div className='home-page-container'>
        <h1>Home</h1>
    </div>
  );
}



// Connects the store with the component, injects it to the props
