import UpdateIcon from "@/assets/UpdateIcon.svg";
import DeleteIcon from "@/assets/DeleteIcon.svg";
import Logo from "@/assets/Logo.svg";
import getSubjectIcon from '@/util/subjectIcon';
import * as S from "./styles";
import { SubjectIcon } from "./styles";
import ChoiceColor from '@/util/subjectColor';
import RegistrationModal from "@/components/RegistrationModal";
import TestRangeModal from "@/components/TestRangeModal";

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
import { useState, useEffect } from "react";
import api from "@/apis/instance";
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
  const subjects = ["수학 1", "통합과학", "한국사", "영어 1", "공통국어"];

  const [testRanges, setTestRanges] = useState([]);

  useEffect(() => {
    const fetchTestRanges = async () => {
      try {
        const token = Cookies.get("accessToken");
        const response = await api.get("/range/addition", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data && response.data.body) {
          setTestRanges(response.data.body);
        }
      } catch (error) {
        console.error("시험범위 데이터를 불러오는 데 실패했습니다:", error);
      }
    }

    fetchTestRanges();
  }, []);

  const [registrationModal, setRegistrationModal] = useState(false);
  const [testRangeModal, setTestRangeModal] = useState(false);

  const handleAddSubject = () => {
    setRegistrationModal(true);
  };

  const handleAddTestRange = () => {
    setTestRangeModal(true);
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

  const closeModal = () => {
    setRegistrationModal(false);
  };

  const closeTestRangeModal = () => {
    setTestRangeModal(false);
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
              {subjects.length === 0 ? (
                <S.EmptyMessage>등록된 과목이 없습니다.</S.EmptyMessage>
              ) : (
                subjects.map(subject => (
                  <S.SubjectItem key={subject}>
                    <S.SubjectLeft>
                      <SubjectIcon src={subjectIconMap[getSubjectIcon(subject).replace(".svg", "")]} alt={`${subject} 아이콘`} />                      <S.SubjectInfo>
                        <S.SubjectName>{subject}</S.SubjectName>
                        <S.SubjectMeta>2학년 소프트웨어과</S.SubjectMeta>
                      </S.SubjectInfo>
                    </S.SubjectLeft>
                    <S.SubjectActions>
                      <img src={UpdateIcon} alt="수정" onClick={() => handleEditSubject(subject)} />
                      <img src={DeleteIcon} alt="삭제" onClick={() => handleDeleteSubject(subject)} />
                    </S.SubjectActions>
                  </S.SubjectItem>
                ))
              )}
            </S.ItemList>
          </S.Section>
          <S.Section>
            <S.SectionTitle>시험범위 목록<S.TotalNum>총 {testRanges.length}과목</S.TotalNum></S.SectionTitle>
            <S.ItemList>
              {testRanges.length === 0 ? (
                <S.EmptyMessage>등록된 시험범위가 없습니다.</S.EmptyMessage>
              ) : (
                testRanges.map(({ subjectName, range }) => {
                  const color = ChoiceColor(subjectName);
                  return range.map(({ exam_name, exam_content }) => (
                    <S.SubjectItem key={exam_name}>
                      <S.TestRangeLeft>
                        <S.SubjectTag style={{ backgroundColor: color.background, color: color.text }}>
                          {subjectName}
                        </S.SubjectTag>
                        <S.UnitTitle>{exam_name}</S.UnitTitle>
                        <S.UnitDescription>{exam_content}</S.UnitDescription>
                      </S.TestRangeLeft>
                      <S.SubjectActions>
                        <img src={UpdateIcon} alt="수정" onClick={() => handleEditTestRange(exam_name)} />
                        <img src={DeleteIcon} alt="삭제" onClick={() => handleDeleteTestRange(exam_name)} />
                      </S.SubjectActions>
                    </S.SubjectItem>
                  ));
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

export default HomePage;
