import styled from 'styled-components';
import QRCode from 'components/QRCode';
import { media } from 'utils/media';

export default function BoardingPass() {
    return (

        <ContainerWrapper>
            <ToPContainerWrapper>
                {/* <TopH1Wrapper>Alpha</TopH1Wrapper> */}
                <FlightWrapper>
                    <H2Wraper>Flight 673 /// May 18, 2020</H2Wraper>
                    <Circle></Circle>
                </FlightWrapper>

                <InfoContainer>
                    <Passenger>
                        <TopPContainer>Jorge Mendes</TopPContainer>
                        <H4Container>Passenger</H4Container>
                    </Passenger>
                    <Boarding>
                        <TopPContainer>11:37AM EST</TopPContainer>
                        <H4Container>Boarding Time</H4Container>
                    </Boarding>
                    <Gate>
                        <TopPContainer>AA-33</TopPContainer>
                        <H4Container>Gate</H4Container>
                    </Gate>
                    <ClassType>
                        <TopPContainer>ALPHA ONE</TopPContainer>
                        <H4Container>Class</H4Container>
                    </ClassType>
                    <Zone>
                        <TopPContainer>ZZ</TopPContainer>
                        <H4Container>Zone</H4Container>
                    </Zone>
                    <Seat>
                        <TopPContainer>23D</TopPContainer>
                        <H4Container>Seat</H4Container>
                    </Seat>
                </InfoContainer>
            </ToPContainerWrapper>

            <BottomContainerWrapper>
                <Airport>
                    <LocationWrapper>
                        <H1Wrapper>JFK</H1Wrapper>
                        <BotPContainer>New York, NY</BotPContainer>
                    </LocationWrapper>
                    <LocationWrapper>
                        <H1Wrapper>LAX</H1Wrapper>
                        <BotPContainer>Los Angeles, CA</BotPContainer>
                    </LocationWrapper>
                    <SquareLeft></SquareLeft>
                    <SquareRight></SquareRight>
                    <SquareMiddle></SquareMiddle>
                    <Polygon></Polygon>
                    <Line></Line>
                </Airport>
                <QRCodeContainer>
                    <QRCode />
                </QRCodeContainer>
                {/* <QRCode className="qr-code">
          <img src="qr-code.svg" /> */}

            </BottomContainerWrapper>
        </ContainerWrapper>

    );
}

const ContainerWrapper = styled.div`
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    width: 40em;
    background-color: #fcfafa;
    font-family: "Fira Mono", monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // min-height: 80vh;
    height: 40em;
    margin: 0;

`;

const ToPContainerWrapper = styled.div`
    height: 27em;
    background-color: #feeae8;
    padding: 2em;
    border-top-left-radius: 2.5em;
    border-top-right-radius: 2.5em;
    border-bottom: 3px solid #fac9c9;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const BottomContainerWrapper = styled.div`
    height: 27em;
    background-color: #2955f4;
    padding: 2.5em;
    border-bottom-left-radius: 2.5em;
    border-bottom-right-radius: 2.5em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    width: 100%;
`;

const TopH1Wrapper = styled.h1`
    color: #2955f4;
    font-size: 2.5rem;
    font-family: "Quattrocento Sans", sans-serif;
    margin: 0 0 0 0;
    display: block;
    align-content: left;
    align-self: left;
    width: 100%;
`;

const FlightWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0em;
    width: 100%;
`;

const H2Wraper = styled.h2`
    color: #2955f4;
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
`;

const Circle = styled.div`
    background-color: #f4fe69;
    height: 1em;
    width: 1em;
    border-radius: 50%;
`;

const InfoContainer = styled.div`
    display: grid;
    // grid-column-gap: 1em;
    width: 30em;
    grid-template-areas:
    'passenger passenger passenger passenger'
    'boarding boarding gate gate'
    'classType classType zone seat'
`;

const Passenger = styled.div`
    grid-area: passenger;
`;

const Boarding = styled.div`
    grid-area: boarding;
`;

const Gate = styled.div`
    grid-area: gate;
`;

const ClassType = styled.div`
    grid-area: classType;
`;

const Zone = styled.div`
    grid-area: zone;
`;

const Seat = styled.div`
    grid-area: seat;
`;

const TopPContainer = styled.p`
    color: #2955f4;
    font-weight: bold;
    margin: 1em 0 0.75em 0;
`;

const H4Container = styled.h4`
    border-top: 2px solid #fac9c9;
    color: #993955;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    padding-top: 0.5em;
`;

const Airport = styled.div`
    width: 20em;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-content: left;
    align-self: left;
    justify-content: space-between;
    padding: 10px;
    margin: 0 auto 0 0;
    position: relative;
`;

const LocationWrapper = styled.div`

`;

const H1Wrapper = styled.h1`
    color: #fac9c9;
    font-size: 2.5rem;
    font-family: "Quattrocento Sans", sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 0;
`;

const BotPContainer = styled.p`
    color: #fac9c9;
    font-weight: bold;
    font-size: 10px;
    letter-spacing: 4px;
    margin: 0;
`;

const SquareLeft = styled.div`
    height: 15px;
    width: 15px;
    background-color: #f4fe69;
    position: absolute;
    top: 0;
    left: 0;
`;

const SquareRight = styled.div`
    height: 15px;
    width: 15px;
    border: 1px solid #feeae8;
    position: absolute;
    top: 0;
    right: 0;
`;

const SquareMiddle = styled.div`
    height: 15px;
    width: 15px;
    border: 1px solid #f4fe69;
    position: absolute;
    top: 50%;
    left: 0;
`;

const Polygon = styled.div`
    width: 2.5em;
    height: 2.5em;
    border: 1px solid #f4fe69;
    position: absolute;
    top: 45%;
    left: 40%;
`;

const Line = styled.div`
    width: 15px;
    border: 1.5px solid #feeae8;
    position: absolute;
    top: 40%;
    left: 0;
`;

const QRCodeContainer = styled.div`
    width: 12em;
    height: 12em;
    display: flex;
    flex-direction: column;
    align-content: right;
    align-self: right;
    justify-content: space-between;
    // padding: 10px;
    margin: 0 0 0 0;
    position: relative;
`;