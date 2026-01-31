import Layout from '@/components/public/Layout.tsx';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t('welcome', { name: 'User' })}</h1>
    </Layout>
  )
}