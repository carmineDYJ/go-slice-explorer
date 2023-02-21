//TODO add enum for option key, -1 for no option, -2 for primary independent option, etc.

type PrimaryOptionKey = "add" | "sort";

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
  {
    key: "sort",
    option: "order a slice",
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
  sort: [
    {
      option: "reverse the order of a slice",
      usage: `numbers := []int{1, 2, 3, 4, 5}
sort.Sort(sort.Reverse(sort.IntSlice(numbers)))
fmt.Println(numbers) // Output: [5 4 3 2 1]`,
    },
    {
      option: "sort a slice",
      usage: `numbers := []int{3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5}
sort.Ints(numbers)
fmt.Println(numbers) // Output: [1 1 2 3 3 4 5 5 5 6 9]`,
    },
    // {
    //   option: "sort a custom type slice",
    //   usage: ``,
    // },
  ],
};

export const zhSecondaryOptions: Partial<
  Record<PrimaryOptionKey, Array<Partial<SecondaryOption>>>
> = {
  add: [{}, { option: "到另一个切片的末尾" }],
};
