/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler } from 'react';
import { cn } from '../../lib/utils';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface Props {
  className?: string;
  name: string;
  horizontal?: boolean;
  labelTooltip?: string;
  labelText: string;
  showLabel?: boolean; // by default is true
  placeholder?: string;
  style?: object;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextareaGroup: React.FC<Props> = ({
  className,
  name,
  labelText,
  showLabel = true,
  placeholder,
  horizontal = false,
  labelTooltip = '',
  style,
  value,
  onChange,
}) => {
  return (
    <div
      className={cn(
        horizontal ? 'justify-between w-full' : 'flex-col',
        'flex space-y-1.5'
      )}
    >
      {showLabel && (
        <Label
          htmlFor={name}
          className={cn(horizontal ? 'mt-1' : '', 'flex items-center')}
        >
          {labelText}{' '}
          {!!labelTooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11024_1623)">
                      <path
                        d="M6.05992 6.00004C6.21665 5.55449 6.52602 5.17878 6.93322 4.93946C7.34042 4.70015 7.81918 4.61267 8.2847 4.69252C8.75022 4.77236 9.17246 5.01439 9.47664 5.37573C9.78081 5.73706 9.94729 6.19439 9.94659 6.66671C9.94659 8.00004 7.94659 8.66671 7.94659 8.66671M7.99992 11.3334H8.00659M14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004Z"
                        stroke="#98A2B3"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11024_1623">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </Label>
      )}
      <Textarea
        placeholder={placeholder}
        id={name}
        style={{ ...style, height: 118 }}
        value={value}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};
