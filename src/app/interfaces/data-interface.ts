import { CardSettingsInterface } from './card-setting-interface';
import { TaskInterface } from '../interfaces/task-interface';
export interface DataInterface {
  Users: CardSettingsInterface;
  Tasks: TaskInterface[];
  Groups: Object[];
};