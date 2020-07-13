import { CvProfile } from "@/models";

export const MyCV: CvProfile = {
  name: "Someone",
  title: { en: "Some title", fr: "" },
  info: {
    phone: "12-34-56-78",
    location: "Somewhere",
    email: "some@email.com",
  },

  objective: {
    title: { en: "objective", fr: "" },
    description: {
      en: "objective description",
      fr: "",
    },
  },

  aboutMe: {
    title: { en: "About me", fr: "" },
    description: {
      en: "About me",
      fr: "",
    },
  },

  social: {
    title: { en: "Social", fr: "" },
    content: [
      {
        name: { en: "Github", fr: "Github" },
        url: "https://github.com",
        img: require("@/assets/brands/github/GitHub-Mark-32px.png"),
      },
    ],
  },

  skills: {
    title: { en: "Skills", fr: "" },
    content: [
      {
        name: { en: "Front-end", fr: "Front-end" },
        skills: [
          {
            name: { en: "JavaScript", fr: "JavaScript" },
            img: "",
            level: 5,
            interest: 5,
          },
        ],
      },
    ],
  },

  educations: {
    title: { en: "Education", fr: "" },
    content: [
      {
        title: {
          en: "Some studies",
          fr: "",
        },
        organisation: {
          name: "Some school",
          url: "",
        },
        description: {
          en: "some curriculum",
          fr: "",
        },
        date: {
          start: { en: "xxxx", fr: "" },
          end: { en: "yyyy", fr: "" },
        },
        location: { en: "Somewhere", fr: "" },
        skills: { en: "Some skills", fr: "" },
      },
    ],
  },

  experiences: {
    title: { en: "Experiences", fr: "Expériences" },
    content: [
      {
        title: { en: "Some title", fr: "" },
        organisation: {
          name: "Some company",
          url: "",
        },
        description: {
          en: "Some summary",
          fr: "",
        },
        date: {
          start: { en: "aaaa", fr: "" },
          end: { en: "bbbb", fr: "" },
        },
        location: { en: "Somewhere", fr: "" },
        skills: {
          en: "Some skills",
          fr: "",
        },
        roles: {
          en: "Some roles",
          fr: "",
        },
      },
    ],
  },

  languages: {
    title: { en: "Languages", fr: "" },
    content: [
      {
        name: { en: "English", fr: "Anglais" },
        level: { en: "Business level", fr: "Professionnel" },
        img: "languages/uk.png",
      },
    ],
  },

  hobbies: {
    title: {
      en: "Hobbies",
      fr: "",
    },
    content: [{ name: { en: "Coding", fr: "" } }],
  },
};
