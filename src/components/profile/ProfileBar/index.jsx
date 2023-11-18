import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import ProfileImg from '../../common/ProfileImg';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProfileImgSize = {
  1: '56px',
  2: '72px',
  3: '128px',
};

const ProfileBar = ({
  src,
  username,
  rate,
  existGeneration = false,
  genType,
  genNum,
  existTimeAgo = false,
  createdAt,
  existFollow = false,
  followers,
  followings,
  existFollowBtn = false,
  isFollow,
  existMoreBtn = false,
  profileSize,
  handleOnClickBar,
  handleOnClickFollow,
  handleOnClickDots,
  style,
}) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();

    const timeDifference = currentDate - createdDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let timeAgoString = '';
    if (days > 0) {
      timeAgoString = `${days}일 전`;
    } else if (hours > 0) {
      timeAgoString = `${hours}시간 전`;
    } else if (minutes > 0) {
      timeAgoString = `${minutes}분 전`;
    } else {
      timeAgoString = '방금 전';
    }

    setTimeAgo(timeAgoString);
  }, [createdAt]);

  return (
    <>
      <S.Container style={style}>
        <div onClick={handleOnClickBar}>
          <ProfileImg
            src={src}
            style={{ width: ProfileImgSize[profileSize] }}
          />
        </div>
        <S.Container
          onClick={handleOnClickBar}
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 10px',
          }}
        >
          <BasicText text={username} style={{ font: CS.font.labelSmall }} />
          {existGeneration && (
            <BasicText
              text={`${genType} ${genNum}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
          {existTimeAgo ? (
            <BasicText
              text={`${rate} ･ ${timeAgo}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          ) : (
            <BasicText text={rate} style={{ font: CS.font.paragraphSmall }} />
          )}
          {existFollow && (
            <BasicText
              text={`팔로워 ${followers} 팔로잉 ${followings}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
        </S.Container>
        {existFollowBtn && (
          <BasicButton
            text={isFollow ? '팔로잉' : '팔로우'}
            handleOnClickButton={handleOnClickFollow}
            btnStyle={{
              width: '70px',
              height: '35px',
              borderRadius: '4px',
              backgroundColor: isFollow ? CS.color.primary : CS.color.accent,
            }}
            textStyle={{
              font: CS.font.labelSmall,
              color: CS.color.white,
            }}
          />
        )}
        {existMoreBtn && (
          <S.Container
            onClick={handleOnClickDots}
            style={{
              width: '24px',
            }}
          >
            <BsThreeDotsVertical size="24px" color={CS.color.contentTertiary} />
          </S.Container>
        )}
      </S.Container>
    </>
  );
};

export default ProfileBar;
