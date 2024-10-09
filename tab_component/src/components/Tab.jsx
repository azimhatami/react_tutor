import { useState } from 'react';
import styles from './Tab.module.css';

const tabData = [
  {
    id: 1,
    title: 'ITEM 1',
    content: 'Authorize the user data ✅'
  },
  {
    id: 2,
    title: 'ITEM 2',
    content: 'Redirect user to cart page 🛒'
  },
  {
    id: 3,
    title: 'ITEM 3',
    content: 'Create new payment for the user 💰'
  }
];

function Tab () {

  const [activeTab, setActiveTab] = useState(1);
  const [showBtn, setShowBtn] = useState(true);

  const handleActiveTab = (id) => {
    setActiveTab(id)
  }

  const handleShowBtn = () => {
    setShowBtn(!showBtn)
  }

  return (
    <>
      <div className={styles.header}>
        <h1>Tab Component</h1>
        <button 
        className={styles.btn_show}
        onClick={handleShowBtn}
        >{showBtn ? 'HIDE' : 'SHOW'}</button>
      </div>
    { showBtn ? 
      <div className={styles.container}>
        <div className={styles.tab_header}>
          {tabData.map((tab) => {
            return (
              <button
              id='btn_tab'
              key={tab.id} 
              className={activeTab === tab.id ? `${styles.active}` : ''}
              onClick={() => handleActiveTab(tab.id)}
              >
                <span>{tab.title}</span>
                <span className={styles.tab_indicator}></span>
              </button>
            );
          })}
        </div>
        <div className={styles.tab_content}>
          <p>{tabData[activeTab - 1].content}</p>
        </div>
      </div>
      : <p>Hide content :)</p>}
    </>
  );
}


export default Tab

