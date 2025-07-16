import UpdateIcon from "@/assets/UpdateIcon.svg";
import DeleteIcon from "@/assets/DeleteIcon.svg";
import * as S from "./styles";

function HomePage() {
  const subjects = ["수학", "과학", "역사", "영어", "국어", "음악"];
  const testRanges = ["1단원", "2단원", "3단원", "4단원", "5단원"];

  return (
    <>
      <S.Header>시험 관리 시스템</S.Header>
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
              {testRanges.map((range, index) => (
                <S.Item key={index}>{range}</S.Item>
              ))}
            </S.ItemList>
          </S.Section>
        </S.SectionWrapper>
      </S.HomePageContainer>
    </>
  );
}

export default HomePage;
