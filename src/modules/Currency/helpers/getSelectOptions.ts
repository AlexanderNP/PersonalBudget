type optionsType = { value: string; label: string };

export const getSeletOptions = (values: Record<string, number>): optionsType[] =>
  Object.keys(values).map((key) => ({
    value: key,
    label: key,
  }));
