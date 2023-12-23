export type Organisation = {
  id?: number,
  type: string,
  name: string,
  description: string,
  logo?: string,
  website?: string,
  phoneNumber?: string,
};

export type Panel = {
  id?: number,
  organisation: Organisation,
  title: string,
  description: string,
  content: string,
  activePeriod?: Date,
  location: string,
  reward: Array<string>,
  studyType: string,
};

export type PanelUser = {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  dateOfBirth: Date,
  avatarUrl?: string,
};
