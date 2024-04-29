'use client';

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

type Props = {
  label: string;
  options: {
    id: string;
    name: string;
  }[];
  selected: (id: string) => void;
}

export function Selector({ label, options, selected }: Props) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <Select onValueChange={
      (value) => {
        setSelectedValue(options.find((option) => option.id === value)?.name || null);
        selected(value);
      }
    }>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select">{selectedValue || label}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.id}
              value={option.id}
            >
              <SelectLabel>{option.name}</SelectLabel>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
