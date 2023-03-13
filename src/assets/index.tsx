import React from 'react';
import CloseButton from './closeButton.svg';
import Calendar from './Calendar.svg';
import Serch from './serch.svg';
import Highlight from './highlight.svg';
import Plus from './plus.svg';
import Minus from './minus.svg';
import NoneList from './none_list.svg';
import Download from './download.svg';
import Exclamation from './exclamation.svg';
import Credit from './credit.svg';
import Question from './question.svg';
import QuestionBox from './questionBox.svg';
import NoneCampaign from './none_campaign.svg';

export const CLIENT_SVG = {
  calender: <Calendar />,
  serch: <Serch />,
  highlight: <Highlight />,
  noneList: <NoneList />,
  download: <Download />,
};

export const CAMPAIGN_SVG = {
  campaigNone: <NoneCampaign />,
};

export const SVG = {
  closeButton: <CloseButton />,
  exclamation: <Exclamation />,
  calendar: <Calendar />,
  credit: <Credit />,
  question: <Question />,
  questionBox: <QuestionBox />,
};

export const ARITHMETIC = {
  plus: <Plus />,
  minus: <Minus />,
};
