import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Documentation ElevaSeo</span>,

  footer: {
    text: "ElevaSeo & ElevaSea Docs",
  },
  feedback: { content: null },
  editLink: { text: null },
  i18n: [
    { locale: "default", text: "English" },
    { locale: "fr", text: "French" },
  ],
};

export default config;
