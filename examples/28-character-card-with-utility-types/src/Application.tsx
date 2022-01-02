import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

type WithCharacterProps = {
  character: CharacterType;
};

// use function declaration is better for typing of generic since this component can be reuse withAnyComponentWant use character.
function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T>
) {
  // props component that originally took and omitting those we know we are going to pass in.
  return (props: Omit<T, keyof WithCharacterProps>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;
    // ...(props as T) tell generic component any props passed in is fine
    return <Component {...(props as T)} character={character} />;
  };
}

const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

const Application = () => {
  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};

export default Application;
