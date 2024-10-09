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

  const activeTab = 1;

  return (
    <>
      <h1>Tab Component</h1>
      <div className={styles.container}>
        <div className={styles.tab_header}>
          {tabData.map((tab) => {
            return (
              <button key={tab.id} className={activeTab === tab.id ? `${styles.active}` : ''}>
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
    </>
  );
}


export default Tab

