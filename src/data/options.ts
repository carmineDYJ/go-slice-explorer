//TODO add enum for option key, -1 for no option, -2 for primary independent option, etc.

export type PrimaryOptionKey = "setup" | "add" | "remove";

export type PrimaryOption = { key: PrimaryOptionKey; option: string };

export type SecondaryOption = { option: string; usage: string; note: string };

export enum OptionIndexStatus {
  NoOption = -1,
  PrimaryIndependentOption = -2,
}

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
    {
      option: "for a new project",
      usage: "poetry new poetry-demo",
      note: "aaa",
    },
    { option: "in a existing project", usage: "poetry init", note: "bbb" },
  ],
};
