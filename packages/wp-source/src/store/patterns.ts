import {
  postArchive,
  category,
  tag,
  author,
  date,
  post,
  attachment,
  page
} from "./handlers";

export const wpOrg = [
  {
    pattern: "/",
    handler: postArchive
  },
  {
    pattern: "/category/:slug",
    handler: category
  },
  {
    pattern: "/tag/:slug",
    handler: tag
  },
  {
    pattern: "/author/:slug",
    handler: author
  },
  {
    pattern: "/:year(\\d+)/:month(\\d+)?/:day(\\d+)?",
    handler: date
  },
  {
    pattern: "/:year(\\d+)/:slug",
    handler: post
  },
  {
    pattern: "/:year(\\d+)/:postSlug/:slug",
    handler: attachment
  },
  {
    pattern: "/:slug",
    handler: page
  },
  {
    pattern: "/(.*)/:slug", // subpages
    handler: page
  }
];

export const wpCom = [
  {
    pattern: "/",
    handler: postArchive
  },
  {
    pattern: "/category/:slug",
    handler: category
  },
  {
    pattern: "/tag/:slug",
    handler: tag
  },
  {
    pattern: "/author/:slug",
    handler: author
  },
  {
    pattern: "/:year(\\d+)/:month(\\d+)?/:day(\\d+)?",
    handler: date
  },
  {
    pattern: "/:year(\\d+)/:slug",
    handler: post
  },
  {
    pattern: "/:year(\\d+)/:postSlug/:slug",
    handler: attachment
  },
  {
    pattern: "/:slug",
    handler: page
  },
  {
    pattern: "/(.*)/:slug", // subpages
    handler: page
  }
];
