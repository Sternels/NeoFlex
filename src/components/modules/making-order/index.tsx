import React, {FC} from 'react'
import { Card } from 'components/ui'
import { FormMakingOrder } from './form'
import { DetailMakingOrder } from './detail'

import styles from './styles.module.scss'

export interface IMakingOrderProps {}

export const MakingOrder:FC<IMakingOrderProps> = ({}) => {
    return (
        <Card classNames={[styles.making_order__container]}>
            <DetailMakingOrder/>
            <FormMakingOrder/>
        </Card>
    )
}