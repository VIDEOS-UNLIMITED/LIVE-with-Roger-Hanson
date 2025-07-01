import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].key);
  return (
    <div>
      <div className={styles.tabList}>
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={active === t.key ? styles.active : ''}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel}>
        {tabs.map(t => active === t.key && <div key={t.key}>{t.content}</div>)}
      </div>
    </div>
  );
}
