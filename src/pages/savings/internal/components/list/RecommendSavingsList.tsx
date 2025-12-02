import { ListHeader, Spacing } from 'tosslib';
import { SavingsListItem } from './SavingsListItem';

export function RecommendSavingsList() {
  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />
      <SavingsListItem
        type="3RowTypeA"
        top="기본 정기 적금"
        middle="연 이자율: 3.2%"
        bottom="100,000원 ~ 500,000원 | 12개월"
      />
      <SavingsListItem
        type="3RowTypeA"
        top="고급 정기 적금"
        middle="연 이자율: 2.8%"
        bottom="50,000원 ~ 1,000,000원 | 24개월"
      />
    </>
  );
}
