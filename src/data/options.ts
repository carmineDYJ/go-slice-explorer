export type PrimaryOptionKey = "setup" | "add" | "remove";

export type PrimaryOption = { key: PrimaryOptionKey; option?: string };

export type SecondaryOption = { option: string; usage: string; note?: string };

export const enPrimaryOptions: Array<PrimaryOption> = [
  { key: "setup", option: "use poetry" },
  { key: "add", option: "add a package" },
];

export const zhPrimaryOptions: Array<PrimaryOption> = [
  { key: "setup", option: "使用 poetry" },
];

export const enSecondaryOptions: Partial<
  Record<PrimaryOptionKey, Array<SecondaryOption>>
> = {
  setup: [
    { option: "in a new project", usage: "poetry new poetry-demo" },
    { option: "in a existing project", usage: "poetry init" },
  ],
};
