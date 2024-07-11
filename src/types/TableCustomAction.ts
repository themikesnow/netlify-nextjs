import { Icon } from '@app-common-components';

export type CustomAction = {
  disabled?: boolean;
  icon: typeof Icon;
  order: number;
};
export default CustomAction;
