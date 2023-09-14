import styled from "styled-components";
import Metrics from "./Metrics";

export const type = {
  base: '"PingFang TC", -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, "Open Sans", "Helvetica Neue","Noto Sans TC","微軟正黑體", sans-serif',
};

const Fonts = {
  H1: () => styled.h1`
    font-family: ${type.base};
    margin: 0;
    font-size: 40px;
    font-weight: 600;
    line-height: 56px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 32px;
      letter-spacing: 0;
      line-height: 45px;
    }
  `,
  H2: () => styled.h2`
    font-family: ${type.base};
    margin: 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 45px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 24px;
      letter-spacing: 0;
      line-height: 34px;
    }
  `,
  H3: () => styled.h3`
    font-family: ${type.base};
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    margin: 0;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 20px;
      letter-spacing: 0;
      line-height: 28px;
    }
  `,
  H4: () => styled.h4`
    font-family: ${type.base};
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 16px;
      letter-spacing: 0;
      line-height: 22px;
    }
  `,
  H5: () => styled.h5`
    font-family: ${type.base};
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 14px;
      letter-spacing: 0;
      line-height: 20px;
    }
  `,
  H6: () => styled.h6`
    font-family: ${type.base};
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 14px;
      letter-spacing: 0;
      line-height: 20px;
    }
  `,
  H7: () => styled.h6`
    font-family: ${type.base};
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  `,
  H8: () => styled.h6`
    font-family: ${type.base};
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
  `,
  P1: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 16px;
      letter-spacing: 0;
      line-height: 22px;
    }
  `,
  P2: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 14px;
      letter-spacing: 0;
      line-height: 20px;
    }
  `,
  P3: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 13px;
      letter-spacing: 0;
      line-height: 18px;
    }
  `,
  P4: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
  `,
  P5: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
  `,
  BH1: () => styled.h1`
    font-family: ${type.base};
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 35px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 16px;
      letter-spacing: 0.05em;
      line-height: 28px;
    }
  `,
  BH2: () => styled.h2`
    font-family: ${type.base};
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
  `,
  BP1: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 16px;
      letter-spacing: 0;
      line-height: 28px;
    }
  `,
  BP2: () => styled.p`
    font-family: ${type.base};
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  `,
  T1: () => styled.p`
    font-family: ${"Quantico," + type.base};
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 7px;
    line-height: 69px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 32px;
      letter-spacing: 5px;
      line-height: 46px;
    }
  `,
  T2: () => styled.p`
    font-family: ${"Quantico," + type.base};
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 5px;
    line-height: 46px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 24px;
      letter-spacing: 0.15em;
      line-height: 34px;
    }
  `,
  T3: () => styled.p`
    font-family: ${"Quantico," + type.base};
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    @media (max-width: ${Metrics.mobile}) {
      font-size: 18px;
      letter-spacing: 0;
      line-height: 26px;
    }
  `,
  T4: () => styled.p`
    font-family: ${"Quantico," + type.base};
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  `,
};

export default Fonts;
