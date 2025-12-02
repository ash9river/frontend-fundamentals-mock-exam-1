import { useSelectSavingsTab } from '../../hooks/useSelectSavingsTab';
import { SavingsProductTabContent } from './SavingsProductTabContent';
import { SavingsResultTabContent } from './SavingsResultTabContent';

type ProductProps = React.ComponentProps<typeof SavingsProductTabContent>;
type ResultProps = React.ComponentProps<typeof SavingsResultTabContent>;

interface Props {
  tab: ReturnType<typeof useSelectSavingsTab>['tab'];
  productProps: ProductProps;
  resultProps: ResultProps;
}

export function SavingsTabSwitch({ tab, productProps, resultProps }: Readonly<Props>) {
  return (
    <>
      {tab === 'products' && <SavingsProductTabContent {...productProps} />}
      {tab === 'result' && <SavingsResultTabContent {...resultProps} />}
    </>
  );
}
