export type Panel = {
  id: string;
  name: string;
  description: string;
  content?: string;
  imageUrl: string;
  websiteUrl: string;
  disabilities: Disability[];
  active: boolean
};

export type Disability = {
  code: string;
};

export type Aid = {
  code: string;
};
