import gclogo from '../assets/gclogo.png';
import redcliffelogo from '../assets/rlogo.svg';
import toowoombalogo from '../assets/tclogo.svg';
import mackaylogo from '../assets/mclogo.svg';
import cclogo from '../assets/cclogo.png';

import mackayplaceholder1 from '../assets/mackayvideo.jpg';
import placeholderplaceholder from '../assets/video_placeholder.jpg';

const content = {
  Queensland: {
    mp: 'Our Nation’s leaders',
    //email: 'scott.morrison.mp@aph.gov.au',
    email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/CCIQLD/',
    auth: 'Authorised by C.Fruk, 375 Wickham Terrace, Brisbane QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      },
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      },
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      }
    ]
  },
  GoldCoast: {
    mp: 'Steve Ciobo MP',
    //email: 'steven.viobo.mp@aph.gov.au',
    email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/GoldCoastCentral/',
    logo: gclogo,
    auth: 'Authorised by M.Hall, Robina, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      }
    ]
  },
  Mackay: {
    mp: 'George Christensen MP',
    //email: 'George.christensen.mp@aph.gov.au',
    email: 'elliot@newwordorder.com.au',
    fb: 'https://www.facebook.com/mackayregionchamberofcommerce/',
    logo: mackaylogo,
    auth: 'Authorised by V.Gracie, Mackay, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/XvrPgID1GyY',
        placeholder: mackayplaceholder1
      }
    ]
  },
  Redcliffe: {
    mp: 'Luke Howarth MP',
    //email: 'luke.howarth.mp@aph.gov.au',
    email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/RedcliffeCityChamberofCommerce/',
    logo: redcliffelogo,
    auth: 'Authorised by B.Flynn, Redcliffe, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      }
    ]
  },
  Toowoomba: {
    mp: 'John McVeigh MP',
    //email: 'john.mcveigh.mp@aph.gov.au',
    email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/ToowoombaChamber/',
    logo: toowoombalogo,
    auth: 'Authorised by J.Sheppard, Toowoomba, QLD.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      }
    ]
  },
  Cairns: {
    mp: 'Warren Entsch MP',
    //email: 'warren.entsch@aph.gov.au',
    email: 'nicholas@newwordorder.com.au',
    fb: 'https://www.facebook.com/CairnsChamber',
    logo: cclogo,
    auth: 'Authorised by D. Bender, Cairns Chamber of Commerce, The Pier, Cairns Qld 4870.',
    videos: [
      {
        src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        placeholder: placeholderplaceholder
      }
    ]
  }
};

export default content;
