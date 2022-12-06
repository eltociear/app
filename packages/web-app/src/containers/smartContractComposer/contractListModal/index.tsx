import {
  ButtonIcon,
  ButtonText,
  IconChevronLeft,
  IconClose,
  IconHome,
  IconMenuVertical,
  ListItemAction,
} from '@aragon/ui-components';
import React from 'react';
import {useFormContext, useWatch} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import BottomSheet from 'components/bottomSheet';
import useScreen from 'hooks/useScreen';
import {SmartContract} from 'utils/types';
import SmartContractListGroup from '../components/smartContractListGroup';
import DesktopModal from '../desktopModal';
import {ActionSearchInput} from '../desktopModal/header';
import ActionListGroup from '../components/actionListGroup';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
  onBackButtonClicked: () => void;
};

const SmartContractList: React.FC<Props> = props => {
  const {t} = useTranslation();
  const {isDesktop} = useScreen();

  const [contracts, selectedSC]: [Array<SmartContract>, SmartContract] =
    useWatch({
      name: ['contracts', 'selectedSC'],
    });

  if (isDesktop)
    return (
      <DesktopModal
        contracts={contracts}
        isOpen={props.isOpen}
        onClose={props.onClose}
        onConnect={props.onConnect}
        onBackButtonClicked={props.onBackButtonClicked}
      />
    );

  // mobile modal
  return (
    <BottomSheet isOpen={props.isOpen} onClose={props.onClose}>
      <CustomMobileHeader onBackButtonClicked={props.onBackButtonClicked} />
      <Content>
        {selectedSC ? (
          <div>
            <ListItemAction
              key={selectedSC.address}
              title={selectedSC.name}
              subtitle={`${selectedSC.actions.length} Actions to compose`}
              bgWhite
              iconRight={<IconMenuVertical />}
            />
            <ActionListGroup
              actions={selectedSC.actions.filter(
                a =>
                  a.type === 'function' &&
                  (a.stateMutability === 'payable' ||
                    a.stateMutability === 'nonpayable')
              )}
            />
          </div>
        ) : (
          <>
            <SmartContractListGroup contracts={contracts} />
            <ButtonText
              mode="secondary"
              size="large"
              label={t('scc.labels.connect')}
              onClick={props.onConnect}
              className="w-full"
            />
          </>
        )}
        <ButtonText
          mode="secondary"
          size="large"
          label={t('scc.labels.connect')}
          className="w-full"
          onClick={props.onConnect}
        />
      </Content>
    </BottomSheet>
  );
};

export default SmartContractList;

type CustomHeaderProps = {
  onBackButtonClicked: () => void;
  onClose?: () => void;
};
const CustomMobileHeader: React.FC<CustomHeaderProps> = props => {
  const {t} = useTranslation();
  const {setValue} = useFormContext();
  const selectedSC: SmartContract = useWatch({name: 'selectedSC'});

  return (
    <Header>
      {selectedSC ? (
        <ButtonIcon
          mode="secondary"
          size="small"
          icon={<IconChevronLeft />}
          bgWhite
          onClick={() => {
            setValue('selectedSC', null);
            setValue('selectedAction', null);
          }}
        />
      ) : (
        <ButtonIcon mode="secondary" size="small" icon={<IconHome />} bgWhite />
      )}

      <ActionSearchInput
        type="text"
        placeholder={t('scc.labels.searchPlaceholder')}
      />

      <ButtonIcon
        mode="secondary"
        size="small"
        icon={<IconClose />}
        onClick={props.onBackButtonClicked}
        bgWhite
      />
    </Header>
  );
};

const Header = styled.div.attrs({
  className: 'flex items-center rounded-xl space-x-2 p-2 bg-ui-0',
})`
  box-shadow: 0px 4px 8px rgba(31, 41, 51, 0.04),
    0px 0px 2px rgba(31, 41, 51, 0.06), 0px 0px 1px rgba(31, 41, 51, 0.04);
`;

const Content = styled.div.attrs({
  className: 'py-3 px-2 space-y-3 overflow-auto',
})`
  max-height: 70vh;
`;
