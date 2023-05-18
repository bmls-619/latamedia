import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-white text-center text-md-start'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        2023 - <a className='text-white' href=''> LatamMedia</a>
      </div>
    </MDBFooter>
  );
}