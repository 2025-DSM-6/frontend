const ChoiceColor = (subjectName) => {
  switch (subjectName) {
    case "수학 1":
      return { background: "#DBEAFE", text: "#1E40AF" };
    case "문학":
      return { background: "#FFE2E2", text: "#941616" };
    case "한국사":
      return { background: "#DDFFDB", text: "#037333" };
    case "데이터베이스 프로그래밍":
      return { background: "#EFDDCD", text: "#792F00" };
    case "웹 프로그래밍":
      return { background: "#FEFDDB", text: "#9A830F" };
    case "영어 2":
      return { background: "#F2DBFE", text: "#391EAF" };
    case "확률과 통계":
      return { background: "#DBEAFE", text: "#1E40AF" };
    case "서버 프로그래밍":
      return { background: "#D8FFF9", text: "#137580" };
    case "운영체제":
      return { background: "#FEDBF8", text: "#BA4896" };
    case "리눅스 프로그래밍":
      return { background: "#FFEDD5", text: "#8E6D1A" };
    case "프론트엔드 프로그래밍":
      return { background: "#EDFEDB", text: "#528D13" };
    case "인공지능 활용":
      return { background: "#D7E3FF", text: "#336CC3" };
    case "공통수학":
      return { background: "#DBEAFE", text: "#1E40AF" };
    case "공통국어":
      return { background: "#DDFFDB", text: "#037333" };
    case "통합사회":
      return { background: "#FEFDDB", text: "#9A830F" };
    case "영어 1":
      return { background: "#FEDBF8", text: "#BA4896" };
    case "통합과학":
      return { background: "#D8FFF9", text: "#137580" };
    case "프로그래밍":
      return { background: "#F2DBFE", text: "#391EAF" };
    case "컴퓨터 구조":
      return { background: "#EFDDCD", text: "#792F00" };
    default:
      return { background: "#FFFFFF", text: "#000000" };
  }
};

export default ChoiceColor;
