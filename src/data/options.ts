//TODO add enum for option key, -1 for no option, -2 for primary independent option, etc.

type PrimaryOptionKey = "add" | "remove" | "sort" | "find";

// ignore prettier below
export type PrimaryOption = {
  key: PrimaryOptionKey;
  option: string;
};

export type SecondaryOption = {
  option: string;
  usage: string;
  output: string;
};

export enum OptionIndexStatus {
  HasOption = 0,
  NoOption = -1,
}

export const enPrimaryOptions: Array<PrimaryOption> = [
  {
    key: "add",
    option: "add elements",
  },
  {
    key: "remove",
    option: "remove elements",
  },
  {
    key: "sort",
    option: "order a slice",
  },
  {
    key: "find",
    option: "find elements",
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
      option: "add to a specific position of another slice",
      usage: `nums := []int{1, 5, 6}
index := 1
a := 4
nums = append(nums[:index], append([]int{a}, nums[index:]...)...)
fmt.Println(nums)
b := []int{2, 3}
nums = append(nums[:index], append(b, nums[index:]...)...)
fmt.Println(nums)`,
      output: `[1 4 5 6]
[1 2 3 4 5 6]`,
    },
    {
      option: "add to the end of another slice",
      usage: `nums := []int{1, 2, 3}
a := 4
nums = append(nums, a)
fmt.Println(nums)
b := []int{5, 6}
nums = append(nums, b...)
fmt.Println(nums)`,
      output: `[1 2 3 4]
[1 2 3 4 5 6]`,
    },
    {
      option: "add to the front of another slice",
      usage: `nums := []int{4, 5, 6}
a := 3
nums = append([]int{a}, nums...)
fmt.Println(nums)
b := []int{1, 2}
nums = append(b, nums...)
fmt.Println(nums)`,
      output: `[3 4 5 6]
      [1 2 3 4 5 6]`,
    },
  ],
  remove: [
    {
      option: "remove one or more elements from a slice",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
index := 2
count := 2
nums = append(nums[:index], nums[index+count:]...)
fmt.Println(nums)`,
      output: `[1 2 5 6]`,
    },
    {
      option: "remove the first element from a slice",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
nums = nums[1:]
fmt.Println(nums)`,
      output: `[2 3 4 5 6]`,
    },
    {
      option: "remove the last element from a slice",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
nums = nums[:len(nums)-1]
fmt.Println(nums)`,
      output: `[1 2 3 4 5]`,
    },
  ],
  sort: [
    {
      option: "reverse the order of a slice",
      usage: `nums := []int{1, 2, 3, 4, 5}
sort.Sort(sort.Reverse(sort.IntSlice(nums)))
fmt.Println(nums)`,
      output: `[5 4 3 2 1]`,
    },
    {
      option: "sort a slice",
      usage: `nums := []int{3, 1, 4, 1, 5, 9}
sort.Ints(nums)
fmt.Println(nums)`,
      output: `[1 1 3 4 5 9]`,
    },
    // {
    //   option: "sort a custom type slice",
    //   usage: ``,
    // },
  ],
  find: [
    {
      option: "find out whether an element exists in a slice",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
target := 5
for _, num := range nums {
&nbsp;&nbsp;if num == target {
&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println(true)
&nbsp;&nbsp;&nbsp;&nbsp;return
&nbsp;&nbsp;}
}
fmt.Println(false)`,
      output: `true`,
    },
    {
      option: "",
      usage: ``,
      output: ``,
    },
    {
      option: "find elements based on a condition",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
var result []int
for _, num := range nums {
&nbsp;&nbsp;if num > 3 {
&nbsp;&nbsp;&nbsp;&nbsp;result = append(result, num)
&nbsp;&nbsp;}
}
fmt.Println(result)`,
      output: `[4 5 6]`,
    },
  ],
};

export const zhSecondaryOptions: Partial<
  Record<PrimaryOptionKey, Array<Partial<SecondaryOption>>>
> = {
  add: [
    {
      option: "到切片的指定位置",
    },
  ],
};
