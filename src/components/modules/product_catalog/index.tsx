import {FC} from 'react'
import { ProductList } from './list'
import { ICategoryProduct } from 'models';
import { generateKey } from 'utils';
import { ProductHOC } from 'hocs';
import { Loading } from 'components/ui';

export interface IProductCatalogBaseProps {
    isLoading?: boolean;
	error?: string;
	products?: ICategoryProduct[];
}

const ProductCatalogBase:FC<IProductCatalogBaseProps> = ({ isLoading, error, products }) => {
    return (
        <>
			{isLoading && <Loading />}
			{error && <h4>{error}</h4>}
			{!isLoading && products?.map((item) => (
				<ProductList
					key={generateKey(item.id.toString())}
					categoryTitle={item.title}
					products={item.products}
				/>
			))}
		</>
    )
}

export const ProductCatalog = ProductHOC(ProductCatalogBase) as typeof ProductCatalogBase;