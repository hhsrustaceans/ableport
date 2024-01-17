import { Panel } from "../types/models/panel";

export const panels: Panel[] = [
  {
    id: "test",
    name: "Test",
    description: "This is a test panel.",
    websiteUrl: "https://example.com",
    imageUrl: "test",
    disabilities: [{ code: "AUT" }, { code: "BLI" }],
    active: true
  },
  {
    id: "test2",
    name: "Test 2",
    description: "This is a test panel.",
    websiteUrl: "https://example.com",
    imageUrl: "test",
    disabilities: [{ code: "DEF" }],
    active: false
  },
  {
    id: "test3",
    name: "Test 3",
    description: "This is a test panel.",
    websiteUrl: "https://example.com",
    imageUrl: "test",
    disabilities: [{ code: "MOT" }],
    active: false
  },
  {
    id: "test4",
    name: "Test 4",
    description: "This is a test panel.",
    websiteUrl: "https://example.com",
    imageUrl: "test",
    disabilities: [{ code: "DYS" }, { code: "AUT" }],
    active: true
  },
];
