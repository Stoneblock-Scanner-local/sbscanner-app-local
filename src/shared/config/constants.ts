export const publicConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  session_cookie_name: process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME,

  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID,
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
  },
};
