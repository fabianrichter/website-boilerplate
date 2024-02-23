import React from "react";
import PageTitle from "./page-title/page-title";
import Text from "./text/text";
import Image from "./image/image";
import ArticleOverview from "./article-overview/article-overview";
import ContactForm from "./contact-form/contact-form";
import TextAndImage from "./text-and-image/text-and-image";
import Gallery from "./gallery/gallery";
import Intro from "./intro/intro";
import SectionTitle from "./section-title/section-title";
import HeroText from "./hero-text/hero-text";
import Portfolio from "./portfolio/portfolio";
import CTA from "./cta/cta";
import ErrorBoundary from "@/lib/error-boundary/error-boundary";

const renderComponents = (componentData) => {
  // check for components data typename to render the correct component
  switch (componentData.__typename) {
    case "ComponentGeneralIntro":
      return <Intro data={componentData} />;
    case "ComponentGeneralPageTitle":
      return <PageTitle data={componentData} />;
    case "ComponentGeneralSectionTitle":
      return <SectionTitle data={componentData} />;
    case "ComponentGeneralText":
      return <Text data={componentData} />;
    case "ComponentGeneralHeroText":
      return <HeroText data={componentData} />;
    case "ComponentGeneralCta":
      return <CTA data={componentData} />;
    case "ComponentGeneralPortfolio":
      return <Portfolio data={componentData} />;
    case "ComponentGeneralImage":
      return <Image data={componentData} />;
    case "ComponentGeneralGallery":
      return <Gallery data={componentData} />;
    case "ComponentGeneralTextAndImage":
      return <TextAndImage data={componentData} />;
    case "ComponentConnectArticleOverview":
      return <ArticleOverview data={componentData} />;
    case "ComponentFormsContactForm":
      return <ContactForm />;
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
    <ErrorBoundary>
      {content.map((componentData, index) => (
        <React.Fragment key={index}>
          <ErrorBoundary>{renderComponents(componentData)}</ErrorBoundary>
        </React.Fragment>
      ))}
    </ErrorBoundary>
  );
};

export default Components;
