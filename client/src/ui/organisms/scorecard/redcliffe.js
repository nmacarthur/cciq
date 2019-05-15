import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';
import Button from '../../atoms/button';

import lnpimg from '../../../assets/lnp.svg';
import laborimg from '../../../assets/labor.svg';
import greensimg from '../../../assets/greens.svg';

import scomopdf from '../../../assets/SBIABD_response_PM_Scott_Morrison.pdf';

import { Accordion, AccordionItem } from 'react-light-accordion';
import './style.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Heading, Text } from 'rebass';

const Image = styled.img`
  width: 100%;
`;

const Arrow = styled.div``;

class Scorecard extends Component {
  toggle(accordion, udid) {
    console.log(accordion);
    console.log(udid);
  }
  render() {
    return (
      <div>
        <Section backgroundColor={this.props.backgroundColor} space={2}>
          <Container>
            <Row alignItems="center" justifyContent="center">
              <Column sm={12} md={10} textAlign="center">
                <a href={scomopdf} target="_blank">
                  <Button>PM Scott Morrison’s reply to SBIABD</Button>
                </a>
              </Column>
            </Row>
          </Container>
        </Section>
        <Section backgroundColor={this.props.backgroundColor} space={2}>
          <Container>
            <Row alignItems="center" justifyContent="center">
              <Column sm={12} md={10} textAlign="center">
                <Heading>Learn more about your Petrie candidates</Heading>
                <p>
                  <a target="_blank" href="https://www.liberal.org.au/member/luke-howarth">
                    Luke Howarth – LNP
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.alp.org.au/our-people/our-people/corinne-mulholland/"
                  >
                    Corinne Mulholland – ALP
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.unitedaustraliaparty.org.au/candidates/troy-hopkins/"
                  >
                    Troy Hopkins – United Australia Party
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.onenation.org.au/our-team/nikhil-aai-reddy-petrie/"
                  >
                    Nikhil Aai Reddy – One Nation
                  </a>
                </p>
                <p>
                  <a target="_blank" href="https://www.conservativenationalparty.org/petrie">
                    Neville John Fowler - Fraser Anning’s Conservative National Party
                  </a>
                </p>
                <p>
                  <a target="_blank" href="https://greens.org.au/qld/person/jason-kennedy">
                    Jason Kennedy – The Greens
                  </a>
                </p>
              </Column>
            </Row>
          </Container>
        </Section>
      </div>
    );
  }
}

const Content1 = () => (
  <div>
    <p>
      Labor intends on legislating to increase some wages and give unions more bargaining power. The
      LNP is taking a small target strategy by proposing no major reforms in this area.
    </p>
    <Tabs>
      <TabList>
        <Tab>
          <Image src={lnpimg} />
          <Arrow className="arrow" />
        </Tab>
        <Tab>
          <Image src={laborimg} />
          <Arrow className="arrow" />
        </Tab>
        <Tab>
          <Image src={greensimg} />
          <Arrow className="arrow" />
        </Tab>
      </TabList>

      <TabPanel>
        <ul>
          <li>
            Stop workers who were misclassified as casuals from “double dipping” (i.e. getting
            casual loadings and permanent worker entitlements)
          </li>
          <li>
            Accept the independence of the Fair Work Commission and will not reverse its decision to
            cut penalty rates
          </li>
          <li>Allow regular casuals to request to be put on permanent</li>
          <li>
            Give the Federal Court the power to deregister unions for repeated serious breaches of
            the law
          </li>
          <li>
            Prevent enterprise agreements from requiring workers to pay super into any one fund
          </li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          Many small businesses employers believe Fair Work laws are already stacked against them.
          The LNP has resisted major reforms to the system over the past five years, fearful of the
          kind of union campaign which helped topple the Howard Government.
        </p>
      </TabPanel>
      <TabPanel>
        <ul>
          <li>
            Make the Fair Work Commission justify minimum wages against the national median wage{' '}
          </li>
          <li>Amend laws to increase union-based wage bargaining</li>
          <li>Raise childcare worker pay through an act of parliament</li>
          <li>
            Legislate to reverse the Commission’s decision to cut Sunday and public penalty rates
            for retail and hospitality workers
          </li>
          <li>
            Prevent the use of labour hire as a way of paying workers less by legislating that
            workers employed through labour hire receive the same pay and conditions as people
            employed directly
          </li>
          <li>Require larger businesses to declare their gender wage gap</li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          In several of its policies, the Labor Party is intervening to set wages and dismiss
          market-based approaches. Small business owners will be particularly affected if there are
          sharp increases in minimum wages and penalty rates. Wage costs are likely to rise across
          the board as Labor’s system favours union-based bargaining instead of enterprise-level
          agreements and modern awards.
        </p>
      </TabPanel>
      <TabPanel>
        <ul>
          <li>
            Allow for multi-enterprise industrial action and end the fining of unions for striking
          </li>
          <li>Increase penalty rates</li>
          <li>Implement a minimum wage of at least 60% of the national median wage</li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          The Greens will legislate to raise the minimum wage across all industries. This means that
          many small businesses employing workers on the minimum wage will likely have no choice but
          to cut jobs, with young and unskilled workers being the worst hit.
        </p>
      </TabPanel>
    </Tabs>
  </div>
);
const Content2 = () => (
  <div>
    <p>
      No concrete policies for immediate hip pocket relief have been proposed by the major parties.
      Labor is promising more money to cut more carbon emissions, but has failed to say what its
      energy policies will cost Australians. The LNP’s target is lower so its policies will most
      likely cost less to implement.
    </p>
    <Tabs>
      <TabList>
        <Tab>
          <Image src={lnpimg} />
          <Arrow className="arrow" />
        </Tab>
        <Tab>
          <Image src={laborimg} />
          <Arrow className="arrow" />
        </Tab>
        <Tab>
          <Image src={greensimg} />
          <Arrow className="arrow" />
        </Tab>
      </TabList>

      <TabPanel>
        <ul>
          <li>
            Since Malcolm Turnbull’s failed National Energy Guarantee (NEG) policy which was going
            to regulate the electricity sector in order to lower emissions and ensure supply, the
            LNP have failed to announce an overarching energy policy that addresses emissions and
            electricity prices
          </li>
          <li>
            What the LNP has promised is a $2bn “climate solutions package”, most of which funds
            businesses’ carbon reduction projects, to cut emissions by 27%
          </li>
          <li>
            The LNP committed late in the campaign to a “price target”, promising to pressure energy
            producers and retailers to bring down power bills by 25%
          </li>
          <li>
            Under pressure from the Nationals, Morrison has said he will underwrite the upgrade of
            one coal-fired power station in NSW, and commission a report to see if a new coal plan
            for north Queensland stacks up
          </li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          Energy policy destroyed previous LNP governments and the current LNP government could meet
          the same fate. Philosophical differences within the Coalition have prevented them from
          adopting a national plan to increase energy investment and build supply to bring about
          cheaper prices for business customers.
        </p>
      </TabPanel>
      <TabPanel>
        <ul>
          <li>Labor will use the main elements of the NEG to achieve a 45% emission cut by 2030</li>
          <li>
            Labor is proposing stricter vehicle emissions standards on car retailers, which means
            car dealers will have to sell more low-emission cars to offset emissions from
            high-emission vehicles
          </li>
          <li>
            Labor wants electric vehicles to make up half of all new car sales by 2030 and it will
            allow businesses to claim deductions on electric cars worth more than $20,000
          </li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          Labor has adopted amped-up versions of Coalition energy policy to avoid any speculation of
          an economy-wide carbon tax. Bill Shorten is promising more action to cut carbon, but his
          reluctance or inability to talk about how much it will cost to meet his ambitious goals
          has become a major issue in this election. Small businesses need to know how much Labor
          will need to increase taxes or how much higher power prices will rise if emissions are cut
          faster.
        </p>
      </TabPanel>
      <TabPanel>
        <ul>
          <li>
            Will put a price on carbon pollution by setting up a national emissions trading scheme
          </li>
          <li>Shut down all coal-fired power stations and stop exporting thermal coal by 2030</li>
          <li>Ban petrol cars by 2030</li>
          <li>Ban future natural gas exploration</li>
          <li>
            Impose a 17% tax on “luxury fossil fuel cars” to help pay for registration and tax
            breaks on electric cars
          </li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          With an ambitious energy policy that will effectively shut down an entire resource
          industry in Queensland, small firms and communities which depend on Queensland’s coal
          industry will need to reconsider their futures.
        </p>
      </TabPanel>
    </Tabs>
  </div>
);
const Content3 = () => (
  <div>
    <p>
      Both major parties have made serious commitments to upskill Australia’s workforce. With
      Labor’s plans to increase tax on big business and take away tax concessions from companies,
      family trusts, independent retirees and property investors, Labor will have the budget to
      spend a considerably higher amount than the LNP on vocational education.
    </p>
    <Tabs>
      <TabList>
        <Tab>
          <Image src={lnpimg} />
          <Arrow className="arrow" />
        </Tab>
        <Tab>
          <Image src={laborimg} />
          <Arrow className="arrow" />
        </Tab>
        <Tab>
          <Image src={greensimg} />
          <Arrow className="arrow" />
        </Tab>
      </TabList>

      <TabPanel>
        <ul>
          <li>
            $525m ($55m more than what is in the current budget) to achieve 80,000 new apprentices
            in areas with skill shortages, which includes doubling employer incentive payments and a
            $2,000 payment to new apprentices
          </li>
          <li>
            A two-year freeze on growth of funding for commonwealth supported places in university,
            saving $2bn
          </li>
          <li>Review into performance funding for universities</li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          The LNP has presided over a 300,000 drop in government supported apprentices and TAFE
          places over the past five years. Its election commitment does not go far enough to meet
          the shortfall. There is a common view among Queensland business owners that universities
          are not delivering value for money, so the review into this sector is welcome.
        </p>
      </TabPanel>
      <TabPanel>
        <ul>
          <li>200,000 more government funded university places by unfreezing government grants</li>
          <li>
            A $1bn package for TAFE and vocational education including $200m for facilities, $380m
            to create 100,000 fee-free places, and $330m to deliver 150,000 apprenticeship subsidies
            in areas with skill shortages
          </li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          While Queensland’s small businesses tend to think universities are over-funded relative to
          vocational education, Labor’s promise of funded apprenticeships and fee-free TAFE places
          dwarfs the LNP’s commitment. Unfortunately, small business owners will make up a large
          portion of the groups who will fund the extra education investment through higher tax.
        </p>
      </TabPanel>
      <TabPanel>
        <ul>
          <li>Free undergraduate university and TAFE, and a 10% increase in university funding</li>
        </ul>
        <p>
          <b>Comments:</b>
        </p>
        <p>
          The Greens intend on making education free through higher royalties on gas and fossil fuel
          companies. Small business operators overwhelmingly reject the idea of free tertiary
          education and vocational training, saying it leads to an excess of university graduates
          and a shortage of blue-collar talent.
        </p>
      </TabPanel>
    </Tabs>
  </div>
);

export default Scorecard;
