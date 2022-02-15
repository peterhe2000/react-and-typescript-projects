import * as React from 'react';

// React React.ElementType is type for general HTML element
type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  as?: E;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const defaultElement = 'button';

const Button<E extends React.ElementType = typeof defaultElement> ({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as
}: ButtonProps) => {
  const classNames = createClassNames({ primary, secondary, destructive });
const TagName = as || defaultElement;

  return <TagName className={classNames}>{children}</TagName>;
};

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button> 
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
      {/* Trying to support following */}
      {/* <Button primary as="a" href="/">Primary</Button>  */}
    </main>
  );
};

export default Application;
