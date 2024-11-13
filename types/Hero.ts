export type HeroContent = {
  name: string;
  description: string;
  imageUrl: string;
};

export type Hero = {
  title: string;
  Content: HeroContent[];
};
