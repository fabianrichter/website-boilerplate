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

export interface LinksCta extends Schema.Component {
  collectionName: 'components_general_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    page: Attribute.Relation<'links.cta', 'oneToOne', 'api::page.page'>;
  };
}

export interface LinksDownloadOverview extends Schema.Component {
  collectionName: 'components_general_download_overviews';
  info: {
    displayName: 'Download Overview';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'links.download', true>;
  };
}

export interface LinksDownload extends Schema.Component {
  collectionName: 'components_general_downloads';
  info: {
    displayName: 'Download';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    media: Attribute.Media;
    text: Attribute.String;
  };
}

export interface MediaGallery extends Schema.Component {
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

export interface MediaImage extends Schema.Component {
  collectionName: 'components_general_images';
  info: {
    displayName: 'Image';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'internal.image', true>;
    position: Attribute.Enumeration<
      ['left', 'center', 'right', 'text-aligned', 'full-width']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'text-aligned'>;
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

export interface TextAccordeonItem extends Schema.Component {
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

export interface TextAccordeon extends Schema.Component {
  collectionName: 'components_accordeon_accordeons';
  info: {
    displayName: 'Accordeon';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'text.accordeon-item', true>;
  };
}

export interface TextHeroText extends Schema.Component {
  collectionName: 'components_general_hero_texts';
  info: {
    displayName: 'Hero Text';
    description: '';
  };
  attributes: {
    small: Attribute.String;
    cta: Attribute.Component<'links.cta'>;
    text: Attribute.Text;
  };
}

export interface TextPageTitle extends Schema.Component {
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

export interface TextSectionTitle extends Schema.Component {
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

export interface TextTextAndImage extends Schema.Component {
  collectionName: 'components_general_text_and_images';
  info: {
    displayName: 'Text & Image';
    description: '';
  };
  attributes: {
    direction: Attribute.Enumeration<['text-image', 'image-text']>;
    imageComponent: Attribute.Component<'internal.image'>;
    textComponent: Attribute.Component<'text.text'>;
  };
}

export interface TextText extends Schema.Component {
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'connect.article-overview': ConnectArticleOverview;
      'forms.contact-form': FormsContactForm;
      'general.intro': GeneralIntro;
      'general.portfolio-item': GeneralPortfolioItem;
      'general.portfolio': GeneralPortfolio;
      'internal.gallery': InternalGallery;
      'internal.image': InternalImage;
      'internal.video': InternalVideo;
      'links.cta': LinksCta;
      'links.download-overview': LinksDownloadOverview;
      'links.download': LinksDownload;
      'media.gallery': MediaGallery;
      'media.image': MediaImage;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'text.accordeon-item': TextAccordeonItem;
      'text.accordeon': TextAccordeon;
      'text.hero-text': TextHeroText;
      'text.page-title': TextPageTitle;
      'text.section-title': TextSectionTitle;
      'text.text-and-image': TextTextAndImage;
      'text.text': TextText;
    }
  }
}
