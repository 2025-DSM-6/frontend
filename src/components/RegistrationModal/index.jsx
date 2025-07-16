import * as S from "./styles";

export default function RegistrationModal({ onClose }) {
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
            <S.TextInput type="text" placeholder="과목명을 입력하세요" />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>과 선택</S.Label>
            <S.SelectInput>
              <option value="">선택</option>
              <option value="소프트웨어 개발과">소프트웨어 개발과</option>
              <option value="인공지능 소프트웨어과">인공지능 소프트웨어과</option>
              <option value="임베디드 개발과">임베디드 개발과</option>
              <option value="학년 전체">학년 전체</option>
            </S.SelectInput>
          </S.InputGroup>
        </S.InputSection>
        <S.ButtonSection>
          <S.SubmitButton>등록</S.SubmitButton>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
        </S.ButtonSection>
      </S.RegistrationModalContainer>
    </div>
  );
}
