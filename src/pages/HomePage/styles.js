import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: #f9fafb;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
`;

export const Header = styled.header`
  background-color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  img {
    height: 48px;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 20px;
`;

export const HeaderButton = styled.button`
  background-color: #16a34a;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:last-child {
    margin-right: 8px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px;
  flex: 1;
  overflow: hidden;
`;

export const Section = styled.section`
  flex: 1;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 86vh;
`;

export const SectionTitle = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 12px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 10px;
`;

export const TotalNum = styled.span`
  background-color: #15c65b;
  border-radius: 8px;
  color: white;
  margin-right: 45px;
  font-size: xx-small;
  padding: 3px 6px;
`;

export const SubjectItem = styled.li`
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubjectLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SubjectLogo = styled.div`
  width: 36px;
  height: 36px;
  background-color: #e0e0e0;
  border-radius: 50%;
`;

export const SubjectIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

export const SubjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubjectName = styled.div`
  font-weight: bold;
`;

export const SubjectMeta = styled.div`
  font-size: 12px;
  color: #666;
`;

export const SubjectActions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const TestRangeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  text-align: left;
`;

export const SubjectTag = styled.div`
  padding: 3px 6px;
  border-radius: 12px;
  font-size: 12px;
`;

export const UnitTitle = styled.div`
  font-weight: bold;
`;

export const UnitDescription = styled.div`
  font-size: 12px;
  color: #4b5563;
`;

export const MemoText = styled.div`
  font-size: 14px;
  color: #374151;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: #999999;
  padding: 20px;
  font-size: 16px;
`;
