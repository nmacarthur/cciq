import gclogo from '../assets/gclogo.png';
import redcliffelogo from '../assets/rlogo.svg';
import toowoombalogo from '../assets/tclogo.svg';
import mackaylogo from '../assets/mclogo.svg';
import cclogo from '../assets/cclogo.png';

import mackayplaceholder1 from '../assets/mackayvideo.jpg';
import mackayplaceholder2 from '../assets/mackayvideo2.jpg';
import placeholderplaceholder from '../assets/video-ph.jpg';
import cairnsplaceholder1 from '../assets/cairnsvideo.jpg';
import gcplaceholder1 from '../assets/goldcoastvideo.jpg';
import redcliffeplaceholder1 from '../assets/redcliffevideo.jpg';
import twplaceholder1 from '../assets/twvideo.jpg';

const content = {
  Queensland: {
    mp: 'Our Nation’s leaders',
    email: 'scott.morrison.mp@aph.gov.au',
    //email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/CCIQLD/',
    auth: 'Authorised by C.Fruk, 375 Wickham Terrace, Brisbane QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder,
        text: ''
      },
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder,
        text: ''
      },
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder,
        text: ''
      }
    ]
  },
  GoldCoast: {
    mp: 'Steve Ciobo MP',
    email: 'steven.viobo.mp@aph.gov.au',
    //email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/GoldCoastCentral/',
    logo: gclogo,
    auth: 'Authorised by M.Hall, Robina, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/s16EK-EPh7k',
        placeholder: gcplaceholder1,
        text: 'Small Business is a Big Deal on the Gold Coast'
      }
    ]
  },
  Mackay: {
    mp: 'George Christensen MP',
    email: 'George.christensen.mp@aph.gov.au',
    //email: 'elliot@newwordorder.com.au',
    fb: 'https://www.facebook.com/mackayregionchamberofcommerce/',
    logo: mackaylogo,
    auth: 'Authorised by V.Gracie, Mackay, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/bJeMESlENis',
        placeholder: mackayplaceholder1,
        text: 'Small Business is a Big Deal in Mackay'
      },
      {
        src: 'https://www.youtube.com/embed/gKIRuSlrVWw',
        placeholder: mackayplaceholder2,
        text: 'RedHotBlue in Mackay - Small Business is a Big Deal'
      },
      {
        src: 'https://www.youtube.com/embed/oB6x1o4dIXA',
        placeholder: placeholderplaceholder,
        text: 'Gary from Mackay - Small Business is a Big Deal'
      },
      {
        src: 'https://www.youtube.com/embed/83GejUgozaE',
        placeholder: placeholderplaceholder,
        text: 'Michelle from Mackay - Small Business is a Big Deal'
      },
      {
        src: 'https://www.youtube.com/embed/YGJC1JmfZuk',
        placeholder: placeholderplaceholder,
        text: 'Sarah from Mackay - Small Business is a Big Deal'
      },
      {
        src: 'https://www.youtube.com/embed/iZZDVXRRtzo',
        placeholder: placeholderplaceholder,
        text: 'Scott from Mackay - Small Business is a Big Deal'
      }
    ]
  },
  Redcliffe: {
    mp: 'Luke Howarth MP',
    email: 'luke.howarth.mp@aph.gov.au',
    //email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/RedcliffeCityChamberofCommerce/',
    logo: redcliffelogo,
    auth: 'Authorised by B.Flynn, Redcliffe, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/-GTfT6C5av0',
        placeholder: redcliffeplaceholder1,
        text: 'Small Business is a Big Deal in Redcliffe'
      }
    ]
  },
  Toowoomba: {
    mp: 'John McVeigh MP',
    email: 'john.mcveigh.mp@aph.gov.au',
    //email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/ToowoombaChamber/',
    logo: toowoombalogo,
    auth: 'Authorised by J.Sheppard, Toowoomba, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/3kwm46pnUxE',
        placeholder: twplaceholder1,
        text: 'Small Business is a Big Deal in Toowoomba'
      }
    ]
  },
  Cairns: {
    mp: 'Warren Entsch MP',
    email: 'warren.entsch@aph.gov.au',
    //email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/CairnsChamber',
    logo: cclogo,
    auth: 'Authorised by D. Bender, Cairns Chamber of Commerce, The Pier, Cairns Qld 4870.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/bjE7NKbqUgw',
        placeholder: cairnsplaceholder1,
        text: 'Small Business is a Big Deal in Cairns'
      }
    ]
  }
};

export default content;
