import * as React from 'react';

type TextOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  as?: E;
};

// Take everything as HTML element, omit the things that are in TextOwnProps and then fill in our own TextProps
// Get all the props of that element and then take out everything in TextOwnProps
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps>;

const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';

const defaultElement = 'div';

function Text<E extends React.ElementType = typeof defaultElement>({
  children,
  as,
  ...rest
}: TextProps<E>) {
  const TagName = as || defaultElement; // if has 'as', use as as TagName. Otherwise use defaultElement in this case it is 'div'
  return <TagName>{children}</TagName>;
}

const Application = () => {
  return (
    <main>
      <Text>{exampleText}</Text>
      {/* Trying to support following */}
      {/* <Text as="label" htmlFor="id">{exampleText}</Text> works */}
    </main>
  );
};

export default Application;
