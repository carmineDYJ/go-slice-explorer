type PrimaryOptionKey =
  | "add"
  | "remove"
  | "sort"
  | "find"
  | "iterate"
  | "others";

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
  {
    key: "iterate",
    option: "iterate items",
  },
  {
    key: "others",
    option: "do something else",
  },
];

export const zhPrimaryOptions: Array<PrimaryOption> = [
  {
    key: "add",
    option: "添加元素或切片",
  },
  {
    key: "remove",
    option: "删除元素",
  },
  {
    key: "sort",
    option: "排序",
  },
  {
    key: "find",
    option: "查找元素",
  },
  {
    key: "iterate",
    option: "遍历元素",
  },
  {
    key: "others",
    option: "其他",
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
      option: "find the first index of an element in a slice",
      usage: `nums := []int{1, 5, 3, 4, 5, 6}
target := 5
firstIndex := -1
for i, num := range nums {
&nbsp;&nbsp;if num == target {
&nbsp;&nbsp;&nbsp;&nbsp;firstIndex = i
&nbsp;&nbsp;&nbsp;&nbsp;break
&nbsp;&nbsp;}
}
fmt.Println(firstIndex)`,
      output: `1`,
    },
    {
      option: "find the last index of an element in a slice",
      usage: `nums := []int{1, 5, 3, 4, 5, 6}
target := 5
lastIndex := -1
for i := len(nums) - 1; i >= 0; i-- {
&nbsp;&nbsp;if nums[i] == target {
&nbsp;&nbsp;&nbsp;&nbsp;lastIndex = i
&nbsp;&nbsp;&nbsp;&nbsp;break
&nbsp;&nbsp;}
}
fmt.Println(lastIndex)`,
      output: `4`,
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
  iterate: [
    {
      option: "execute a function for each element in a slice",
      usage: `func forEach(nums []int, f func(int)) {
&nbsp;&nbsp;for _, value := range nums {
&nbsp;&nbsp;&nbsp;&nbsp;f(value)
&nbsp;&nbsp;}
      }

func main() {
&nbsp;&nbsp;nums := []int{1, 2, 3}
&nbsp;&nbsp;forEach(nums, func(x int) { fmt.Println(x) })
}`,
      output: `1
2
3`,
    },
    {
      option: "create a iterator for a slice",
      usage: `type IntSliceIterator struct {
&nbsp;&nbsp;slice []int
&nbsp;&nbsp;index int
}

func (i *IntSliceIterator) Next() int {
&nbsp;&nbsp;if !i.HasNext() {
&nbsp;&nbsp;&nbsp;&nbsp;return -1
&nbsp;&nbsp;}
&nbsp;&nbsp;value := i.slice[i.index]
&nbsp;&nbsp;i.index++
&nbsp;&nbsp;return value
}

func (i *IntSliceIterator) HasNext() bool {
&nbsp;&nbsp;return i.index < len(i.slice)
}

func main() {
&nbsp;&nbsp;nums := []int{1, 2, 3}
&nbsp;&nbsp;iter := &IntSliceIterator{slice: nums, index: 0}
&nbsp;&nbsp;for iter.HasNext() {
&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println(iter.Next())
&nbsp;&nbsp;}
}`,
      output: `1
2
3`,
    },
  ],
  others: [
    {
      option: "find the length of a slice",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
fmt.Println(len(nums))`,
      output: `6`,
    },
    {
      option: "empty a slice",
      usage: `nums := []int{1, 2, 3, 4, 5, 6}
fmt.Println(nums)
nums = nums[:0]
fmt.Println(nums)`,
      output: `[1 2 3 4 5 6]
[]`,
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
    {
      option: "到切片的末尾",
    },
    {
      option: "到切片的开头",
    },
  ],
  remove: [
    {
      option: "移除一个或多个元素",
    },
    {
      option: "移除切片的第一个元素",
    },
    {
      option: "移除切片的最后一个元素",
    },
  ],
  sort: [
    {
      option: "反转切片的顺序",
    },
    {
      option: "对切片进行排序",
    },
  ],
  find: [
    {
      option: "查找切片中是否存在某个元素",
    },
    {
      option: "查找切片中某个元素的第一个索引",
    },
    {
      option: "查找切片中某个元素的最后一个索引",
    },
    {
      option: "查找切片中满足条件的元素",
    },
  ],
  iterate: [
    {
      option: "对切片中的每个元素执行一个函数",
    },
    {
      option: "创建一个切片的迭代器",
    },
  ],
  others: [
    {
      option: "获取切片的长度",
    },
    {
      option: "清空切片",
    },
  ],
};
