import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderProps, ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';
import React from 'react';

const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();

/**
 * ComponentName with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
export class SuiteHeaderBase extends React.Component<ISuiteHeaderProps> {
  public render() {
    const { styles, title } = this.props;
    const classNames = getClassNames(styles);

    return (
      <div className={classNames.root}>
        <p className={classNames.title}>{title}</p>
      </div>
    );
  }
}