import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { Card } from 'antd';
import ManyCards from './ManyCards.js';

function CardBook(props) {

    const {bid} = useParams();

    const tabList = [
        {
          key: 'tab1',
          tab: 'Words',
        },
        {
          key: 'tab2',
          tab: 'Test',
        },
      ];

      const contentList = {
        tab1: <ManyCards cardBookId = {bid}/>,
        tab2: <p>content2</p>,
      };



  const [activeTabKey1, setActiveTabKey1] = useState('tab1');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };

  return (
    <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}}>
      <Card
        style={{ width: '100%' }}
        title="Card title"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>

    </div>
  );
};

export default CardBook;