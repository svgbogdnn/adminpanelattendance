import { TableProps } from "antd";
import { CoursesTableValue, ECourseStatus } from "./Courses.types";
import { CourseActions } from "./components/CourseActions";

export const mapCourseStatus = new Map<ECourseStatus, string>([
  [ECourseStatus.active, 'Активный'],
  [ECourseStatus.inactive, 'Неактивный'],
]);


export const columns: TableProps<CoursesTableValue>['columns'] = [
  {
    title: 'Название курса',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: 'Количество участникав',
    dataIndex: 'participantsCount',
    key: 'participantsCount',
    align: 'center',
  },
  {
    title: 'Дата начала',
    dataIndex: 'dateStart',
    key: 'dateStart',
    align: 'center',
  },
  {
    title: 'Дата окончания',
    dataIndex: 'dateEnd',
    key: 'dateEnd',
    align: 'center',
  },
  {
    title: 'Статус',
    key: 'status',
    dataIndex: 'status',
    align: 'center',
    render: (_, { status }) => mapCourseStatus.get(status),
  },
  {
    title: '',
    key: 'info',
    dataIndex: 'info',
    align: 'center',
    width: '20%',
    render: () => <CourseActions />,
  },
];

export const tableValues: CoursesTableValue[] = [
  {
    key: '1',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '2',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '3',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '4',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '5',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '6',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '7',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '8',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
  {
    key: '9',
    name: 'Название предмета',
    participantsCount: '100',
    dateStart: '12.12.2024',
    dateEnd: '21.12.2024',
    status: ECourseStatus.active,
    info: '',
  },
];