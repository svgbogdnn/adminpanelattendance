import { Container } from '@src/components/Container';
import { PrimaryTable } from '@src/components/PrimaryTable';
import React, { useState } from 'react';
import { columns, tableValues } from './Courses.constants';
import * as Styled from './Courses.styled';
import { SecondaryButton } from '@src/components/SecondaryButton';
import { Modal } from '@src/components/Modal';
import { AddCourse } from './components/AddCourse';
export const Courses = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <Container>
      <PrimaryTable data={tableValues} columns={columns} />
      <Styled.Footer>
        <SecondaryButton title='+ Добавить курс' onClick={()=>{setModalActive(true)}}/>
      </Styled.Footer>
      <Modal 
        isActive={modalActive} 
        setActive={setModalActive}
      >
        <AddCourse setActive={setModalActive}/>
      </Modal>
    </Container>
  )
}