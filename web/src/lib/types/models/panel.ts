export type Panel = {
  id: string;
  name: string;
  description: string;
  content?: string;
  imageUrl: string;
  websiteUrl: string;
  disabilities: Disability[];
};

export type Disability = {
  code: string;
};

export type Aid = {
  code: string;
};
