import React, { useState } from 'react';
import type {NextPage} from 'next'
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
// import CloseIcon from './CloseIcon';
// import { EnvVars } from 'env';
// import useEscClose from 'hooks/useEscKey';
// import MailchimpSubscribe, { DefaultFormFields } from 'react-mailchimp-subscribe';
import Container from './Container';
import Input from './Input';
// import MailSentState from './MailSentState';
// import Overlay from './Overlay';
// import Navbar from './Navbar';
// import { NavItems } from 'types';
import BoardingPass from './BoardingPass';
import OverTitle from 'components/OverTitle';

export interface NewsletterModalProps {
  onClose: () => void;
}

export default function Form() {
  const [email, setEmail] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>, enrollNewsletter: (props: DefaultFormFields) => void) {
    event.preventDefault();
    console.log({ email });
    if (email) {
      enrollNewsletter({ EMAIL: email });
    }
  }

//   const navItems: NavItems = [
//     { title: 'Generate Now', href: '/ticket-generator', outlined: true },
//     { title: 'Blog', href: '/pricing' },
//     { title: 'Contact', href: '/contact' }
//     // { title: 'Sign up', href: '/sign-up', outlined: true },
//   ];

  return (

            <HomepageWrapper>
                <FormWrapper>
                <FormContainer>
                        {/* <Title>Enter your flight details</Title> */}
                        <CustomOverTitle>Flight Details</CustomOverTitle>
                        <Row>
                            <CustomInput
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                placeholder="From"
                                required
                            />
                            <CustomInput
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                placeholder="To"
                                required
                            />
                        </Row>
                        <Row>
                            <CustomInputFull
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                placeholder="Journey Date"
                                required
                            />
                        </Row>
                        <Row>
                          <CustomButton as="button" type="submit">
                              Submit
                          </CustomButton>
                        </Row>
                </FormContainer>
                <BoardingPass />
                </FormWrapper>
            </HomepageWrapper>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const FormWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  flex: 1.75;
  max-width: 60rem;
  background: rgb(var(--modalBackground));
  color: rgb(var(--text));

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
//   height: 100%;
  width: 80%;
  margin-top: 3rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const CustomButton = styled(Button)`
  height: 100%;
  padding: 1.8rem;
  margin-left: 1.5rem;
  box-shadow: var(--shadow-lg);

  ${media('<=tablet')} {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const CustomInput = styled(Input)`
  width: 60%;

  ${media('<=tablet')} {
    width: 100%;
  }
`;

const CustomInputFull = styled(Input)`
width: 100%;

${media('<=tablet')} {
  width: 100%;
}
`;

const H2Wraper = styled.h2`
    color: #2955f4;
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
`;