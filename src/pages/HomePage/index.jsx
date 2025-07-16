import UpdateIcon from "@/assets/UpdateIcon.svg";
import DeleteIcon from "@/assets/DeleteIcon.svg";
import * as S from "./styles";
import ChoiceColor from '@/util/subjectColor';

function HomePage() {
  const subjects = ["수학 1", "통합과학", "한국사", "영어 1", "국어"];
  const testRanges = [
    { subject: "수학 1", unit: "1단원: 지수와 로그", description: "지수법칙, 로그의 정의 및 성질, 상용로그" },
    { subject: "통합과학", unit: "2단원: 화학 반응", description: "산화환원반응, 중화반응" },
    { subject: "한국사", unit: "3단원: 조선 후기", description: "세도정치, 농민 봉기, 개화 정책" },
  ];

  return (
    <>
      <S.Header>
        <S.HeaderLogo>시험 관리 시스템</S.HeaderLogo>
        <S.HeaderButtons>
          <S.HeaderButton>담당과목 등록</S.HeaderButton>
          <S.HeaderButton>시험범위 등록</S.HeaderButton>
        </S.HeaderButtons>
      </S.Header>
      <S.HomePageContainer>
        <S.SectionWrapper>
          <S.Section>
            <S.SectionTitle>담당과목 목록<S.TotalNum>총 4개</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {subjects.map((subject, index) => (
                <S.SubjectItem key={index}>
                  <S.SubjectLeft>
                    <S.SubjectLogo />
                    <S.SubjectInfo>
                      <S.SubjectName>{subject}</S.SubjectName>
                      <S.SubjectMeta>2학년 소프트웨어과</S.SubjectMeta>
                    </S.SubjectInfo>
                  </S.SubjectLeft>
                  <S.SubjectActions>
                    <img src={UpdateIcon} alt="수정" />
                    <img src={DeleteIcon} alt="삭제" />
                  </S.SubjectActions>
                </S.SubjectItem>
              ))}
            </S.ItemList>
          </S.Section>
          <S.Section>
            <S.SectionTitle>시험범위 목록<S.TotalNum>총 3과목</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {testRanges.map((item, index) => {
                const color = ChoiceColor(item.subject);
                return (
                  <S.SubjectItem key={index}>
                    <S.TestRangeLeft>
                      <S.SubjectTag style={{ backgroundColor: color.background, color: color.text }}>
                        {item.subject}
                      </S.SubjectTag>
                      <S.UnitTitle>{item.unit}</S.UnitTitle>
                      <S.UnitDescription>{item.description}</S.UnitDescription>
                    </S.TestRangeLeft>
                    <S.SubjectActions>
                      <img src={UpdateIcon} alt="수정" />
                      <img src={DeleteIcon} alt="삭제" />
                    </S.SubjectActions>
                  </S.SubjectItem>
                );
              })}
            </S.ItemList>
          </S.Section>
        </S.SectionWrapper>
      </S.HomePageContainer>
    </>
  );
}

export default HomePage;
