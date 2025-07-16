import UpdateIcon from "@/assets/UpdateIcon.svg";
import DeleteIcon from "@/assets/DeleteIcon.svg";
import Logo from "@/assets/Logo.svg";
import * as S from "./styles";
import ChoiceColor from '@/util/subjectColor';

function HomePage() {
  const subjects = ["수학 1", "통합과학", "한국사", "영어 1", "국어"];
  const testRanges = [
    { subject: "수학 1", unit: "1단원: 지수와 로그", description: "지수법칙, 로그의 정의 및 성질, 상용로그" },
    { subject: "통합과학", unit: "2단원: 화학 반응", description: "산화환원반응, 중화반응" },
    { subject: "한국사", unit: "3단원: 조선 후기", description: "세도정치, 농민 봉기, 개화 정책" },
  ];

  const handleAddSubject = () => {
    alert("담당과목 등록 버튼 클릭됨");
  };

  const handleAddTestRange = () => {
    alert("시험범위 등록 버튼 클릭됨");
  };

  const handleEditSubject = (subject) => {
    alert(`담당과목 수정 클릭: ${subject}`);
  };

  const handleDeleteSubject = (subject) => {
    alert(`담당과목 삭제 클릭: ${subject}`);
  };

  const handleEditTestRange = (unit) => {
    alert(`시험범위 수정 클릭: ${unit}`);
  };

  const handleDeleteTestRange = (unit) => {
    alert(`시험범위 삭제 클릭: ${unit}`);
  };

  return (
    <>
      <S.Header>
        <S.HeaderLogo>
          <img src={Logo} alt="로고" />
        </S.HeaderLogo>
        <S.HeaderButtons>
          <S.HeaderButton onClick={handleAddSubject}>담당과목 등록</S.HeaderButton>
          <S.HeaderButton onClick={handleAddTestRange}>시험범위 등록</S.HeaderButton>
        </S.HeaderButtons>
      </S.Header>
      <S.HomePageContainer>
        <S.SectionWrapper>
          <S.Section>
            <S.SectionTitle>담당과목 목록<S.TotalNum>총 {subjects.length}개</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {subjects.map(subject => (
                <S.SubjectItem key={subject}>
                  <S.SubjectLeft>
                    <S.SubjectLogo />
                    <S.SubjectInfo>
                      <S.SubjectName>{subject}</S.SubjectName>
                      <S.SubjectMeta>2학년 소프트웨어과</S.SubjectMeta>
                    </S.SubjectInfo>
                  </S.SubjectLeft>
                  <S.SubjectActions>
                    <img src={UpdateIcon} alt="수정" onClick={() => handleEditSubject(subject)} />
                    <img src={DeleteIcon} alt="삭제" onClick={() => handleDeleteSubject(subject)} />
                  </S.SubjectActions>
                </S.SubjectItem>
              ))}
            </S.ItemList>
          </S.Section>
          <S.Section>
            <S.SectionTitle>시험범위 목록<S.TotalNum>총 {testRanges.length}과목</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {testRanges.map(({ subject, unit, description }) => {
                const color = ChoiceColor(subject);
                return (
                  <S.SubjectItem key={unit}>
                    <S.TestRangeLeft>
                      <S.SubjectTag style={{ backgroundColor: color.background, color: color.text }}>
                        {subject}
                      </S.SubjectTag>
                      <S.UnitTitle>{unit}</S.UnitTitle>
                      <S.UnitDescription>{description}</S.UnitDescription>
                    </S.TestRangeLeft>
                    <S.SubjectActions>
                      <img src={UpdateIcon} alt="수정" onClick={() => handleEditTestRange(unit)} />
                      <img src={DeleteIcon} alt="삭제" onClick={() => handleDeleteTestRange(unit)} />
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
