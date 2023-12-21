export type Organisation = {
  id?: keyof number,
  type: string,
  name: string,
  description: string,
  logo?: string,
  website?: string,
  phoneNumber?: string,
};

export type Panel = {
  id?: keyof number,
  organisation: Organisation,
  title: string,
  description: string,
  content: string,
  activePeriod?: Date,
  location: string,
  reward: Array<string>,
  studyType: string,
};
