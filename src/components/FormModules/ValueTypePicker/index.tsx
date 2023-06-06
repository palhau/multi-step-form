import { useState } from 'react';
import { Label } from '../../ui/label';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { Button } from '../../ui/button';
import { Save } from 'lucide-react';

interface ValueTypePickerProps {
  onSave: (type: string) => void;
}
export const ValueTypePicker = ({ onSave }: ValueTypePickerProps) => {
  const [valueType, setValueType] = useState<string>('fixed' || 'percentage');
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start mb-4 ml-4">
        <h2 className="items-start mb-2">Type: </h2>
        <RadioGroup
          onValueChange={(value) => setValueType(value)}
          defaultValue="fixed"
          className="ml-4 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fixed" id="fixed" />
            <Label htmlFor="fixed">Fixed</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="percentage" id="percentage" />
            <Label htmlFor="percentage">Percentage</Label>
          </div>
        </RadioGroup>
      </div>
      <Button
        onClick={() => valueType && onSave(valueType)}
        variant={'ghost'}
        className="w-[50px] pl-3 ml-4 text-left font-normal self-center"
      >
        <Save className="ml-auto h-4 w-4" />
      </Button>
    </div>
  );
};
