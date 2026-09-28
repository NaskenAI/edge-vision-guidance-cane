// Source code links.

import type { ExternalLink } from "./types";

export const sourceCode: {
  heading: string;
  intro: string;
  links: ExternalLink[];
  todo: string;
} = {
  heading: "Source code",
  intro: "The project's code is kept on GitHub, under the NaskenAI organisation.",
  links: [
    {
      label: "NaskenAI on GitHub",
      href: "https://github.com/NaskenAI",
      description: "The GitHub organisation.",
    },
    {
      label: "Website source",
      href: "https://github.com/NaskenAI/edge-vision-guidance-cane",
      description: "The code for this website.",
    },
  ],
  todo: "TODO: link to the cane's own software repository once it exists.",
};
