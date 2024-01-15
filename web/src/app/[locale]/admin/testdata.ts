import type { Organisation, Panel, PanelUser } from "../types";

export const _organisation: Organisation = {
  type: "test",
  name: "test",
  description: "test",
  logo: "test",
  website: "test",
  phoneNumber: "test",
};

export const organisation: Organisation[] = [
  {
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
    organisation: _organisation,
    title: "test",
    description: "test",
    content: "test",
    activePeriod: new Date(),
    location: "test",
    reward: ["test"],
    studyType: "test",
  },
  {
    organisation: _organisation,
    title: "test",
    description: "test",
    content: "test",
    activePeriod: new Date(),
    location: "test",
    reward: ["test"],
    studyType: "test",
  }
];

export const panelUser: PanelUser[] = [
  {
    firstName: "test",
    lastName: "test",
    email: "test",
    phoneNumber: "test",
    dateOfBirth: new Date(),
    avatarUrl: "test",
  }
];
