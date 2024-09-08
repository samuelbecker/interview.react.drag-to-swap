This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Popsa.com - React Frontend test skeleton

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

I opted to use the third-party library [@dnd-kit](https://docs.dndkit.com/), which supports touchscreen devices and provides accessibility guidelines for making drag-and-drop interfaces more usable with keyboards and screen readers.

The @dnd-kit library has a sortable preset, which I thought was perfect for the task.

Understanding the library and what it can do took me a while. If I had more time, I would have looked into the following:

* Adding test coverage for the `handleDragEnd` function
* Replicating select and drop animations to match the mobile app
* Look into why droppable areas sometimes aren't reaching the edges of the photo
* Enhancing keyboard and screen reader support
---

<sup>Popsa.com</sup>