import React, { useState, useEffect, useCallback, memo } from "react";
import * as S from "./styles";
import UpdateIcon from "@/assets/UpdateIcon.svg";
import DeleteIcon from "@/assets/DeleteIcon.svg";
import Logo from "@/assets/Logo.svg";
import getSubjectIcon from '@/util/subjectIcon';
import ChoiceColor from '@/util/subjectColor';
import RegistrationModal from "@/components/RegistrationModal/index.jsx";
import TestRangeModal from "@/components/TestRangeModal/index.jsx";

import math1Icon from "@/assets/math1Icon.svg";
import literatureIcon from "@/assets/literatureIcon.svg";
import koreanHistoryIcon from "@/assets/koreanHistoryIcon.svg";
import databaseProgrammingIcon from "@/assets/databaseProgrammingIcon.svg";
import webProgrammingIcon from "@/assets/webProgrammingIcon.svg";
import probabilityStatisticsIcon from "@/assets/probabilityStatisticsIcon.svg";
import serverProgrammingIcon from "@/assets/serverProgrammingIcon.svg";
import operatingSystemIcon from "@/assets/operatingSystemIcon.svg";
import linuxProgrammingIcon from "@/assets/linuxProgrammingIcon.svg";
import frontendProgrammingIcon from "@/assets/frontendProgrammingIcon.svg";
import aiUtilizationIcon from "@/assets/aiUtilizationIcon.svg";
import commonMathIcon from "@/assets/commonMathIcon.svg";
import commonKoreanIcon from "@/assets/commonKoreanIcon.svg";
import integratedSocialIcon from "@/assets/integratedSocialIcon.svg";
import english1Icon from "@/assets/english1Icon.svg";
import integratedScienceIcon from "@/assets/integratedScienceIcon.svg";
import programmingIcon from "@/assets/programmingIcon.svg";
import computerArchitectureIcon from "@/assets/computerArchitectureIcon.svg";
import instance from "@/apis/instance";
import Cookies from "js-cookie";

const subjectIconMap = {
  math1Icon,
  literatureIcon,
  koreanHistoryIcon,
  databaseProgrammingIcon,
  webProgrammingIcon,
  probabilityStatisticsIcon,
  serverProgrammingIcon,
  operatingSystemIcon,
  linuxProgrammingIcon,
  frontendProgrammingIcon,
  aiUtilizationIcon,
  commonMathIcon,
  commonKoreanIcon,
  integratedSocialIcon,
  english1Icon,
  integratedScienceIcon,
  programmingIcon,
  computerArchitectureIcon,
};

function HomePage() {
  const [subjects, setSubject] = useState([]);

  const [testRanges, setTestRanges] = useState([]);

  useEffect(() => {
    const fetchTestRanges = async () => {
      try {
        const response = await instance.get("/range/addition");
        console.log(response);
        if (response.data?.data) {
          setTestRanges(response.data.data);
        }
      } catch (error) {
        console.error("시험범위 데이터를 불러오는 데 실패했습니다:", error);
      }
    };

    const fetchRegistration = async () => {
      try {
        const response = await instance.get("/subject/addition");
        console.log(response);
        if (response.data?.data) {
          setSubject(response.data.data);
        }
      } catch (error) {
        console.error("시험범위 데이터를 불러오는 데 실패했습니다:", error);
      }
    };

    fetchRegistration();
    fetchTestRanges();
  }, []);

  const [registrationModal, setRegistrationModal] = useState(false);
  const [testRangeModal, setTestRangeModal] = useState(false);

  const handleAddSubject = useCallback(() => {
    setRegistrationModal(true);
  }, []);

  const handleAddTestRange = useCallback(() => {
    setTestRangeModal(true);
  }, []);

  const handleEditSubject = useCallback((subject) => {
    alert(`담당과목 수정 클릭: ${subject}`);
  }, []);

  const handleDeleteSubject = useCallback((subject) => {
    alert(`담당과목 삭제 클릭: ${subject}`);
  }, []);

  const handleEditTestRange = useCallback((unit) => {
    alert(`시험범위 수정 클릭: ${unit}`);
  }, []);

  const handleDeleteTestRange = useCallback(async (unit) => {
    const confirmDelete = window.confirm(`${unit} 시험범위를 삭제하시겠습니까?`);
    if (!confirmDelete) return;

    try {
      const response = await instance.delete(`/range/${unit}`);

      if (response.status === 200 || response.status === 204) {
        setTestRanges(prev =>
          prev.filter(range => range.title !== unit)
        );
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("시험범위 삭제 실패:", error);
      alert("삭제 도중 오류가 발생했습니다.");
    }
  }, []);

  const closeModal = () => {
    setRegistrationModal(false);
  };

  const closeTestRangeModal = () => {
    setTestRangeModal(false);
  };

  const formatClassRange = (classRange) => {
    const classMap = {
      1: "1학년",
      2: "2학년 소개과",
      3: "2학년 임베과",
      4: "2학년 에이아이과",
    };
    return classRange.map(range => classMap[range]).join(', ');
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
          <S.HeaderButton onClick={() => window.location.href = "/getScore"} style={{ marginRight: "20px" }}>학생 조회</S.HeaderButton>
        </S.HeaderButtons>
      </S.Header>
      <S.HomePageContainer>
        <S.SectionWrapper>
          <S.Section>
            <S.SectionTitle>담당과목 목록<S.TotalNum>총 {subjects.length}개</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {subjects.length === 0 ? (
                <S.EmptyMessage>등록된 과목이 없습니다.</S.EmptyMessage>
              ) : (
                subjects.map(subject => (
                  <S.SubjectItem key={subject.subject_id}>
                    <S.SubjectLeft>
                      <S.SubjectIcon src={subjectIconMap[getSubjectIcon(subject.subject_name).replace('.svg', '')]} alt={`${subject.subject_name} 아이콘`} />
                      <S.SubjectInfo>
                        <S.SubjectName>{subject.subject_name}</S.SubjectName>
                        <S.SubjectMeta>{formatClassRange(subject.class_range)}</S.SubjectMeta>
                      </S.SubjectInfo>
                    </S.SubjectLeft>
                    <S.SubjectActions>
                      <img src={UpdateIcon} alt="수정" onClick={() => handleEditSubject(subject.subject_name)} />
                      <img src={DeleteIcon} alt="삭제" onClick={() => handleDeleteSubject(subject.subject_name)} />
                    </S.SubjectActions>
                  </S.SubjectItem>
                ))
              )}
            </S.ItemList>
          </S.Section>
          <S.Section>
            <S.SectionTitle>시험범위 목록<S.TotalNum>총 {testRanges?.length ?? 0}과목</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {(!testRanges || testRanges.length === 0) ? (
                <S.EmptyMessage>등록된 시험범위가 없습니다.</S.EmptyMessage>
              ) : (
                testRanges.map(({ subject_name, title, discription }, index) => {
                  const color = ChoiceColor(subject_name);
                  return (
                    <S.SubjectItem key={`${subject_name}-${index}`}>
                      <S.TestRangeLeft>
                        <S.SubjectTag style={{ backgroundColor: color.background, color: color.text }}>
                          {subject_name}
                        </S.SubjectTag>
                        <S.UnitTitle>{title}</S.UnitTitle>
                        <S.UnitDescription>{discription}</S.UnitDescription>
                      </S.TestRangeLeft>
                      <S.SubjectActions>
                        <img src={UpdateIcon} alt="수정" onClick={() => handleEditTestRange(title)} />
                        <img src={DeleteIcon} alt="삭제" onClick={() => handleDeleteTestRange(title)} />
                      </S.SubjectActions>
                    </S.SubjectItem>
                  );
                })
              )}
            </S.ItemList>
          </S.Section>
        </S.SectionWrapper>
      </S.HomePageContainer>
      {registrationModal && (
        <RegistrationModal onClose={closeModal} />
      )}
      {testRangeModal && (
        <TestRangeModal onClose={closeTestRangeModal} />
      )}
    </>
  );
}

export default memo(HomePage);