export default defineAppConfig({
  alpine: {
    title: "Saad",
    description: "The minimalist blog theme",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300,
    },
    header: {
      position: "right",
      logo: {
        path: "/logo.svg",
        pathDark: "/logo-dark.svg",
        alt: "Saad",
      },
    },
    footer: {
      credits: {
        enabled: true,
        text: "Saad",
        repository: "https://github.com/S-Selim/saad-main",
      },
      navigation: true,
      alignment: "center",
      message: "Follow me on",
    },
    socials: {
      twitter: "",
      instagram: "",
      github: "",
      facebook: "",
      medium: "",
      youtube: "",
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
