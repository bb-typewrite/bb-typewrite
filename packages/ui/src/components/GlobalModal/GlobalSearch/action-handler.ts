import { actionController } from '@ui/core/action/';

import { useGlobalSearchModalStore } from './store';

actionController.subscribe('open-search-modal', () => {
  const { toggleVisible } = useGlobalSearchModalStore.getState();

  toggleVisible();

  console.log('呵呵，我打开了一个搜索弹窗啊');
});
