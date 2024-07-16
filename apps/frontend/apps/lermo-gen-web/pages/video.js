import React, { useEffect, useState } from 'react';
import HomeTemplate from '@repo/ui/homeTemplate';
import { useDispatch, useSelector } from 'react-redux';
import PromptInput from '@repo/ui/promptInput';
import EnterButton from '@repo/ui/enterButton';
import VideoPlayer from '@repo/ui/videoPlayer';
import ListSuggest from '@repo/ui/listSuggest';

import {
  Layout, Col, Row, Button, Divider
} from 'antd';


const Video = () => {
  const dispatch = useDispatch();

  const onClickSuggestion = (item) => {
  }
  
  const onPromptChange = (e) => {
  }

  const onEnter = () => {
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={19} xl={19}>
          <VideoPlayer src="" type="video/mp4" />
        </Col>
        <Col xs={24} sm={24} md={4} xl={4}>
          <ListSuggest items={[]} onClick={onClickSuggestion} />
        </Col>
      </Row>
      <div style={{ marginBottom: '16px' }}></div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={17} xl={17}>
          <PromptInput onPromptChange={onPromptChange} />
        </Col>
        <Col xs={24} sm={24} md={2} xl={2}>
          <EnterButton onClick={onEnter} />
        </Col>
      </Row>
    </>
  )
}

Video.Layout = HomeTemplate;

export default Video;