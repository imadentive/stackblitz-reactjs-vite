import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default function ProductTable({ products, filterText, inStockOnly }) {
  let rows  = []
  let existCateNames = []
  products
    .filter(
      (item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) && // 搜索词
        (inStockOnly ? item.stocked : true) // 是否显示有库存
    )
    .map((item, index) => {
      if(!existCateNames.includes(item.category)){
        existCateNames.push(item.category)
        rows.push(<ProductCategoryRow name={item.category} />)
      }

      rows.push(<ProductRow product={item} />)

    });


  return (
    <>
      {rows}
    </>

  );
}
