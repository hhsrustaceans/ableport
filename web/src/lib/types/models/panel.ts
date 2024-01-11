export type Panel = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  disabilities: Disability[];
};

export type Disability = {
  code: string;
};
