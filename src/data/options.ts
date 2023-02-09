//TODO add enum for option key, -1 for no option, -2 for primary independent option, etc.

type PrimaryOptionKey = "add";

// ignore prettier below
export type PrimaryOption = {
  key: PrimaryOptionKey;
  option: string;
};

export type SecondaryOption = {
  option: string;
  usage: string;
  note?: string;
};

export enum OptionIndexStatus {
  HasOption = 0,
  NoOption = -1,
}

export const enPrimaryOptions: Array<PrimaryOption> = [
  {
    key: "add",
    option: "add elements or slices",
  },
];

export const zhPrimaryOptions: Array<PrimaryOption> = [
  {
    key: "add",
    option: "添加元素或切片",
  },
];

export const enSecondaryOptions: Record<
  PrimaryOptionKey,
  Array<SecondaryOption>
> = {
  add: [
    {
      option: "into a specific position of another slice",
      usage: `a := []int{1, 5, 6}
index := 1
ele := 4
a = append(a[:index], append([]int{ele}, a[index:]...)...)
fmt.Println(a) // Output: [1 4 5 6]
b := []int{2, 3}
a = append(a[:index], append(b, a[index:]...)...)
fmt.Println(a) // Output: [1 2 3 4 5 6]`,
    },
    {
      option: "to the end of another slice",
      usage: `a := []int{1, 2, 3}
a = append(a, 4)
fmt.Println(a) // Output: [1 2 3 4]
a = append(a, []int{5, 6}...)
fmt.Println(a) // Output: [1 2 3 4 5 6]`,
    },
    {
      option: "to the front of another slice",
      usage: `a := []int{4, 5, 6}
ele := 3
a = append([]int{ele}, a...)
fmt.Println(a) // Output: [3 4 5 6]
b := []int{1, 2}
a = append(b, a...)
fmt.Println(a) // Output: [1 2 3 4 5 6]`,
    },
  ],
};

export const zhSecondaryOptions: Partial<
  Record<PrimaryOptionKey, Array<Partial<SecondaryOption>>>
> = {
  add: [
    {
      option: "元素到切片的末尾",
    },
  ],
};
