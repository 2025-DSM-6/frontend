import * as S from "./styles";

export default function RegistrationModal({ onClose }) {
  const handleSubmitButton = () => {
    onClose();
  }
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <S.RegistrationModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>과목 등록</h2>
        <S.InputSection>
          <S.InputGroup>
            <S.Label>과목</S.Label>
            <S.SelectInput>
              <option value="수학 1">수학 1</option>
              <option value="문학">문학</option>
              <option value="한국사">한국사</option>
              <option value="데이터베이스 프로그래밍">데이터베이스 프로그래밍</option>
              <option value="웹 프로그래밍">웹 프로그래밍</option>
              <option value="영어 2">영어 2</option>
              <option value="확률과 통계">확률과 통계</option>
              <option value="서버 프로그래밍">서버 프로그래밍</option>
              <option value="운영체제">운영체제</option>
              <option value="리눅스 프로그래밍">리눅스 프로그래밍</option>
              <option value="프론트엔드 프로그래밍">프론트엔드 프로그래밍</option>
              <option value="인공지능 활용">인공지능 활용</option>
              <option value="공통수학">공통수학</option>
              <option value="공통국어">공통국어</option>
              <option value="통합사회">통합사회</option>
              <option value="영어 1">영어 1</option>
              <option value="통합과학">통합과학</option>
              <option value="프로그래밍">프로그래밍</option>
              <option value="컴퓨터 구조">컴퓨터 구조</option>
            </S.SelectInput>
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>과 선택</S.Label>
            <S.SelectInput>
              <option value="학년 전체">학년 전체</option>
              <option value="소프트웨어 개발과">소프트웨어 개발과</option>
              <option value="인공지능 소프트웨어과">인공지능 소프트웨어과</option>
              <option value="임베디드 개발과">임베디드 개발과</option>
            </S.SelectInput>
          </S.InputGroup>
        </S.InputSection>
        <S.ButtonSection>
          <S.SubmitButton onClick={handleSubmitButton}>등록</S.SubmitButton>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
        </S.ButtonSection>
      </S.RegistrationModalContainer>
    </div>
  );
}
