import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const CustomSelect = ({ options, className, itemClassName, defaultValue, ...props }) => {
    const defaultTriggerClass = "inline-flex h-9 items-center justify-center gap-1.5 rounded bg-white px-4 text-sm leading-none text-violet-600 shadow-sm outline-none hover:bg-mauve-300 focus:shadow-outline focus:shadow-black data-[placeholder]:text-violet-400";
    const defaultItemClass = "relative flex h-6 select-none items-center rounded pl-6 pr-9 text-sm leading-none text-violet-600 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-500 data-[disabled]:text-mauve-400 data-[highlighted]:text-violet-100 data-[highlighted]:outline-none";

    return (
        <Select.Root defaultValue={defaultValue} {...props}>
            <Select.Trigger className={className || defaultTriggerClass}>
                <Select.Value />
                <Select.Icon>
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Content className="bg-white">
                <Select.ScrollUpButton className="flex items-center justify-center text-violet-600">
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="bg-white">
                    {options.map((option) => (
                        <Select.Item
                            key={option.value}
                            value={option.value}
                            className={itemClassName || defaultItemClass}
                        >
                            <Select.ItemText>{option.label}</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                                <CheckIcon />
                            </Select.ItemIndicator>
                        </Select.Item>
                    ))}
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center text-violet-600">
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Root>
    );
};

export default CustomSelect;