import React from 'react';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import styled from 'styled-components';

// const Container = styled.div`
//   border-bottom: 1px solid var(--color-border-transparent);
// `;

function EmptyIntro({ text, onClickButton, type }) {
  return (
    <>
      <BasicText
        text={text}
        color="var(--color-content-secondary)"
        size="12px"
        style={{
          marginTop: 12,
        }}
      />

      <BasicButton
        text={type === 'skill' ? '+ 스킬 추가' : '+ 링크 추가'}
        textStyle={{ fontColor: 'var(--color-black)', fontSize: '10px' }}
        btnStyle={{
          backgroundColor: 'var(--color-white)',
          width: '90px',
          height: '20px',
          radius: '10px',
          border: '1px solid var(--color-border-transparent)',
          marginTop: 12,
        }}
        onClick={onClickButton}
      />
    </>
  );
}

export default EmptyIntro;
