import type { Organisation, Panel, PanelUser } from "../types";

export const _organisation: Organisation = {
  id: 1,
  type: "test",
  name: "test",
  description: "test",
  logo: "test",
  website: "test",
  phoneNumber: "test",
};

export const organisation: Organisation[] = [
  {
    id: 1,
    type: "test",
    name: "test",
    description: "test",
    logo: "test",
    website: "test",
    phoneNumber: "test",
  }
];

export const panel: Panel[] = [
  {
    id: 1,
    organisation: _organisation,
    title: "test",
    description: "test",
    content: "test",
    activePeriod: new Date(),
    location: "test",
    reward: ["test"],
    studyType: "test",
  },
];

export const panelUser: PanelUser[] = [
  {
    id: 1,
    firstName: "test",
    lastName: "test",
    email: "test",
    phoneNumber: "test",
    dateOfBirth: new Date(),
    avatarUrl: "test",
  }
];
