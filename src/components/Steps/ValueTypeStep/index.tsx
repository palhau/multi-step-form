import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Trash2 } from 'lucide-react';
import { ValueTypePicker } from '../../FormModules';

export const ValueTypeStep = () => {
  const [valueType, setValueType] = useState<string>('fixed' || 'percentage');
  const [components, setComponents] = useState<React.ReactNode[]>([]);

  const addComponent = () => {
    setComponents((prevComponents) => [...prevComponents, TypesComponent]);
  };

  const removeComponent = (index: number) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.splice(index, 1);
      return updatedComponents;
    });
  };
  const TypesComponent = <ValueTypePicker setSelection={setValueType} />;
  return (
    <div className="items-center">
      <h2 className="mb-2">Select the Types: </h2>
      {TypesComponent}
      {components.map((component, index) => (
        <div id="index" className="flex flex-row items-center">
          {component}
          <Button
            onClick={() => removeComponent(index)}
            variant={'ghost'}
            className="w-[50px] pl-4 ml-4 text-left font-normal self-center"
          >
            <Trash2 className="ml-auto h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button className="mt-4 ml-0" variant={'link'} onClick={addComponent}>
        + Add More Types
      </Button>
    </div>
  );
};
