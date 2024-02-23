import React, { useContext, useState } from 'react';
import Menu from './menu';

import styles from './header.module.scss';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';
import { Configs } from '@/store/configs';
import ContactLine from './contact-line';

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const { configHeader, configFooter } = useContext(Configs);

  const footerLine = configFooter && [
    {
      label: 'Impressum',
      link: configFooter?.data.attributes?.imprintAlias,
    },
    {
      label: 'Datenschutz',
      link: configFooter?.data.attributes?.privacyAlias,
    },
  ];

  return (
    <header className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link scroll={false} href="/">
            Website Boilerplate
          </Link>
        </div>
        <ContactLine configHeader={configHeader} className={styles['contact-desktop']} />
        <div className={styles.toggle} onClick={() => setMenuActive((s) => !s)} role="button">
          Menu
        </div>
      </div>
      <AnimatePresence>
        {menuActive && (
          <motion.div
            className={styles.fullscreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Menu navigation={props.navigation} onClose={() => setMenuActive(false)} />
            <ContactLine configHeader={configHeader} className={styles['contact-mobile']} />
            {footerLine && (
              <nav className={styles.footer}>
                <ul>
                  {footerLine.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
