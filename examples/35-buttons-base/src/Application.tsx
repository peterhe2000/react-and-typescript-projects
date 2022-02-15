type ButtonProps = {
  children: string;
};

type PrimaryButtonProps = ButtonProps & {
  primary: boolean;
  secondary?: never; // never is absolute this this property should be set, no matter what
  destructive?: never;
};
type SecondaryButtonProps = ButtonProps & {
  secondary: boolean;
  primary?: never;
  destructive?: never;
};
type DestructiveButtonProps = ButtonProps & {
  destructive: boolean;
  secondary?: never;
  primary?: never;
};

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const Button = ({
  children,
  primary = false,
  secondary = false,
  destructive = false
}: PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

//<Button primary>Primary</Button> in react any prop is passed in without an equal sign, it just a boolean and it's true eg: primary
const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
      {/* Trying to support following */}
      {/* <Button primary secondary>Primary</Button> */}
    </main>
  );
};

export default Application;
