import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from 'adminlte-reactjs/src/components/profile-card/profile-card';

ReactDOM.render(
  <div>
    <h1>Hello, HeyCommunity V4!</h1>
    <ProfileCard
      width = '3'
      theme = 'bg-aqua'
      displayName = 'John Roe'
      description = 'Founder & CEO'
      displayPicture = '../dist/img/user1-128x128.jpg'
      coverPicture = '../dist/img/photo4.png' >
    </ProfileCard>
  </div>,
  document.getElementById('HeyCommunityAdmin')
);
