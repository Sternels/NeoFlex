import { useAppSelector } from 'app/store/hooks'
import React, {FC} from 'react'
import { generateKey } from 'utils'

import styles from './styles.module.scss'

export interface IMakingOrderDetailProps {}

export const DetailMakingOrder:FC<IMakingOrderDetailProps> = ({}) => {
    const {count, mainPrice, products} = useAppSelector(state => state.orderReducer)
    
    return (
        <div className={styles.making_order__detail}>
            <h4>Заказано товаров {count} на сумму {mainPrice} руб.</h4>
            <div>
                {products.map(product => (
                    <div key={generateKey(product.id.toString())}>
                        <h4>{product.title}: {product.currentPrice} ₽</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}