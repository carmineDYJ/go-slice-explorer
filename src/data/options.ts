//TODO add enum for option key, -1 for no option, -2 for primary independent option, etc.

const primaryOptionKey = ["setup"] as const;
type PrimaryOptionKey = typeof primaryOptionKey[number];
export const isPrimaryOptionKey = (
  optionKey: any
): optionKey is PrimaryOptionKey => primaryOptionKey.includes(optionKey);
type NoSubPrimaryOptionKey = "add";

// ignore prettier below
export type PrimaryOption =
  | {
      key: PrimaryOptionKey;
      option: string;
    }
  | {
      key: NoSubPrimaryOptionKey;
      option: string;
      usage: string;
      note: string;
    };

export type SecondaryOption = { option: string; usage: string; note: string };

export enum OptionIndexStatus {
  HasOption = 0,
  NoPrimary = -1,
  PrimaryNoSub = -2,
}

export const enPrimaryOptions: Array<PrimaryOption> = [
  { key: "setup", option: "use poetry" },
  {
    key: "add",
    option: "add a dependency",
    usage: "poetry add <dependency>",
    note: "",
  },
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
