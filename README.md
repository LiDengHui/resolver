# resolver 函数
## 一、简介
resolver 是一个强大的 TypeScript 工具函数，用于处理异步函数的执行结果，统一进行错误处理和结果包装，让您的异步代码更加简洁和可靠。
## 二、安装
使用以下命令通过 NPM 安装：
```shell
npm install @dhl/resolver 
```

### 三、使用示例

```ts
import resolver from 'your-package-name';  // 请替换为实际的包名

// 定义一个异步函数，返回值为字符串，可能抛出错误
const asyncFn = async (input: string): Promise<string> => {
  if (input.length > 5) {
    return input.toUpperCase();
  } else {
    throw new Error(`Input is too short: ${input}`);
  }
};

// 使用 resolver 函数处理 asyncFn 的结果
const wrappedFn = resolver(asyncFn);

// 调用处理后的函数
const [error, data] = await wrappedFn('hello');

if (error) {
  console.error(error.message);
} else {
  console.log(data);
}

```
## 四、API 说明

```ts
resolver<T, E>(fn: (args: any[]) => Promise<T>): (args: any[]) => Promise<[E | null, T | null]>
```

fn：要处理的异步函数，其返回值类型为 T，可能抛出的错误类型为 E。