import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import useTitle from '../../hooks/useTitle';

const Example: FC = () => {
  const { t } = useTranslation('example');

  useTitle(t('documentTitle'));

  return <>{t('text.example')}</>;
};

export default Example;
