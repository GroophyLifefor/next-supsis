# Next-Supsis

![NPM Version](https://img.shields.io/npm/v/next-supsis)

Next-Supsis is a library for Supsis integration with Next.js.

## Installation

You can install the library using npm:

```sh
npm install next-supsis
```

## Usage
Here is an example of how to use the library:

> **Note:** You need to replace `YOUR_SUPSIS_API` with your Supsis API.

```js
// Layout.tsx
import { Supsis } from "next-supsis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Supsis src={"YOUR_SUPSIS_API"} />
      </body>
    </html>
  );
}
```

or if you use javascript

```js
// Layout.jsx
import { Supsis } from "next-supsis";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Supsis src={"YOUR_SUPSIS_API"} />
      </body>
    </html>
  );
}
```