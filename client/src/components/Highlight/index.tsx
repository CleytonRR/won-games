import * as S from './styles'

export type HighLightProps = {
  title: string
  subtitle: string
}

const Highlight = ({ title, subtitle }: HighLightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Highlight
