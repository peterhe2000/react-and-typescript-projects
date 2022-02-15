import { useState } from 'react';

type TextProps = {
  children: string;
};

type NoTruncateTextProps = TextProps & { truncate?: false };
type TruncateTextProps = TextProps & { truncate: true; expanded?: boolean };

const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';

const truncateString = (string: string, length = 100) =>
  string.slice(0, length) + '…';

// function overload does not support arrow function too
// Three variant of Text function which allow
// 1. Optional truncate, Optional expanded
// 2. truncate is set to false
// 3. if truncate is true (cant optional), expanded is optional (if truncate is not exist, this function cant take expand)
function Text(props: NoTruncateTextProps): JSX.Element;
function Text(props: TruncateTextProps): JSX.Element;
function Text({
  children,
  truncate = false,
  expanded = false
}: TextProps & { truncate?: boolean; expanded?: boolean }) {
  const shouldTruncate = truncate && !expanded;
  return (
    <div aria-expanded={!!expanded}>
      {shouldTruncate ? truncateString(children) : children}
    </div>
  );
}

const Application = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <main>
      <Text truncate expanded={expanded}>
        {exampleText}
      </Text>
      <section style={{ marginTop: '1em' }}>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Contract' : 'Expand'}
        </button>
      </section>
    </main>
  );
};

export default Application;
