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
                <img src="言語レーダーチャート.jpeg" alt="言語レーダーチャート" className="radarChart1"/>
            </div>

            <div class="grid-container1">
                <ul class="level-list">
                    <li>5 Level - 実務を10以上</li>
                    <li>4 Level - 実務を5以上</li>
                    <li>3 Level - 業務として実践</li>
                    <li>2 Level - コードを書いて実装</li>
                    <li>1 Level - 知識補填</li>
                </ul>
            </div>

            <div>
                <img src="OPレーダーチャート.jpeg" alt="言語レーダーチャート" className="radarChart2"/>
            </div>

            <div class="grid-container2">
                <ul class="level-list">
                    <li>5 Level - 実務を10以上</li>
                    <li>4 Level - 実務を5以上</li>
                    <li>3 Level - 業務として実践</li>
                    <li>2 Level - コードを書いて実装</li>
                    <li>1 Level - 知識補填</li>
                </ul>
            </div>
        </div>
    );
};


export default Skill;