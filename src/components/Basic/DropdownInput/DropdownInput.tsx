"use client";
import { Listbox } from "@headlessui/react";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export interface Options {
  label: string;
  value: string;
}

export interface Props {
  options: Options[];
  selectedOption?: string;
  onChange?: (option: string) => void;
  text?: string;
  className?: string;
}

const DropdownInput = ({
  options,
  selectedOption,
  text,
  onChange,
  className,
}: Props) => {
  const label = useMemo(() => {
    const option = options.find((option) => option.value === selectedOption);

    return option?.label;
  }, [options, selectedOption]);

  return (
    <Listbox
      value={selectedOption}
      as="div"
      className="relative"
      onChange={onChange}
    >
      {
        <>
          <Listbox.Button
            className={twMerge(
              "flex items-center w-[300px] h-10 rounded-xl border p-4 border-primary",
              className,
            )}
          >
            <span className="text-grey-300 flex items-center gap-x-2">
              {text}
              <span className="text-primary font-medium">
                {label ? label : "Select an option"}
              </span>
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute top-12 border border-primary w-full z-20 rounded-xl p-4 bg-primary">
            {options.map((option) => (
              <Listbox.Option key={option.value} value={option.value}>
                {({ active, selected }) => (
                  <div
                    className={twMerge(
                      "pl-5 rounded-md h-8 flex items-center",
                      active && "bg-grey-100 dark:bg-grey-400 cursor-pointer",
                    )}
                  >
                    <div className={twMerge(selected && "font-bold")}>
                      {option.label}
                    </div>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      }
    </Listbox>
  );
};

export default DropdownInput;
