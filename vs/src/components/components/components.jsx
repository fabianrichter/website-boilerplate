import React from "react";
import PageTitle from "./page-title/page-title";
import Text from "./text/text";
import Image from "./image/image";
import ArticleOverview from "./article-overview/article-overview";
import ContactForm from "./contact-form/contact-form";
import TextAndImage from "./text-and-image/text-and-image";

const renderComponents = (componentData) => {
  // check for components data typename to render the correct component
  switch (componentData.__typename) {
    case "ComponentGeneralPageTitle":
      return <PageTitle data={componentData} />;
    case "ComponentGeneralText":
      return <Text data={componentData} />;
    case "ComponentGeneralImage":
      return <Image data={componentData} />;
    case "ComponentGeneralTextAndImage":
      return <TextAndImage data={componentData} />
    case "ComponentConnectArticleOverview":
      return <ArticleOverview data={componentData} />
    case "ComponentFormsContactForm":
      return <ContactForm />
    default:
      return <div>Module not found.</div>;
  }
};

/**
 * render components placed in the dynamic zone in strapi
 * map through all components and render the correct component.
 */
const Components = ({ content }) => {
  return (
    <>
      {content.map((componentData, index) => (
        <React.Fragment key={index}>{renderComponents(componentData)}</React.Fragment>
      ))}
    </>
  );
};

export default Components;
