import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: [],
  parameters: {
    readme: {
      Component: () => {
        return <div>hello</div>;
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {},
  render() {
    return (
      <>
        <Button primary label="Button" />
      </>
    );
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
