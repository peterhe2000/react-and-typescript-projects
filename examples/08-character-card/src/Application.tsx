import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);

  React.useEffect(() => {
    fetchCharacter().then((c) => {
      setCharacter(c);
    });
  }, []);

  return (
    <main>
      {character ? <CharacterInformation character={character} /> : <Loading />}
    </main>
  );
};

export default Application;
