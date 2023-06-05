import { Label } from '../../ui/label';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';

interface ValueTypePickerProps {
  setSelection: React.Dispatch<React.SetStateAction<string>>;
}
export const ValueTypePicker = ({ setSelection }: ValueTypePickerProps) => {
  return (
    <div className="flex flex-col">
      <h2>Select the Value Type: </h2>
      <RadioGroup
        onValueChange={(value) => setSelection(value)}
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
  );
};
