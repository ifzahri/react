import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem",
    }}>
      <h1 className='title'>Nyoba Ajach</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Iftala</th>
            <th>Teknik Informatika</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Iftala</th>
            <th>Teknik Informatika</th> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
