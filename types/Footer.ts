export interface FooterSection {
  title: string;
  content?: {
    description?: string;
    inputPlaceholder?: string;
    buttonText?: string;
    address?: string;
    email?: string;
    phone?: string;
    qrCodes?: Array<{
      platform: string;
      url: string;
      image: string;
    }>;
  };
  links?: Array<{
    name: string;
    url: string;
  }>;
  socialMedia?: Array<{
    platform: string;
    icon: string;
    url: string;
  }>;
}

export interface FooterData {
  sections: FooterSection[];
  footerNote: string;
}
