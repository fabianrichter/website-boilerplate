import type { Schema, Attribute } from '@strapi/strapi';

export interface ConnectArticleOverview extends Schema.Component {
  collectionName: 'components_connect_article_overviews';
  info: {
    displayName: 'Article Overview';
    description: '';
  };
  attributes: {
    articles: Attribute.Relation<
      'connect.article-overview',
      'oneToMany',
      'api::article.article'
    >;
    mode: Attribute.Enumeration<['manual', 'recent', 'tag-based']>;
    maxAmount: Attribute.Integer & Attribute.DefaultTo<6>;
    tags: Attribute.Relation<
      'connect.article-overview',
      'oneToMany',
      'api::tag.tag'
    >;
  };
}

export interface FormsContactForm extends Schema.Component {
  collectionName: 'components_forms_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'pencil';
  };
  attributes: {
    show: Attribute.Boolean;
  };
}

export interface GeneralAccordeonItem extends Schema.Component {
  collectionName: 'components_accordeon_accordeon_items';
  info: {
    displayName: 'Accordeon Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface GeneralAccordeon extends Schema.Component {
  collectionName: 'components_accordeon_accordeons';
  info: {
    displayName: 'Accordeon';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'general.accordeon-item', true>;
  };
}

export interface GeneralCta extends Schema.Component {
  collectionName: 'components_general_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String;
    page: Attribute.Relation<'general.cta', 'oneToOne', 'api::page.page'>;
  };
}

export interface GeneralDownloadOverview extends Schema.Component {
  collectionName: 'components_general_download_overviews';
  info: {
    displayName: 'Download Overview';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'general.download', true>;
  };
}

export interface GeneralDownload extends Schema.Component {
  collectionName: 'components_general_downloads';
  info: {
    displayName: 'Download';
    icon: 'arrowDown';
  };
  attributes: {
    media: Attribute.Media;
    text: Attribute.String;
  };
}

export interface GeneralGallery extends Schema.Component {
  collectionName: 'components_general_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    gallery: Attribute.Component<'internal.gallery'>;
  };
}

export interface GeneralHeroText extends Schema.Component {
  collectionName: 'components_general_hero_texts';
  info: {
    displayName: 'Hero Text';
    description: '';
  };
  attributes: {
    small: Attribute.String;
    cta: Attribute.Component<'general.cta'>;
    text: Attribute.Text;
  };
}

export interface GeneralImage extends Schema.Component {
  collectionName: 'components_general_images';
  info: {
    displayName: 'Image';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'internal.image', true>;
  };
}

export interface GeneralIntro extends Schema.Component {
  collectionName: 'components_general_intros';
  info: {
    displayName: 'Intro';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Component<'internal.image'>;
    text: Attribute.RichText;
  };
}

export interface GeneralPageTitle extends Schema.Component {
  collectionName: 'components_general_page_titles';
  info: {
    displayName: 'Page Title';
    icon: 'layer';
    description: '';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface GeneralPortfolioItem extends Schema.Component {
  collectionName: 'components_general_portfolio_items';
  info: {
    displayName: 'Portfolio Item';
    description: '';
  };
  attributes: {
    teaserImage: Attribute.Component<'internal.image'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    link: Attribute.Relation<
      'general.portfolio-item',
      'oneToOne',
      'api::page.page'
    >;
  };
}

export interface GeneralPortfolio extends Schema.Component {
  collectionName: 'components_general_portfolios';
  info: {
    displayName: 'Portfolio';
  };
  attributes: {
    portfolioItem: Attribute.Component<'general.portfolio-item', true>;
    title: Attribute.String;
  };
}

export interface GeneralSectionTitle extends Schema.Component {
  collectionName: 'components_general_section_titles';
  info: {
    displayName: 'Section Title';
    icon: 'layer';
    description: '';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface GeneralTextAndImage extends Schema.Component {
  collectionName: 'components_general_text_and_images';
  info: {
    displayName: 'Text & Image';
    description: '';
  };
  attributes: {
    direction: Attribute.Enumeration<['text-image', 'image-text']>;
    imageComponent: Attribute.Component<'internal.image'>;
    textComponent: Attribute.Component<'general.text'>;
  };
}

export interface GeneralText extends Schema.Component {
  collectionName: 'components_general_texts';
  info: {
    displayName: 'Text';
    icon: 'layer';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface InternalGallery extends Schema.Component {
  collectionName: 'components_internal_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface InternalImage extends Schema.Component {
  collectionName: 'components_internal_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface InternalVideo extends Schema.Component {
  collectionName: 'components_internal_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    video: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'connect.article-overview': ConnectArticleOverview;
      'forms.contact-form': FormsContactForm;
      'general.accordeon-item': GeneralAccordeonItem;
      'general.accordeon': GeneralAccordeon;
      'general.cta': GeneralCta;
      'general.download-overview': GeneralDownloadOverview;
      'general.download': GeneralDownload;
      'general.gallery': GeneralGallery;
      'general.hero-text': GeneralHeroText;
      'general.image': GeneralImage;
      'general.intro': GeneralIntro;
      'general.page-title': GeneralPageTitle;
      'general.portfolio-item': GeneralPortfolioItem;
      'general.portfolio': GeneralPortfolio;
      'general.section-title': GeneralSectionTitle;
      'general.text-and-image': GeneralTextAndImage;
      'general.text': GeneralText;
      'internal.gallery': InternalGallery;
      'internal.image': InternalImage;
      'internal.video': InternalVideo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
