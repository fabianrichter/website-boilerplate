import React, { useContext } from "react";
import { I18n } from "../i18n";
import Link from "next/link";
import IconLang from "./icon-lang";
import styles from "./lang-switch.module.scss";

const LangSwitch = () => {
  const i18nCtx = useContext(I18n);

  if (!i18nCtx?.translations?.length) return;

  return (
    <div className={styles.langSwitch}>
      <Link href={i18nCtx.translations[0].slug} locale={i18nCtx.translations[0].locale} className={styles.link}>
        <IconLang />
      </Link>
    </div>
  );

  /*
  return (
    <div className={styles.langSwitch}>
      <IconLang />
      <ul className={styles.langList}>
        <li className={styles.active}>{i18nCtx.locale}</li>
        {i18nCtx.translations.map((locale, i) => (
          <li key={i}>
            <Link href={locale.slug} locale={locale.locale} className={styles.link}>
              {locale.locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  */
};

export default LangSwitch;
