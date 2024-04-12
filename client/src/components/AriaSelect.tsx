import {
  FieldError,
  ListBox,
  SelectProps,
  SelectValue,
  Text,
  ValidationResult,
} from 'react-aria-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SelectButton, SelectMenu, SelectPopover } from '../styles/base';

interface AriaSelectProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function AriaSelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
}: AriaSelectProps<T>) {
  return (
    <SelectMenu>
      {label && <label className="selectLabel">{label}</label>}
      <SelectButton>
        <SelectValue
          style={{
            flexGrow: 1,
            textAlign: 'left',
          }}
        />
        <FaAngleDown className="closed-icon" aria-hidden="true" />
        <FaAngleUp className="open-icon" aria-hidden="true" />
      </SelectButton>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
      <SelectPopover className="selectPopover">
        <ListBox items={items}>{children}</ListBox>
      </SelectPopover>
    </SelectMenu>
  );
}
