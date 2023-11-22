// Skill.js
import React from "react";
import './Skill.css';

const Skill = () => {
    return(
        <div id="skills" className="Skill">
            <h2>
                My Skill Set
            </h2>
            <p>
                レーダーチャートにまとめました。より需要のあるものを選択して多くの方に喜ばれるスキルを身につけていきたいと考えてます。そのために今やってることを突き詰めて、少しずつ専門性を高めていきたいと考えております。
            </p>

            <div>
                <img src="radarChart1.png" alt="radarChart1" className="radarChart1"/>
            </div>

            <div className="grid-container1">
                <ul className="level-list">
                    <li>  5 Level - 実務を10以上</li>
                    <li>  4 Level - 実務を5以上</li>
                    <li>  3 Level - 業務として実践</li>
                    <li>  2 Level - コードを書いて実装</li>
                    <li>  1 Level - 知識補填</li>
                </ul>
            </div>

            <div>
                <img src="radarChart2.png" alt="radarChart2" className="radarChart2"/>
            </div>

            <div className="grid-container2">
                <ul className="level-list">
                    <li>  5 Level - 実務を10以上</li>
                    <li>  4 Level - 実務を5以上</li>
                    <li>  3 Level - 業務として実践</li>
                    <li>  2 Level - コードを書いて実装</li>
                    <li>  1 Level - 知識補填</li>
                </ul>
            </div>
        </div>
    );
};


export default Skill;