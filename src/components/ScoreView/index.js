import {
  // eslint-disable-next-line import/named
  ScoreContainer,
  // eslint-disable-next-line import/named
  ScoreNameContainer,
  // eslint-disable-next-line import/named
  ScoreName,
  // eslint-disable-next-line import/named
  ScoreBoard,
  // eslint-disable-next-line import/named
  ScoreHeading,
  // eslint-disable-next-line import/named
  ScoreResult,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK
          <br /> PAPER <br /> SCISSORS
        </ScoreName>
      </ScoreNameContainer>
      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoard>
    </ScoreContainer>
  )
}

export default ScoreView
