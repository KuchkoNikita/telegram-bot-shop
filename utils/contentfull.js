import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});


export const getEntriesByTypeAndSlug = async (type, slug) => {
  return (
    await client.getEntries({
      include: 5,
      content_type: type,
      "fields.type[in]": slug,
    })
  ).items;
};

export const getContentfulText = (content) => {
  return content
    ? documentToReactComponents(content)
    : "";
};

export const createImage = (image, anchor) => {
  const file = image?.image?.fields?.file;

  return {
    src: "https://" + file?.url.slice(2) || "",
    height: file?.details?.image?.height || 0,
    width: file?.details?.image?.width || 0,
    alt: file?.fileName || "",
    href: anchor,
  };
};