import styled from 'styled-components';
import { Fonts, Colors, Metrics } from '../themes';
import { Button, Dialog, Stack, IconButton, CircularProgress } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React = require('react');
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type IModal = {
  className?: string;
  isLoading?: boolean;
  open: boolean;
  handleClose: () => void;
  title: string;
  des?: string;
  contentArea?: React.ReactNode;
  buttonArea?: React.ReactNode;
  buttonText?: string;
  cancelText?: string;
  noCancel?: boolean;
  handleConfirm?: () => Promise<void>;
  disabled?: boolean;
  noButton?: boolean;
  buttonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  needFullScreen?: boolean;
  disabledCloseButton?: boolean; // arguments of your confirm function
};

const Wrapper = styled.div`
  padding: 24px;
  width: 503px;

  &.no-padding {
    padding: 16px 0;
  }
  &.for-scroll {
    height: 864px;
  }

  &.event-detail {
    padding-bottom: 0;
  }

  &.fit-content {
    height: fit-content;
  }
  &.full-height {
    height: 100%;
  }

  .MuiButton-root {
    font-size: 18px;
  }

  .MuiIconButton-root {
    padding: 8px;
    position: absolute;
    top: 17px;
    right: 12px;
  }
  position: relative;
  height: min-content;
  overflow: hidden;

  @media (max-width: ${Metrics.tablet}) {
    padding: 24px 16px;
    width: 100%;
    .MuiIconButton-root {
      top: 21px;
    }
  }
  @media (max-width: ${Metrics.mobile}) {
    .MuiIconButton-root {
      top: 17px;
    }
    .MuiButton-root {
      font-size: 14px;
    }
  }

  .terms-wrap {
    height: calc(100vh - 250px);
    overflow-y: auto;
    width: 100%;
  }

  &.y-scroll {
    overflow: hidden scroll;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* For Firefox */
  * {
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none; /* For Firefox */
  }
`;

const Title = styled(Fonts.H3())`
  color: ${Colors.N4};
  padding-bottom: ${Metrics.px5};
  padding-inline: ${Metrics.px5};
  @media (max-width: ${Metrics.tablet}) {
    padding-bottom: ${Metrics.px4};
  }

  &.no-padding {
    padding-bottom: 0;
  }
`;

const Des = styled(Fonts.P1())`
  color: ${Colors.N3};
  @media (max-width: ${Metrics.tablet}) {
    padding-bottom: ${Metrics.px1};
  }
`;

const Modal = (props: IModal) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullScreen={props.needFullScreen ? fullScreen : false}
      sx={
        props.needFullScreen
          ? {
              '& .MuiDialog-paper': {
                borderRadius: { xs: 0, md: '16px' },
              },
            }
          : {
              '& .MuiDialog-paper': {
                marginInline: { xs: '16px', md: '24px' },
              },
            }
      }
    >
      <Wrapper className={props.className}>
        {props?.disabledCloseButton != true && (
          <IconButton
            aria-label="delete"
            size="large"
            disabled={props?.isLoading}
            onClick={props.handleClose}
            sx={{
              width: { xs: '40px', md: '46px' },
              height: { xs: '40px', md: '46px' },
            }}
          >
            <CloseRoundedIcon height={30} width={30} />
          </IconButton>
        )}
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={props.className?.includes('mailbox') ? {} : { height: '100%' }}
        >
          <Title className={!props.contentArea && !props.des ? 'no-padding' : ''}>{props.title}</Title>
          {props.des && <Des>{props.des}</Des>}
          {props.contentArea}
          {!props.noButton && (
            <>
              {props.buttonArea ? (
                props.buttonArea
              ) : (
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={{
                    xs: 1,
                    md: 2,
                  }}
                  sx={{
                    mt: { xs: '12px', md: '24px' },
                    width: '100%',
                  }}
                >
                  {!props.noCancel && (
                    <Button
                      variant="outlined"
                      color="primary"
                      disabled={props?.isLoading}
                      onClick={props.handleClose}
                      sx={{
                        width: { xs: '152px', md: '168px' },
                        height: { xs: '36px', md: '41px' },
                      }}
                    >
                      {props.cancelText ?? '取消'}
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color={props.buttonColor ? props.buttonColor : 'primary'}
                    onClick={props.handleConfirm}
                    disabled={props?.isLoading || props.disabled}
                    sx={
                      props.noCancel
                        ? {
                            width: { xs: '100%', md: '311px' },
                            height: { xs: '36px', md: '41px' },
                          }
                        : {
                            width: { xs: '152px', md: '168px' },
                            height: { xs: '36px', md: '41px' },
                          }
                    }
                  >
                    {props?.isLoading ? (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: '#fff',
                        }}
                      />
                    ) : (
                      props.buttonText ?? '確定'
                    )}
                  </Button>
                </Stack>
              )}
            </>
          )}
        </Stack>
      </Wrapper>
    </Dialog>
  );
};

export default Modal;
