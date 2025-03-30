export const SITE = {
  website: "https://ruznamce.kadimelifba.com/", // replace this with your deployed domain
  author: "kadimelifba",
  profile: "https://kadimelifba.com/",
  desc: "KadimElifba sahifesinin ruznamçesidir.",
  title: "Ruznamçe",
  ogImage: "takdim_resmi.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Tashih Talebi",
    url: "https://github.com/kadimelifba/ruznamce/edit/merkezi/src/content/blog",
  },
  dynamicOgImage: true,
  lang: "tr", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Istanbul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
