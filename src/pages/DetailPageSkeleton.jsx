import React from 'react';
import './DetailPage.css';

const DetailPageSkeleton = () => {
  return (
    <div className="detail-container">
      <div className="skeleton" style={{ width: '150px', height: '24px', marginBottom: '20px' }}></div>
      <div className="detail-content">
        <div className="skeleton detail-poster"></div>
        <div className="detail-info">
          <div className="skeleton" style={{ width: '80%', height: '3rem', marginBottom: '1rem' }}></div>
          <div className="skeleton" style={{ width: '50%', height: '1rem', marginBottom: '1.5rem' }}></div>
          <div className="skeleton" style={{ height: '1rem', marginBottom: '0.5rem' }}></div>
          <div className="skeleton" style={{ height: '1rem', marginBottom: '0.5rem' }}></div>
          <div className="skeleton" style={{ height: '1rem', marginBottom: '0.5rem' }}></div>
          <div className="skeleton" style={{ width: '80%', height: '1rem', marginBottom: '1.5rem' }}></div>
          <div className="skeleton" style={{ width: '200px', height: '45px', marginTop: '20px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;