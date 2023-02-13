import { ReportHandler } from 'web-vitals';

// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (value: unknown): value is Function => value instanceof Function;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && isFunction(onPerfEntry)) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// eslint-disable-next-line import/no-default-export
export default reportWebVitals;
