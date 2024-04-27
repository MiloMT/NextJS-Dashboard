import { Button } from "@/app/ui/button";

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const LoginButton = Template.bind({})
LoginButton.args = {
  className: "mt-4 w-full",
  children: "Log in",
}