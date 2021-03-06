import * as React from 'react';
import { translate, Trans } from 'react-i18next';
import * as styles from './index.styl';
import { I18N_NAME_SPACE } from '../../../appConfig';


@translate(I18N_NAME_SPACE)
export class CustomDataInfo extends React.PureComponent<IDataInfo> {
    
    render() {
        const { message } = this.props;
        const { messageHash } = message;
        
        return <div>
            <div className={styles.txRow}>
                <div className="tx-title tag1 basic500">
                    <Trans i18nKey='transactions.txid'>Data hash</Trans>
                </div>
                <div className={styles.txValue}>{messageHash}</div>
            </div>
        </div>;
    }
}

interface IDataInfo {
    message: any;
    assets: any;
}
