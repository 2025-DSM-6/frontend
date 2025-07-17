import React, { useEffect } from "react";
import * as S from "./styles";
import useTestRangeModalInputStore from "@/store/TestRangeModalInputStore";

export default function TestRangeModal({ onClose }) {
  const {
    subject,
    department,
    memo,
    detailedDescription,
    setSubject,
    setDepartment,
    setMemo,
    setDetailedDescription,
    reset,
  } = useTestRangeModalInputStore();

  useEffect(() => {
    console.log(subject, department, memo, detailedDescription)
  }, [subject, department, memo, detailedDescription])

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      reset();
      onClose();
    }
  };

  const handleSubmitButton = () => {
    reset();
    onClose();
  };

  return (
    <S.Overlay onClick={handleBackgroundClick}>
      <S.TestRangeModalContainer>
        <S.Title>시험 범위 등록</S.Title>
        <S.RowInputs>
          <S.InputGroup>
            <label>
              과 선택
              <S.SelectInput
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">선택</option>
                <option value="소프트웨어 개발과">소프트웨어 개발과</option>
                <option value="인공지능 소프트웨어과">
                  인공지능 소프트웨어과
                </option>
                <option value="임베디드 개발과">임베디드 개발과</option>
                <option value="학년 전체">학년 전체</option>
              </S.SelectInput>
            </label>
          </S.InputGroup>
          <S.InputGroup>
            <label>
              과목
              <S.SelectInput
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="수학 1">수학 1</option>
                <option value="문학">문학</option>
                <option value="한국사">한국사</option>
                <option value="데이터베이스 프로그래밍">
                  데이터베이스 프로그래밍
                </option>
                <option value="웹 프로그래밍">웹 프로그래밍</option>
                <option value="영어 2">영어 2</option>
                <option value="확률과 통계">확률과 통계</option>
                <option value="서버 프로그래밍">서버 프로그래밍</option>
                <option value="운영체제">운영체제</option>
                <option value="리눅스 프로그래밍">리눅스 프로그래밍</option>
                <option value="프론트엔드 프로그래밍">
                  프론트엔드 프로그래밍
                </option>
                <option value="인공지능 활용">인공지능 활용</option>
                <option value="공통수학">공통수학</option>
                <option value="공통국어">공통국어</option>
                <option value="통합사회">통합사회</option>
                <option value="영어 1">영어 1</option>
                <option value="통합과학">통합과학</option>
                <option value="프로그래밍">프로그래밍</option>
                <option value="컴퓨터 구조">컴퓨터 구조</option>
              </S.SelectInput>
            </label>
          </S.InputGroup>
          <S.InputGroup>
            <label>
              메모
              <S.Input type="text" value={memo} onChange={(e) => setMemo(e.target.value)} />
            </label>
          </S.InputGroup>
        </S.RowInputs>
        <div>
          <label>
            상세 설명
            <S.TextArea
              value={detailedDescription}
              onChange={(e) => setDetailedDescription(e.target.value)}
            />
          </label>
        </div>
        <S.ButtonSection>
          <S.SubmitButton onClick={handleSubmitButton}>등록</S.SubmitButton>
        </S.ButtonSection>
      </S.TestRangeModalContainer>
    </S.Overlay>
  );
}
