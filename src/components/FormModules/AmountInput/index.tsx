import React, { useState } from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Save } from 'lucide-react';

interface AmountInputProps {
  onSave: (amount: string) => void;
}
export const AmountInput = ({ onSave }: AmountInputProps) => {
  const [amount, setAmount] = useState<string>();
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
      <Button
        onClick={() => amount && onSave(amount)}
        variant={'ghost'}
        className="w-[50px] pl-3 ml-4 text-left font-normal self-center"
      >
        <Save className="ml-auto h-4 w-4" />
      </Button>
    </div>
  );
};
