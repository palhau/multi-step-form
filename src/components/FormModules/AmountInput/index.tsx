import React from 'react';
import { Input } from '../../ui/input';

interface AmountInputProps {
  setAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const AmountInput = ({ setAmount }: AmountInputProps) => {
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(event.target.value);

  return (
    <div className="flex flex-row justify-start items-center ml-4 mt-4">
      <h2 className="mb-2">Amount: </h2>
      <Input
        className="ml-4 w-40"
        placeholder="Amount"
        type="number"
        onChange={handleAmount}
      />
    </div>
  );
};
