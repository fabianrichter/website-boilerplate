import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import LangSwitch from "@/i18n/lang-switch/lang-switch";

const ContactLine = ({ configHeader, className }) => {
  const phone = configHeader?.data.attributes.phone;
  const contactPage = {
    link: configHeader?.data.attributes.contactPage.data?.attributes.slug,
  };

  return (
    <div className={className}>
      {phone && (
        <a href={`tel:${phone}`} className={styles["contact-sub"]}>
          {phone}
        </a>
      )}
      {contactPage.link && (
        <Link href={contactPage.link} className={styles["contact-sub"]}>
          hi@photowert.com
        </Link>
      )}
      <LangSwitch />
    </div>
  );
};

export default ContactLine;
