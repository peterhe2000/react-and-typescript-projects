import * as React from 'react';
import { CharacterInformation } from './CharacterInformation';
import { CharacterType, fetchCharacter } from './characters';
import { Loading } from './Loading';

type WithCharacterProps = {
  character: CharacterType;
};

// to use type generic feature, compiler does not like =>, need convert it to normal function or use <T,>, prefer normal function
// Generic Type but has to with WithCharacterProps which include character.
function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T> // Use generic, now accept a given react component that you pass in.
) {
  return (props: Omit<T, keyof WithCharacterProps>) => {
    // Props should omit keyof WithCharacterProps which is character
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
    return character && <Component {...(props as T)} character={character} />; // {...(props as T)} tell it to pass props as T to get rid of compiler warning
  };
}

const Application = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

  return (
    <main>
      <CharacterInformationWithCharacter />
      {/* <CharacterInformationWithCharacter character /> this is not going to work since we omit character */}
    </main>
  );
};

export default Application;
