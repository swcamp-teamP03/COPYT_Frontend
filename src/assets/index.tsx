import React from 'react';
import CloseButton from './closeButton.svg';
import Calendar from './Calendar.svg';
import Serch from './Serch.svg';
import Highlight from './highlight.svg';
import Download from './download.svg';
import Exclamation from './exclamation.svg';
import Credit from './credit.svg';
import Question from './question.svg';
import QuestionBox from './questionBox.svg';
import NoneList from './noneList.svg';
import Title from './title.svg';
import NoneCampaign from './noneCampaign.svg';
import NoneCopy from './noneCopy.svg';
import GoCurrent from './goCurrent.svg';
import Up from './up.svg';
import Down from './down.svg';

export const CLIENT_SVG = {
  calender: <Calendar />,
  search: <Serch />,
  highlight: <Highlight />,
  download: <Download />,
};

export const NONE_LIST = <NoneList />;

export const SVG = {
  closeButton: <CloseButton />,
  exclamation: <Exclamation />,
  calendar: <Calendar />,
  credit: <Credit />,
  question: <Question />,
  questionBox: <QuestionBox />,
};

export const HOME = {
  hoem: <Title />,
  noneCampaign: <NoneCampaign />,
  noneCopy: <NoneCopy />,
  goCurrent: <GoCurrent />,
  up: <Up />,
  down: <Down />,
};
