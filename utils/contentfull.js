import { createClient } from "contentful";

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
