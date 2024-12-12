import React, { ChangeEvent, useState } from 'react';
import { EAttendanceStatus } from '../../Attendance.types';
import * as Styled from './AttendanceStatus.styled';
import { ColoredCheckbox } from '@src/components/ColoredCheckbox';

type AttendanceStatusProps = {
  id: string;
  status: EAttendanceStatus;
};

export const AttendanceStatus = ({ status, id }: AttendanceStatusProps) => {
  const [isChecked, setIsChecked] = useState(status === EAttendanceStatus.attend);

  const onChangeCheckbox =
    (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;

      setIsChecked(checked);
    };

  return (
    <Styled.Container>
      <ColoredCheckbox
        id={`status-${id}`}
        name={`status-${id}`}
        checked={isChecked}
        onChange={onChangeCheckbox}
      />
      <Styled.EditIcon />
    </Styled.Container>
  );
};
