import { Button } from "@/app/ui/button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: "Click me!"
  },
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
}

export const Primary = {
  args: {
    className: "mt-4",
  }
}