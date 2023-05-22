import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export const getEntriesByTypeAndSlug = async (type, slug) => (
  await client.getEntries({
    include: 5,
    content_type: type,
    'fields.type[in]': slug,
  })
).items;

export const getContentfulText = (content) => (content
  ? documentToReactComponents(content)
  : '');

export const getContentfulFields = (props) => {
  if (props) {
    null;
  }

  return { ...props.fields, id: props.sys.id };
};

export const createImage = (image) => {
  const file = image?.fields?.file;

  return {
    src: `https://${file?.url.slice(2)}` || '',
    height: file?.details?.image?.height || 0,
    width: file?.details?.image?.width || 0,
    alt: file?.fileName || '',
  };
};
