import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default function ProductTable({ products, filterText, inStockOnly }) {
  return (
    <>
      {products
        .filter(
          (item) =>
            (item.name).toLowerCase().includes(filterText.toLowerCase()) &&
            (inStockOnly ? item.stocked : true)
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
