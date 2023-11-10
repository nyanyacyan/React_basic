import React from 'react';
import './App.css'; // Appのスタイルシートをインポート
import Header from './components/Header'; // Headerのスタイルシートをインポート
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Header /> {/* Headerコンポーネントをレンダリング */}
      {/* 他のコンテンツ */}
      <Top />
    </div>
  );
}

export default App;
