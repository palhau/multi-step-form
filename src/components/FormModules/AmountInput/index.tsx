import React from 'react';
import { Input } from '../../ui/input';

interface AmountInputProps {
  setAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const AmountInput = ({ setAmount }: AmountInputProps) => {
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(event.target.value);

  return (
    <div className="flex flex-row justify-center items-center">
      <h2 className="mb-2">Insert the Amount: </h2>
      <Input
        className="ml-4 w-40"
        placeholder="Amount"
        type="number"
        onChange={handleAmount}
      />
    </div>
  );
};
