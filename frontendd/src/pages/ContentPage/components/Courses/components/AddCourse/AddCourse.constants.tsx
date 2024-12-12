import { TableProps } from "antd";
import { ThemeTableValue } from "./AddCourse.types";
import { ThemeTime } from "./components/ThemeTime";

export const columns: TableProps<ThemeTableValue>['columns'] = [
  {
    title: 'Тема',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
  {
    title: 'Аудитория',
    dataIndex: 'room',
    key: 'room',
    align: 'center',
  },
  {
    title: 'Время',
    dataIndex: 'time',
    key: 'time',
    align: 'center',
    render: (_, { time }) => <ThemeTime time={time} />,
  },
];

export const tableValues: ThemeTableValue[] = [
  {
    key: '1',
    name: '1. Повторение/изучение Python',
    date: '01.01.2021',
    room: 'Б-3',
    time: '18:00',
  },
];
