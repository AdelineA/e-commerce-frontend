export type HeroContent = {
  icon: string;
  name: string;
  title: string;
  image: string;
};

export type Hero = {
  title: string;
  Content: HeroContent[];
};
