const ChoiceColor = (subjectName) => {
  switch (subjectName) {
    case "수학 1":
      return "math1Icon.svg";
    case "문학":
      return "literatureIcon.svg";
    case "한국사":
      return "koreanHistoryIcon.svg";
    case "데이터베이스 프로그래밍":
      return "databaseProgrammingIcon.svg";
    case "웹 프로그래밍":
      return "webProgrammingIcon.svg";
    case "영어 2":
      return "english1Icon.svg";
    case "확률과 통계":
      return "probabilityStatisticsIcon.svg";
    case "서버 프로그래밍":
      return "serverProgrammingIcon.svg";
    case "운영체제":
      return "operatingSystemIcon.svg";
    case "리눅스 프로그래밍":
      return "linuxProgrammingIcon.svg";
    case "프론트엔드 프로그래밍":
      return "frontendProgrammingIcon.svg";
    case "인공지능 활용":
      return "aiUtilizationIcon.svg";
    case "공통수학":
      return "commonMathIcon.svg";
    case "공통국어":
      return "commonKoreanIcon.svg";
    case "통합사회":
      return "integratedSocialIcon.svg";
    case "영어 1":
      return "english1Icon.svg";
    case "통합과학":
      return "integratedScienceIcon.svg";
    case "프로그래밍":
      return "programmingIcon.svg";
    case "컴퓨터 구조":
      return "computerArchitectureIcon.svg";
    default:
      return "computerArchitectureIcon.svg";
  }
};

export default ChoiceColor;
