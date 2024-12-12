export enum ECourseStatus {
  active = 'active',
  inactive = 'inactive',
}

export type CoursesTableValue = {
  key: string;
  name: string;
  participantsCount: string;
  dateStart: string;
  dateEnd: string;
  status: ECourseStatus;
  info: string;
};
