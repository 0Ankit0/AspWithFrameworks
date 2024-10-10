import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxDemo = ({ className, label, indicatorClassName, ...props }) => (
    <form>
        <div className="flex items-center">
            <Checkbox.Root
                className={`flex size-[25px] appearance-none items-center justify-center rounded bg-white border border-gray-400 hover:bg-violet3 ${className}`}
                {...props}
            >
                <Checkbox.Indicator className={indicatorClassName || "text-blue-500"}>
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="pl-[15px] mt-3 text-[15px] leading-none" htmlFor="c1">
                {label}
            </label>
        </div>
    </form>
);

export default CheckboxDemo;
