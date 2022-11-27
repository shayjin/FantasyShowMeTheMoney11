import React from 'react';
import Main from './App';
import './App.css';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { FC } from 'react';

export const Rules = () => {
    
    return (
        <>
            <p className="des">
                안녕하세요. 소개 치우고. 바로 규칙 설명 들어갑니다. <br/><br/>
                1등 - <b>7</b>점<br/>
                2등 - <b>6</b>점<br/>
                3등 - <b>5</b>점<br/>
                4등 - <b>4</b>점<br/>
                세미파이널 진출 (8명) - <b>3</b>점<br/>
                본선 1차 진출 (14명) - <b>2</b>점<br/>
                디스전 진출  (16명) - <b>1</b>점<br/>
                음원미션 탈락  (8명) - <b>0</b>점<br/>

                <br/>
                매주 게임 업데이트가 진행됩니다. 자기 팀에 살아있는 래퍼수 만큼, 현재 라운드 높이에 따라 점수를 얻습니다.<br/>
                예시: 내팀 (토이고, 이영지, 잠비노, 제이켠, 박명훈, 신세인) | 음원미션에서 박명훈, 신세인 탈락 | 디스전에서 제이켠 탈락 | 지금 현재 날짜는 본선 방영 전 (이라고 가정)<br/>
                현재 점수는 2(1) + 1(1) + 3(3) = 11 점이 됩니다. 방송이 방영하면 업데이트 됩니다.<br/><br/>
                4명이니까 각자 플레이어 1, 2, 3, 4 중 하나를 선택합니다. 나이순으로 선택합시다ㅋ. 뽑기 순서는 이겁니다: <br/>

                (Player 1 -&gt; Player 2 -&gt; Player 3 -&gt; Player 4 -&gt; Player 4 -&gt; Player 3 -&gt; Player 2 -&gt; Player 1) 를 <b>3번</b> 진행합니다.<br/>
                총 24번, 한 사이클에 8번의 뽑기, 각 플레이어마다 6번의 뽑기 차례가 옵니다.<br/><br/>
                <b>뽑기 순서:</b> <br/>
                <b>싸이클 1:</b> Player 1 -&gt; Player 2 -&gt; Player 3 -&gt; Player 4<br/>
                <b>싸이클 2:</b> Player 4 -&gt; Player 3 -&gt; Player 2 -&gt; Player 1<br/>
                <b>싸이클 3:</b> Player 1 -&gt; Player 2 -&gt; Player 3 -&gt; Player 4<br/>
                <b>싸이클 4:</b> Player 4 -&gt; Player 3 -&gt; Player 2 -&gt; Player 1<br/>
                <b>싸이클 5:</b> Player 1 -&gt; Player 2 -&gt; Player 3 -&gt; Player 4<br/>
                <b>싸이클 6:</b> Player 4 -&gt; Player 3 -&gt; Player 2 -&gt; Player 1<br/>
            </p>
        </>
    );
}
