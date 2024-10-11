import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

const RadioGroupComponent = ({ options, name }) => {
    return (
        <RadioGroup.Root className="flex flex-col" name={name}>
            {options.map((option) => (
                <div className="flex items-center mb-2" key={option.value}>
                    <RadioGroup.Item
                        className="w-6 h-6 cursor-pointer rounded-full bg-white shadow-md outline-none hover:bg-primary-light focus:bg-primary-dark"
                        value={option.value}
                        id={option.value}
                    >
                        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full">
                            <div className="w-3 h-3 rounded-full bg-white" />
                        </RadioGroup.Indicator>
                    </RadioGroup.Item>
                    <label
                        className="pl-4 text-base leading-none text-foreground"
                        htmlFor={option.value}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </RadioGroup.Root>
    );
};

export default RadioGroupComponent;
