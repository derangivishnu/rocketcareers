
import React from 'react';
import ContentPage from './Content.com';
import SignupForm from './Signupform';
import './Pagecontent.css'

const PageWithContentAndForm = () => {
  return (
    <div className="page">
      <div className="content">
        <ContentPage />
      </div>
      <div className="form">
        <SignupForm />
      </div>
    </div>
  );
};

export default PageWithContentAndForm;
