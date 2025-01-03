'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sortTypes } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

const Sort = () => {
  const router = useRouter();
  const path = usePathname();
  const handleSrort = (value: string) => {
    router.push(`${path}?sort=${value}`);
  };
  return (
    <Select
      onValueChange={handleSrort}
      defaultValue={sortTypes[0].value}
    >
      <SelectTrigger className="sort-select">
        <SelectValue placeholder={sortTypes[0].value} />
      </SelectTrigger>
      <SelectContent className="sort-select-content">
        {sortTypes.map((sortType) => (
          <SelectItem
            key={sortType.label}
            className="shad-select-item"
            value={sortType.value}
          >
            {sortType.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
