import * as React from "react";
import * as Popover from "@radix-ui/react-popover";

const PopOver = ({ triggerText, children, className }) => (
    <Popover.Root>
        <Popover.Trigger className={className || 'text-blue-500 underline'}>
            {triggerText}
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className="bg-white p-5 rounded-lg shadow-lg w-64 text-base leading-none text-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-300">
                {children}
                <Popover.Arrow className=" shadow-violet-300  shadow-lg" />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default PopOver;
