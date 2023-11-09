import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css'; // Appのスタイルシートをインポート
import Header from './components/Header'; // Headerのスタイルシートをインポート

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>nyanyacyan's Portfolio</title>
        <link rel="icon" type="image/x-icon"　href="%PUBLIC_URL%/myfavicon.ico" />
      </Helmet>
      <Header /> {/* Headerコンポーネントをレンダリング */}
      {/* 他のコンテンツ */}
    </div>
  );
}

export default App;
