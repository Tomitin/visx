/// <reference types="react" />
import { AxisScale } from '@visx/axis';
import { BarSeriesProps } from '../../types';
declare function BarSeries<XScale extends AxisScale, YScale extends AxisScale, Datum extends object>({ colorAccessor, ...props }: Omit<BarSeriesProps<XScale, YScale, Datum>, 'BarsComponent'>): JSX.Element;
export default BarSeries;
//# sourceMappingURL=BarSeries.d.ts.map