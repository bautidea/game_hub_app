import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  handleSearch: (searchText: string) => void;
}

const SearchInput = ({ handleSearch }: Props) => {
  // To access the value in the input we can use a ref hook or a state hook, but because
  // we have a single form with a single input field, its easier to use the ref hook.
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) handleSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        {/* We need to associate the ref object with the input component */}
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filler"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
