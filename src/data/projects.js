const projects = [
  {
    id: "physis-massage", // Unique identifier for the project (used as a slug)
    title: "Physis Massage", // Displayed title of the project
    category: "Web Design & Development", // The type or field of the project

    tagline: "Serene, Inviting Digital Space", // A short project summary or slogan

    // Images
    coverImage:
      "/assets/projects/physis-massage/images/coverImg_physismassage.avif", // Main cover image displayed in listings
    hoverImage:
      "/assets/projects/physis-massage/images/hoverImg_physismassage.avif", // Image shown on hover
    heroImage:
      "/assets/projects/physis-massage/images/heroImg_physismassage.avif", // Full-width hero image for the project page

    // Description
    summary:
      "For Physis Massage Studio, I delivered a complete design and development solution aimed at transforming their online presence. The goal? To create a serene, inviting digital space that mirrors the tranquility and healing nature of their services. By prioritizing simplicity and user comfort, the website seamlessly guides visitors toward booking their next therapeutic session.",

    // Gallery and Media
    galleryImages: [
      "/assets/projects/physis-massage/images/slider/sliderImg1_physismassage.avif",
      "/assets/projects/physis-massage/images/slider/sliderImg2_physismassage.avif",
      "/assets/projects/physis-massage/images/slider/sliderImg3_physismassage.avif",
      "/assets/projects/physis-massage/images/slider/sliderImg4_physismassage.avif",
      "/assets/projects/physis-massage/images/slider/sliderImg5_physismassage.avif",
      "/assets/projects/physis-massage/images/slider/sliderImg6_physismassage.avif",
    ],
    mobilePreviews: [
      {
        src: "/assets/projects/physis-massage/images/mobile/mobileScreen1_physismassage.avif",
        alt: "Mobile Screen 1",
      },
      {
        src: "/assets/projects/physis-massage/images/mobile/mobileScreen2_physismassage.avif",
        alt: "Mobile Screen 2",
      },
      {
        src: "/assets/projects/physis-massage/images/mobile/mobileScreen3_physismassage.avif",
        alt: "Mobile Screen 3",
      },
    ],
    videoAssets: {
      feature: "/assets/projects/physis-massage/videos/PhysisVideo1.mp4", // Primary video asset
      secondary: "/assets/projects/physis-massage/videos/PhysisVideo2.mp4", // Additional video asset
      shortClip: "/assets/projects/physis-massage/videos/PhysisVideo3.mp4", // Short-form video clip
    },

    // Metadata
    year: "2024", // Year of the project
    client: "Physis Massage Studio", // Client's name
    services: ["Design", "Development"], // List of services provided
    tags: ["UI/UX", "Typography", "SEO", "Animation"], // Additional project tags or features

    // Insights
    impact:
      "The revamped website has elevated Physis Massage Studio's digital presence. The intuitive design and calming aesthetic have resonated with clients, leading to a significant rise in bookings and glowing feedback. By strengthening the studio's brand identity and expanding its reach, the redesign has positioned Physis as the go-to destination for therapeutic relaxation.",
    problemStatement:
      "Physis Massage Studio's previous website struggled to convey the calming and restorative experience their services offered. It lacked warmth, aesthetic appeal, and intuitive navigation, creating barriers to engagement and bookings.",
    solution:
      "I created a visually soothing digital experience that reflects the studio's values. The design features a nature-inspired color palette, fluid shapes, and gentle animations, immediately setting a peaceful tone. The user journey was reimagined, transforming the booking process into an intuitive and stress-free experience.",

    // External Link
    liveLink: "https://physismassage.gr/", // Link to the live project
  },
];

export default projects;
