import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import SData from './SongData';
import KS2 from './Images/Kahani-Suno-2.0.png'
import MMJ from './Images/Maan-Meri-Jaan.png'
import ABL from './Images/Apna-Bana-Le.png'
import KR from './Images/Kesariya.png'
import MS from './Images/Malang-Sajna.png'
import './index.css'

ReactDom.render(
    <>
    <h1 className='heading-style'>List of top five songs in india</h1>
        <Card
            imgsrc={KS2}
            link={SData[0].link}
            name={SData[0].name}
        />

        <Card
            imgsrc={MMJ}
            link={SData[1].link}
            name={SData[1].name}
        />
        <Card
            imgsrc={ABL}
            link={SData[2].link}
            name={SData[2].name}
        />
        <Card
            imgsrc={KR}
            link={SData[3].link}
            name={SData[3].name}
        />
        <Card
            imgsrc={MS}
            link={SData[4].link}
            name={SData[4].name}
        />
    </>, document.getElementById('root')

);