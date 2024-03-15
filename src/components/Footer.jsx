import React from 'react';
import './sass/layout.scss';
export default function Footer() {
  const getTime = () => {
    return new Date().toString();
  };
  return <div className="layout-footer">{getTime()}</div>;
}
