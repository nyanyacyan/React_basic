import React from 'react';
import './App.css'; // Appのスタイルシートをインポート
import Header from './components/Header'; // Headerのスタイルシートをインポート
import Top from './components/Top';
import Invite from './components/invite';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> {/* Headerコンポーネントをレンダリング */}
      {/* 他のコンテンツ */}
      <Top />
      <Invite />
      <Profile />
      <Portfolio />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
