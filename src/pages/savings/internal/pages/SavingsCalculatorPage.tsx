import { useQuery } from '@tanstack/react-query';
import { QUERY_OPTIONS } from 'shared/queries/internal/config/QUERYOPTIONS';
import { Border, colors, ListHeader, ListRow, NavigationBar, Spacing, TextField } from 'tosslib';
import { BottomSheet } from '../components/BottmSheet';
import { useChangeSavingsPeriod } from '../hooks/useChangeSavingsPeriod';
import { SavingsTabs } from '../components/SavingsTabs';
import { SavingsListItem } from '../components/list/SavingsListItem';
import { NoResultForNotSelectedSavings } from '../components/results/NoResultForNotSelectedSavings';
import { SavingsResults } from '../components/results/SavingsResults';
import { useSelectSavings } from '../hooks/useSelectSavings';

export function SavingsCalculatorPage() {
  const { data = [] } = useQuery(QUERY_OPTIONS.savings.get());

  const { savingsPeriod, handleChangeSavingsPeriod } = useChangeSavingsPeriod();
  const { selectedSavings, isSelectedSavings, handleSelectSavings } = useSelectSavings();

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <TextField label="목표 금액" placeholder="목표 금액을 입력하세요" suffix="원" />
      <Spacing size={16} />
      <TextField label="월 납입액" placeholder="희망 월 납입액을 입력하세요" suffix="원" />
      <Spacing size={16} />

      <BottomSheet savingsPeriod={savingsPeriod} handleChangeSavingsPeriod={handleChangeSavingsPeriod} />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <SavingsTabs />

      {data.map(savings => (
        <SavingsListItem
          key={`savings-list-${savings.id}`}
          type="3RowTypeA"
          top={savings.name}
          middle={savings.annualRateDescription}
          bottom={savings.description}
          isSelected={isSelectedSavings(savings.id)}
          onClick={() => handleSelectSavings(savings)}
        />
      ))}

      {/* 아래는 계산 결과 탭 내용이에요. 계산 결과 탭을 구현할 때 주석을 해제해주세요. */}
      <Spacing size={8} />

      <SavingsResults goalAmount={} annualRate={} />

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'기본 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 3.2%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`100,000원 ~ 500,000원 | 12개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'고급 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 2.8%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`50,000원 ~ 1,000,000원 | 24개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />
      <NoResultForNotSelectedSavings selectedSavings={selectedSavings} />
    </>
  );
}
