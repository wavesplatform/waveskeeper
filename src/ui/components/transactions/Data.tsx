import * as styles from './../pages/styles/transactions.styl';
import * as React from 'react'
import { translate, Trans } from 'react-i18next';
import { Button, BUTTON_TYPE } from '../ui';
import { SignClass } from './SignClass';
import { TxIcon } from './TransactionIcon';
import { OriginWarning } from './OriginWarning';

@translate('extension')
export class Data extends SignClass {

    render() {
        const { data: tx } = this.props.signData;
        
        return <div className={styles.transaction}>
            {super.render()}
            <div className={styles.txScrollBox}>
            
                <div className={`${styles.txIcon} margin-main`}>
                    <TxIcon txType={this.props.txType}/>
                </div>
    
                <div className={styles.txRow}>
                    <div className="tx-title tag1 basic500">
                        <Trans i18nKey='transactions.dataTransactionData'>Data</Trans>
                    </div>
                    <div className={styles.txValue}>{JSON.stringify(tx.data, null, 4)}</div>
                </div>
            
                <div className={styles.txRow}>
                    <div className="tx-title tag1 basic500">
                        <Trans i18nKey='transactions.txid'>TXID</Trans>
                    </div>
                    <div className={styles.txValue}>{this.state.txId}</div>
                </div>
            </div>
        
            <div className={`${styles.txButtonsWrapper} buttons-wrapper`}>
                <Button onClick={this.rejectHandler} type={BUTTON_TYPE.WARNING}>
                    <Trans i18nKey='sign.reject'>Reject</Trans>
                </Button>
                <Button onClick={this.approveHandler} type={BUTTON_TYPE.SUBMIT}>
                    <Trans i18nKey='sign.approve'>Approve</Trans>
                </Button>

                <OriginWarning {...this.props}/>
            </div>
        </div>
    }
}