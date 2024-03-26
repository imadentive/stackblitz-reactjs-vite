import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default function ProductTable({ products, filterText, inStockOnly }) {
  return (
    <>
      {products
        .filter(
          (item) =>
            (item.name).toLowerCase().includes(filterText.toLowerCase()) && // 搜索词
            (inStockOnly ? item.stocked : true) // 是否显示有库存
        )
        .map((item, index) => {
          return (
            <div className="item" key={index}>
              <ProductCategoryRow name={item.category} />
              <ProductRow product={item} />
            </div>
          );
        })}
    </>
  );
}
