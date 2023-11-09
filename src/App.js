import React from 'react';
import './App.css'; // Appのスタイルシートをインポート
import Header from './components/Header'; // Headerのスタイルシートをインポート

function App() {
  return (
    <div className="App">
      <Header /> {/* Headerコンポーネントをレンダリング */}
      {/* 他のコンテンツ */}
    </div>
  );
}

export default App;
