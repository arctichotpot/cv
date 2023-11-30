import resume from "@/assets/images/resume.png";
import website from "@/assets/images/website.png";
import writing from "@/assets/images/writing.png";

export type CategoryType = {
  title: string;
  img: string;
  type: string;
};

export type TemplateType = {
  id: string;
  title: string;
  img: string;
};

const mockTemplate = (type: string): TemplateType[] => [
  {
    id: "create",
    title: "Create a blank page",
    img: writing.src,
  },
  ...Array(30)
    .fill(null)
    .map((_, index) => ({
      id: `index`,
      title: `${type} template ${index + 1}`,
      img: writing.src,
    })),
];

export const categoryList: CategoryType[] = [
  {
    title: "Resume",
    img: resume.src,
    type: "resume",
  },
  {
    title: "Homepage",
    img: website.src,
    type: "homepage",
  },
];

export const templateList: {
  [key: string]: TemplateType[];
} = {
  resume: mockTemplate("resume"),
  homepage: mockTemplate("homepage"),
};
