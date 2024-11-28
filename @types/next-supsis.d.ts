declare module 'next-supsis' {
  import { FC } from 'react';
  import { SupsisProps } from './src/components/Supsis/Supsis.types';

  const Supsis: FC<SupsisProps>;
  export default Supsis;
}